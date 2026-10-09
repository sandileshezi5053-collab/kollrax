import {
  Cloud,
  Shield,
  Workflow,
  MessagesSquare,
  RefreshCw,
  Globe,
  ArrowRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const differentiators = [
  {
    icon: Cloud,
    title: 'Microsoft 365 Focused',
    description:
      'Our services are centred on Microsoft 365, allowing us to focus on the tools, configurations, security controls, and management needs that organisations rely on every day.',
  },
  {
    icon: Shield,
    title: 'Security First',
    description:
      'We consider security throughout assessment, configuration, implementation, and ongoing management, helping organisations identify and address areas that require attention.',
  },
  {
    icon: Workflow,
    title: 'Structured Delivery',
    description:
      'Our approach follows a clear process from assessment and planning through implementation and ongoing support, helping organisations understand what happens at each stage.',
  },
  {
    icon: MessagesSquare,
    title: 'Clear Communication',
    description:
      'We explain technical findings and recommendations in practical language so business and technology decision-makers can understand what needs to be addressed and why.',
  },
  {
    icon: RefreshCw,
    title: 'Continuous Improvement',
    description:
      'Microsoft 365 environments change as organisations grow. We help review configurations, address new requirements, and identify opportunities to improve the environment over time.',
  },
  {
    icon: Globe,
    title: 'International Microsoft 365 Support',
    description:
      'KollraX provides remote Microsoft 365 expertise and support for organisations across different markets, helping businesses access specialist support without maintaining a large internal Microsoft 365 team.',
  },
];

export default function WhyKollrax() {
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
        <div className="absolute -top-20 right-1/4 h-64 w-64 rounded-full bg-msblue-200/30 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-teal-200/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        {/* PART 1 — Introduction */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-msblue-200 bg-msblue-50 px-3.5 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-msblue-700">
              Why KollraX
            </span>
          </div>

          <h2 className="mt-5 max-w-2xl text-3xl font-bold leading-[1.15] tracking-tight text-navy-900 sm:text-4xl lg:text-[2.5rem]">
            Microsoft 365 Support Built Around{' '}
            <span className="bg-gradient-to-r from-msblue-600 to-teal-500 bg-clip-text text-transparent">
              Your Business
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            KollraX is a specialist Microsoft 365 partner. We help organisations securely adopt,
            manage, and maximise the value of their Microsoft 365 environment without building a
            large internal team.
          </p>
        </div>

        {/* PART 2 — Six differentiator cards */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {differentiators.map((card) => (
            <div
              key={card.title}
              className="group relative flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-msblue-200 hover:shadow-card-hover"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-navy-800 to-navy-900 shadow-sm transition-colors duration-300 group-hover:from-msblue-500 group-hover:to-msblue-700">
                <card.icon className="h-6 w-6 text-white" />
              </div>

              <h3 className="mt-5 text-base font-semibold text-navy-900">{card.title}</h3>

              <p className="mt-2.5 flex-1 text-sm leading-relaxed text-slate-600">
                {card.description}
              </p>

              {/* Teal accent bar */}
              <span className="absolute bottom-0 left-6 right-6 h-0.5 origin-left scale-x-0 rounded-full bg-gradient-to-r from-teal-400 to-msblue-500 transition-transform duration-300 group-hover:scale-x-100" />
            </div>
          ))}
        </div>

        {/* PART 3 — CTA */}
        <div className="relative mt-16 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-navy-800 to-navy-900 p-10 backdrop-blur-sm sm:p-14">
          {/* Subtle blue glow */}
          <div className="pointer-events-none absolute -top-24 right-1/4 h-64 w-64 rounded-full bg-msblue-500/20 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-24 left-1/4 h-64 w-64 rounded-full bg-teal-500/10 blur-[100px]" />

          <div className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
                Let's Talk About Your Microsoft 365 Environment
              </h3>
              <p className="mt-3 text-base leading-relaxed text-slate-300">
                Whether you are reviewing your security, planning a migration, improving your
                Microsoft 365 setup, or looking for ongoing support, KollraX can help you
                determine the right next step.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row lg:flex-col xl:flex-row">
              <Link to="/microsoft-365-assessment"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-msblue-500 to-msblue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition-all duration-300 hover:from-msblue-400 hover:to-msblue-500 hover:shadow-[0_8px_32px_-4px_rgba(51,115,255,0.5)] focus:outline-none focus:ring-2 focus:ring-msblue-400/50 focus:ring-offset-2 focus:ring-offset-navy-900"
              >
                Book a Microsoft 365 Assessment
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link to="/talk-to-microsoft-365-specialist"
                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/25 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-navy-900"
              >
                Talk to a Microsoft 365 Specialist
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
