import { useEffect } from 'react';
import SpecialistHero from '@/components/specialist/SpecialistHero';
import SpecialistHelpWith from '@/components/specialist/SpecialistHelpWith';
import SpecialistWhoFor from '@/components/specialist/SpecialistWhoFor';
import SpecialistForm from '@/components/specialist/SpecialistForm';
import SpecialistExpectations from '@/components/specialist/SpecialistExpectations';
import SpecialistTrust from '@/components/specialist/SpecialistTrust';
import Footer from '@/components/Footer';

export default function SpecialistPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SpecialistHero />
      <SpecialistHelpWith />
      <SpecialistWhoFor />
      <SpecialistForm />
      <SpecialistExpectations />
      <SpecialistTrust />
      <Footer />
    </>
  );
}
