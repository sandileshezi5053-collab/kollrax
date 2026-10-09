import {
  ShieldCheck,
  ArrowRight,
  MessageCircle,
  Lock,
  Cloud,
  Users,
  MessageSquare,
  FileText,
  FolderOpen,
} from 'lucide-react';
import SecurityDashboard from '@/components/SecurityDashboard';

const ms365Services = [
  { name: 'Microsoft 365', icon: Cloud },
  { name: 'Teams', icon: MessageSquare },
  { name: 'Entra ID', icon: Users },
  { name: 'Defender', icon: ShieldCheck },
  { name: 'SharePoint', icon: FolderOpen },
  { name: 'OneDrive', icon: FileText },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-950 w-full">
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
        <div className="absolute -top-40 left-1/4 h-[480px] w-[480px] rounded-full bg-msblue-600/15 blur-[120px]" />
        <div className="absolute -bottom-40 right-1/4 h-[420px] w-[420px] rounded-full bg-teal-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* LEFT COLUMN */}
          <div className="flex max-w-full flex-col">
            {/* Trust badge */}
            <div className="inline-flex w-fit max-w-full animate-fade-up items-center gap-2 rounded-full border border-msblue-400/20 bg-msblue-500/10 px-3 py-1.5 sm:px-3.5">
              <ShieldCheck className="h-4 w-4 shrink-0 text-msblue-400" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-msblue-200 sm:text-xs">
                Microsoft 365 Security &amp; Management Specialists
              </span>
            </div>

            {/* Headline */}
            <h1 className="mt-6 max-w-full animate-fade-up text-3xl font-bold leading-[1.08] tracking-tight text-white animate-delay-100 sm:text-4xl lg:text-[3.4rem]">
              Your Microsoft 365 Environment,{' '}
              <span className="bg-gradient-to-r from-msblue-400 to-teal-400 bg-clip-text text-transparent">
                Managed Securely
              </span>{' '}
              by Specialists
            </h1>

            {/* Supporting paragraph */}
            <p className="mt-5 max-w-xl animate-fade-up text-sm leading-relaxed text-slate-300 animate-delay-200 sm:text-base lg:text-lg">
              KollraX helps organisations secure, manage, and optimise Microsoft 365 through
              specialist expertise and structured managed services — from security configuration
              to ongoing administration and support.
            </p>

            {/* CTA buttons */}
            <div className="mt-8 flex animate-fade-up flex-col gap-3 animate-delay-300 sm:flex-row">
              <a
                href="#assessment"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-msblue-500 to-msblue-600 px-4 py-3.5 text-xs font-semibold text-white shadow-glow transition-all duration-300 hover:from-msblue-400 hover:to-msblue-500 hover:shadow-[0_8px_32px_-4px_rgba(51,115,255,0.5)] focus:outline-none focus:ring-2 focus:ring-msblue-400/50 focus:ring-offset-2 focus:ring-offset-navy-950 sm:w-auto sm:px-6 sm:text-sm"
              >
                <span className="text-center">Book Microsoft 365 Assessment</span>
                <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-3.5 text-xs font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/25 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-navy-950 sm:w-auto sm:px-6 sm:text-sm"
              >
                <MessageCircle className="h-4 w-4 shrink-0 text-teal-400" />
                <span className="text-center">Talk to Microsoft 365 Specialist</span>
              </a>
            </div>

            {/* Microsoft 365 service coverage strip */}
            <div className="mt-10 flex animate-fade-up flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/5 pt-6 animate-delay-500">
              <span className="text-xs font-medium uppercase tracking-wider text-slate-500">
                Microsoft 365 capabilities we assess
              </span>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                {ms365Services.map((svc) => (
                  <span
                    key={svc.name}
                    className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 transition-colors hover:text-white"
                  >
                    <svc.icon className="h-3.5 w-3.5 text-msblue-400" />
                    {svc.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex animate-fade-in justify-center lg:justify-end animate-delay-300">
            <SecurityDashboard />
          </div>
        </div>

        {/* SEO keyword capability bar */}
        <div className="mt-16 grid animate-fade-up grid-cols-1 gap-4 border-t border-white/5 pt-10 animate-delay-600 min-[360px]:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Cloud, title: 'Microsoft Cloud Solutions', desc: 'Architected for scale and reliability' },
            { icon: ShieldCheck, title: 'Microsoft 365 Security', desc: 'Threat protection & compliance' },
            { icon: Users, title: 'Microsoft 365 Support', desc: 'Expert guidance and ongoing support' },
            { icon: Lock, title: 'Microsoft 365 Managed Services', desc: 'End-to-end environment control' },
          ].map((item) => (
            <div key={item.title} className="group">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-colors group-hover:border-msblue-400/30 group-hover:bg-msblue-500/10">
                  <item.icon className="h-4.5 w-4.5 text-msblue-400 transition-colors group-hover:text-msblue-300" />
                </div>
                <span className="text-sm font-semibold text-white">{item.title}</span>
              </div>
              <p className="mt-2 pl-0 text-xs leading-relaxed text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
