import {
  Search,
  ClipboardList,
  ShieldCheck,
  LifeBuoy,
  ArrowRight,
  Lock,
  MessagesSquare,
  GitBranch,
  TrendingUp,
  Check,
} from 'lucide-react';

const processSteps = [
  {
    number: '01',
    icon: Search,
    title: 'Discover & Assess',
    description:
      'Understand the current Microsoft 365 environment, business requirements, and security position.',
    whatHappens: [
      'Understand your current environment',
      'Review relevant Microsoft 365 configurations',
      'Identify security and operational considerations',
      'Discuss business requirements',
    ],
  },
  {
    number: '02',
    icon: ClipboardList,
    title: 'Plan & Recommend',
    description:
      'Provide practical recommendations and an improvement roadmap.',
    whatHappens: [
      'Prioritise identified issues',
      'Recommend appropriate solutions',
      'Explain expected outcomes',
      'Define implementation steps',
    ],
  },
  {
    number: '03',
    icon: ShieldCheck,
    title: 'Implement & Secure',
    description:
      'Apply approved Microsoft 365 improvements carefully with minimal disruption.',
    whatHappens: [
      'Configure agreed Microsoft 365 services',
      'Apply security improvements',
      'Support migration or deployment activities',
      'Validate changes',
    ],
  },
  {
    number: '04',
    icon: LifeBuoy,
    title: 'Manage & Improve',
    description:
      'Provide ongoing administration, optimisation, and support.',
    whatHappens: [
      'Provide technical support',
      'Assist with administration',
      'Review relevant issues',
      'Recommend further improvements',
    ],
  },
];

const principles = [
  {
    icon: Lock,
    title: 'Security First',
    description:
      'Security considerations are built into our approach to Microsoft 365 configuration and management.',
  },
  {
    icon: MessagesSquare,
    title: 'Clear Communication',
    description:
      'We explain technical findings and recommendations in language that decision-makers can understand.',
  },
  {
    icon: GitBranch,
    title: 'Controlled Changes',
    description:
      'We plan and implement changes carefully to reduce unnecessary disruption.',
  },
  {
    icon: TrendingUp,
    title: 'Continuous Improvement',
    description:
      'Microsoft 365 environments change over time, so we help organisations review and improve their setup as their needs develop.',
  },
];

export default function HowWeWork() {
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
              How We Work
            </span>
          </div>

          <h2 className="mt-5 max-w-2xl text-3xl font-bold leading-[1.15] tracking-tight text-navy-900 sm:text-4xl lg:text-[2.5rem]">
            A Clear Process for{' '}
            <span className="bg-gradient-to-r from-msblue-600 to-teal-500 bg-clip-text text-transparent">
              Better Microsoft 365 Management
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            We start by understanding your Microsoft 365 environment and business needs. From
            assessment and planning through implementation and ongoing support, KollraX follows
            a structured process designed to improve security, reliability, and day-to-day
            operations.
          </p>

        </div>

        {/* PART 2 — Four-step process */}
        <div className="relative mt-12">
          {/* Horizontal connecting line — desktop only */}
          <div className="absolute left-0 right-0 top-[3.25rem] hidden h-px bg-gradient-to-r from-transparent via-teal-300/60 to-transparent lg:block" />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {processSteps.map((step, idx) => (
              <div key={step.number} className="relative flex flex-col">
                {/* Mobile/tablet directional arrow */}
                {idx < processSteps.length - 1 && (
                  <div className="flex items-center justify-center py-1.5 lg:hidden">
                    <ArrowRight className="h-5 w-5 rotate-90 text-msblue-400" />
                  </div>
                )}

                <div className="group relative flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-msblue-200 hover:shadow-card-hover">
                  {/* Number + icon row */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-navy-800 to-navy-900 shadow-sm transition-colors duration-300 group-hover:from-msblue-500 group-hover:to-msblue-700">
                      <step.icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-3xl font-bold text-slate-200 transition-colors duration-300 group-hover:text-msblue-200">
                      {step.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-3.5 text-base font-semibold text-navy-900">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {step.description}
                  </p>

                  {/* What happens micro-list */}
                  <ul className="mt-3.5 space-y-1.5">
                    {step.whatHappens.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs leading-relaxed text-slate-500">
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal-500" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Teal accent bar */}
                  <span className="absolute bottom-0 left-5 right-5 h-0.5 origin-left scale-x-0 rounded-full bg-gradient-to-r from-teal-400 to-msblue-500 transition-transform duration-300 group-hover:scale-x-100" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PART 3 — Delivery principles */}
        <div className="mt-14">
          <h3 className="text-center text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
            Our Delivery Principles
          </h3>

          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((principle) => (
              <div
                key={principle.title}
                className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white/70 p-5 backdrop-blur-sm transition-all duration-300 hover:border-msblue-200 hover:bg-white hover:shadow-card"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-msblue-200 bg-msblue-50 transition-colors duration-300 group-hover:bg-msblue-500 group-hover:border-msblue-500">
                  <principle.icon className="h-5 w-5 text-msblue-600 transition-colors duration-300 group-hover:text-white" />
                </div>
                <h4 className="mt-3.5 text-sm font-semibold text-navy-900">
                  {principle.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
