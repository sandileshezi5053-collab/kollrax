import { ArrowRight, CloudCog, FileKey, Gauge, ShieldCheck, UsersRound } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const valuePoints = [
  { icon: Gauge, title: 'Minimize disruption', description: 'Plan migration activities around your business operations.' },
  { icon: ShieldCheck, title: 'Security-first approach', description: 'Build identity, access, authentication, and security controls into the migration.' },
  { icon: CloudCog, title: 'Business-ready configuration', description: "Don't just move the data — configure Microsoft 365 properly for ongoing use." },
  { icon: UsersRound, title: 'Post-migration support', description: 'Continue receiving Microsoft 365 administration and support after the migration.' },
];

const workloads: { icon: LucideIcon; title: string; description: string }[] = [
  { icon: FileKey, title: 'Email & Exchange Online', description: 'Migration of business email and mailboxes into Exchange Online, including domain and mail-flow considerations.' },
  { icon: UsersRound, title: 'Microsoft 365 Users & Identity', description: 'User accounts, identities, authentication, MFA, and Microsoft Entra ID configuration.' },
  { icon: CloudCog, title: 'SharePoint & OneDrive', description: 'Migration and organization of business files, documents, and collaboration data.' },
  { icon: UsersRound, title: 'Microsoft Teams', description: 'Teams, collaboration workloads, and supporting Microsoft 365 configuration.' },
  { icon: Gauge, title: 'Domains & DNS', description: 'Assistance with Microsoft 365 domain verification and DNS records required for services such as Exchange Online.' },
  { icon: CloudCog, title: 'Microsoft 365 Applications', description: 'Support for configuring Microsoft 365 applications and preparing users for the new environment.' },
];

const paths = [
  ['Google Workspace → Microsoft 365', 'For organizations moving email, users, calendars, contacts, and collaboration workloads from Google Workspace.'],
  ['Existing Microsoft 365 → Microsoft 365', 'For organizations consolidating tenants, restructuring environments, or moving workloads between Microsoft 365 tenants.'],
  ['On-Premises Exchange → Exchange Online', 'For organizations moving from traditional Exchange infrastructure to Exchange Online.'],
  ['IMAP / Legacy Email → Microsoft 365', 'For organizations migrating from legacy or hosted email platforms.'],
  ['File Server → SharePoint / OneDrive', 'For organizations moving traditional file-server workloads into Microsoft 365 cloud storage and collaboration platforms.'],
];

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-msblue-200 bg-msblue-50 px-3.5 py-1.5">
      <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
      <span className="text-xs font-semibold uppercase tracking-[0.14em] text-msblue-700">{children}</span>
    </div>
  );
}

export default function MigrationOverview() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-5 py-8 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:px-12 lg:py-10">
          {valuePoints.map((point) => (
            <div key={point.title} className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50/70 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-msblue-200 hover:bg-white hover:shadow-card">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-msblue-50 text-msblue-600"><point.icon className="h-5 w-5" /></div>
              <div><h3 className="text-sm font-semibold text-navy-900">{point.title}</h3><p className="mt-1 text-xs leading-relaxed text-slate-600">{point.description}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-50">
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#1e3a6f 1px, transparent 1px), linear-gradient(90deg, #1e3a6f 1px, transparent 1px)', backgroundSize: '56px 56px' }} />
        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <SectionLabel>Migration strategy</SectionLabel>
              <h2 className="mt-5 max-w-xl text-3xl font-bold leading-[1.15] tracking-tight text-navy-900 sm:text-4xl">Migration is more than <span className="bg-gradient-to-r from-msblue-600 to-teal-500 bg-clip-text text-transparent">moving mailboxes.</span></h2>
              <div className="mt-5 max-w-xl space-y-4 text-base leading-relaxed text-slate-600">
                <p>Moving to Microsoft 365 involves much more than transferring email.</p>
                <p>A successful migration requires careful planning around users, identities, domains, mail flow, security, files, permissions, applications, devices, licensing, and user adoption.</p>
                <p>KollraX helps organizations approach migration as a structured technology transition — not simply a data transfer.</p>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-card sm:p-8">
              <div className="flex flex-wrap items-center justify-center gap-2 sm:flex-nowrap sm:gap-0">
                {['PLAN', 'PREPARE', 'MIGRATE', 'SECURE', 'SUPPORT'].map((step, index) => (
                  <div key={step} className="flex items-center gap-2 sm:flex-1">
                    <div className="flex flex-col items-center gap-2 text-center">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${index === 4 ? 'bg-teal-500 text-white' : 'bg-navy-900 text-msblue-300'} shadow-sm`}><span className="text-xs font-bold">0{index + 1}</span></div>
                      <span className="text-[10px] font-bold tracking-[0.14em] text-navy-800">{step}</span>
                    </div>
                    {index < 4 && <ArrowRight className="mx-1 h-4 w-4 text-msblue-400 sm:flex-1" />}
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-2xl bg-navy-950 px-5 py-4 text-center text-sm leading-relaxed text-slate-300">A clear migration path keeps your people, data, and security controls moving in the same direction.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="max-w-3xl"><SectionLabel>Migration scope</SectionLabel><h2 className="mt-5 text-3xl font-bold leading-[1.15] tracking-tight text-navy-900 sm:text-4xl">What can we help you migrate?</h2><p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">Depending on your environment and requirements, KollraX can help plan and deliver migrations across the Microsoft 365 workloads your organization relies on.</p></div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{workloads.map((item) => <div key={item.title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-msblue-200 hover:shadow-card-hover"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-navy-800 to-navy-900 text-white transition-colors group-hover:from-msblue-500 group-hover:to-msblue-700"><item.icon className="h-5 w-5" /></div><h3 className="mt-5 text-base font-semibold text-navy-900">{item.title}</h3><p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p></div>)}</div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-50">
        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24"><div className="max-w-3xl"><SectionLabel>Migration options</SectionLabel><h2 className="mt-5 text-3xl font-bold leading-[1.15] tracking-tight text-navy-900 sm:text-4xl">Migration paths we can support</h2><p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">Different source environments require different decisions. We help you choose an approach based on the data, dependencies, and experience of your users.</p></div><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{paths.map(([title, description], index) => <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card"><div className="flex items-center gap-3"><span className="text-sm font-bold text-msblue-500">0{index + 1}</span><span className="h-px flex-1 bg-slate-200" /></div><h3 className="mt-5 text-base font-semibold text-navy-900">{title}</h3><p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p></div>)}</div><p className="mt-8 text-sm italic text-slate-500">Migration requirements vary by environment. We assess your current setup before recommending the appropriate migration approach.</p></div>
      </section>
    </>
  );
}
