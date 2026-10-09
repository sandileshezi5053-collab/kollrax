import { Users, ShieldCheck, Headset, Settings } from 'lucide-react';

const trustItems = [
  { icon: Users, label: 'Works alongside your existing IT team' },
  { icon: ShieldCheck, label: 'Security-focused approach' },
  { icon: Headset, label: 'Practical, ongoing support' },
  { icon: Settings, label: 'Day-to-day administration' },
];

export default function SpecialistTrust() {
  return (
    <section className="relative overflow-hidden bg-navy-950">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div className="absolute -top-40 left-1/3 h-[480px] w-[480px] rounded-full bg-msblue-600/15 blur-[120px]" />
        <div className="absolute -bottom-40 right-1/3 h-[420px] w-[420px] rounded-full bg-teal-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-5 py-20 text-center sm:px-8 lg:px-12 lg:py-28">
        <h2 className="text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[2.5rem]">
          Microsoft 365 Support That{' '}
          <span className="bg-gradient-to-r from-msblue-400 to-teal-400 bg-clip-text text-transparent">
            Works Alongside Your Business
          </span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
          KollraX is designed to work alongside businesses and their existing IT teams. Our role
          can range from helping with a specific Microsoft 365 issue to providing ongoing
          administration, security support, and management.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-6 backdrop-blur-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-msblue-500 to-msblue-700 shadow-glow">
                <item.icon className="h-6 w-6 text-white" />
              </div>
              <span className="text-sm font-medium text-slate-200">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
