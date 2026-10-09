import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  ['Do you make changes immediately after an assessment?', 'No. An assessment can begin as a review, with findings and recommendations presented before implementation. Changes should be agreed upon and authorized separately where applicable.'],
  ['Do we need to provide Global Administrator access?', 'Not automatically. The required permissions depend on the work being performed. We aim to use the least-privileged access appropriate to the engagement and avoid unnecessary broad permissions.'],
  ['Can you work with our existing IT provider?', 'Yes. KollraX can collaborate with internal IT teams or existing service providers when responsibilities, access, and the scope of work are clearly agreed.'],
  ['Do you only provide Microsoft 365 security services?', 'No. Depending on the engagement, KollraX can support Microsoft 365 administration, identity and access, security configuration, migration, collaboration, licensing reviews, optimization, and ongoing support.'],
  ['Can we start with an assessment before committing to ongoing support?', 'Yes. An assessment can help establish the current situation and identify potential next steps before you decide whether additional services are appropriate.'],
  ['How do you protect our Microsoft 365 environment?', 'We use an agreed scope of work, appropriate access controls, secure authentication, authorization, careful change practices, and available audit capabilities appropriate to the engagement.'],
  ['How do you measure success?', 'Success depends on the agreed objectives. Examples include resolving specific configuration issues, completing an agreed migration, improving access controls, clarifying licensing, or establishing more consistent administrative processes.'],
  ['Will you replace our internal IT team?', 'No. Our service model is designed to complement existing IT teams or provide additional Microsoft 365 expertise where a dedicated specialist is not available.'],
];

export default function ApproachFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section className="relative overflow-hidden bg-slate-50"><div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#1e3a6f 1px, transparent 1px), linear-gradient(90deg, #1e3a6f 1px, transparent 1px)', backgroundSize: '56px 56px' }} /><div className="relative mx-auto max-w-3xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24"><div className="text-center"><div className="inline-flex items-center gap-2 rounded-full border border-msblue-200 bg-msblue-50 px-3.5 py-1.5"><span className="h-1.5 w-1.5 rounded-full bg-teal-500" /><span className="text-xs font-semibold uppercase tracking-[0.14em] text-msblue-700">FAQ</span></div><h2 className="mt-5 text-3xl font-bold leading-[1.15] tracking-tight text-navy-900 sm:text-4xl">Our approach <span className="bg-gradient-to-r from-msblue-600 to-teal-500 bg-clip-text text-transparent">questions.</span></h2></div><div className="mt-12 space-y-3">{faqs.map(([question, answer], index) => { const isOpen = openIndex === index; return <div key={question} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card"><button className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left" onClick={() => setOpenIndex(isOpen ? null : index)} aria-expanded={isOpen}><span className="text-sm font-semibold text-navy-900 sm:text-base">{question}</span><ChevronDown className={`h-5 w-5 shrink-0 text-msblue-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} /></button>{isOpen && <div className="px-5 pb-5 animate-fade-in"><p className="text-sm leading-relaxed text-slate-600">{answer}</p></div>}</div>; })}</div></div></section>
  );
}
