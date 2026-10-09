import { Briefcase, Calculator, Scale, Compass, HeartPulse, Building2 } from 'lucide-react';

const sectors = [
  { icon: Briefcase, label: 'Professional Services' },
  { icon: Calculator, label: 'Accounting Firms' },
  { icon: Scale, label: 'Law Firms' },
  { icon: Compass, label: 'Consulting Businesses' },
  { icon: HeartPulse, label: 'Healthcare Organizations' },
  { icon: Building2, label: 'Growing SMEs' },
];

export default function AboutWhoWeWorkWith() {
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
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-msblue-200 bg-msblue-50 px-3.5 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-msblue-700">
              Who We Work With
            </span>
          </div>

          <h2 className="mt-5 max-w-2xl text-3xl font-bold leading-[1.15] tracking-tight text-navy-900 sm:text-4xl lg:text-[2.5rem]">
            Built for{' '}
            <span className="bg-gradient-to-r from-msblue-600 to-teal-500 bg-clip-text text-transparent">
              Growing Businesses
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            KollraX works with small and growing businesses that rely on Microsoft 365 but may not
            have the resources, time, or specialist expertise to manage every aspect of their
            environment internally.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {sectors.map((sector) => (
            <div
              key={sector.label}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-msblue-200 hover:shadow-card-hover"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-navy-800 to-navy-900 shadow-sm transition-colors duration-300 group-hover:from-msblue-500 group-hover:to-msblue-700">
                <sector.icon className="h-6 w-6 text-white" />
              </div>
              <span className="text-sm font-medium text-navy-900">{sector.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
