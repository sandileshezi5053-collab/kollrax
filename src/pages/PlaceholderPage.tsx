import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, MessageCircle, ShieldCheck } from 'lucide-react';
import Footer from '@/components/Footer';

export default function PlaceholderPage() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const path = location.pathname;
  const title = path
    .split('/')
    .filter(Boolean)
    .pop()
    ?.replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase()) || 'Page';

  return (
    <>
      <section className="relative overflow-hidden bg-navy-950">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-950 to-navy-900" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
              backgroundSize: '48px 48px',
            }}
          />
          <div className="absolute -top-40 left-1/4 h-[480px] w-[480px] rounded-full bg-msblue-600/15 blur-[120px]" />
          <div className="absolute -bottom-40 right-1/4 h-[420px] w-[420px] rounded-full bg-teal-500/10 blur-[120px]" />
        </div>

        <div className="relative mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-5 py-24 text-center sm:px-8 lg:px-12 lg:py-32">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-msblue-400/20 bg-msblue-500/10 px-3.5 py-1.5">
            <ShieldCheck className="h-4 w-4 text-msblue-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-msblue-200">
              KollraX
            </span>
          </div>

          <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
            {title}
            <span className="block bg-gradient-to-r from-msblue-400 to-teal-400 bg-clip-text text-transparent">
              Coming Soon
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
            We're putting the finishing touches on this page. In the meantime, book a Microsoft 365
            assessment or talk to one of our specialists.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/microsoft-365-assessment"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-msblue-500 to-msblue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition-all duration-300 hover:from-msblue-400 hover:to-msblue-500 hover:shadow-[0_8px_32px_-4px_rgba(51,115,255,0.5)] focus:outline-none focus:ring-2 focus:ring-msblue-400/50 focus:ring-offset-2 focus:ring-offset-navy-950"
            >
              Book Microsoft 365 Assessment
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link to="/talk-to-microsoft-365-specialist"
              className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/25 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-navy-950"
            >
              <MessageCircle className="h-4 w-4 text-teal-400" />
              Talk to a Microsoft 365 Specialist
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
