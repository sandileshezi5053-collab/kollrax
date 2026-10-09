import { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ShieldCheck,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  MessageCircle,
  CloudUpload,
  Users,
  MessageSquare,
  ClipboardCheck,
  Headset,
  BookOpen,
  KeyRound,
  Info,
  Mail,
} from 'lucide-react';

interface NavChild {
  label: string;
  to: string;
  icon: typeof ShieldCheck;
}

interface NavItem {
  label: string;
  to?: string;
  children?: NavChild[];
}

const navConfig: NavItem[] = [
  {
    label: 'Solutions',
    children: [
      { label: 'Microsoft 365 Security', to: '/services/microsoft-365-security', icon: ShieldCheck },
      { label: 'Managed Microsoft 365 Support', to: '/services/managed-microsoft-365-support', icon: Headset },
      { label: 'Microsoft 365 Migration', to: '/services/microsoft-365-migration', icon: CloudUpload },
      { label: 'Identity & Access Management', to: '/services/identity-access-management', icon: Users },
      { label: 'Teams & Collaboration', to: '/services/microsoft-teams-collaboration', icon: MessageSquare },
      { label: 'Microsoft 365 Optimisation', to: '/services/microsoft-365-optimisation', icon: ClipboardCheck },
    ],
  },
  {
    label: 'Services',
    children: [
      { label: 'Microsoft 365 Security Assessment', to: '/services/microsoft-365-assessment', icon: ShieldCheck },
      { label: 'Managed Support', to: '/services/managed-microsoft-365-support', icon: Headset },
      { label: 'Ongoing Microsoft 365 Management', to: '/services/microsoft-365-optimisation', icon: ClipboardCheck },
    ],
  },
  {
    label: 'Resources',
    children: [
      { label: 'Security Guides', to: '/resources/security-guides', icon: BookOpen },
      { label: 'Migration Guides', to: '/resources/migration-guides', icon: CloudUpload },
      { label: 'MFA Resources', to: '/resources/mfa-resources', icon: KeyRound },
      { label: 'Teams Best Practices', to: '/resources/teams-best-practices', icon: MessageSquare },
    ],
  },
  {
    label: 'Company',
    children: [
      { label: 'About KollraX', to: '/about', icon: Info },
      { label: 'Our Approach', to: '/our-approach', icon: BookOpen },
      { label: 'Contact', to: '/contact', icon: Mail },
    ],
  },
];

function getActiveParent(pathname: string): string | null {
  for (const item of navConfig) {
    if (item.children?.some((child) => child.to === pathname)) {
      return item.label;
    }
  }
  return null;
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const location = useLocation();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const activeParent = getActiveParent(location.pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
    setMobileExpanded(null);
  }, [location.pathname]);

  const handleMouseEnter = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/10 bg-navy-950/95 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.4)] backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        {/* Logo */}
        <Link to="/" className="flex h-10 w-[7.5rem] shrink-0 items-center sm:h-11 sm:w-[8.5rem]" aria-label="KollraX home">
          <img
            src="/assets/log.png"
            alt="KollraX"
            className="h-full w-full object-contain drop-shadow-[0_0_18px_rgba(59,130,246,0.18)]"
          />
        </Link>

        {/* Desktop nav — centered with generous spacing */}
        <div className="hidden items-center gap-2 lg:flex lg:gap-3">
          {navConfig.map((item) => {
            const isActive = activeParent === item.label;
            const isOpen = openDropdown === item.label;
            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`relative flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-200 hover:text-white'
                  }`}
                  onClick={() =>
                    setOpenDropdown((prev) => (prev === item.label ? null : item.label))
                  }
                >
                  {item.label}
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                  {/* Active underline */}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-msblue-400" style={{ width: '60%' }} />
                  )}
                </button>

                {/* Dropdown */}
                {isOpen && item.children && (
                  <div className="absolute left-0 top-full pt-3">
                    <div className="w-72 origin-top-left overflow-hidden rounded-xl border border-white/10 bg-navy-900/95 shadow-dashboard backdrop-blur-md animate-scale-in">
                      {item.children.map((child) => {
                        const childActive = location.pathname === child.to;
                        return (
                          <Link
                            key={child.label}
                            to={child.to}
                            className={`group flex items-center gap-3 px-4 py-3 transition-colors duration-200 ${
                              childActive ? 'bg-msblue-500/10' : 'hover:bg-white/5'
                            }`}
                          >
                            <div
                              className={`flex h-8 w-8 items-center justify-center rounded-lg transition-colors duration-200 ${
                                childActive
                                  ? 'bg-gradient-to-br from-msblue-500 to-msblue-700'
                                  : 'bg-gradient-to-br from-navy-700 to-navy-800 group-hover:from-msblue-500 group-hover:to-msblue-700'
                              }`}
                            >
                              <child.icon className="h-4 w-4 text-white" />
                            </div>
                            <span
                              className={`text-sm font-medium transition-colors duration-200 ${
                                childActive ? 'text-white' : 'text-slate-200 group-hover:text-white'
                              }`}
                            >
                              {child.label}
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          <Link to="/microsoft-365-assessment"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-msblue-500 to-msblue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition-all duration-300 hover:from-msblue-400 hover:to-msblue-500 hover:shadow-[0_8px_32px_-4px_rgba(51,115,255,0.5)] focus:outline-none focus:ring-2 focus:ring-msblue-400/50 focus:ring-offset-2 focus:ring-offset-navy-950"
          >
            Book Microsoft 365 Assessment
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link to="/talk-to-microsoft-365-specialist"
            className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/25 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-navy-950"
          >
            <MessageCircle className="h-3.5 w-3.5 text-teal-400" />
            Talk to a Microsoft 365 Specialist
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white lg:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile panel */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-navy-950/98 backdrop-blur-md lg:hidden animate-fade-in">
          <div className="max-h-[calc(100vh-4rem)] overflow-y-auto px-5 py-4 sm:px-8">
            {navConfig.map((item) => {
              const isActive = activeParent === item.label;
              const isExpanded = mobileExpanded === item.label;
              return (
                <div key={item.label} className="border-b border-white/5 py-1">
                  <button
                    className={`flex w-full items-center justify-between py-3 text-sm font-semibold transition-colors duration-200 ${
                      isActive ? 'text-white' : 'text-slate-200'
                    }`}
                    onClick={() =>
                      setMobileExpanded((prev) => (prev === item.label ? null : item.label))
                    }
                  >
                    <span className="flex items-center gap-2">
                      {item.label}
                      {isActive && <span className="h-1 w-1 rounded-full bg-msblue-400" />}
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isExpanded && item.children && (
                    <div className="mt-1 space-y-0.5 pb-2 animate-fade-in">
                      {item.children.map((child) => {
                        const childActive = location.pathname === child.to;
                        return (
                          <Link
                            key={child.label}
                            to={child.to}
                            className={`flex items-start gap-3 rounded-lg px-3 py-3 text-sm leading-snug transition-colors duration-200 ${
                              childActive
                                ? 'bg-msblue-500/10 text-white'
                                : 'text-slate-300 hover:bg-white/5 hover:text-white'
                            }`}
                          >
                            <child.icon className="mt-0.5 h-4 w-4 shrink-0 text-msblue-400" />
                            <span className="break-words">{child.label}</span>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}

            <div className="mt-4 flex flex-col gap-3 pb-4">
              <Link to="/microsoft-365-assessment"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-msblue-500 to-msblue-600 px-5 py-3 text-sm font-semibold text-white shadow-glow transition-all duration-300 hover:from-msblue-400 hover:to-msblue-500"
              >
                Book Microsoft 365 Assessment
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link to="/talk-to-microsoft-365-specialist"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/25 hover:bg-white/10"
              >
                <MessageCircle className="h-4 w-4 text-teal-400" />
                Talk to a Microsoft 365 Specialist
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
