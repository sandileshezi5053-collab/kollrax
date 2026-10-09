import {
  Headset,
  ShieldCheck,
  Users,
  Settings2,
  Ticket,
  RefreshCw,
  MessageSquare,
  ClipboardCheck,
  Lightbulb,
  ArrowRight,
  Check,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const supportFeatures = [
  { icon: Settings2, label: 'Microsoft 365 Administration' },
  { icon: Users, label: 'User Management' },
  { icon: ShieldCheck, label: 'Security Reviews' },
  { icon: ClipboardCheck, label: 'Licence Optimisation' },
  { icon: Headset, label: 'Troubleshooting' },
  { icon: RefreshCw, label: 'Configuration Improvements' },
  { icon: MessageSquare, label: 'Teams & Collaboration Support' },
  { icon: Ticket, label: 'Environment Reviews' },
  { icon: Lightbulb, label: 'Ongoing Recommendations' },
];

export default function ManagedSupport() {
  return (
    <section className="relative overflow-hidden bg-navy-950">
      {/* Background grid + gradient */}
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
        <div className="absolute -top-40 right-1/4 h-[480px] w-[480px] rounded-full bg-msblue-600/15 blur-[120px]" />
        <div className="absolute -bottom-40 left-1/4 h-[420px] w-[420px] rounded-full bg-teal-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* LEFT COLUMN — Messaging */}
          <div className="flex flex-col">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-msblue-400/20 bg-msblue-500/10 px-3.5 py-1.5">
              <Headset className="h-4 w-4 text-msblue-400" />
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-msblue-200">
                Managed Microsoft 365 Support
              </span>
            </div>

            <h2 className="mt-5 text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[2.5rem]">
              Ongoing Microsoft 365 Management{' '}
              <span className="bg-gradient-to-r from-msblue-400 to-teal-400 bg-clip-text text-transparent">
                Without the Overhead
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Many organisations do not need a full-time Microsoft 365 team. KollraX provides
              ongoing managed support so your environment stays secure, well-configured, and
              aligned with your business needs.
            </p>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-400">
              From day-to-day administration to periodic security reviews, KollraX acts as your
              Microsoft 365 partner — handling the details so your team can focus on their work.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/talk-to-microsoft-365-specialist"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-msblue-500 to-msblue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition-all duration-300 hover:from-msblue-400 hover:to-msblue-500 hover:shadow-[0_8px_32px_-4px_rgba(51,115,255,0.5)] focus:outline-none focus:ring-2 focus:ring-msblue-400/50 focus:ring-offset-2 focus:ring-offset-navy-950"
              >
                Talk to a Microsoft 365 Specialist
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link to="/microsoft-365-assessment"
                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/25 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-navy-950"
              >
                Book a Microsoft 365 Assessment
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN — Feature grid */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8">
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-400">
              What Managed Support Includes
            </h3>
            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {supportFeatures.map((feature) => (
                <div
                  key={feature.label}
                  className="group flex items-center gap-3 rounded-xl border border-white/5 bg-navy-800/40 px-4 py-3 transition-all duration-300 hover:border-msblue-400/20 hover:bg-navy-800/70"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-msblue-500/15 to-teal-500/10 transition-colors duration-300 group-hover:from-msblue-500/25 group-hover:to-teal-500/20">
                    <feature.icon className="h-4.5 w-4.5 text-msblue-400" />
                  </div>
                  <span className="text-sm font-medium text-slate-200">{feature.label}</span>
                  <Check className="ml-auto h-4 w-4 shrink-0 text-teal-400" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
