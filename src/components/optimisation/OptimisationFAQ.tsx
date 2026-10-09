import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  ['What is Microsoft 365 optimisation?', 'Microsoft 365 optimisation is the process of reviewing and improving how an organization uses, manages, secures, and licenses Microsoft 365.'],
  ['Can Microsoft 365 optimisation reduce our licensing costs?', "It may identify potential opportunities to improve license allocation or remove unnecessary licensing. Actual savings depend on the organization's users, requirements, licensing agreements, and Microsoft plans."],
  ['Does optimisation mean removing Microsoft 365 features?', 'No. The goal is not simply to remove services or reduce costs. The goal is to align Microsoft 365 with business requirements while considering security, productivity, and operational needs.'],
  ['Can you review our Microsoft 365 security?', 'Yes. KollraX can review areas such as identity, MFA, Conditional Access, administrator roles, email security, sharing, and other relevant Microsoft 365 security controls.'],
  ['Can you optimise an environment that already has an internal IT team?', 'Yes. KollraX is designed to work alongside internal IT teams by providing additional Microsoft 365 administration and security expertise.'],
  ['Do you make changes during the assessment?', 'The assessment can be performed as a review first. Recommendations can then be discussed and agreed before implementation.'],
  ['How often should Microsoft 365 be reviewed?', 'There is no universal schedule. Organizations should consider reviews when they experience significant growth, licensing changes, security concerns, major configuration changes, or other changes to their Microsoft 365 environment.'],
];

export default function OptimisationFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section className="relative overflow-hidden bg-slate-50"><div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#1e3a6f 1px, transparent 1px), linear-gradient(90deg, #1e3a6f 1px, transparent 1px)', backgroundSize: '56px 56px' }} /><div className="relative mx-auto max-w-3xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24"><div className="text-center"><div className="inline-flex items-center gap-2 rounded-full border border-msblue-200 bg-msblue-50 px-3.5 py-1.5"><span className="h-1.5 w-1.5 rounded-full bg-teal-500" /><span className="text-xs font-semibold uppercase tracking-[0.14em] text-msblue-700">FAQ</span></div><h2 className="mt-5 text-3xl font-bold leading-[1.15] tracking-tight text-navy-900 sm:text-4xl">Microsoft 365 optimisation <span className="bg-gradient-to-r from-msblue-600 to-teal-500 bg-clip-text text-transparent">questions.</span></h2></div><div className="mt-12 space-y-3">{faqs.map(([question, answer], index) => { const isOpen = openIndex === index; return <div key={question} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card"><button className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left" onClick={() => setOpenIndex(isOpen ? null : index)} aria-expanded={isOpen}><span className="text-sm font-semibold text-navy-900 sm:text-base">{question}</span><ChevronDown className={`h-5 w-5 shrink-0 text-msblue-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} /></button>{isOpen && <div className="px-5 pb-5 animate-fade-in"><p className="text-sm leading-relaxed text-slate-600">{answer}</p></div>}</div>; })}</div></div></section>
  );
}
