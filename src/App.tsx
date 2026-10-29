import React, { useEffect } from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { OverseasRecruitmentPage } from './pages/OverseasRecruitmentPage';
import { JobsPage } from './pages/JobsPage';
import { EmployerEnquiryPage } from './pages/EmployerEnquiryPage';
import { CandidateRegistrationPage } from './pages/CandidateRegistrationPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { DisclaimerPage } from './pages/DisclaimerPage';
import { Home } from 'lucide-react';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' as ScrollBehavior,
    });
  }, [pathname]);

  return null;
}

// 404 Not Found Page Component
function NotFoundPage() {
  return (
    <div className="py-24 px-4 text-center">
      <div className="container-custom max-w-xl card-wp p-10 mx-auto">
        <h1 className="text-4xl font-extrabold text-navy-900 font-heading mb-2">404</h1>
        <h2 className="text-xl font-bold text-slate-700 mb-4">Page Not Found</h2>
        <p className="text-sm text-slate-500 mb-6">
          The requested page could not be located. Please check the address or return to the NS International Manpower homepage.
        </p>
        <Link to="/" className="btn-gold text-xs font-bold uppercase tracking-wider px-6 py-3 inline-flex items-center gap-2">
          <Home className="w-4 h-4" />
          <span>Return to Homepage</span>
        </Link>
      </div>
    </div>
  );
}

export function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-darkText font-body">
      <ScrollToTop />
      
      {/* Global Corporate Header */}
      <Header />

      {/* Main Page Content */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/overseas-recruitment" element={<OverseasRecruitmentPage />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/employer-enquiry" element={<EmployerEnquiryPage />} />
          <Route path="/candidate-registration" element={<CandidateRegistrationPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/disclaimer" element={<DisclaimerPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      {/* Global Corporate Footer */}
      <Footer />

      {/* Floating WhatsApp Action Widget */}
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
