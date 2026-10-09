import { useEffect } from 'react';
import SecurityHero from '@/components/security/SecurityHero';
import SecurityChallenges from '@/components/security/SecurityChallenges';
import SecurityServices from '@/components/security/SecurityServices';
import SecurityReviewAreas from '@/components/security/SecurityReviewAreas';
import SecurityProcess from '@/components/security/SecurityProcess';
import SecurityWhyKollrax from '@/components/security/SecurityWhyKollrax';
import SecurityAudience from '@/components/security/SecurityAudience';
import SecurityCTA from '@/components/security/SecurityCTA';
import Footer from '@/components/Footer';

export default function SecurityServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SecurityHero />
      <SecurityChallenges />
      <SecurityServices />
      <SecurityReviewAreas />
      <SecurityProcess />
      <SecurityWhyKollrax />
      <SecurityAudience />
      <SecurityCTA />
      <Footer />
    </>
  );
}
