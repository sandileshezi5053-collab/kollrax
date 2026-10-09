import { Mail, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const footerLinks = {
  Company: ['About KollraX', 'Our Approach', 'Contact'],
  Solutions: [
    'Microsoft 365 Security',
    'Microsoft 365 Migration',
    'Identity & Access Management',
    'Teams & Collaboration',
  ],
  Services: [
    'Managed Microsoft 365 Support',
    'Microsoft 365 Optimisation',
    'Security Assessment',
    'Ongoing Management',
  ],
  Resources: ['Security Guides', 'Migration Guides', 'MFA Resources', 'Teams Best Practices'],
};

const serviceRoutes: Record<string, string> = {
  'Managed Microsoft 365 Support': '/services/managed-microsoft-365-support',
  'Microsoft 365 Security': '/services/microsoft-365-security',
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-950 border-t border-white/5">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12">
        {/* Top area — brand + link columns */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
          {/* Brand column */}
          <div className="col-span-2 lg:col-span-2">
            <div className="flex h-11 w-[8.5rem] items-center sm:h-12 sm:w-[9.5rem]">
              <img
                src="/assets/log.png"
                alt="KollraX"
                className="h-full w-full object-contain"
              />
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              Microsoft 365 Security, Management and Support for Growing Organisations.
            </p>

            {/* Social links */}
            <div className="mt-5 flex items-center gap-3">
              {[Linkedin, Twitter, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-400 transition-all duration-300 hover:border-msblue-400/30 hover:bg-msblue-500/10 hover:text-msblue-300"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                {heading}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {links.map((link) =>
                  serviceRoutes[link] ? (
                    <li key={link}>
                      <Link
                        to={serviceRoutes[link]}
                        className="text-sm text-slate-400 transition-colors duration-300 hover:text-white"
                      >
                        {link}
                      </Link>
                    </li>
                  ) : (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-slate-400 transition-colors duration-300 hover:text-white"
                      >
                        {link}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 sm:flex-row">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} KollraX. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-slate-500 transition-colors hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-slate-500 transition-colors hover:text-white">
              Terms
            </a>
            <Link to="/contact" className="text-xs text-slate-500 transition-colors hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
