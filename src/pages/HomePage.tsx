import Hero from '@/components/Hero';
import Problems from '@/components/Problems';
import Solutions from '@/components/Solutions';
import SecurityAssessment from '@/components/SecurityAssessment';
import HowWeWork from '@/components/HowWeWork';
import ManagedSupport from '@/components/ManagedSupport';
import WhyKollrax from '@/components/WhyKollrax';
import CustomerProof from '@/components/CustomerProof';
import Resources from '@/components/Resources';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Problems />
      <Solutions />
      <SecurityAssessment />
      <HowWeWork />
      <ManagedSupport />
      <WhyKollrax />
      <CustomerProof />
      <Resources />
      <FinalCTA />
      <Footer />
    </>
  );
}
