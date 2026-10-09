import { ArrowRight, Cloud, Database, MessageCircle, ShieldCheck, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MigrationHero() {
  return (
    <section className="relative overflow-hidden bg-navy-950 w-full">
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

      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 py-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:px-12 lg:py-24">
        <div className="max-w-3xl">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-msblue-400/20 bg-msblue-500/10 px-3.5 py-1.5">
            <Cloud className="h-4 w-4 text-msblue-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-msblue-200">
              Microsoft 365 Migration
            </span>
          </div>

          <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.7rem]">
            Move to Microsoft 365{' '}
            <span className="bg-gradient-to-r from-msblue-400 to-teal-400 bg-clip-text text-transparent">
              with confidence.
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Plan, migrate, secure, and support your Microsoft 365 environment with specialists who
            understand the technology behind the move.
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
            KollraX helps organizations migrate email, files, identities, collaboration workloads,
            and other business data to Microsoft 365 while minimizing disruption and establishing a
            secure foundation from day one.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/microsoft-365-assessment"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-msblue-500 to-msblue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition-all duration-300 hover:from-msblue-400 hover:to-msblue-500 hover:shadow-[0_8px_32px_-4px_rgba(51,115,255,0.5)] focus:outline-none focus:ring-2 focus:ring-msblue-400/50 focus:ring-offset-2 focus:ring-offset-navy-950"
            >
              Book a Migration Consultation
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/talk-to-microsoft-365-specialist"
              className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/25 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-navy-950"
            >
              <MessageCircle className="h-4 w-4 text-teal-400" />
              Talk to a Microsoft 365 Specialist
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[30rem] lg:mx-0 lg:ml-auto">
          <div className="absolute -inset-8 rounded-full bg-msblue-500/10 blur-3xl" />
          <div className="relative rounded-3xl border border-white/10 bg-white/[0.045] p-5 shadow-dashboard backdrop-blur-sm sm:p-7">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-msblue-300">Migration control</p>
                <p className="mt-1 text-sm text-slate-400">A secure path to the cloud</p>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-400/10 text-teal-300">
                <ShieldCheck className="h-5 w-5" />
              </div>
            </div>

            <div className="relative mt-7 space-y-5">
              <div className="absolute left-6 top-8 h-[calc(100%-4rem)] w-px bg-gradient-to-b from-msblue-400/80 via-teal-400/60 to-transparent" />
              {[
                { icon: Database, label: 'Business data', detail: 'Files, mail, and workloads' },
                { icon: Users, label: 'Identity ready', detail: 'Users, access, and MFA' },
                { icon: Cloud, label: 'Microsoft 365', detail: 'Configured and supported' },
              ].map((item, index) => (
                <div key={item.label} className="relative flex items-center gap-4">
                  <div className={`z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 ${index === 2 ? 'bg-teal-400/15 text-teal-300' : 'bg-msblue-500/15 text-msblue-300'}`}>
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{item.label}</p>
                    <p className="mt-1 text-xs text-slate-400">{item.detail}</p>
                  </div>
                  {index === 2 && <span className="ml-auto rounded-full bg-teal-400/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-teal-300">Ready</span>}
                </div>
              ))}
            </div>

            <div className="mt-7 flex items-center justify-between rounded-2xl border border-white/10 bg-navy-950/60 px-4 py-3">
              <span className="text-xs text-slate-400">Plan · Prepare · Migrate · Secure</span>
              <span className="h-2 w-2 animate-pulse rounded-full bg-teal-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
