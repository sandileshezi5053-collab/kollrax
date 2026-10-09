import { useEffect } from 'react';
import Footer from '@/components/Footer';
import OptimisationHero from '@/components/optimisation/OptimisationHero';
import OptimisationFoundation from '@/components/optimisation/OptimisationFoundation';
import OptimisationLicensing from '@/components/optimisation/OptimisationLicensing';
import OptimisationProcess from '@/components/optimisation/OptimisationProcess';
import OptimisationFAQ from '@/components/optimisation/OptimisationFAQ';
import OptimisationCTA from '@/components/optimisation/OptimisationCTA';

export default function OptimisationPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Microsoft 365 Optimisation Services | KollraX';
    const description = 'KollraX helps organizations optimize Microsoft 365 licensing, security, identity, collaboration, governance, and administration while working alongside existing IT teams.';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.setAttribute('name', 'description'); document.head.appendChild(meta); }
    meta.setAttribute('content', description);
  }, []);

  return (
    <>
      <OptimisationHero />
      <OptimisationFoundation />
      <OptimisationLicensing />
      <OptimisationProcess />
      <OptimisationFAQ />
      <OptimisationCTA />
      <Footer />
    </>
  );
}
