import {
  Settings2,
  ShieldCheck,
  Headset,
  TrendingUp,
  ClipboardCheck,
  Check,
} from 'lucide-react';

const serviceCards = [
  {
    icon: Settings2,
    title: 'Microsoft 365 Administration',
    features: [
      'User account management',
      'Licence assignment and review',
      'Permission management',
      'Tenant administration',
      'Configuration support',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Security Management',
    features: [
      'MFA reviews',
      'Conditional Access reviews',
      'Microsoft Defender configuration support',
      'Identity security improvements',
      'Security recommendations',
    ],
  },
  {
    icon: Headset,
    title: 'User Support and Troubleshooting',
    features: [
      'Microsoft Teams issues',
      'Outlook and email support',
      'OneDrive and SharePoint issues',
      'Access problems',
      'User productivity challenges',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Microsoft 365 Optimisation',
    features: [
      'Licence optimisation',
      'Configuration improvements',
      'Feature utilisation reviews',
      'Productivity recommendations',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'Environment Reviews',
    features: [
      'Security posture reviews',
      'Configuration assessments',
      'Improvement recommendations',
      'Microsoft 365 health checks',
    ],
  },
];

export default function ManagedSupportIncludes() {
  return (
    <section className="relative overflow-hidden bg-slate-50">
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
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-msblue-200 bg-msblue-50 px-3.5 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-msblue-700">
              What Managed Support Includes
            </span>
          </div>

          <h2 className="mt-5 max-w-2xl text-3xl font-bold leading-[1.15] tracking-tight text-navy-900 sm:text-4xl lg:text-[2.5rem]">
            Comprehensive Microsoft 365 Management{' '}
            <span className="bg-gradient-to-r from-msblue-600 to-teal-500 bg-clip-text text-transparent">
              Across Every Area
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            KollraX manages the day-to-day administration, security, support, and optimisation of
            your Microsoft 365 environment so your team can focus on their work.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {serviceCards.map((card) => (
            <div
              key={card.title}
              className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-msblue-200 hover:shadow-card-hover"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-navy-800 to-navy-900 shadow-sm transition-colors duration-300 group-hover:from-msblue-500 group-hover:to-msblue-700">
                <card.icon className="h-6 w-6 text-white" />
              </div>

              <h3 className="mt-5 text-base font-semibold text-navy-900">{card.title}</h3>

              <ul className="mt-3 flex-1 space-y-1.5">
                {card.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-slate-600">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal-500" />
                    {feature}
                  </li>
                ))}
              </ul>

              <span className="absolute bottom-0 left-8 right-8 h-0.5 origin-left scale-x-0 rounded-full bg-gradient-to-r from-teal-400 to-msblue-500 transition-transform duration-300 group-hover:scale-x-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
