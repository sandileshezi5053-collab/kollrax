import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  ['What is Microsoft Teams used for?', 'Microsoft Teams provides communication and collaboration capabilities including chat, meetings, calling, teams, channels, file collaboration, and integration with other Microsoft 365 services.'],
  ['Can KollraX set up Microsoft Teams for our organization?', "Yes. KollraX can help configure Teams based on your organization's collaboration, governance, security, and operational requirements."],
  ['What is the difference between Teams, SharePoint, and OneDrive?', 'They work together but serve different purposes. Teams provides a collaboration interface, SharePoint supports shared team content and sites, and OneDrive is primarily designed for individual users\' files and sharing.'],
  ['Can you help control guest access?', 'Yes. KollraX can help organizations review and configure guest and external collaboration settings based on their requirements.'],
  ['Can you help us organize our Teams and channels?', 'Yes. We can help establish practical structures, ownership, naming approaches, and governance processes.'],
  ['Can Teams be secure?', 'Teams can be configured with security and access controls, but security depends on the wider Microsoft 365 configuration, including identity, authentication, permissions, sharing, devices, and policies.'],
  ['Can KollraX work with our internal IT team?', 'Yes. KollraX can work alongside your existing IT team to provide Microsoft Teams and Microsoft 365 specialist support.'],
];

export default function TeamsFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section className="relative overflow-hidden bg-slate-50"><div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#1e3a6f 1px, transparent 1px), linear-gradient(90deg, #1e3a6f 1px, transparent 1px)', backgroundSize: '56px 56px' }} /><div className="relative mx-auto max-w-3xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24"><div className="text-center"><div className="inline-flex items-center gap-2 rounded-full border border-msblue-200 bg-msblue-50 px-3.5 py-1.5"><span className="h-1.5 w-1.5 rounded-full bg-teal-500" /><span className="text-xs font-semibold uppercase tracking-[0.14em] text-msblue-700">FAQ</span></div><h2 className="mt-5 text-3xl font-bold leading-[1.15] tracking-tight text-navy-900 sm:text-4xl">Microsoft Teams <span className="bg-gradient-to-r from-msblue-600 to-teal-500 bg-clip-text text-transparent">questions.</span></h2></div><div className="mt-12 space-y-3">{faqs.map(([question, answer], index) => { const isOpen = openIndex === index; return <div key={question} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card"><button className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left" onClick={() => setOpenIndex(isOpen ? null : index)} aria-expanded={isOpen}><span className="text-sm font-semibold text-navy-900 sm:text-base">{question}</span><ChevronDown className={`h-5 w-5 shrink-0 text-msblue-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} /></button>{isOpen && <div className="px-5 pb-5 animate-fade-in"><p className="text-sm leading-relaxed text-slate-600">{answer}</p></div>}</div>; })}</div></div></section>
  );
}
