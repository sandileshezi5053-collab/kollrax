import { Routes, Route } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Seo from '@/components/Seo';
import HomePage from '@/pages/HomePage';
import ManagedSupportPage from '@/pages/ManagedSupportPage';
import SecurityServicesPage from '@/pages/SecurityServicesPage';
import AboutPage from '@/pages/AboutPage';
import AssessmentPage from '@/pages/AssessmentPage';
import SpecialistPage from '@/pages/SpecialistPage';
import PlaceholderPage from '@/pages/PlaceholderPage';
import MigrationPage from '@/pages/MigrationPage';
import IAMPage from '@/pages/IAMPage';
import TeamsPage from '@/pages/TeamsPage';
import OptimisationPage from '@/pages/OptimisationPage';
import ApproachPage from '@/pages/ApproachPage';
import ContactPage from '@/pages/ContactPage';

function App() {
  return (
    <div className="min-h-screen bg-navy-950">
      <Seo />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services/managed-microsoft-365-support" element={<ManagedSupportPage />} />
        <Route path="/services/microsoft-365-security" element={<SecurityServicesPage />} />
        <Route path="/services/microsoft-365-migration" element={<MigrationPage />} />
        <Route path="/microsoft-365-migration" element={<MigrationPage />} />
        <Route path="/services/identity-access-management" element={<IAMPage />} />
        <Route path="/identity-access-management" element={<IAMPage />} />
        <Route path="/services/microsoft-teams-collaboration" element={<TeamsPage />} />
        <Route path="/microsoft-teams-collaboration" element={<TeamsPage />} />
        <Route path="/services/microsoft-365-optimisation" element={<OptimisationPage />} />
        <Route path="/microsoft-365-optimisation" element={<OptimisationPage />} />
        <Route path="/services/microsoft-365-assessment" element={<AssessmentPage />} />
        <Route path="/resources/security-guides" element={<PlaceholderPage />} />
        <Route path="/resources/migration-guides" element={<PlaceholderPage />} />
        <Route path="/resources/mfa-resources" element={<PlaceholderPage />} />
        <Route path="/resources/teams-best-practices" element={<PlaceholderPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/our-approach" element={<ApproachPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/microsoft-365-assessment" element={<AssessmentPage />} />
        <Route path="/talk-to-microsoft-365-specialist" element={<SpecialistPage />} />
        <Route path="/pricing" element={<PlaceholderPage />} />
        <Route path="*" element={<PlaceholderPage />} />
      </Routes>
    </div>
  );
}

export default App;
