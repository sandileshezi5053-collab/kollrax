import { BookOpen, Download, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const resourceCategories = [
  {
    title: 'Microsoft 365 Security Guides',
    description: 'Practical guidance on securing your Microsoft 365 environment.',
  },
  {
    title: 'Microsoft 365 Best Practices',
    description: 'Configuration recommendations for admins and decision-makers.',
  },
  {
    title: 'Identity Management Articles',
    description: 'Guidance on Entra ID, access policies, and user lifecycle management.',
  },
  {
    title: 'Teams Governance Guides',
    description: 'Best practices for managing Teams, SharePoint, and OneDrive.',
  },
  {
    title: 'Security Checklist Downloads',
    description: 'Downloadable checklists to review your Microsoft 365 security posture.',
  },
];

export default function Resources() {
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
        {/* Section label */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-msblue-200 bg-msblue-50 px-3.5 py-1.5">
            <BookOpen className="h-4 w-4 text-msblue-600" />
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-msblue-700">
              Resources
            </span>
          </div>

          <h2 className="mt-5 max-w-2xl text-3xl font-bold leading-[1.15] tracking-tight text-navy-900 sm:text-4xl lg:text-[2.5rem]">
            Microsoft 365{' '}
            <span className="bg-gradient-to-r from-msblue-600 to-teal-500 bg-clip-text text-transparent">
              Knowledge Centre
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Practical Microsoft 365 guides, best practices, and downloadable resources to help your
            organisation understand and improve its cloud environment.
          </p>
        </div>

        {/* Resource cards */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {resourceCategories.map((category, i) => (
            <div
              key={i}
              className={i === 4 ? 'group relative flex flex-col rounded-2xl border border-dashed border-slate-300 bg-white/50 p-8 transition-all duration-300 hover:border-msblue-200 hover:bg-white sm:col-span-2 lg:col-span-1' : 'group relative flex flex-col rounded-2xl border border-dashed border-slate-300 bg-white/50 p-8 transition-all duration-300 hover:border-msblue-200 hover:bg-white'}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-slate-50">
                {i === 4 ? (
                  <Download className="h-6 w-6 text-slate-400" />
                ) : (
                  <BookOpen className="h-6 w-6 text-slate-400" />
                )}
              </div>
              <h3 className="mt-5 text-base font-semibold text-navy-900">{category.title}</h3>
              <p className="mt-2.5 flex-1 text-sm leading-relaxed text-slate-500">
                {category.description}
              </p>
              <div className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-slate-400">
                Coming soon
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="relative mt-16 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-navy-800 to-navy-900 p-10 backdrop-blur-sm sm:p-14">
          <div className="pointer-events-none absolute -top-24 right-1/4 h-64 w-64 rounded-full bg-msblue-500/20 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-24 left-1/4 h-64 w-64 rounded-full bg-teal-500/10 blur-[100px]" />

          <div className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
                Have a Microsoft 365 Question?
              </h3>
              <p className="mt-3 text-base leading-relaxed text-slate-300">
                While our knowledge centre is being developed, talk to KollraX directly about your
                Microsoft 365 environment.
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
