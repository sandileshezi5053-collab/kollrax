import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Is the assessment a penetration test?',
    answer:
      'No. The Microsoft 365 Assessment focuses on configuration, administration, identity, security, and management areas within the agreed scope.',
  },
  {
    question: 'Do I need to give KollraX Global Administrator access?',
    answer:
      'Not necessarily. Access requirements depend on the assessment scope. Where possible, KollraX should use least-privilege or read-only access.',
  },
  {
    question: 'Can you work with our existing IT team?',
    answer:
      'Yes. KollraX can work alongside an existing internal IT team or external IT provider rather than automatically replacing them.',
  },
  {
    question: 'What happens after the assessment?',
    answer:
      'KollraX can discuss the findings with your team and, where appropriate, provide recommendations or ongoing Microsoft 365 management and support.',
  },
];

export default function AssessmentFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
        <div className="absolute -top-20 right-1/4 h-64 w-64 rounded-full bg-msblue-200/30 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-teal-200/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-3xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-msblue-200 bg-msblue-50 px-3.5 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-msblue-700">
              FAQ
            </span>
          </div>

          <h2 className="mt-5 text-3xl font-bold leading-[1.15] tracking-tight text-navy-900 sm:text-4xl">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-msblue-600 to-teal-500 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card"
              >
                <button
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                >
                  <span className="text-sm font-semibold text-navy-900 sm:text-base">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-msblue-500 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 animate-fade-in">
                    <p className="text-sm leading-relaxed text-slate-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
