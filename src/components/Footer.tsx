import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Mail, 
  Phone, 
  MessageCircle, 
  Clock, 
  ArrowRight,
  ShieldCheck,
  Globe2,
  ExternalLink
} from 'lucide-react';
import { siteConfig, servicesData } from '../config/siteConfig';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-950 text-slate-300 pt-16 pb-8 border-t-4 border-gold">
      <div className="container-custom">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-navy-800">
          
          {/* Column 1: Company Profile */}
          <div className="space-y-4">
            <Logo variant="light" />
            
            <p className="text-slate-300 text-sm leading-relaxed mt-3">
              NS International Manpower is an international workforce placement and overseas employment consultancy based in Lucknow, India. We bridge the gap between global enterprise requirements and qualified Indian trade professionals.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center transition-colors shadow-sm"
                title="Chat on WhatsApp"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
              </a>

              {siteConfig.social.linkedin && (
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-navy-800 hover:bg-royal text-white flex items-center justify-center transition-colors"
                  title="LinkedIn"
                  aria-label="LinkedIn"
                >
                  <span className="font-bold text-xs">in</span>
                </a>
              )}

              {siteConfig.social.facebook && (
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-navy-800 hover:bg-royal text-white flex items-center justify-center transition-colors"
                  title="Facebook"
                  aria-label="Facebook"
                >
                  <span className="font-bold text-xs">f</span>
                </a>
              )}
            </div>

            <div className="pt-3">
              <div className="inline-flex items-center gap-2 text-xs bg-navy-900 px-3 py-1.5 rounded border border-navy-700/60 text-slate-400">
                <ShieldCheck className="w-4 h-4 text-gold flex-shrink-0" />
                <span>Ethical &amp; Transparent Recruitment</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white text-base font-bold font-heading uppercase tracking-wider border-b border-navy-800 pb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold"></span>
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-gold transition-colors inline-flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-gold/70" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gold transition-colors inline-flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-gold/70" />
                  About Our Agency
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gold transition-colors inline-flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-gold/70" />
                  Recruitment Services
                </Link>
              </li>
              <li>
                <Link to="/industries" className="hover:text-gold transition-colors inline-flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-gold/70" />
                  Industries We Serve
                </Link>
              </li>
              <li>
                <Link to="/overseas-recruitment" className="hover:text-gold transition-colors inline-flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-gold/70" />
                  Overseas Recruitment
                </Link>
              </li>
              <li>
                <Link to="/jobs" className="hover:text-gold transition-colors inline-flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-gold/70" />
                  Jobs &amp; Opportunities
                </Link>
              </li>
              <li>
                <Link to="/employer-enquiry" className="hover:text-gold transition-colors inline-flex items-center gap-1.5 text-gold font-semibold">
                  <ArrowRight className="w-3.5 h-3.5 text-gold" />
                  Employer Enquiry Form
                </Link>
              </li>
              <li>
                <Link to="/candidate-registration" className="hover:text-gold transition-colors inline-flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-gold/70" />
                  Candidate Registration
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gold transition-colors inline-flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-gold/70" />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Recruitment Services */}
          <div className="space-y-4">
            <h4 className="text-white text-base font-bold font-heading uppercase tracking-wider border-b border-navy-800 pb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold"></span>
              Recruitment Areas
            </h4>
            <ul className="space-y-2.5 text-sm">
              {servicesData.map((svc) => (
                <li key={svc.id}>
                  <Link to="/services" className="hover:text-gold transition-colors inline-flex items-center gap-1.5">
                    <ArrowRight className="w-3.5 h-3.5 text-gold/70" />
                    <span>{svc.title}</span>
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  to="/employer-enquiry"
                  className="inline-flex items-center gap-1 text-xs text-gold hover:underline font-semibold"
                >
                  <span>Submit Manpower Demand</span>
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Official Contact & Address */}
          <div className="space-y-4">
            <h4 className="text-white text-base font-bold font-heading uppercase tracking-wider border-b border-navy-800 pb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold"></span>
              Official Address
            </h4>
            
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <p className="text-slate-300 leading-snug">
                  {siteConfig.address.full}
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <a 
                  href={`mailto:${siteConfig.contact.email}`} 
                  className="hover:text-gold transition-colors text-slate-300"
                >
                  {siteConfig.contact.email}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <a 
                  href={`tel:${siteConfig.contact.phoneRaw}`} 
                  className="hover:text-gold transition-colors text-slate-300 font-medium"
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-slate-400 text-xs">
                  {siteConfig.contact.businessHours}
                </span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={siteConfig.contact.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold hover:underline bg-navy-900 px-3 py-2 rounded border border-navy-700/80"
              >
                <Globe2 className="w-3.5 h-3.5" />
                Get Driving Directions (Google Maps)
              </a>
            </div>
          </div>
        </div>

        {/* Regulatory & Ethical Disclaimer Note */}
        <div className="my-6 p-4 rounded-lg bg-navy-900/80 border border-navy-800 text-xs text-slate-400 leading-relaxed">
          <p>
            <strong className="text-slate-200">Legal &amp; Regulatory Transparency Notice:</strong> NS International Manpower operates as a recruitment and manpower sourcing consultancy. Overseas deployment opportunities are strictly contingent upon verified employer requirements, valid bilateral labor quotas, genuine employment visas, applicant qualifications, trade assessment outcomes, and destination country emigration clearances. We strictly do not guarantee visas, placements, or travel documents without proper employer sponsorship and legal authorization.
          </p>
        </div>

        {/* Bottom Bar: Copyright & Legal Policy Links */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p className="text-center md:text-left">
            &copy; 2026 NS International Manpower. All rights reserved.
          </p>

          <div className="flex items-center flex-wrap justify-center gap-4 sm:gap-6">
            <Link to="/privacy-policy" className="hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <span className="text-navy-700">|</span>
            <Link to="/terms" className="hover:text-gold transition-colors">
              Terms &amp; Conditions
            </Link>
            <span className="text-navy-700">|</span>
            <Link to="/disclaimer" className="hover:text-gold transition-colors">
              Disclaimer
            </Link>
            <span className="text-navy-700">|</span>
            <a 
              href="https://nsinternationalmanpower.online" 
              className="text-slate-500 hover:text-slate-300 transition-colors"
            >
              nsinternationalmanpower.online
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
