import {
  ShieldCheck,
  CloudUpload,
  Users,
  MessageSquare,
  Headset,
  ClipboardCheck,
  ArrowUpRight,
  ArrowRight,
  CalendarCheck,
  MessageCircle,
  Check,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const solutionCards = [
  {
    icon: ShieldCheck,
    title: 'Microsoft 365 Security',
    features: [
      'Multi-Factor Authentication',
      'Conditional Access',
      'Microsoft Defender configuration',
      'Identity protection',
      'Email security',
      'Security configuration reviews',
    ],
    link: 'Explore Security Solutions',
    href: '/services/microsoft-365-security',
  },
  {
    icon: CloudUpload,
    title: 'Microsoft 365 Migration',
    features: [
      'Tenant migration',
      'Email migration',
      'Data migration',
      'Deployment planning',
    ],
    link: 'Explore Migration Services',
    href: '/services/microsoft-365-migration',
  },
  {
    icon: Users,
    title: 'Identity & Access Management',
    features: [
      'Microsoft Entra ID',
      'User lifecycle management',
      'Permissions management',
      'Access policies',
    ],
    link: 'Explore Identity Solutions',
    href: '/services/identity-access-management',
  },
  {
    icon: MessageSquare,
    title: 'Teams & Collaboration',
    features: [
      'Microsoft Teams configuration',
      'SharePoint',
      'OneDrive',
      'Collaboration optimisation',
    ],
    link: 'Explore Collaboration Solutions',
    href: '/services/microsoft-teams-collaboration',
  },
  {
    icon: Headset,
    title: 'Managed Microsoft 365 Support',
    features: [
      'Administration',
      'Troubleshooting',
      'Monitoring',
      'Configuration support',
    ],
    link: 'Explore Managed Support',
    href: '/services/managed-microsoft-365-support',
  },
  {
    icon: ClipboardCheck,
    title: 'Microsoft 365 Assessment',
    features: [
      'Security review',
      'Configuration review',
      'Improvement roadmap',
    ],
    link: 'Explore Assessment Services',
    href: '/services/microsoft-365-assessment',
  },
];

export default function Solutions() {
  return (
    <section className="relative overflow-hidden bg-slate-50">
      {/* Subtle background grid */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(#1e3a6f 1px, transparent 1px), linear-gradient(90deg, #1e3a6f 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }}
        />
        <div className="absolute -top-20 left-1/4 h-64 w-64 rounded-full bg-msblue-200/30 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-teal-200/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        {/* Introduction area */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-msblue-200 bg-msblue-50 px-3.5 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-msblue-700">
              Our Solutions
            </span>
          </div>

          <h2 className="mt-5 max-w-2xl text-3xl font-bold leading-[1.15] tracking-tight text-navy-900 sm:text-4xl lg:text-[2.5rem]">
            Microsoft 365 Solutions Designed for{' '}
            <span className="bg-gradient-to-r from-msblue-600 to-teal-500 bg-clip-text text-transparent">
              Secure and Productive Organisations
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            KollraX provides specialist Microsoft 365 services across security, migration, identity,
            collaboration, and ongoing management — helping organisations get more value from their
            Microsoft 365 investment.
          </p>
        </div>

        {/* Solution cards */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {solutionCards.map((card) => (
            <Link
              key={card.title}
              to={card.href}
              className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-msblue-200 hover:shadow-card-hover focus:outline-none focus:ring-2 focus:ring-msblue-400/40 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-navy-800 to-navy-900 shadow-sm transition-colors duration-300 group-hover:from-msblue-500 group-hover:to-msblue-700">
                <card.icon className="h-6 w-6 text-white" />
              </div>

              {/* Title */}
              <h3 className="mt-5 text-base font-semibold text-navy-900">
                {card.title}
              </h3>

              {/* Feature list */}
              <ul className="mt-3 flex-1 space-y-1.5">
                {card.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-slate-600">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal-500" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Link */}
              <div className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-msblue-600">
                {card.link}
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>

              {/* Teal accent bar */}
              <span className="absolute bottom-0 left-8 right-8 h-0.5 origin-left scale-x-0 rounded-full bg-gradient-to-r from-teal-400 to-msblue-500 transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
        </div>

        {/* CTA transition banner */}
        <div className="relative mt-20 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-navy-800 to-navy-900 p-10 backdrop-blur-sm sm:p-14">
          {/* Subtle blue glow */}
          <div className="pointer-events-none absolute -top-24 right-1/4 h-64 w-64 rounded-full bg-msblue-500/20 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-24 left-1/4 h-64 w-64 rounded-full bg-teal-500/10 blur-[100px]" />

          <div className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
                Not Sure Which Microsoft 365 Service You Need?
              </h3>
              <p className="mt-3 text-base leading-relaxed text-slate-300">
                Start with a Microsoft 365 security assessment. KollraX will review your environment
                and recommend the right services for your organisation.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row lg:flex-col xl:flex-row">
              <Link to="/microsoft-365-assessment"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-msblue-500 to-msblue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition-all duration-300 hover:from-msblue-400 hover:to-msblue-500 hover:shadow-[0_8px_32px_-4px_rgba(51,115,255,0.5)] focus:outline-none focus:ring-2 focus:ring-msblue-400/50 focus:ring-offset-2 focus:ring-offset-navy-900"
              >
                <CalendarCheck className="h-4 w-4 text-white" />
                Book a Microsoft 365 Assessment
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link to="/talk-to-microsoft-365-specialist"
                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/25 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-navy-900"
              >
                <MessageCircle className="h-4 w-4 text-teal-400" />
                Talk to a Microsoft 365 Specialist
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
