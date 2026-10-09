import { useEffect } from 'react';
import Footer from '@/components/Footer';
import IAMHero from '@/components/iam/IAMHero';
import IAMFoundation from '@/components/iam/IAMFoundation';
import IAMControls from '@/components/iam/IAMControls';
import IAMProcess from '@/components/iam/IAMProcess';
import IAMFAQ from '@/components/iam/IAMFAQ';
import IAMCTA from '@/components/iam/IAMCTA';

export default function IAMPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Identity & Access Management | Microsoft 365 | KollraX';
    const description = 'KollraX helps organizations strengthen Microsoft 365 identity security with Microsoft Entra ID, MFA, Conditional Access, privileged access controls, and access management.';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.setAttribute('name', 'description'); document.head.appendChild(meta); }
    meta.setAttribute('content', description);
  }, []);

  return <><IAMHero /><IAMFoundation /><IAMControls /><IAMProcess /><IAMFAQ /><IAMCTA /><Footer /></>;
}
