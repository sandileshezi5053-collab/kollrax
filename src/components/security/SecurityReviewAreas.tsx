import {
  KeyRound,
  GitBranch,
  ShieldCheck,
  Mail,
  FolderLock,
  ClipboardCheck,
  Check,
} from 'lucide-react';

const reviewAreas = [
  {
    icon: KeyRound,
    title: 'Identity and Authentication',
    items: [
      'MFA configuration',
      'Authentication methods',
      'User access controls',
    ],
  },
  {
    icon: GitBranch,
    title: 'Conditional Access',
    items: [
      'Access policies',
      'Authentication requirements',
      'Risk-based controls',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Microsoft Defender',
    items: [
      'Security configurations',
      'Threat protection settings',
    ],
  },
  {
    icon: Mail,
    title: 'Exchange Online',
    items: [
      'Email security',
      'Anti-phishing protection',
      'Domain security recommendations',
    ],
  },
  {
    icon: FolderLock,
    title: 'SharePoint and OneDrive',
    items: [
      'Sharing settings',
      'External access controls',
      'Data protection considerations',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'Licensing and Secure Score',
    items: [
      'Security feature availability',
      'Microsoft security recommendations',
      'Improvement opportunities',
    ],
  },
];

export default function SecurityReviewAreas() {
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
              Security Areas We Review
            </span>
          </div>

          <h2 className="mt-5 max-w-2xl text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[2.5rem]">
            A Thorough Review Across{' '}
            <span className="bg-gradient-to-r from-msblue-400 to-teal-400 bg-clip-text text-transparent">
              Every Microsoft 365 Security Area
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Our security reviews cover the full range of Microsoft 365 security surfaces — from
            identity and access through email, data, and threat protection.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviewAreas.map((area) => (
            <div
              key={area.title}
              className="group relative flex flex-col rounded-2xl border border-white/10 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-msblue-200 hover:shadow-card-hover"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-navy-800 to-navy-900 shadow-sm transition-colors duration-300 group-hover:from-msblue-500 group-hover:to-msblue-700">
                <area.icon className="h-6 w-6 text-white" />
              </div>

              <h3 className="mt-5 text-base font-semibold text-navy-900">{area.title}</h3>

              <ul className="mt-3 flex-1 space-y-1.5">
                {area.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal-500" />
                    {item}
                  </li>
                ))}
              </ul>

              <span className="absolute bottom-0 left-6 right-6 h-0.5 origin-left scale-x-0 rounded-full bg-gradient-to-r from-teal-400 to-msblue-500 transition-transform duration-300 group-hover:scale-x-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
