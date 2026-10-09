import { CheckCircle2, ClipboardList, Cloud, Search, ShieldCheck, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const steps: { number: string; icon: LucideIcon; title: string; description: string }[] = [
  { number: '01', icon: Search, title: 'Discover', description: 'We assess your current environment, users, domains, workloads, data, dependencies, and migration requirements.' },
  { number: '02', icon: ClipboardList, title: 'Plan', description: 'We create a migration approach covering scope, timelines, dependencies, risks, communication, and cutover strategy.' },
  { number: '03', icon: Users, title: 'Prepare', description: 'We prepare identities, domains, security controls, licensing, permissions, and Microsoft 365 services before migration.' },
  { number: '04', icon: Cloud, title: 'Migrate', description: 'We move the agreed workloads and data while carefully managing the migration and minimizing business disruption.' },
  { number: '05', icon: ShieldCheck, title: 'Validate & Secure', description: 'We validate the migrated environment and review important Microsoft 365 security configurations such as MFA, identity controls, permissions, and access.' },
  { number: '06', icon: CheckCircle2, title: 'Support', description: 'We provide post-migration support and can continue managing and securing the Microsoft 365 environment as your external Microsoft 365 IT team.' },
];

export default function MigrationProcess() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#1e3a6f 1px, transparent 1px), linear-gradient(90deg, #1e3a6f 1px, transparent 1px)', backgroundSize: '56px 56px' }} />
      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="max-w-3xl"><div className="inline-flex items-center gap-2 rounded-full border border-msblue-200 bg-msblue-50 px-3.5 py-1.5"><span className="h-1.5 w-1.5 rounded-full bg-teal-500" /><span className="text-xs font-semibold uppercase tracking-[0.14em] text-msblue-700">Our migration process</span></div><h2 className="mt-5 text-3xl font-bold leading-[1.15] tracking-tight text-navy-900 sm:text-4xl">A structured path from <span className="bg-gradient-to-r from-msblue-600 to-teal-500 bg-clip-text text-transparent">discovery to support.</span></h2><p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">The right migration plan makes the technical work clearer, the decisions more deliberate, and the transition easier for your users.</p></div>
        <div className="relative mt-12"><div className="absolute left-0 right-0 top-[3.25rem] hidden h-px bg-gradient-to-r from-transparent via-teal-300/60 to-transparent lg:block" /><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{steps.map((step) => <div key={step.number} className="group relative rounded-2xl border border-slate-200 bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-msblue-200 hover:shadow-card-hover"><div className="flex items-center justify-between"><div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-navy-800 to-navy-900 text-white transition-colors duration-300 group-hover:from-msblue-500 group-hover:to-msblue-700"><step.icon className="h-6 w-6" /></div><span className="text-3xl font-bold text-slate-200 transition-colors group-hover:text-msblue-200">{step.number}</span></div><h3 className="mt-4 text-base font-semibold text-navy-900">{step.title}</h3><p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p><span className="absolute bottom-0 left-5 right-5 h-0.5 origin-left scale-x-0 rounded-full bg-gradient-to-r from-teal-400 to-msblue-500 transition-transform duration-300 group-hover:scale-x-100" /></div>)}</div></div>
      </div>
    </section>
  );
}
