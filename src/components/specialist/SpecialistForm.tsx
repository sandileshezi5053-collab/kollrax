import { useState, type FormEvent } from 'react';
import { CheckCircle, Send, AlertCircle } from 'lucide-react';

const helpOptions = [
  'Microsoft 365 Administration',
  'Exchange Online',
  'Teams',
  'SharePoint',
  'OneDrive',
  'Entra ID / Identity',
  'Security',
  'Migration',
  'Licensing',
  'Troubleshooting',
  'Other',
];

const contactMethods = ['Email', 'Phone', 'WhatsApp', 'Microsoft Teams'];

interface FormData {
  fullName: string;
  workEmail: string;
  companyName: string;
  jobTitle: string;
  phone: string;
  userCount: string;
  helpWith: string;
  description: string;
  contactMethod: string;
  contactTime: string;
  additionalInfo: string;
}

const initialForm: FormData = {
  fullName: '',
  workEmail: '',
  companyName: '',
  jobTitle: '',
  phone: '',
  userCount: '',
  helpWith: '',
  description: '',
  contactMethod: '',
  contactTime: '',
  additionalInfo: '',
};

export default function SpecialistForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const update = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormData, string>> = {};
    if (!form.fullName.trim()) next.fullName = 'Please enter your full name.';
    if (!form.workEmail.trim()) {
      next.workEmail = 'Please enter your work email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.workEmail)) {
      next.workEmail = 'Please enter a valid email address.';
    }
    if (!form.companyName.trim()) next.companyName = 'Please enter your company name.';
    if (!form.helpWith) next.helpWith = 'Please select what you need help with.';
    if (!form.description.trim()) next.description = 'Please briefly describe the issue or requirement.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const inputBase =
    'w-full rounded-xl border bg-white px-4 py-3 text-base text-navy-900 placeholder-slate-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-msblue-400/40 sm:text-sm';
  const inputOk = 'border-slate-200 focus:border-msblue-400';
  const inputErr = 'border-red-400 focus:border-red-500 focus:ring-red-400/30';

  if (submitted) {
    return (
      <section id="consultation-form" className="relative overflow-hidden bg-slate-50">
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

        <div className="relative mx-auto max-w-2xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-card sm:p-10">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-teal-50">
              <CheckCircle className="h-8 w-8 text-teal-500" />
            </div>
            <h2 className="mt-6 text-2xl font-bold text-navy-900">Thanks for Contacting KollraX</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Your request has been received. We'll review the information provided and get back to
              you regarding the next step.
            </p>
            <button
              onClick={() => {
                setForm(initialForm);
                setSubmitted(false);
              }}
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-navy-900 transition-colors duration-200 hover:border-msblue-200 hover:bg-msblue-50"
            >
              Submit Another Request
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="consultation-form" className="relative overflow-hidden bg-slate-50">
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

      <div className="relative mx-auto max-w-3xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-msblue-200 bg-msblue-50 px-3.5 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-msblue-700">
              Consultation Form
            </span>
          </div>

          <h2 className="mt-5 text-3xl font-bold leading-[1.15] tracking-tight text-navy-900 sm:text-4xl">
            Tell Us What You{' '}
            <span className="bg-gradient-to-r from-msblue-600 to-teal-500 bg-clip-text text-transparent">
              Need Help With
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-600">
            Fill in the form below and a KollraX specialist will get back to you.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="mt-12 space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-card sm:p-8"
        >
          {/* Name + Email */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="fullName" className="block text-sm font-semibold text-navy-900">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                id="fullName"
                type="text"
                value={form.fullName}
                onChange={(e) => update('fullName', e.target.value)}
                placeholder="Jane Smith"
                className={`mt-2 ${inputBase} ${errors.fullName ? inputErr : inputOk}`}
                aria-invalid={!!errors.fullName}
              />
              {errors.fullName && (
                <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-500">
                  <AlertCircle className="h-3.5 w-3.5" />
                  {errors.fullName}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="workEmail" className="block text-sm font-semibold text-navy-900">
                Work Email <span className="text-red-500">*</span>
              </label>
              <input
                id="workEmail"
                type="email"
                value={form.workEmail}
                onChange={(e) => update('workEmail', e.target.value)}
                placeholder="jane@company.com"
                className={`mt-2 ${inputBase} ${errors.workEmail ? inputErr : inputOk}`}
                aria-invalid={!!errors.workEmail}
              />
              {errors.workEmail && (
                <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-500">
                  <AlertCircle className="h-3.5 w-3.5" />
                  {errors.workEmail}
                </p>
              )}
            </div>
          </div>

          {/* Company + Job Title */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="companyName" className="block text-sm font-semibold text-navy-900">
                Company Name <span className="text-red-500">*</span>
              </label>
              <input
                id="companyName"
                type="text"
                value={form.companyName}
                onChange={(e) => update('companyName', e.target.value)}
                placeholder="Company Ltd"
                className={`mt-2 ${inputBase} ${errors.companyName ? inputErr : inputOk}`}
                aria-invalid={!!errors.companyName}
              />
              {errors.companyName && (
                <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-500">
                  <AlertCircle className="h-3.5 w-3.5" />
                  {errors.companyName}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="jobTitle" className="block text-sm font-semibold text-navy-900">
                Job Title
              </label>
              <input
                id="jobTitle"
                type="text"
                value={form.jobTitle}
                onChange={(e) => update('jobTitle', e.target.value)}
                placeholder="IT Manager"
                className={`mt-2 ${inputBase} ${inputOk}`}
              />
            </div>
          </div>

          {/* Phone + User Count */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-navy-900">
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                value={form.phone}
                onChange={(e) => update('phone', e.target.value)}
                placeholder="+44 1234 567890"
                className={`mt-2 ${inputBase} ${inputOk}`}
              />
            </div>
            <div>
              <label htmlFor="userCount" className="block text-sm font-semibold text-navy-900">
                Number of Microsoft 365 Users
              </label>
              <input
                id="userCount"
                type="text"
                value={form.userCount}
                onChange={(e) => update('userCount', e.target.value)}
                placeholder="e.g. 50"
                className={`mt-2 ${inputBase} ${inputOk}`}
              />
            </div>
          </div>

          {/* Help With */}
          <div>
            <label htmlFor="helpWith" className="block text-sm font-semibold text-navy-900">
              What do you need help with? <span className="text-red-500">*</span>
            </label>
            <select
              id="helpWith"
              value={form.helpWith}
              onChange={(e) => update('helpWith', e.target.value)}
              className={`mt-2 ${inputBase} ${errors.helpWith ? inputErr : inputOk}`}
              aria-invalid={!!errors.helpWith}
            >
              <option value="">Select...</option>
              {helpOptions.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
            {errors.helpWith && (
              <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-500">
                <AlertCircle className="h-3.5 w-3.5" />
                {errors.helpWith}
              </p>
            )}
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-semibold text-navy-900">
              Briefly describe the issue or requirement <span className="text-red-500">*</span>
            </label>
            <textarea
              id="description"
              value={form.description}
              onChange={(e) => update('description', e.target.value)}
              rows={4}
              placeholder="Tell us about the challenge or what you need support with..."
              className={`mt-2 ${inputBase} ${errors.description ? inputErr : inputOk} resize-none`}
              aria-invalid={!!errors.description}
            />
            {errors.description && (
              <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-500">
                <AlertCircle className="h-3.5 w-3.5" />
                {errors.description}
              </p>
            )}
          </div>

          {/* Contact Method + Time */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="contactMethod" className="block text-sm font-semibold text-navy-900">
                Preferred Contact Method
              </label>
              <select
                id="contactMethod"
                value={form.contactMethod}
                onChange={(e) => update('contactMethod', e.target.value)}
                className={`mt-2 ${inputBase} ${inputOk}`}
              >
                <option value="">Select...</option>
                {contactMethods.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="contactTime" className="block text-sm font-semibold text-navy-900">
                Preferred Contact Time
              </label>
              <input
                id="contactTime"
                type="text"
                value={form.contactTime}
                onChange={(e) => update('contactTime', e.target.value)}
                placeholder="e.g. Weekday mornings"
                className={`mt-2 ${inputBase} ${inputOk}`}
              />
            </div>
          </div>

          {/* Additional Info */}
          <div>
            <label htmlFor="additionalInfo" className="block text-sm font-semibold text-navy-900">
              Additional Information
            </label>
            <textarea
              id="additionalInfo"
              value={form.additionalInfo}
              onChange={(e) => update('additionalInfo', e.target.value)}
              rows={3}
              placeholder="Anything else that might be relevant..."
              className={`mt-2 ${inputBase} ${inputOk} resize-none`}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-msblue-500 to-msblue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition-all duration-300 hover:from-msblue-400 hover:to-msblue-500 hover:shadow-[0_8px_32px_-4px_rgba(51,115,255,0.5)] focus:outline-none focus:ring-2 focus:ring-msblue-400/50 focus:ring-offset-2 focus:ring-offset-white sm:w-auto"
          >
            Talk to a Specialist
            <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </form>
      </div>
    </section>
  );
}
