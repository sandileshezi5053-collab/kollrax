import { Cloud, ShieldCheck, KeyRound, Headset, Settings, ArrowDown } from 'lucide-react';

const approachIcons = [
  { icon: Cloud, label: 'Microsoft 365' },
  { icon: ShieldCheck, label: 'Security' },
  { icon: KeyRound, label: 'Identity' },
  { icon: Headset, label: 'Support' },
  { icon: Settings, label: 'Administration' },
];

export default function AboutWhyExists() {
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
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left column — text */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-msblue-200 bg-msblue-50 px-3.5 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-msblue-700">
                Why KollraX Exists
              </span>
            </div>

            <h2 className="mt-5 max-w-xl text-3xl font-bold leading-[1.15] tracking-tight text-navy-900 sm:text-4xl lg:text-[2.5rem]">
              Microsoft 365 is powerful,{' '}
              <span className="bg-gradient-to-r from-msblue-600 to-teal-500 bg-clip-text text-transparent">
                but managing it is hard
              </span>
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              <p>
                As businesses grow, Microsoft 365 becomes more than email and Office apps. Identity,
                permissions, security policies, email protection, collaboration, data access,
                licensing, and user support all need ongoing attention.
              </p>
              <p>
                KollraX provides the specialist Microsoft 365 support businesses need to manage these
                areas confidently — whether they have an internal IT team that needs additional
                expertise or no dedicated Microsoft 365 specialist at all.
              </p>
            </div>
          </div>

          {/* Right column — visual card */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-card">
              {/* Step 1 */}
              <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-5 py-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-navy-800 to-navy-900">
                  <Cloud className="h-5 w-5 text-white" />
                </div>
                <span className="text-sm font-semibold text-navy-900">Your Business</span>
              </div>

              <div className="flex justify-center py-2">
                <ArrowDown className="h-5 w-5 text-msblue-400" />
              </div>

              {/* Step 2 */}
              <div className="flex items-center gap-3 rounded-xl border border-msblue-200 bg-msblue-50 px-5 py-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-msblue-500 to-msblue-700">
                  <ShieldCheck className="h-5 w-5 text-white" />
                </div>
                <span className="text-sm font-semibold text-navy-900">
                  KollraX M365 Management &amp; Security
                </span>
              </div>

              <div className="flex justify-center py-2">
                <ArrowDown className="h-5 w-5 text-msblue-400" />
              </div>

              {/* Step 3 */}
              <div className="flex items-center gap-3 rounded-xl border border-teal-200 bg-teal-50 px-5 py-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-teal-500 to-teal-700">
                  <ShieldCheck className="h-5 w-5 text-white" />
                </div>
                <span className="text-sm font-semibold text-navy-900">
                  Secure &middot; Supported &middot; Well Managed
                </span>
              </div>

              {/* Icon strip */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 border-t border-slate-100 pt-5">
                {approachIcons.map((item) => (
                  <span
                    key={item.label}
                    className="flex items-center gap-1.5 text-xs font-medium text-slate-500"
                  >
                    <item.icon className="h-3.5 w-3.5 text-msblue-500" />
                    {item.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
