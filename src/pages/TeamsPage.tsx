import { useEffect } from 'react';
import Footer from '@/components/Footer';
import TeamsHero from '@/components/teams/TeamsHero';
import TeamsFoundation from '@/components/teams/TeamsFoundation';
import TeamsGovernance from '@/components/teams/TeamsGovernance';
import TeamsCollaboration from '@/components/teams/TeamsCollaboration';
import TeamsProcess from '@/components/teams/TeamsProcess';
import TeamsFAQ from '@/components/teams/TeamsFAQ';
import TeamsCTA from '@/components/teams/TeamsCTA';

export default function TeamsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Microsoft Teams Collaboration Services | KollraX';
    const description = 'KollraX helps organizations configure, secure, govern, and optimize Microsoft Teams for communication, meetings, collaboration, file sharing, and modern work.';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.setAttribute('name', 'description'); document.head.appendChild(meta); }
    meta.setAttribute('content', description);
  }, []);

  return (
    <>
      <TeamsHero />
      <TeamsFoundation />
      <TeamsGovernance />
      <TeamsCollaboration />
      <TeamsProcess />
      <TeamsFAQ />
      <TeamsCTA />
      <Footer />
    </>
  );
}
