import { Search, ShieldAlert, ClipboardList, ShieldCheck, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Assess Your Environment',
    description:
      'Review Microsoft 365 security configuration, identity settings, and current protection controls.',
  },
  {
    number: '02',
    icon: ShieldAlert,
    title: 'Identify Security Gaps',
    description:
      'Analyse findings and highlight areas requiring attention.',
  },
  {
    number: '03',
    icon: ClipboardList,
    title: 'Recommend Improvements',
    description:
      'Provide practical recommendations based on security priorities.',
  },
  {
    number: '04',
    icon: ShieldCheck,
    title: 'Strengthen and Maintain Security',
    description:
      'Support implementation improvements and ongoing security reviews.',
  },
];

export default function SecurityProcess() {
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
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-msblue-200 bg-msblue-50 px-3.5 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-msblue-700">
              How Our Security Process Works
            </span>
          </div>

          <h2 className="mt-5 max-w-2xl text-3xl font-bold leading-[1.15] tracking-tight text-navy-900 sm:text-4xl lg:text-[2.5rem]">
            A Structured Approach to{' '}
            <span className="bg-gradient-to-r from-msblue-600 to-teal-500 bg-clip-text text-transparent">
              Microsoft 365 Security
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Our security engagement follows a clear path — from assessing your current
            configuration through to strengthening and maintaining your security posture over time.
          </p>
        </div>

        <div className="relative mt-12">
          {/* Connecting line on desktop */}
          <div className="absolute left-0 right-0 top-[3.25rem] hidden h-px bg-gradient-to-r from-transparent via-teal-300/60 to-transparent lg:block" />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {steps.map((step, idx) => (
              <div key={step.number} className="relative flex flex-col">
                {idx < steps.length - 1 && (
                  <div className="flex items-center justify-center py-1.5 lg:hidden">
                    <ArrowRight className="h-5 w-5 rotate-90 text-msblue-400" />
                  </div>
                )}

                <div className="group relative flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-msblue-200 hover:shadow-card-hover">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-navy-800 to-navy-900 shadow-sm transition-colors duration-300 group-hover:from-msblue-500 group-hover:to-msblue-700">
                      <step.icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-3xl font-bold text-slate-200 transition-colors duration-300 group-hover:text-msblue-200">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-3.5 text-base font-semibold text-navy-900">{step.title}</h3>

                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {step.description}
                  </p>

                  <span className="absolute bottom-0 left-5 right-5 h-0.5 origin-left scale-x-0 rounded-full bg-gradient-to-r from-teal-400 to-msblue-500 transition-transform duration-300 group-hover:scale-x-100" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
