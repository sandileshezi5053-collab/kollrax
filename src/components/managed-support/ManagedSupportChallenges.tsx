import {
  ShieldAlert,
  Clock,
  Users,
  RefreshCw,
  Ticket,
  BadgeDollarSign,
  Headset,
} from 'lucide-react';

const challenges = [
  {
    icon: Clock,
    title: 'Administration Consuming Internal Time',
    description:
      'Day-to-day Microsoft 365 administration tasks take internal staff away from their core responsibilities and strategic work.',
  },
  {
    icon: ShieldAlert,
    title: 'Security Configurations Not Reviewed',
    description:
      'Without regular reviews, security settings drift over time and leave the environment exposed to avoidable risk.',
  },
  {
    icon: Users,
    title: 'Difficulty Managing Users and Access',
    description:
      'Managing user accounts, permissions, and access policies becomes increasingly complex as organisations grow.',
  },
  {
    icon: RefreshCw,
    title: 'Recurring Teams and Email Issues',
    description:
      'Collaboration and email problems recur without dedicated expertise to investigate and resolve root causes.',
  },
  {
    icon: BadgeDollarSign,
    title: 'Poor Licence Visibility and Spending',
    description:
      'Without clear licence oversight, organisations pay for unused or misassigned Microsoft 365 licences.',
  },
  {
    icon: Headset,
    title: 'No Dedicated Microsoft 365 Expertise',
    description:
      'Internal teams often lack the specialist knowledge needed to configure, secure, and optimise Microsoft 365 effectively.',
  },
];

export default function ManagedSupportChallenges() {
  return (
    <section className="relative overflow-hidden bg-navy-950">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-950 to-navy-900" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div className="absolute -top-40 right-1/4 h-[480px] w-[480px] rounded-full bg-msblue-600/15 blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 h-[420px] w-[420px] rounded-full bg-teal-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-msblue-400/20 bg-msblue-500/10 px-3.5 py-1.5">
            <ShieldAlert className="h-4 w-4 text-msblue-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-msblue-200">
              Business Challenges
            </span>
          </div>

          <h2 className="mt-5 max-w-2xl text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[2.5rem]">
            Microsoft 365 Challenges{' '}
            <span className="bg-gradient-to-r from-msblue-400 to-teal-400 bg-clip-text text-transparent">
              Organisations Face
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Managing Microsoft 365 effectively requires dedicated expertise. Without it,
            organisations face recurring issues, security gaps, and unnecessary costs.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {challenges.map((card) => (
            <div
              key={card.title}
              className="group relative flex flex-col rounded-2xl border border-white/10 bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-msblue-200 hover:shadow-card-hover"
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
