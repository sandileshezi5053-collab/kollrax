import { ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SecurityCTA() {
  return (
    <section className="relative overflow-hidden bg-navy-950">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div className="absolute -top-40 left-1/3 h-[480px] w-[480px] rounded-full bg-msblue-600/15 blur-[120px]" />
        <div className="absolute -bottom-40 right-1/3 h-[420px] w-[420px] rounded-full bg-teal-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-5 py-20 text-center sm:px-8 lg:px-12 lg:py-28">
        <h2 className="text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
          Understand Your{' '}
          <span className="bg-gradient-to-r from-msblue-400 to-teal-400 bg-clip-text text-transparent">
            Microsoft 365 Security Position
          </span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
          Start with a Microsoft 365 Security Assessment and receive practical recommendations to
          improve your organisation's security posture.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link to="/microsoft-365-assessment"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-msblue-500 to-msblue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-glow transition-all duration-300 hover:from-msblue-400 hover:to-msblue-500 hover:shadow-[0_8px_32px_-4px_rgba(51,115,255,0.5)] focus:outline-none focus:ring-2 focus:ring-msblue-400/50 focus:ring-offset-2 focus:ring-offset-navy-950"
          >
            Book Microsoft 365 Security Assessment
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link to="/talk-to-microsoft-365-specialist"
            className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/25 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-navy-950"
          >
            <MessageCircle className="h-4 w-4 text-teal-400" />
            Talk to a Microsoft 365 Security Specialist
          </Link>
        </div>
      </div>
    </section>
  );
}
