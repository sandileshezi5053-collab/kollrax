import { useEffect } from 'react';
import ManagedSupportHero from '@/components/managed-support/ManagedSupportHero';
import ManagedSupportChallenges from '@/components/managed-support/ManagedSupportChallenges';
import ManagedSupportIncludes from '@/components/managed-support/ManagedSupportIncludes';
import ManagedSupportValue from '@/components/managed-support/ManagedSupportValue';
import ManagedSupportProcess from '@/components/managed-support/ManagedSupportProcess';
import ManagedSupportAudience from '@/components/managed-support/ManagedSupportAudience';
import ManagedSupportDifferentiation from '@/components/managed-support/ManagedSupportDifferentiation';
import ManagedSupportCTA from '@/components/managed-support/ManagedSupportCTA';
import Footer from '@/components/Footer';

export default function ManagedSupportPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ManagedSupportHero />
      <ManagedSupportChallenges />
      <ManagedSupportIncludes />
      <ManagedSupportValue />
      <ManagedSupportProcess />
      <ManagedSupportAudience />
      <ManagedSupportDifferentiation />
      <ManagedSupportCTA />
      <Footer />
    </>
  );
}
