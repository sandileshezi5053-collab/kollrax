import { useEffect } from 'react';
import Footer from '@/components/Footer';
import ApproachHero from '@/components/approach/ApproachHero';
import ApproachPhilosophy from '@/components/approach/ApproachPhilosophy';
import ApproachProcess from '@/components/approach/ApproachProcess';
import ApproachSecurity from '@/components/approach/ApproachSecurity';
import ApproachEngagement from '@/components/approach/ApproachEngagement';
import ApproachFAQ from '@/components/approach/ApproachFAQ';
import ApproachCTA from '@/components/approach/ApproachCTA';

export default function ApproachPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Our Approach to Microsoft 365 Management & Security | KollraX';
    const description = 'Discover how KollraX assesses, secures, manages, and optimizes Microsoft 365 through a structured, transparent approach designed around your business.';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.setAttribute('name', 'description'); document.head.appendChild(meta); }
    meta.setAttribute('content', description);
  }, []);

  return (
    <>
      <ApproachHero />
      <ApproachPhilosophy />
      <ApproachProcess />
      <ApproachSecurity />
      <ApproachEngagement />
      <ApproachFAQ />
      <ApproachCTA />
      <Footer />
    </>
  );
}
