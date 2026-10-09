import { useEffect } from 'react';
import AssessmentHero from '@/components/assessment/AssessmentHero';
import AssessmentAreas from '@/components/assessment/AssessmentAreas';
import AssessmentProcess from '@/components/assessment/AssessmentProcess';
import AssessmentDeliverables from '@/components/assessment/AssessmentDeliverables';
import AssessmentAccess from '@/components/assessment/AssessmentAccess';
import AssessmentForm from '@/components/assessment/AssessmentForm';
import AssessmentFAQ from '@/components/assessment/AssessmentFAQ';
import Footer from '@/components/Footer';

export default function AssessmentPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <AssessmentHero />
      <AssessmentAreas />
      <AssessmentProcess />
      <AssessmentDeliverables />
      <AssessmentAccess />
      <AssessmentForm />
      <AssessmentFAQ />
      <Footer />
    </>
  );
}
