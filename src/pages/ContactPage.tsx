import { useEffect } from 'react';
import Footer from '@/components/Footer';
import ContactHero from '@/components/contact/ContactHero';
import ContactOptions from '@/components/contact/ContactOptions';
import ContactForm from '@/components/contact/ContactForm';
import ContactDirect from '@/components/contact/ContactDirect';
import ContactFAQ from '@/components/contact/ContactFAQ';

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Contact KollraX | Microsoft 365 Management & Security';
    const description = 'Contact KollraX for Microsoft 365 assessments, security, identity management, migration, optimization, support, and ongoing Microsoft 365 management.';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.setAttribute('name', 'description'); document.head.appendChild(meta); }
    meta.setAttribute('content', description);
  }, []);

  return (
    <>
      <ContactHero />
      <ContactOptions />
      <ContactForm />
      <ContactDirect />
      <ContactFAQ />
      <Footer />
    </>
  );
}
