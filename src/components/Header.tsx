import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Menu, 
  X, 
  MessageCircle, 
  ChevronRight,
  Briefcase,
  UserPlus
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { Logo } from './Logo';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Handle sticky header scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Our Services', path: '/services' },
    { label: 'Industries', path: '/industries' },
    { label: 'Overseas Recruitment', path: '/overseas-recruitment' },
    { label: 'Jobs', path: '/jobs' },
    { label: 'Contact Us', path: '/contact' },
  ];

  return (
    <header className="w-full relative z-50">
      {/* 1. Slim Top Information Bar (Classic WordPress corporate bar) */}
      <div className="bg-navy-950 text-slate-300 text-xs border-b border-navy-700/60 py-2 transition-all">
        <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-2">
          {/* Left: Location & Hours */}
          <div className="flex items-center flex-wrap gap-4 text-center md:text-left justify-center md:justify-start">
            <span className="inline-flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-gold flex-shrink-0" />
              <span>Lucknow, Uttar Pradesh, India</span>
            </span>
            <span className="hidden sm:inline-block text-slate-600">|</span>
            <span className="hidden sm:inline-block text-slate-400">
              {siteConfig.contact.businessHours}
            </span>
          </div>

          {/* Right: Email, Phone, WhatsApp */}
          <div className="flex items-center flex-wrap gap-4 justify-center md:justify-end">
            <a 
              href={`mailto:${siteConfig.contact.email}`} 
              className="inline-flex items-center gap-1.5 hover:text-gold transition-colors"
              title="Official Recruitment Desk Email"
            >
              <Mail className="w-3.5 h-3.5 text-gold flex-shrink-0" />
              <span>{siteConfig.contact.email}</span>
            </a>
            <span className="text-slate-600">|</span>
            <a 
              href={`tel:${siteConfig.contact.phoneRaw}`} 
              className="inline-flex items-center gap-1.5 hover:text-gold font-medium transition-colors"
              title="Official Inquiries"
            >
              <Phone className="w-3.5 h-3.5 text-gold flex-shrink-0" />
              <span>{siteConfig.contact.phoneDisplay}</span>
            </a>
            <span className="text-slate-600">|</span>
            <a 
              href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=Hello%20NS%20International%20Manpower%2C%20I%20would%20like%20to%20enquire%20about%20recruitment%20services.`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span className="hidden sm:inline">WhatsApp Enquiry</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Sticky Header Bar */}
      <div className={`w-full bg-white transition-all duration-300 border-b border-slate-100 ${
        isScrolled ? 'sticky top-0 shadow-md py-2.5' : 'py-3.5'
      }`}>
        <div className="container-custom flex items-center justify-between">
          {/* Brand Logo */}
          <Logo />

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-semibold transition-colors duration-150 relative py-1 ${
                    isActive
                      ? 'text-royal font-bold after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-royal'
                      : 'text-darkText hover:text-royal'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Right Action: Hire Manpower CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/employer-enquiry"
              className="btn-gold text-sm font-bold tracking-wide uppercase px-5 py-2.5 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              <Briefcase className="w-4 h-4 mr-2" />
              Hire Manpower
            </Link>
          </div>

          {/* Mobile Menu Hamburger Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              to="/employer-enquiry"
              className="bg-gold hover:bg-gold-500 text-navy-950 text-xs font-bold px-3 py-2 rounded shadow-sm"
            >
              Hire Now
            </Link>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-navy-800 hover:text-royal hover:bg-slate-100 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* 3. Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[102px] z-40 bg-navy-950/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white border-b border-slate-200 shadow-xl max-h-[85vh] overflow-y-auto p-5">
            <div className="flex flex-col divide-y divide-slate-100">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `py-3 px-2 text-base font-semibold flex items-center justify-between ${
                      isActive ? 'text-royal bg-royal-50/50 rounded' : 'text-slate-800'
                    }`
                  }
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </NavLink>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-slate-200 flex flex-col gap-3">
              <Link
                to="/employer-enquiry"
                className="btn-gold w-full text-center text-sm font-bold uppercase py-3 shadow"
              >
                <Briefcase className="w-4 h-4 mr-2" />
                Hire Manpower (Employer Enquiry)
              </Link>
              <Link
                to="/candidate-registration"
                className="btn-outline-navy w-full text-center text-sm font-semibold py-2.5"
              >
                <UserPlus className="w-4 h-4 mr-2" />
                Candidate Registration
              </Link>
            </div>

            <div className="mt-5 pt-4 text-xs text-slate-500 border-t border-slate-100 space-y-1">
              <p className="font-semibold text-slate-700">Official Office Address:</p>
              <p>{siteConfig.address.full}</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
