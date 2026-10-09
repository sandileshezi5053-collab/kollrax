import { ArrowRight, BarChart3, Headset, MessageSquare, Wrench, type LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const options: { icon: LucideIcon; title: string; body: string; cta: string; to: string }[] = [
  { icon: BarChart3, title: 'Microsoft 365 Assessment', body: 'Want to understand the current state of your Microsoft 365 environment? Book an assessment to review areas such as identity, security, access, administration, and configuration.', cta: 'Book an Assessment', to: '/microsoft-365-assessment' },
  { icon: Headset, title: 'Microsoft 365 Support', body: "Need help managing or troubleshooting Microsoft 365? Talk to us about administration, Exchange Online, Teams, SharePoint, OneDrive, identity, security, and other Microsoft 365 requirements.", cta: 'Discuss Support', to: '/talk-to-microsoft-365-specialist' },
  { icon: Wrench, title: 'Migration or Project', body: "Planning a Microsoft 365 migration, restructuring, or optimization project? Tell us about your environment and what you're trying to accomplish.", cta: 'Discuss Your Project', to: '/talk-to-microsoft-365-specialist' },
  { icon: MessageSquare, title: 'General Enquiry', body: "Not sure exactly what you need? Send us a message and tell us what you're trying to solve. We'll help point you in the right direction.", cta: 'Send a Message', to: '/contact#contact-form' },
];

export default function ContactOptions() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="max-w-3xl"><div className="inline-flex items-center gap-2 rounded-full border border-msblue-200 bg-msblue-50 px-3.5 py-1.5"><span className="h-1.5 w-1.5 rounded-full bg-teal-500" /><span className="text-xs font-semibold uppercase tracking-[0.14em] text-msblue-700">Contact options</span></div><h2 className="mt-5 text-3xl font-bold leading-[1.15] tracking-tight text-navy-900 sm:text-4xl">How can we <span className="bg-gradient-to-r from-msblue-600 to-teal-500 bg-clip-text text-transparent">help?</span></h2></div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{options.map((opt) => <div key={opt.title} className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-msblue-200 hover:shadow-card-hover"><div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-navy-800 to-navy-900 text-white transition-colors group-hover:from-msblue-500 group-hover:to-msblue-700"><opt.icon className="h-6 w-6" /></div><h3 className="mt-5 text-base font-semibold text-navy-900">{opt.title}</h3><p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{opt.body}</p><Link to={opt.to} className="group/btn mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-msblue-700 transition-colors hover:text-msblue-500">{opt.cta}<ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1" /></Link></div>)}</div>
      </div>
    </section>
  );
}
