import { useEffect } from 'react';
import Footer from '@/components/Footer';
import MigrationHero from '@/components/migration/MigrationHero';
import MigrationOverview from '@/components/migration/MigrationOverview';
import MigrationProcess from '@/components/migration/MigrationProcess';
import MigrationSecurity from '@/components/migration/MigrationSecurity';
import MigrationFAQ from '@/components/migration/MigrationFAQ';
import MigrationCTA from '@/components/migration/MigrationCTA';

export default function MigrationPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Microsoft 365 Migration Services | KollraX';
    const description = 'KollraX helps organizations plan, migrate, secure, and support Microsoft 365 environments with minimal disruption. Talk to a Microsoft 365 migration specialist.';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', description);
  }, []);

  return <><MigrationHero /><MigrationOverview /><MigrationProcess /><MigrationSecurity /><MigrationFAQ /><MigrationCTA /><Footer /></>;
}
