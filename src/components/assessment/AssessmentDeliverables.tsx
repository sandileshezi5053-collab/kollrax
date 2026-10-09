import {
  FileSearch,
  ShieldAlert,
  ClipboardList,
  Lightbulb,
  ListOrdered,
  MessageSquare,
  Info,
} from 'lucide-react';

const deliverables = [
  {
    icon: FileSearch,
    title: 'Clear Findings',
    description: 'A summary of what was reviewed and what was observed.',
  },
  {
    icon: ShieldAlert,
    title: 'Identified Configuration Gaps',
    description: 'Areas where configuration differs from recommended practices.',
  },
  {
    icon: ClipboardList,
    title: 'Security Observations',
    description: 'Notes on security-relevant settings and potential risks.',
  },
  {
    icon: Lightbulb,
    title: 'Practical Recommendations',
    description: 'Actionable suggestions for improving your environment.',
  },
  {
    icon: ListOrdered,
    title: 'Prioritized Areas for Improvement',
    description: 'A suggested order of priority based on impact and effort.',
  },
  {
    icon: MessageSquare,
    title: 'Discussion with a Specialist',
    description: 'A conversation to walk through findings and answer questions.',
  },
];

export default function AssessmentDeliverables() {
  return (
    <section className="relative overflow-hidden bg-navy-950">
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
        <div className="absolute bottom-0 left-1/4 h-[420px] w-[420px] rounded-full bg-teal-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-msblue-400/20 bg-msblue-500/10 px-3.5 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-msblue-200">
              What You'll Get
            </span>
          </div>

          <h2 className="mt-5 max-w-2xl text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[2.5rem]">
            Practical Output You{' '}
            <span className="bg-gradient-to-r from-msblue-400 to-teal-400 bg-clip-text text-transparent">
              Can Act On
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            After the assessment, you receive a clear summary of findings and recommendations to help
            you improve your Microsoft 365 environment.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {deliverables.map((card) => (
            <div
              key={card.title}
              className="group relative flex flex-col rounded-2xl border border-white/10 bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-msblue-200 hover:shadow-card-hover"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-navy-800 to-navy-900 shadow-sm transition-colors duration-300 group-hover:from-msblue-500 group-hover:to-msblue-700">
                <card.icon className="h-6 w-6 text-white" />
              </div>

              <h3 className="mt-5 text-base font-semibold text-navy-900">{card.title}</h3>

              <p className="mt-2.5 flex-1 text-sm leading-relaxed text-slate-600">
                {card.description}
              </p>

              <span className="absolute bottom-0 left-8 right-8 h-0.5 origin-left scale-x-0 rounded-full bg-gradient-to-r from-teal-400 to-msblue-500 transition-transform duration-300 group-hover:scale-x-100" />
            </div>
          ))}
        </div>

        {/* Disclaimer note */}
        <div className="mt-10 flex items-start gap-3 rounded-xl border border-msblue-400/20 bg-msblue-500/5 px-5 py-4">
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-msblue-400" />
          <p className="text-sm leading-relaxed text-slate-300">
            The assessment is designed to provide practical visibility into your Microsoft 365
            environment. It is not a substitute for a formal compliance audit, penetration test, or
            legal assessment.
          </p>
        </div>
      </div>
    </section>
  );
}
