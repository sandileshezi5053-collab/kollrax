import {
  ShieldCheck,
  Lock,
  Users,
  Mail,
  FileText,
} from 'lucide-react';

type Status = 'reviewed' | 'needs-attention' | 'pending';

const statusConfig: Record<Status, { label: string; icon: typeof ShieldCheck; color: string }> = {
  reviewed: { label: 'Reviewed', icon: ShieldCheck, color: 'text-teal-400' },
  'needs-attention': { label: 'Needs attention', icon: ShieldCheck, color: 'text-amber-400' },
  pending: { label: 'Pending', icon: ShieldCheck, color: 'text-slate-500' },
};

const assessmentCategories = [
  { label: 'MFA Configuration', status: 'reviewed' as Status, icon: Lock },
  { label: 'Conditional Access', status: 'needs-attention' as Status, icon: ShieldCheck },
  { label: 'Identity Protection', status: 'reviewed' as Status, icon: Users },
  { label: 'Email Security Review', status: 'reviewed' as Status, icon: Mail },
];

const assessmentAreas = [
  'Microsoft 365 Security Configuration',
  'Identity & Access Management',
  'Multi-Factor Authentication',
  'Conditional Access',
  'Microsoft Defender',
  'Email Security',
];

export default function SecurityDashboard() {
  return (
    <div className="relative w-full max-w-[560px] animate-scale-in">
      {/* Ambient glow */}
      <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-msblue-600/20 via-teal-500/10 to-transparent blur-2xl" />

      {/* Main assessment card */}
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-navy-900 shadow-dashboard">
        {/* Browser-style top bar */}
        <div className="flex min-w-0 items-center gap-2 border-b border-white/5 bg-navy-950 px-3 py-2.5 sm:px-4">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
          </div>
          <div className="ml-1 flex min-w-0 flex-1 items-center gap-2 rounded-md bg-navy-800 px-2 py-1 text-[11px] text-slate-400 sm:ml-3 sm:flex-none sm:px-3">
            <Lock className="h-3 w-3 text-teal-400" />
            <span className="truncate">assessment.kollrax.com/microsoft-365</span>
          </div>
          <div className="ml-auto hidden shrink-0 items-center gap-1.5 text-[10px] text-slate-500 sm:flex">
            <FileText className="h-3.5 w-3.5 text-msblue-400" />
            <span>Security Assessment</span>
          </div>
        </div>

        {/* Assessment body */}
        <div className="space-y-3 p-4">
          {/* Header row */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-msblue-500 to-msblue-700 shadow-glow">
                <ShieldCheck className="h-4.5 w-4.5 text-white" />
              </div>
              <div>
                <p className="text-xs font-semibold text-white">Microsoft 365 Security Assessment</p>
                <p className="text-[10px] text-slate-500">Environment review &amp; recommendations</p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 rounded-full bg-msblue-500/10 px-2.5 py-1">
              <span className="relative flex h-2 w-2">
                <span className="relative inline-flex h-2 w-2 rounded-full bg-msblue-400" />
              </span>
              <span className="text-[10px] font-medium text-msblue-300">Sample preview</span>
            </div>
          </div>

          {/* Sample preview banner */}
          <div className="rounded-xl border border-msblue-400/20 bg-msblue-500/5 p-3">
            <p className="text-[10px] font-semibold uppercase tracking-wide text-msblue-300">
              Sample Security Assessment Preview
            </p>
            <p className="mt-1 text-[10px] leading-relaxed text-slate-400">
              This is a sample preview of the assessment format. Actual findings are delivered in a
              client report after KollraX reviews your Microsoft 365 environment.
            </p>
          </div>

          {/* Example findings overview */}
          <div className="rounded-xl border border-white/5 bg-navy-800/60 p-3">
            <p className="text-[10px] font-medium uppercase tracking-wide text-slate-400">
              Example Findings Overview
            </p>
            <div className="mt-2 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-slate-300">Assessment scope</span>
                <span className="text-[10px] font-semibold text-msblue-400">Tailored to client</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-slate-300">Findings format</span>
                <span className="text-[10px] font-semibold text-teal-400">Clear &amp; prioritised</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-slate-300">Recommendations</span>
                <span className="text-[10px] font-semibold text-white">Practical next steps</span>
              </div>
            </div>
          </div>

          {/* Assessment categories */}
          <div className="rounded-xl border border-white/5 bg-navy-800/60 p-3">
            <p className="text-[10px] font-medium uppercase tracking-wide text-slate-400">
              Assessment Categories
            </p>
            <div className="mt-2 space-y-1.5">
              {assessmentCategories.map((cat) => {
                const status = statusConfig[cat.status];
                return (
                  <div
                    key={cat.label}
                    className="flex items-center justify-between rounded-lg border border-white/5 bg-navy-800/40 px-2.5 py-1.5 transition-colors hover:bg-navy-800/70"
                  >
                    <div className="flex items-center gap-2">
                      <cat.icon className="h-3.5 w-3.5 text-slate-400" />
                      <span className="text-[11px] text-slate-200">{cat.label}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <status.icon className={`h-3 w-3 ${status.color}`} />
                      <span className={`text-[10px] font-medium ${status.color}`}>{status.label}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Areas reviewed */}
          <div className="rounded-xl border border-white/5 bg-gradient-to-r from-navy-800/60 to-msblue-900/30 p-3">
            <p className="text-[10px] font-medium uppercase tracking-wide text-slate-400">
              Areas Reviewed May Include
            </p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {assessmentAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-md bg-white/5 px-2 py-0.5 text-[9px] font-medium text-slate-300"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* Microsoft 365 services covered */}
          <div className="flex flex-wrap items-center gap-1.5 rounded-xl border border-white/5 bg-navy-800/40 px-3 py-2.5">
            <span className="text-[9px] font-medium uppercase tracking-wider text-slate-500">
              M365 services covered:
            </span>
            {['Microsoft 365', 'Teams', 'Entra ID', 'Defender', 'SharePoint', 'OneDrive'].map((svc) => (
              <span
                key={svc}
                className="rounded-md bg-white/5 px-2 py-0.5 text-[9px] font-medium text-slate-300"
              >
                {svc}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Floating accent badge — Entra ID */}
      <div className="absolute -right-3 -top-3 hidden animate-float rounded-xl border border-white/10 bg-navy-800 px-3 py-2 shadow-card sm:block">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-msblue-500/15">
            <Users className="h-4 w-4 text-msblue-400" />
          </div>
          <div>
            <p className="text-[10px] font-semibold text-white">Entra ID</p>
            <p className="text-[8px] text-slate-400">Identity review</p>
          </div>
        </div>
      </div>

      {/* Floating bottom badge — Defender */}
      <div
        className="absolute -bottom-4 -left-4 hidden animate-float rounded-xl border border-white/10 bg-navy-800 px-3 py-2 shadow-card sm:block"
        style={{ animationDelay: '1.5s' }}
      >
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-teal-500/15">
            <ShieldCheck className="h-4 w-4 text-teal-400" />
          </div>
          <div>
            <p className="text-[10px] font-semibold text-white">Defender</p>
            <p className="text-[8px] text-slate-400">Threat review</p>
          </div>
        </div>
      </div>
    </div>
  );
}
