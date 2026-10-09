import { Users, UserX, HelpCircle } from 'lucide-react';

const cards = [
  {
    icon: Users,
    title: 'You Have an Internal IT Team',
    description:
      'Get additional Microsoft 365 expertise when your existing team needs extra capacity or specialist support.',
  },
  {
    icon: UserX,
    title: "You Don't Have a Dedicated M365 Specialist",
    description:
      'Get practical support managing the Microsoft 365 environment your business depends on.',
  },
  {
    icon: HelpCircle,
    title: "You're Experiencing a Microsoft 365 Challenge",
    description:
      'Discuss an issue before deciding what technical action is appropriate.',
  },
];

export default function SpecialistWhoFor() {
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
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-msblue-200 bg-msblue-50 px-3.5 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-msblue-700">
              Who This Is For
            </span>
          </div>

          <h2 className="mt-5 max-w-2xl text-3xl font-bold leading-[1.15] tracking-tight text-navy-900 sm:text-4xl lg:text-[2.5rem]">
            When It Makes Sense to{' '}
            <span className="bg-gradient-to-r from-msblue-600 to-teal-500 bg-clip-text text-transparent">
              Talk to KollraX
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            KollraX is designed to work alongside your business — whether you have an internal IT
            team, no dedicated specialist, or a specific challenge you need help with.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-msblue-200 hover:shadow-card-hover"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-navy-800 to-navy-900 shadow-sm transition-colors duration-300 group-hover:from-msblue-500 group-hover:to-msblue-700">
                <card.icon className="h-6 w-6 text-white" />
              </div>

              <h3 className="mt-5 text-base font-semibold text-navy-900">{card.title}</h3>

              <p className="mt-2.5 flex-1 text-sm leading-relaxed text-slate-600">
                {card.description}
              </p>

              <span className="absolute bottom-0 left-8 right-8 h-0.5 origin-left scale-x-0 rounded-full bg-gradient-to-r from-teal-400 to-msblue-500 transition-transform duration-300 group-hover:scale-x-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
