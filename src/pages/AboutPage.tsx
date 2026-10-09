import { useEffect } from 'react';
import AboutHero from '@/components/about/AboutHero';
import AboutWhyExists from '@/components/about/AboutWhyExists';
import AboutWhatWeDo from '@/components/about/AboutWhatWeDo';
import AboutHowWeWork from '@/components/about/AboutHowWeWork';
import AboutWhoWeWorkWith from '@/components/about/AboutWhoWeWorkWith';
import AboutSecurityPrinciples from '@/components/about/AboutSecurityPrinciples';
import AboutCTA from '@/components/about/AboutCTA';
import Footer from '@/components/Footer';

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <AboutHero />
      <AboutWhyExists />
      <AboutWhatWeDo />
      <AboutHowWeWork />
      <AboutWhoWeWorkWith />
      <AboutSecurityPrinciples />
      <AboutCTA />
      <Footer />
    </>
  );
}
