import { ClipboardList, Eye, Search, Settings2, ShieldCheck, Wrench, type LucideIcon } from 'lucide-react';

const steps: { number: string; icon: LucideIcon; title: string; subtitle: string; bullets: string[]; deliverable: string }[] = [
  { number: '01', icon: Search, title: 'Discover', subtitle: 'Understand your environment before making recommendations.', bullets: ['Understanding your business and operational requirements.', 'Reviewing your current Microsoft 365 configuration.', "Understanding your existing IT team's responsibilities.", 'Identifying important workloads, dependencies, and constraints.', 'Agreeing on the scope and objectives of the engagement.'], deliverable: 'A clear understanding of the environment and the objectives of the engagement.' },
  { number: '02', icon: Eye, title: 'Assess', subtitle: 'Identify what is working and what needs attention.', bullets: ['Microsoft Entra ID and identity configuration.', 'MFA and Conditional Access.', 'Administrator roles and access permissions.', 'Exchange Online and email security.', 'Microsoft Teams collaboration and governance.', 'SharePoint and OneDrive sharing.', 'Microsoft 365 licensing and administration.', 'Relevant security settings and operational processes.'], deliverable: 'A documented assessment of relevant findings and potential improvements.' },
  { number: '03', icon: ClipboardList, title: 'Recommend', subtitle: 'Turn findings into a practical action plan.', bullets: ['High-priority security improvements.', 'Configuration changes.', 'Identity and access improvements.', 'Licensing reviews.', 'Collaboration and governance improvements.', 'Migration or optimization activities.', 'Ongoing administration and support requirements.'], deliverable: 'A prioritized recommendation and action plan.' },
  { number: '04', icon: Wrench, title: 'Implement', subtitle: 'Make agreed changes carefully and transparently.', bullets: ['Confirming authorization and scope.', 'Applying least-privilege access wherever practical.', 'Planning changes to minimize business disruption.', 'Testing relevant configurations.', 'Documenting important changes.', 'Communicating issues, dependencies, and outcomes.', 'Validating that the agreed objectives have been achieved.'], deliverable: 'Completed and documented changes within the agreed scope.' },
  { number: '05', icon: Settings2, title: 'Manage & Improve', subtitle: 'Keep your Microsoft 365 environment aligned with your business.', bullets: ['Microsoft 365 administration.', 'Troubleshooting and technical support.', 'Identity and access reviews.', 'Security configuration reviews.', 'User and licensing changes.', 'Teams, SharePoint, and Exchange administration.', 'Periodic recommendations and improvement reviews.'], deliverable: 'Ongoing support and continuous improvement according to the agreed service scope.' },
];

export default function ApproachProcess() {
  return (
    <section className="relative overflow-hidden bg-slate-50">
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#1e3a6f 1px, transparent 1px), linear-gradient(90deg, #1e3a6f 1px, transparent 1px)', backgroundSize: '56px 56px' }} />
      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="max-w-3xl"><div className="inline-flex items-center gap-2 rounded-full border border-msblue-200 bg-msblue-50 px-3.5 py-1.5"><span className="h-1.5 w-1.5 rounded-full bg-teal-500" /><span className="text-xs font-semibold uppercase tracking-[0.14em] text-msblue-700">Our five-step process</span></div><h2 className="mt-5 text-3xl font-bold leading-[1.15] tracking-tight text-navy-900 sm:text-4xl">A structured path from <span className="bg-gradient-to-r from-msblue-600 to-teal-500 bg-clip-text text-transparent">discovery to ongoing improvement.</span></h2></div>

        <div className="mt-12 space-y-5">
          {steps.map((step) => (
            <div key={step.number} className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-card transition-all duration-300 hover:border-msblue-200 hover:shadow-card-hover sm:p-7">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-7">
                <div className="flex items-center gap-4 sm:flex-col sm:items-center sm:gap-3">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-navy-800 to-navy-900 text-white transition-colors group-hover:from-msblue-500 group-hover:to-msblue-700"><step.icon className="h-7 w-7" /></div>
                  <span className="text-3xl font-bold text-slate-200 group-hover:text-msblue-200">{step.number}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-navy-900">{step.title}</h3>
                  <p className="mt-1 text-sm font-medium text-msblue-600">{step.subtitle}</p>
                  <div className="mt-4 grid gap-2 sm:grid-cols-2">{step.bullets.map((bullet) => <div key={bullet} className="flex items-start gap-2 text-sm text-slate-600"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />{bullet}</div>)}</div>
                  <div className="mt-5 flex items-start gap-3 rounded-xl bg-slate-50 px-4 py-3"><ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" /><p className="text-sm text-slate-600"><span className="font-semibold text-navy-900">Deliverable: </span>{step.deliverable}</p></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
