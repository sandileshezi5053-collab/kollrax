import {
  Shield,
  Search,
  ClipboardList,
  Route,
  Check,
  ArrowRight,
  FileText,
  ListChecks,
  MapPin,
  CalendarCheck,
  MessageCircle,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const processSteps = [
  {
    number: '01',
    icon: CalendarCheck,
    title: 'Book Assessment',
    description: 'Schedule a Microsoft 365 security assessment with KollraX at a time that works for your organisation.',
  },
  {
    number: '02',
    icon: Search,
    title: 'Review Microsoft 365 Environment',
    description: 'KollraX reviews your relevant Microsoft 365 security and configuration areas based on your requirements.',
  },
  {
    number: '03',
    icon: FileText,
    title: 'Receive Findings Report',
    description: 'Get a clear summary of findings in plain business language — without unnecessary technical jargon.',
  },
  {
    number: '04',
    icon: ListChecks,
    title: 'Receive Improvement Recommendations',
    description: 'Understand practical next steps and prioritised recommendations for your Microsoft 365 environment.',
  },
];

const reviewChecklist = [
  'Microsoft 365 Security Configuration',
  'Identity and Access Management',
  'Microsoft Entra ID',
  'Multi-Factor Authentication',
  'Conditional Access',
  'Microsoft Defender',
  'Email Security',
  'Microsoft Teams',
  'SharePoint',
  'OneDrive',
  'Licensing & Microsoft Secure Score',
];

const outputItems = [
  { icon: FileText, label: 'Clear Findings' },
  { icon: ListChecks, label: 'Prioritised Recommendations' },
  { icon: MapPin, label: 'Practical Next Steps' },
];

export default function SecurityAssessment() {
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

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        {/* Introduction */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-msblue-200 bg-msblue-50 px-3.5 py-1.5">
            <Shield className="h-4 w-4 text-msblue-600" />
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-msblue-700">
              Microsoft 365 Security Assessment
            </span>
          </div>

          <h2 className="mt-5 max-w-2xl text-3xl font-bold leading-[1.15] tracking-tight text-navy-900 sm:text-4xl lg:text-[2.5rem]">
            Start With a{' '}
            <span className="bg-gradient-to-r from-msblue-600 to-teal-500 bg-clip-text text-transparent">
              Microsoft 365 Security Assessment
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            A Microsoft 365 Security Assessment is the first step in working with KollraX. It helps
            you understand your current configuration, identify areas that need attention, and
            receive a prioritised improvement plan.
          </p>
        </div>

        {/* 4-step lead generation process */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
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

                {/* Teal accent bar */}
                <span className="absolute bottom-0 left-5 right-5 h-0.5 origin-left scale-x-0 rounded-full bg-gradient-to-r from-teal-400 to-msblue-500 transition-transform duration-300 group-hover:scale-x-100" />
              </div>
            </div>
          ))}
        </div>

        {/* What We Review + What You Receive */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {/* What We Review panel */}
          <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-card">
            <h3 className="text-lg font-semibold text-navy-900">What We Review</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              The assessment can examine relevant areas of your Microsoft 365 environment,
              depending on your organisation's requirements and existing configuration.
            </p>

            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.1em] text-slate-500">
              Areas reviewed may include:
            </p>

            <ul className="mt-3 grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
              {reviewChecklist.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 text-sm text-navy-700"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-teal-400/40 bg-teal-50">
                    <Check className="h-3 w-3 text-teal-600" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* What You Receive panel */}
          <div className="relative overflow-hidden rounded-2xl border border-msblue-200/50 bg-gradient-to-br from-msblue-50 to-white p-6 shadow-sm">
            <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-msblue-200/30 blur-3xl" />
            <div className="relative">
              <h3 className="text-base font-semibold text-navy-900">What You Receive</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                A clear summary of relevant findings, areas requiring attention, and practical
                recommendations to help your organisation decide what to address next.
              </p>

              <div className="mt-4 flex flex-col gap-2.5 sm:flex-row sm:gap-4">
                {outputItems.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white/80 px-3 py-2 backdrop-blur-sm"
                  >
                    <item.icon className="h-4 w-4 text-msblue-600" />
                    <span className="text-xs font-semibold text-navy-900">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="relative mt-16 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-navy-800 to-navy-900 p-10 backdrop-blur-sm sm:p-14">
          {/* Subtle blue glow */}
          <div className="pointer-events-none absolute -top-24 right-1/4 h-64 w-64 rounded-full bg-msblue-500/20 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-24 left-1/4 h-64 w-64 rounded-full bg-teal-500/10 blur-[100px]" />

          <div className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
                Book Your Microsoft 365 Security Assessment
              </h3>
              <p className="mt-3 text-base leading-relaxed text-slate-300">
                Take the first step. Talk to KollraX about your Microsoft 365 environment and
                schedule your assessment today.
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
