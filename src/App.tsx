import { ReactNode, createContext, useContext, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Cloud,
  Clock3,
  LifeBuoy,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import { BrowserRouter, Link, Navigate, Route, Routes, useLocation } from "react-router-dom";

type UserRole = "client" | "admin";
type TicketStatus = "Open" | "In Progress" | "Resolved";

type UserType = {
  id: string;
  fullName: string;
  email: string;
  password: string;
  company: string;
  role: UserRole;
  createdAt: string;
};

type TicketUpdate = {
  by: string;
  role: UserRole;
  message: string;
  createdAt: string;
};

type Ticket = {
  id: string;
  userId: string;
  subject: string;
  category: "Service Request" | "Support";
  priority: "Low" | "Medium" | "High";
  message: string;
  status: TicketStatus;
  createdAt: string;
  updates: TicketUpdate[];
};

type Lead = {
  id: string;
  name: string;
  email: string;
  company: string;
  focus: string;
  message: string;
  createdAt: string;
};

type ServiceItem = {
  id: string;
  title: string;
  description: string;
  enabled: boolean;
};

type PlatformState = {
  users: UserType[];
  tickets: Ticket[];
  leads: Lead[];
  services: ServiceItem[];
};

type Session = {
  userId: string;
  token: string;
  expiresAt: string;
};

type PlatformContextType = {
  state: PlatformState;
  session: Session | null;
  currentUser: UserType | null;
  signup: (payload: { fullName: string; email: string; password: string; company: string }) => string | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  resetPassword: (email: string) => boolean;
  createTicket: (payload: {
    subject: string;
    category: "Service Request" | "Support";
    priority: "Low" | "Medium" | "High";
    message: string;
  }) => void;
  updateTicketStatus: (ticketId: string, status: TicketStatus) => void;
  addTicketReply: (ticketId: string, message: string) => void;
  submitLead: (payload: Omit<Lead, "id" | "createdAt">) => void;
  updateProfile: (payload: { fullName: string; company: string }) => void;
  toggleService: (serviceId: string) => void;
};

const STORAGE_KEY = "kollrax-platform-state";
const SESSION_KEY = "kollrax-session";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

const staggerReveal = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

const aboutReveal = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      delay: 0.3,
      ease: [0.16, 1, 0.3, 1] as const,
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const seededState: PlatformState = {
  users: [
    {
      id: "admin-1",
      fullName: "KollraX Admin",
      email: "admin@kollrax.com",
      password: "Admin@123",
      company: "KollraX",
      role: "admin",
      createdAt: new Date().toISOString(),
    },
    {
      id: "client-1",
      fullName: "Elena Watson",
      email: "elena@northbridge.co",
      password: "Client@123",
      company: "Northbridge Partners",
      role: "client",
      createdAt: new Date().toISOString(),
    },
  ],
  tickets: [
    {
      id: "TK-1001",
      userId: "client-1",
      subject: "Microsoft 365 migration planning",
      category: "Service Request",
      priority: "High",
      message: "Need a staged migration approach for 140 users across three regions.",
      status: "In Progress",
      createdAt: new Date(Date.now() - 172800000).toISOString(),
      updates: [
        {
          by: "KollraX Admin",
          role: "admin",
          message: "Discovery workshop has been scheduled for Thursday 10:00 AM.",
          createdAt: new Date(Date.now() - 86400000).toISOString(),
        },
      ],
    },
  ],
  leads: [
    {
      id: "LD-3001",
      name: "Riley Henderson",
      email: "riley@altitudebio.io",
      company: "Altitude Bio",
      focus: "Security and compliance",
      message: "We need compliance hardening and managed support for a regulated team.",
      createdAt: new Date(Date.now() - 259200000).toISOString(),
    },
  ],
  services: [
    {
      id: "svc-setup",
      title: "Microsoft 365 Setup",
      description: "Tenant architecture, licensing, identity foundation, and readiness setup.",
      enabled: true,
    },
    {
      id: "svc-migration",
      title: "Migration Services",
      description: "Secure migration from legacy systems with zero-data-loss processes.",
      enabled: true,
    },
    {
      id: "svc-collab",
      title: "Teams and Email Configuration",
      description: "Unified communication architecture for Teams, Outlook, and shared mailboxes.",
      enabled: true,
    },
    {
      id: "svc-security",
      title: "Security and Compliance",
      description: "Conditional access, endpoint controls, and Microsoft Purview governance.",
      enabled: true,
    },
    {
      id: "svc-managed",
      title: "Managed Business Support",
      description: "Continuous monitoring, support desk operations, and policy lifecycle updates.",
      enabled: true,
    },
  ],
};

const PlatformContext = createContext<PlatformContextType | undefined>(undefined);

function createId(prefix: string) {
  return `${prefix}-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
}

function PlatformProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<PlatformState>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? (JSON.parse(saved) as PlatformState) : seededState;
  });

  const [session, setSession] = useState<Session | null>(() => {
    const saved = localStorage.getItem(SESSION_KEY);
    if (!saved) return null;
    const parsed = JSON.parse(saved) as Session;
    if (new Date(parsed.expiresAt).getTime() < Date.now()) return null;
    return parsed;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  useEffect(() => {
    if (session) {
      localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    } else {
      localStorage.removeItem(SESSION_KEY);
    }
  }, [session]);

  const currentUser = useMemo(
    () => state.users.find((user) => user.id === session?.userId) ?? null,
    [state.users, session?.userId]
  );

  const signup = (payload: { fullName: string; email: string; password: string; company: string }) => {
    const duplicate = state.users.find((user) => user.email.toLowerCase() === payload.email.toLowerCase());
    if (duplicate) return "An account with this email already exists.";

    const newUser: UserType = {
      id: createId("user"),
      fullName: payload.fullName,
      email: payload.email,
      password: payload.password,
      company: payload.company,
      role: "client",
      createdAt: new Date().toISOString(),
    };

    setState((prev) => ({ ...prev, users: [...prev.users, newUser] }));
    setSession({
      userId: newUser.id,
      token: crypto.randomUUID(),
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    });
    return null;
  };

  const login = (email: string, password: string) => {
    const user = state.users.find(
      (item) => item.email.toLowerCase() === email.toLowerCase() && item.password === password
    );
    if (!user) return false;
    setSession({
      userId: user.id,
      token: crypto.randomUUID(),
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    });
    return true;
  };

  const logout = () => setSession(null);

  const resetPassword = (email: string) => state.users.some((user) => user.email.toLowerCase() === email.toLowerCase());

  const createTicket = (payload: {
    subject: string;
    category: "Service Request" | "Support";
    priority: "Low" | "Medium" | "High";
    message: string;
  }) => {
    if (!currentUser) return;
    const ticket: Ticket = {
      id: createId("TK"),
      userId: currentUser.id,
      subject: payload.subject,
      category: payload.category,
      priority: payload.priority,
      message: payload.message,
      status: "Open",
      createdAt: new Date().toISOString(),
      updates: [
        {
          by: currentUser.fullName,
          role: currentUser.role,
          message: payload.message,
          createdAt: new Date().toISOString(),
        },
      ],
    };
    setState((prev) => ({ ...prev, tickets: [ticket, ...prev.tickets] }));
  };

  const updateTicketStatus = (ticketId: string, status: TicketStatus) => {
    if (!currentUser) return;
    setState((prev) => ({
      ...prev,
      tickets: prev.tickets.map((ticket) =>
        ticket.id === ticketId
          ? {
              ...ticket,
              status,
              updates: [
                {
                  by: currentUser.fullName,
                  role: currentUser.role,
                  message: `Status changed to ${status}.`,
                  createdAt: new Date().toISOString(),
                },
                ...ticket.updates,
              ],
            }
          : ticket
      ),
    }));
  };

  const addTicketReply = (ticketId: string, message: string) => {
    if (!currentUser) return;
    setState((prev) => ({
      ...prev,
      tickets: prev.tickets.map((ticket) =>
        ticket.id === ticketId
          ? {
              ...ticket,
              updates: [
                {
                  by: currentUser.fullName,
                  role: currentUser.role,
                  message,
                  createdAt: new Date().toISOString(),
                },
                ...ticket.updates,
              ],
            }
          : ticket
      ),
    }));
  };

  const submitLead = (payload: Omit<Lead, "id" | "createdAt">) => {
    setState((prev) => ({
      ...prev,
      leads: [{ ...payload, id: createId("LD"), createdAt: new Date().toISOString() }, ...prev.leads],
    }));
  };

  const updateProfile = (payload: { fullName: string; company: string }) => {
    if (!currentUser) return;
    setState((prev) => ({
      ...prev,
      users: prev.users.map((item) =>
        item.id === currentUser.id ? { ...item, fullName: payload.fullName, company: payload.company } : item
      ),
    }));
  };

  const toggleService = (serviceId: string) => {
    setState((prev) => ({
      ...prev,
      services: prev.services.map((service) =>
        service.id === serviceId ? { ...service, enabled: !service.enabled } : service
      ),
    }));
  };

  return (
    <PlatformContext.Provider
      value={{
        state,
        session,
        currentUser,
        signup,
        login,
        logout,
        resetPassword,
        createTicket,
        updateTicketStatus,
        addTicketReply,
        submitLead,
        updateProfile,
        toggleService,
      }}
    >
      {children}
    </PlatformContext.Provider>
  );
}

function usePlatform() {
  const context = useContext(PlatformContext);
  if (!context) throw new Error("usePlatform must be used inside PlatformProvider");
  return context;
}

function AppShell() {
  return (
    <BrowserRouter>
      <PlatformProvider>
        <RouteChangeTracker />
        <Routes>
          <Route path="/" element={<MarketingPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </PlatformProvider>
    </BrowserRouter>
  );
}

function RouteChangeTracker() {
  const location = useLocation();

  useEffect(() => {
    const titles: Record<string, string> = {
      "/": "KollraX | Microsoft 365 Business Platform",
    };
    document.title = titles[location.pathname] ?? "KollraX";
  }, [location.pathname]);

  return null;
}

function FlipInfoCard() {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(mediaQuery.matches);
    update();
    mediaQuery.addEventListener?.("change", update);
    mediaQuery.addListener?.(update);
    return () => {
      mediaQuery.removeEventListener?.("change", update);
      mediaQuery.removeListener?.(update);
    };
  }, []);

  useEffect(() => {
    if (!cardRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.35 }
    );
    observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const playState = isVisible && !reduceMotion ? "running" : "paused";
  const features = [
    "Microsoft 365 Solutions",
    "Azure Cloud",
    "Cybersecurity",
    "Cloud Migration",
    "Managed IT Services",
    "24/7 Enterprise Support",
  ];

  return (
    <div className="relative mx-auto flex w-full max-w-2xl flex-col items-center justify-center">
      <style>{`
        .flip-card-viewport {
          perspective: 1600px;
          width: 100%;
          max-width: 700px;
          margin: 0 auto;
          aspect-ratio: 7 / 4;
          height: auto;
        }
        .flip-card {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transition: transform 1.8s cubic-bezier(0.34, 1.56, 0.64, 1);
          will-change: transform;
          animation: autoFlip 18s infinite cubic-bezier(0.34, 1.56, 0.64, 1);
          animation-play-state: ${playState};
        }
        .flip-card-face {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 24px;
          overflow: hidden;
          backface-visibility: hidden;
          transform-style: preserve-3d;
        }
        .flip-card-face.front {
          background: linear-gradient(180deg, rgba(15, 23, 42, 0.14), rgba(15, 23, 42, 0.16)), #020617;
        }
        .flip-card-face.back {
          transform: rotateY(180deg);
          background: linear-gradient(180deg, #071a3d 0%, #05234f 100%);
        }
        .flip-card-image {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
          image-rendering: -webkit-optimize-contrast;
          image-rendering: crisp-edges;
          -webkit-font-smoothing: antialiased;
        }
        .flip-card-glass {
          position: absolute;
          inset: 0;
          border-radius: 24px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.04);
          pointer-events: none;
        }
        .flip-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(14, 80, 173, 0.22), rgba(6, 21, 72, 0.42));
          mix-blend-mode: screen;
        }
        .flip-card-front-deco,
        .flip-card-back-deco {
          position: absolute;
          border-radius: 9999px;
          filter: blur(36px);
          opacity: 0.55;
        }
        .flip-card-front-deco {
          width: 220px;
          height: 220px;
          background: radial-gradient(circle, rgba(56, 189, 248, 0.26), transparent 56%);
          top: -40px;
          right: -40px;
        }
        .flip-card-back-deco {
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.22), transparent 56%);
          bottom: -24px;
          left: -28px;
        }
        .flip-card-particle {
          position: absolute;
          border-radius: 9999px;
          background: rgba(147, 197, 253, 0.52);
          opacity: 0.75;
          filter: blur(4px);
        }
        .flip-card-feature {
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.04);
          backdrop-filter: blur(18px);
        }
        @keyframes autoFlip {
          0%, 28% { transform: rotateY(0deg); }
          38%, 62% { transform: rotateY(180deg); }
          72%, 100% { transform: rotateY(360deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          .flip-card {
            animation: none !important;
          }
        }
        @media (max-width: 768px) {
          .flip-card-viewport {
            max-width: 100%;
            height: 280px;
          }
        }
      `}</style>

      <div ref={cardRef} className="flip-card-viewport relative">
        <div className="flip-card">
          <div className="flip-card-face front">
            <img
              src="/images/kollrax-about-cloud.png"
              alt="KollraX About section with Microsoft 365 cloud architecture"
              className="flip-card-image"
              decoding="async"
              width={700}
              height={400}
            />
            <div className="flip-card-glass" />
          </div>

          <div className="flip-card-face back">
            <img
              src="/images/kollrax-team-meeting.png"
              alt="KollraX team consulting with business partners"
              className="flip-card-image"
              decoding="async"
              width={700}
              height={400}
            />
            <div className="flip-card-glass" />
          </div>
        </div>
      </div>
      <div className="mt-6 grid w-full gap-3 text-sm text-white/85 sm:grid-cols-2">
        {features.map((feature) => (
          <div
            key={feature}
            className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-center backdrop-blur-sm"
          >
            {feature}
          </div>
        ))}
      </div>
    </div>
  );
}

function TopNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-[#05136b]/95 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <img src="/images/kollrax-logo-transparent.png" alt="KollraX" className="h-9 w-auto md:h-10" />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#home" className="text-sm text-white/80 transition hover:text-[#05136b]">
            Home
          </a>
          <a href="#services" className="text-sm text-white/80 transition hover:text-[#05136b]">
            Services
          </a>
          <a href="#about" className="text-sm text-white/80 transition hover:text-[#05136b]">
            About
          </a>
          <a href="#contact" className="text-sm text-white/80 transition hover:text-[#05136b]">
            Contact
          </a>
        </div>

        <button className="md:hidden" onClick={() => setOpen((prev) => !prev)} aria-label="Open menu">
          {open ? <X className="h-5 w-5 text-white" /> : <Menu className="h-5 w-5 text-white" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-white/10 bg-[#05136b]/98 px-6 py-4 md:hidden"
          >
            <div className="flex flex-col gap-4">
              <a href="#home" className="text-sm text-white/80">
                Home
              </a>
              <a href="#services" className="text-sm text-white/80">
                Services
              </a>
              <a href="#about" className="text-sm text-white/80">
                About
              </a>
              <a href="#contact" className="text-sm text-white/80">
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function MotionBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="hidden sm:block absolute -left-28 top-24 h-80 w-80 rounded-full bg-[#05136b]/10 blur-3xl"
        animate={{ x: [0, 24, 0], y: [0, -18, 0] }}
        transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
      />
      <motion.div
        className="hidden md:block absolute right-[-7rem] top-36 h-96 w-96 rounded-full bg-[#05136b]/10 blur-3xl"
        animate={{ x: [0, -22, 0], y: [0, 16, 0] }}
        transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
      />
      <motion.div
        className="hidden md:block absolute bottom-[-8rem] left-1/3 h-96 w-96 rounded-full bg-[#0A1A43]/5 blur-3xl"
        animate={{ x: [0, 18, 0], y: [0, -12, 0] }}
        transition={{ repeat: Infinity, duration: 22, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(10,26,67,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(10,26,67,0.06) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
        animate={{ backgroundPosition: ["0px 0px", "72px 72px"] }}
        transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
      />
    </div>
  );
}

function SplashScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 3.8, ease: "easeInOut" } }}
      className="fixed inset-0 z-[80] flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#050816" }}
    >
      <style>{`
        @keyframes glowPulseIn {
          0% {
            opacity: 0;
            filter: blur(40px);
            transform: scale(0.2);
          }
          8% {
            opacity: 0.9;
            filter: blur(25px);
            transform: scale(0.6);
          }
          15% {
            opacity: 0.7;
            filter: blur(15px);
            transform: scale(1);
          }
          30% {
            opacity: 0.5;
            filter: blur(12px);
            transform: scale(1.1);
          }
          100% {
            opacity: 0.3;
            filter: blur(10px);
            transform: scale(1);
          }
        }

        @keyframes metalRingDraw {
          0% {
            stroke-dashoffset: 502;
            opacity: 0;
            filter: drop-shadow(0 0 0px rgba(255, 255, 255, 0));
          }
          8% {
            opacity: 1;
          }
          12% {
            filter: drop-shadow(0 2px 8px rgba(255, 255, 255, 0.15));
          }
          42% {
            stroke-dashoffset: 0;
            opacity: 1;
            filter: drop-shadow(0 4px 16px rgba(255, 255, 255, 0.2));
          }
          57% {
            stroke-dashoffset: 0;
            opacity: 0.9;
            filter: drop-shadow(0 2px 8px rgba(255, 255, 255, 0.15));
          }
          100% {
            stroke-dashoffset: 0;
            opacity: 0.8;
            filter: drop-shadow(0 1px 4px rgba(255, 255, 255, 0.08));
          }
        }

        @keyframes bluArcDraw {
          0% {
            stroke-dashoffset: 157;
            opacity: 0;
          }
          27% {
            opacity: 0;
          }
          35% {
            opacity: 1;
            filter: drop-shadow(0 0 4px rgba(29, 139, 239, 0.2));
          }
          55% {
            stroke-dashoffset: 0;
            opacity: 1;
            filter: drop-shadow(0 0 8px rgba(29, 139, 239, 0.4));
          }
          65% {
            stroke-dashoffset: 0;
            opacity: 0.95;
            filter: drop-shadow(0 0 6px rgba(29, 139, 239, 0.3));
          }
          100% {
            stroke-dashoffset: 0;
            opacity: 0.9;
            filter: drop-shadow(0 0 4px rgba(29, 139, 239, 0.2));
          }
        }

        @keyframes logoFadeInScale {
          0% {
            opacity: 0;
            transform: scale(0.75);
          }
          38% {
            opacity: 0;
            transform: scale(0.75);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.05);
          }
          57% {
            opacity: 1;
            transform: scale(0.98);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes wordmarkReveal {
          0% {
            opacity: 0;
            transform: translateY(20px);
            letter-spacing: -0.05em;
          }
          46% {
            opacity: 0;
            transform: translateY(20px);
            letter-spacing: -0.05em;
          }
          58% {
            opacity: 0.8;
            transform: translateY(0px);
            letter-spacing: 0.02em;
          }
          69% {
            opacity: 1;
            transform: translateY(0px);
            letter-spacing: 0.02em;
          }
          100% {
            opacity: 1;
            transform: translateY(0px);
            letter-spacing: 0.12em;
          }
        }

        @keyframes blueXPulse {
          0%, 54% {
            opacity: 0;
            filter: drop-shadow(0 0 0px rgba(29, 139, 239, 0));
          }
          61% {
            opacity: 0.9;
            filter: drop-shadow(0 0 12px rgba(29, 139, 239, 0.6));
          }
          69% {
            opacity: 1;
            filter: drop-shadow(0 0 20px rgba(29, 139, 239, 0.4));
          }
          100% {
            opacity: 1;
            filter: drop-shadow(0 0 16px rgba(29, 139, 239, 0.3));
          }
        }

        @keyframes metallicSweep {
          0% {
            opacity: 0;
            transform: translateX(-200%) skewX(-20deg);
          }
          50% {
            opacity: 0;
            transform: translateX(-200%) skewX(-20deg);
          }
          58% {
            opacity: 0.7;
            transform: translateX(-50%) skewX(-20deg);
          }
          65% {
            opacity: 0.3;
            transform: translateX(100%) skewX(-20deg);
          }
          73% {
            opacity: 0;
            transform: translateX(200%) skewX(-20deg);
          }
          100% {
            opacity: 0;
            transform: translateX(200%) skewX(-20deg);
          }
        }

        @keyframes softGlowPulse {
          0%, 100% {
            box-shadow: 0 0 30px rgba(29, 139, 239, 0.15), 0 0 60px rgba(5, 19, 107, 0.08);
          }
          50% {
            box-shadow: 0 0 60px rgba(29, 139, 239, 0.35), 0 0 100px rgba(5, 19, 107, 0.18);
          }
        }

        @keyframes finalGlow {
          0%, 61% {
            opacity: 0;
          }
          65% {
            opacity: 0.6;
          }
          73% {
            opacity: 0.3;
          }
          100% {
            opacity: 0;
          }
        }

        .glow-backdrop {
          animation: glowPulseIn 5.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .metal-ring {
          stroke-dasharray: 502;
          animation: metalRingDraw 5.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .blue-arc {
          stroke-dasharray: 157;
          animation: bluArcDraw 5.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .logo-container {
          animation: logoFadeInScale 5.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .wordmark {
          animation: wordmarkReveal 5.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .blue-x-accent {
          animation: blueXPulse 5.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .metallic-sweep {
          animation: metallicSweep 5.5s cubic-bezier(0.17, 0.67, 0.83, 0.67) forwards;
        }

        .glow-wrapper {
          animation: softGlowPulse 5.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .final-glow {
          animation: finalGlow 5.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
      `}</style>

      {/* Central glow backdrop */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="glow-backdrop absolute rounded-full"
          style={{
            width: "clamp(220px, 70vw, 700px)",
            height: "clamp(220px, 70vw, 700px)",
            background: "radial-gradient(circle, rgba(29, 139, 239, 0.35), transparent)",
            filter: "blur(50px)",
          }}
        />
      </div>

      {/* Main content container with proper spacing */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-12">
        {/* Logo section */}
        <div className="flex flex-col items-center gap-0">
          {/* SVG overlay for ring and arc animations */}
          <div
            className="relative flex items-center justify-center"
            style={{ width: "clamp(220px, 35vw, 320px)", height: "clamp(220px, 35vw, 320px)" }}
          >
            <svg
              width="320"
              height="320"
              viewBox="0 0 320 320"
              className="glow-wrapper absolute"
              style={{
                maxWidth: "clamp(180px, 25vw, 420px)",
                height: "auto",
                aspectRatio: "1 / 1",
              }}
            >
              {/* Metallic ring - outer circle */}
              <circle
                cx="160"
                cy="160"
                r="80"
                fill="none"
                stroke="url(#metalGradient)"
                strokeWidth="3"
                className="metal-ring"
              />

              {/* Blue arc - lower section */}
              <path
                d="M 240 160 A 80 80 0 0 1 80 160"
                fill="none"
                stroke="#1D8BEF"
                strokeWidth="2.5"
                className="blue-arc"
                strokeLinecap="round"
              />

              {/* Gradient definitions */}
              <defs>
                <linearGradient id="metalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: "#E8E8E8", stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: "#FFFFFF", stopOpacity: 0.85 }} />
                  <stop offset="100%" style={{ stopColor: "#D0D0D0", stopOpacity: 1 }} />
                </linearGradient>
                <radialGradient id="glowGradient" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" style={{ stopColor: "rgba(29, 139, 239, 0.4)", stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: "rgba(29, 139, 239, 0)", stopOpacity: 1 }} />
                </radialGradient>
              </defs>
            </svg>

            {/* Logo image */}
            <div className="logo-container relative z-20 flex items-center justify-center">
              <img
                src="/images/kollrax-logo-transparent.png"
                alt="KollraX"
                style={{
                  width: "clamp(180px, 25vw, 420px)",
                  height: "auto",
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                  filter: "drop-shadow(0 0 24px rgba(29, 139, 239, 0.25))",
                }}
              />

              {/* Metallic light sweep */}
              <div
                className="metallic-sweep absolute inset-0 rounded-full pointer-events-none"
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent)",
                }}
              />
            </div>
          </div>
        </div>

        {/* Wordmark section - separated from logo */}
        <motion.div
          className="wordmark text-center pointer-events-none flex flex-col items-center gap-3"
        >
          <h1 className="text-4xl font-semibold tracking-[0.12em] text-white md:text-5xl">
            KollraX
          </h1>
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-white/50">
            Microsoft 365 Operations
          </p>
        </motion.div>
      </div>

      {/* Ambient animated circles in background */}
      <motion.div
        className="hidden sm:block absolute h-[22rem] w-[22rem] rounded-full border border-white/5 md:h-[32rem] md:w-[32rem]"
        animate={{ scale: [0.95, 1.1, 0.95], rotate: 360 }}
        transition={{ repeat: Infinity, duration: 24, ease: "linear" }}
      />
      <motion.div
        className="hidden md:block absolute h-[18rem] w-[18rem] rounded-full border border-sky-300/8 border-t-sky-300/15 lg:h-[26rem] lg:w-[26rem]"
        animate={{ rotate: -360, scale: [0.96, 1.06, 0.96] }}
        transition={{ repeat: Infinity, duration: 16, ease: "linear" }}
      />

      {/* Final subtle glow on completion */}
      <div
        className="final-glow absolute rounded-full pointer-events-none"
        style={{
          width: "clamp(220px, 55vw, 500px)",
          height: "clamp(220px, 55vw, 500px)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, rgba(29, 139, 239, 0.3), transparent)",
          filter: "blur(60px)",
        }}
      />
    </motion.div>
  );
}

function MarketingPage() {
  const { state } = usePlatform();
  const services = state.services.filter((service) => service.enabled);

  return (
    <div className="bg-white text-[#0A1A43]">
      <TopNav />

      <section
        id="home"
        className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#ffffff_65%,#f3f8ff_100%)] pt-24 text-[#0A1A43]"
      >
        <MotionBackdrop />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 xl:px-10 2xl:px-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 pt-8 lg:pt-0"
          >
            <style>{`
              @keyframes typing {
                0% { width: 0; }
                100% { width: 100%; }
              }
              @keyframes blink {
                0%, 49% { border-right-color: #05136b; }
                50%, 100% { border-right-color: transparent; }
              }
              @keyframes glow {
                0%, 100% { box-shadow: 0 0 12px rgba(5, 19, 107, 0.3), 0 0 20px rgba(5, 19, 107, 0.15); }
                50% { box-shadow: 0 0 20px rgba(5, 19, 107, 0.5), 0 0 30px rgba(5, 19, 107, 0.25); }
              }
              @keyframes buttonGlow {
                0%, 100% { box-shadow: 0 0 20px rgba(10, 26, 67, 0.4), 0 18px 40px rgba(10, 26, 67, 0.18); }
                50% { box-shadow: 0 0 30px rgba(10, 26, 67, 0.6), 0 18px 50px rgba(10, 26, 67, 0.25); }
              }
              @keyframes slideRight {
                0% { transform: translateX(0px); }
                50% { transform: translateX(4px); }
                100% { transform: translateX(0px); }
              }
              .typing-text {
                display: inline-block;
                overflow: hidden;
                white-space: nowrap;
                border-right: 3px solid #05136b;
                animation: typing 8s steps(40, end) infinite;
                font-size: 0.75rem;
                font-weight: 600;
                letter-spacing: 0.28em;
                text-transform: uppercase;
                color: #05136b;
              }
              .typing-container {
                display: inline-flex;
                align-items: center;
                padding: 0 16px;
                min-height: 56px;
                animation: glow 3s ease-in-out infinite;
              }
              .get-started-btn {
                animation: buttonGlow 2.5s ease-in-out infinite;
              }
              .get-started-icon {
                animation: slideRight 1.5s ease-in-out infinite;
              }
            `}</style>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="typing-container rounded-full border border-[#D2D3D6] bg-white/90 px-6 py-4 shadow-[0_10px_30px_rgba(10,26,67,0.06)] backdrop-blur"
            >
              <span className="typing-text">Microsoft 365 Delivery and Support</span>
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.03] tracking-tight text-[#0A1A43] sm:text-5xl lg:text-[5rem]"
            >
              We manage your Microsoft 365.
              <br />
              You focus on growing your business.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="mt-6 max-w-2xl text-lg leading-8 text-[#0A1A43]/72"
            >
              From secure tenant architecture and migration planning to proactive support and governance, KollraX
              keeps Microsoft 365 stable, visible, and ready to scale.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.24 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link
                  to="/#contact"
                  className="get-started-btn inline-flex items-center gap-2 rounded-xl bg-[#0A1A43] px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#05136b]"
                >
                  Get Started <ArrowRight className="get-started-icon h-4 w-4" />
                </Link>
              </motion.div>
              <Link
                to="/#services"
                className="inline-flex items-center rounded-xl border border-[#D2D3D6] bg-white px-6 py-3 text-sm font-semibold text-[#0A1A43] shadow-[0_10px_28px_rgba(10,26,67,0.06)] transition duration-300 hover:-translate-y-0.5 hover:border-[#05136b] hover:shadow-[0_16px_36px_rgba(5,19,107,0.12)]"
              >
                View Services
              </Link>
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerReveal}
              className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-3"
            >
              {[
                { value: "300+", label: "Secure migrations" },
                { value: "< 2h", label: "Support SLA" },
                { value: "24/7", label: "Covered workspaces" },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  variants={fadeInUp}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-[#D2D3D6] bg-white/90 p-4 shadow-[0_16px_36px_rgba(10,26,67,0.06)] backdrop-blur"
                >
                  <p className="text-3xl font-semibold tracking-tight text-[#0A1A43]">{item.value}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.22em] text-[#0A1A43]/70">{item.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="absolute -inset-6 rounded-[2rem] bg-[radial-gradient(circle_at_20%_20%,rgba(29,129,228,0.12),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(20,102,205,0.12),transparent_36%)] blur-2xl" />
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.35 }}
              className="relative overflow-hidden rounded-[2rem] border border-[#D2D3D6] bg-white p-5 shadow-[0_24px_60px_rgba(10,26,67,0.1)]"
            >
              <div className="rounded-[1.5rem] border border-[#E8EDF7] bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] p-4">
                <motion.img
                  src="/images/microsoft-365-dashboard.jpg"
                  alt="Microsoft 365 admin center dashboard"
                  className="mt-4 h-auto w-full max-h-[420px] rounded-[1.2rem] object-cover shadow-[0_20px_50px_rgba(10,26,67,0.12)]"
                  initial={{ scale: 1.03 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.1 }}
                />
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {[
                    { title: "Security baseline", body: "Identity, access, and device controls active." },
                    { title: "Delivery status", body: "Migration workstreams are queued and monitored." },
                  ].map((item) => (
                    <motion.div
                      key={item.title}
                      whileHover={{ y: -3 }}
                      className="rounded-2xl border border-[#D2D3D6]/80 bg-white p-4 shadow-[0_12px_30px_rgba(10,26,67,0.05)]"
                    >
                      <p className="text-sm font-semibold text-[#0A1A43]">{item.title}</p>
                      <p className="mt-1 text-sm leading-6 text-[#0A1A43]/68">{item.body}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="overflow-hidden border-y border-[#D2D3D6] bg-white py-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          className="mx-auto max-w-7xl px-6 lg:px-8"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#05136b]">Powered by</p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-[#0A1A43]/72">
              <span>Microsoft 365</span>
              <span className="text-[#D2D3D6]">•</span>
              <span>Cloudflare</span>
              <span className="text-[#D2D3D6]">•</span>
              <span>TechErra</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#0A1A43]/72">
              <div className="flex -space-x-2">
                {["AK", "LM", "RS", "TC"].map((initials, index) => (
                  <div
                    key={initials}
                    className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 text-[10px] font-semibold text-white"
                    style={{ backgroundColor: ["#0f172a", "#16a34a", "#38bdf8", "#fbbf24"][index] }}
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <span>Trusted by 150+ businesses</span>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="about" className="bg-[#F7FAFF] py-24 text-[#0A1A43]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={aboutReveal}
          className="mx-auto max-w-7xl px-6 lg:px-8"
        >
          <motion.div variants={fadeInUp} className="mb-12 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.28em] text-[#05136b]">About KollraX</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">What KollraX is</h2>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-[#0A1A43]/72">
              KollraX is a premium Microsoft 365 technology partner helping businesses modernize collaboration,
              strengthen security posture, and run cloud operations with confidence.
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="grid gap-6">
              <motion.div variants={fadeInUp} whileHover={{ y: -4 }} className="rounded-[1.75rem] border border-[#D2D3D6] bg-white p-6 shadow-[0_14px_36px_rgba(10,26,67,0.06)]">
                <p className="text-xs uppercase tracking-[0.22em] text-[#05136b]">Mission</p>
                <p className="mt-3 text-lg leading-8 text-[#0A1A43]/78">
                  To deliver secure and scalable Microsoft 365 environments that improve productivity and reduce
                  operational risk.
                </p>
              </motion.div>
              <motion.div variants={fadeInUp} whileHover={{ y: -4 }} className="rounded-[1.75rem] border border-[#D2D3D6] bg-white p-6 shadow-[0_14px_36px_rgba(10,26,67,0.06)]">
                <p className="text-xs uppercase tracking-[0.22em] text-[#05136b]">Vision</p>
                <p className="mt-3 text-lg leading-8 text-[#0A1A43]/78">
                  To become the most trusted cloud productivity and security partner for growth-focused organizations.
                </p>
              </motion.div>
              <motion.div variants={fadeInUp} whileHover={{ y: -4 }} className="rounded-[1.75rem] border border-[#D2D3D6] bg-white p-6 shadow-[0_14px_36px_rgba(10,26,67,0.06)]">
                <h3 className="text-2xl font-semibold">Why KollraX</h3>
                <div className="mt-4 space-y-3 text-[#0A1A43]/78">
                  <p className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-[#05136b]" /> Security-led architecture and governance</p>
                  <p className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#05136b]" /> Reliable migration and support delivery model</p>
                  <p className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-[#05136b]" /> Deep Microsoft 365 technical expertise</p>
                </div>
              </motion.div>
            </div>

            <div className="grid gap-6">
              <motion.div
                variants={fadeInUp}
                className="relative overflow-hidden rounded-[2rem] border border-[#D2D3D6] bg-[#f8fbff] p-5 shadow-[0_30px_80px_rgba(10,26,67,0.12)]"
              >
                <FlipInfoCard />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="services" className="relative overflow-hidden bg-white py-24 text-[#0A1A43]">
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "linear-gradient(rgba(148,163,184,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.14) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerReveal}
          className="relative mx-auto max-w-7xl px-6 lg:px-8"
        >
          <motion.p variants={fadeInUp} className="text-xs uppercase tracking-[0.28em] text-[#05136b]">
            Services
          </motion.p>
          <motion.h2 variants={fadeInUp} className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Microsoft 365 service plans built to convert
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-4 max-w-2xl text-lg leading-8 text-[#0A1A43]/72">
            Clear monthly plans for small, growing, and enterprise teams, with add-ons ready for upsell.
          </motion.p>
          <div className="mt-12 grid gap-6 xl:grid-cols-2">
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-[2rem] border border-[#D2D3D6] bg-white p-7 shadow-[0_18px_44px_rgba(10,26,67,0.08)] transition-all"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-[#05136b]">Minimum 3 users</p>
                    <h3 className="mt-3 text-2xl font-semibold">{service.title}</h3>
                    <p className="mt-4 max-w-xl text-base leading-7 text-[#0A1A43]/72">{service.description}</p>
                  </div>
                  <span className="rounded-full border border-[#D2D3D6] bg-[#F7FAFF] px-3 py-1 text-xs font-medium text-[#0A1A43]/65">
                    24-48 hrs
                  </span>
                </div>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    "Microsoft 365 admin support",
                    "Email and login issue resolution",
                    "User account setup and management",
                    "Password reset support",
                    "Basic Teams support",
                    "MFA setup and security policies",
                  ].map((item) => (
                    <p key={item} className="flex items-center gap-2 text-sm text-[#0A1A43]/75">
                      <CheckCircle2 className="h-4 w-4 text-[#05136b]" />
                      {item}
                    </p>
                  ))}
                </div>
                <div className="mt-6 flex items-center justify-between border-t border-[#D2D3D6]/70 pt-4">
                  <Link
                    to="/#contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#05136b] transition group-hover:gap-3 group-hover:text-[#05136b]"
                  >
                    Discuss service <ChevronRight className="h-4 w-4" />
                  </Link>
                  <span className="text-xs uppercase tracking-[0.22em] text-[#0A1A43]/45">Support ready</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f8fbff_0%,#eef4ff_100%)] py-24 text-[#0A1A43]">
        <motion.div
          className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-[#05136b]/18 blur-3xl"
          animate={{ opacity: [0.35, 0.55, 0.35] }}
          transition={{ repeat: Infinity, duration: 6 }}
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-8"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-[#05136b]">Reliability</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Built for enterprise reliability from day one
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-8 text-[#0A1A43]/72">
              KollraX combines migration expertise, layered security controls, and managed operations to keep your
              organization stable while it scales.
            </p>
          </div>
          <div className="space-y-4">
            {[
              { icon: ShieldCheck, title: "Security first", body: "Identity-led controls, conditional access, and compliance by design." },
              { icon: Cloud, title: "Cloud-native delivery", body: "Structured deployments and modern automation for operational consistency." },
              { icon: LifeBuoy, title: "Managed continuity", body: "Service desk support and proactive monitoring for business uptime." },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4 rounded-[1.5rem] border border-[#D2D3D6] bg-white p-5 shadow-[0_14px_32px_rgba(10,26,67,0.05)]">
                <div className="rounded-lg bg-[#05136b]/15 p-2 text-[#05136b]">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm leading-6 text-[#0A1A43]/70">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="testimonials" className="bg-[#05136b] py-28 text-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="mx-auto max-w-7xl px-6 lg:px-8"
        >
          <p className="text-xs uppercase tracking-[0.28em] text-[#05136b]">Trusted</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Trusted by growth-stage and enterprise teams
          </h2>
          <p className="mt-4 max-w-2xl text-white/78">
            Long-term partnerships built on consistent response quality, secure execution, and measurable business outcomes.
          </p>
          <div className="mt-14 grid gap-10 lg:grid-cols-3">
            {[
              {
                quote:
                  "KollraX made our Microsoft 365 migration predictable and secure. We moved 300+ users with no major downtime.",
                author: "CTO, Meridian Logistics",
              },
              {
                quote:
                  "Their support model feels like an extension of our internal IT organization. Response quality is consistently high.",
                author: "Operations Director, Arvon Capital",
              },
              {
                quote:
                  "From Teams governance to compliance controls, KollraX gave us a platform we can trust under pressure.",
                author: "Head of Technology, Norfield Energy",
              },
            ].map((item, index) => (
              <motion.div
                key={item.author}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                whileHover={{ y: -4, borderColor: "rgba(29,139,239,0.6)" }}
                className="rounded-[1.75rem] border border-white/12 bg-white/7 p-8 backdrop-blur-sm transition-all"
              >
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#05136b]/20 text-sm font-semibold text-white">
                    {item.author.slice(0, 1)}
                  </div>
                  <div className="h-px flex-1 bg-white/15" />
                </div>
                <p className="text-sm leading-relaxed text-white/90">"{item.quote}"</p>
                <p className="mt-5 text-xs uppercase tracking-wide text-white">{item.author}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="contact" className="bg-white py-24 text-[#0A1A43]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="mx-auto max-w-5xl px-6 lg:px-8"
        >
          <div className="rounded-[2rem] border border-[#05136b]/45 bg-[linear-gradient(180deg,#ffffff_0%,#f7fbff_100%)] p-6 shadow-[0_24px_60px_rgba(10,26,67,0.08)] sm:p-8">
            <p className="text-xs uppercase tracking-[0.28em] text-[#05136b]">Contact us</p>
            <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
              Talk to a Microsoft 365 specialist today.
            </h2>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-[#0A1A43]/72">
              Fast responses over WhatsApp, email, and support requests. Let us help you map your migration,
              governance, and managed service plan with clarity.
            </p>
            <Link
              to="/#contact"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-[#05136b] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(10,26,67,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#05136b]"
            >
              Talk on WhatsApp <ArrowRight className="h-4 w-4" />
            </Link>

            <div className="mt-8 rounded-[1.8rem] border border-[#05136b]/30 bg-white p-4 shadow-[0_14px_30px_rgba(10,26,67,0.04)] sm:p-6">
              <div className="flex items-center gap-3">
                <img src="/images/kollrax-logo-transparent.png" alt="KollraX" className="h-10 w-auto" />
                <div>
                  <p className="text-lg font-semibold">KollraX</p>
                  <p className="text-xs uppercase tracking-[0.25em] text-[#05136b]">Microsoft 365 operations</p>
                </div>
              </div>
              <div className="mt-5 grid gap-3 md:grid-cols-2">
                <div className="rounded-[1.5rem] bg-[#05136b] p-5 text-white">
                  <p className="text-xs uppercase tracking-[0.22em] text-white/55">Email</p>
                  <p className="mt-3 text-lg font-semibold">support@kollrax.com</p>
                </div>
                <div className="rounded-[1.5rem] bg-[#05136b] p-5 text-white">
                  <p className="text-xs uppercase tracking-[0.22em] text-white/55">WhatsApp</p>
                  <p className="mt-3 text-lg font-semibold">+234 708 567 2506</p>
                </div>
              </div>
              <p className="mt-6 text-sm leading-7 text-[#0A1A43]/68">
                Need faster onboarding support? We reply promptly across WhatsApp and email, with priority follow-up
                for new engagements.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <footer className="relative overflow-hidden border-t border-[#d2d3d6]/20 bg-[#05136b]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(20,102,205,0.22),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(29,139,239,0.18),transparent_42%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-14 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="mb-12 border-b border-white/12 pb-10"
          >
            <p className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">KollraX</p>
            <p className="mt-4 max-w-2xl text-white/80">
              Enterprise Microsoft 365 architecture, migration, and managed support engineered for teams that cannot
              afford operational risk.
            </p>
            <Link
              to="/#contact"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#05136b] to-[#05136b] px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:brightness-110"
            >
              Talk to Solution Team <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <div className="grid gap-10 text-sm text-white/80 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="font-medium text-white">Contact</p>
              <div className="mt-4 space-y-3">
                <p className="flex items-start gap-2">
                  <Mail className="mt-0.5 h-4 w-4" /> support@kollrax.com
                </p>
                <p className="flex items-start gap-2">
                  <Phone className="mt-0.5 h-4 w-4" /> +2347085672506
                </p>
                <p className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4" /> Orile, Lagos State, Nigeria
                </p>
              </div>
            </div>

            <div>
              <p className="font-medium text-white">Solutions</p>
              <div className="mt-4 space-y-2">
                <p>Microsoft 365 Setup</p>
                <p>Cloud Productivity</p>
                <p>Security and Compliance</p>
                <p>Managed Business Support</p>
              </div>
            </div>

            <div>
              <p className="font-medium text-white">Platform</p>
              <div className="mt-4 space-y-2">
                <a href="#home" className="block hover:text-white">
                  Home
                </a>
                <a href="#services" className="block hover:text-white">
                  Services
                </a>
                <a href="#contact" className="block hover:text-white">
                  Book Consultation
                </a>
              </div>
            </div>

            <div>
              <p className="font-medium text-white">Operating Model</p>
              <div className="mt-4 space-y-3">
                <p className="flex items-start gap-2">
                  <Clock3 className="mt-0.5 h-4 w-4" /> Structured delivery windows
                </p>
                <p className="flex items-start gap-2">
                  <ShieldCheck className="mt-0.5 h-4 w-4" /> Security baseline governance
                </p>
                <p className="flex items-start gap-2">
                  <Users className="mt-0.5 h-4 w-4" /> Dedicated support specialists
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-2 border-t border-[#d2d3d6]/20 pt-6 text-xs text-[#D2D3D6] md:flex-row md:items-center md:justify-between">
            <p>2026 KollraX, Inc. All rights reserved.</p>
            <p>Security-forward cloud operations for modern business infrastructure.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  const [booting, setBooting] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setBooting(false), 1800);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>{booting && <SplashScreen />}</AnimatePresence>
      <AppShell />
    </>
  );
}










