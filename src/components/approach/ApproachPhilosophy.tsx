import { Briefcase, ShieldCheck, Wrench, type LucideIcon } from 'lucide-react';

const philosophy: { icon: LucideIcon; title: string; description: string }[] = [
  { icon: Briefcase, title: 'Business First', description: 'Recommendations should support real business requirements, not introduce unnecessary complexity.' },
  { icon: ShieldCheck, title: 'Security by Design', description: 'Security, identity, access, and data protection are considered throughout the engagement.' },
  { icon: Wrench, title: 'Practical Execution', description: 'Changes should be justified, authorized, documented, and appropriate for the environment.' },
];

export default function ApproachPhilosophy() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-msblue-200 bg-msblue-50 px-3.5 py-1.5"><span className="h-1.5 w-1.5 rounded-full bg-teal-500" /><span className="text-xs font-semibold uppercase tracking-[0.14em] text-msblue-700">Our philosophy</span></div>
          <h2 className="mt-5 text-3xl font-bold leading-[1.15] tracking-tight text-navy-900 sm:text-4xl">We don't believe in changing things just for the <span className="bg-gradient-to-r from-msblue-600 to-teal-500 bg-clip-text text-transparent">sake of change.</span></h2>
        </div>
        <div className="mt-7 max-w-3xl space-y-4 text-base leading-relaxed text-slate-600">
          <p>Every organization has different users, workflows, security requirements, and IT capabilities. What works for one business may not be appropriate for another.</p>
          <p>Our approach starts by understanding your environment and the challenges you're trying to solve. We then identify practical opportunities, explain our recommendations, and work with you to determine the right next steps.</p>
          <p>Our goal is not simply to configure Microsoft 365. It is to help you get more value from your environment while maintaining appropriate security, usability, and operational control.</p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-3">{philosophy.map((card) => <div key={card.title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-msblue-200 hover:shadow-card-hover"><div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-navy-800 to-navy-900 text-white transition-colors group-hover:from-msblue-500 group-hover:to-msblue-700"><card.icon className="h-6 w-6" /></div><h3 className="mt-5 text-base font-semibold text-navy-900">{card.title}</h3><p className="mt-2 text-sm leading-relaxed text-slate-600">{card.description}</p></div>)}</div>
      </div>
    </section>
  );
}
