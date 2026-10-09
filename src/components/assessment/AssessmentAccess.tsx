import { Lock, KeyRound, FileText, EyeOff, ShieldCheck } from 'lucide-react';

const trustIndicators = [
  { icon: Lock, label: 'Least-privilege access' },
  { icon: KeyRound, label: 'MFA' },
  { icon: ShieldCheck, label: 'Limited administrative access' },
  { icon: FileText, label: 'Documented recommendations' },
  { icon: EyeOff, label: 'Respect for customer data' },
];

export default function AssessmentAccess() {
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
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-msblue-200 bg-msblue-50 px-3.5 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-msblue-700">
                Access & Security
              </span>
            </div>

            <h2 className="mt-5 max-w-xl text-3xl font-bold leading-[1.15] tracking-tight text-navy-900 sm:text-4xl lg:text-[2.5rem]">
              Your Environment.{' '}
              <span className="bg-gradient-to-r from-msblue-600 to-teal-500 bg-clip-text text-transparent">
                Your Control.
              </span>
            </h2>

            <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
              KollraX follows a least-privilege approach when access is required. Where appropriate,
              assessments can be performed using read-only access, limited administrative
              permissions, or guided screen-sharing depending on the assessment scope.
            </p>
          </div>

          <div className="flex items-center">
            <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
              {trustIndicators.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-card"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-navy-800 to-navy-900">
                    <item.icon className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-sm font-medium text-navy-900">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
