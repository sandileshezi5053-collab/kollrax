import { TrendingUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const improvementExamples = [
  {
    before: 'Limited MFA coverage',
    after: 'Improved identity protection practices',
    label: 'Identity Security',
  },
  {
    before: 'Uncontrolled external sharing',
    after: 'Improved SharePoint security controls',
    label: 'Collaboration Governance',
  },
  {
    before: 'Unused Microsoft 365 licences',
    after: 'Optimised Microsoft 365 investment',
    label: 'Licence Management',
  },
];

export default function CustomerProof() {
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

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        {/* Section label */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-msblue-200 bg-msblue-50 px-3.5 py-1.5">
            <TrendingUp className="h-4 w-4 text-msblue-600" />
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-msblue-700">
              Improvement Examples
            </span>
          </div>

          <h2 className="mt-5 max-w-2xl text-3xl font-bold leading-[1.15] tracking-tight text-navy-900 sm:text-4xl lg:text-[2.5rem]">
            Microsoft 365{' '}
            <span className="bg-gradient-to-r from-msblue-600 to-teal-500 bg-clip-text text-transparent">
              Improvement Examples
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            The examples below illustrate the type of improvements a Microsoft 365 security
            assessment and structured engagement can identify. Actual findings are tailored to
            each organisation's environment.
          </p>
        </div>

        {/* Before / After cards */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {improvementExamples.map((example) => (
            <div
              key={example.label}
              className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-msblue-200 hover:shadow-card-hover"
            >
              {/* Label badge */}
              <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-msblue-50 px-3 py-1 text-xs font-semibold text-msblue-700">
                {example.label}
              </span>

              {/* Before */}
              <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                  Before
                </p>
                <p className="mt-1.5 text-sm font-medium text-slate-600">{example.before}</p>
              </div>

              {/* Arrow */}
              <div className="flex items-center justify-center py-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-msblue-500 to-teal-500 shadow-glow">
                  <ArrowRight className="h-4 w-4 rotate-90 text-white" />
                </div>
              </div>

              {/* After */}
              <div className="rounded-xl border border-teal-200 bg-teal-50 p-4">
                <p className="text-[10px] font-semibold uppercase tracking-wide text-teal-600">
                  After
                </p>
                <p className="mt-1.5 text-sm font-medium text-navy-900">{example.after}</p>
              </div>

              {/* Teal accent bar */}
              <span className="absolute bottom-0 left-6 right-6 h-0.5 origin-left scale-x-0 rounded-full bg-gradient-to-r from-teal-400 to-msblue-500 transition-transform duration-300 group-hover:scale-x-100" />
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="mt-8 text-center text-xs text-slate-400">
          These are illustrative examples. KollraX does not claim these as client results. Actual
          improvements depend on each organisation's Microsoft 365 environment.
        </p>

        {/* CTA */}
        <div className="relative mt-16 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-navy-800 to-navy-900 p-10 backdrop-blur-sm sm:p-14">
          <div className="pointer-events-none absolute -top-24 right-1/4 h-64 w-64 rounded-full bg-msblue-500/20 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-24 left-1/4 h-64 w-64 rounded-full bg-teal-500/10 blur-[100px]" />

          <div className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
                Discover What Could Be Improved in Your Environment
              </h3>
              <p className="mt-3 text-base leading-relaxed text-slate-300">
                Start with a Microsoft 365 security assessment to understand your current
                configuration and receive practical improvement recommendations.
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
