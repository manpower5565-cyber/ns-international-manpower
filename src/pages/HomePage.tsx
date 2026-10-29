import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Briefcase, 
  UserCheck, 
  CheckCircle, 
  ArrowRight, 
  Globe, 
  Users, 
  Wrench, 
  Hotel, 
  Building2, 
  Clock, 
  MapPin, 
  ChevronRight,
  ShieldCheck,
  FileCheck2,
  Sparkles
} from 'lucide-react';
import { siteConfig, servicesData, industriesData, destinationsData, type ServiceItem } from '../config/siteConfig';
import { SectionHeading } from '../components/SectionHeading';
import { RecruitmentProcess } from '../components/RecruitmentProcess';
import { FaqAccordion } from '../components/FaqAccordion';
import { TestimonialSlider } from '../components/TestimonialSlider';
import { Modal } from '../components/Modal';

export const HomePage: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // Helper icon selector for services
  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'Globe': return <Globe className="w-6 h-6 text-royal" />;
      case 'Users': return <Users className="w-6 h-6 text-royal" />;
      case 'Wrench': return <Wrench className="w-6 h-6 text-royal" />;
      case 'Hotel': return <Hotel className="w-6 h-6 text-royal" />;
      case 'Briefcase': return <Briefcase className="w-6 h-6 text-royal" />;
      case 'UserCheck': return <UserCheck className="w-6 h-6 text-royal" />;
      default: return <Briefcase className="w-6 h-6 text-royal" />;
    }
  };

  const whyChooseItems = [
    {
      title: "Requirement-Based Recruitment",
      desc: "Tailored candidate matching strictly aligned with employer operational scopes and qualification benchmarks.",
      icon: FileCheck2,
    },
    {
      title: "Candidate Screening Support",
      desc: "Comprehensive preliminary vetting, vocational skill verification, and trade credential checks.",
      icon: UserCheck,
    },
    {
      title: "Employer-Focused Coordination",
      desc: "Dedicated recruitment account management, regular candidate pipeline updates, and interview logistical support.",
      icon: Briefcase,
    },
    {
      title: "Clear Communication",
      desc: "Direct, transparent updates on visa processing, mobilization timelines, and regulatory mandates.",
      icon: ShieldCheck,
    },
    {
      title: "Industry-Specific Sourcing",
      desc: "Targeted mobilization across technical trades, civil engineering, hospitality, and institutional operations.",
      icon: Wrench,
    },
    {
      title: "Professional Recruitment Assistance",
      desc: "End-to-end guidance for both hiring managers and candidates to ensure full compliance with bilateral standards.",
      icon: Globe,
    },
  ];

  return (
    <div className="w-full">
      {/* ========================================================
          1. HERO SECTION (WordPress Corporate Recruitment Banner)
         ======================================================== */}
      <section className="relative bg-navy-950 text-white overflow-hidden py-16 md:py-24 border-b border-navy-800">
        {/* Subtle geometric background accents */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-royal-600 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-gold/20 blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Text & CTAs */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 bg-navy-900 border border-gold/40 px-3.5 py-1.5 rounded-full text-xs font-semibold text-gold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>International Manpower &amp; Overseas Placement</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight leading-[1.15]">
                Connecting Global Opportunities with Skilled Indian Talent
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
                NS International Manpower supports businesses in finding suitable workforce solutions and helps candidates explore employment opportunities through a professional recruitment process.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Link
                  to="/employer-enquiry"
                  className="btn-gold text-base font-bold uppercase tracking-wider px-7 py-3.5 shadow-lg hover:shadow-xl text-center"
                >
                  <Briefcase className="w-4 h-4 mr-2" />
                  Hire Manpower
                </Link>

                <Link
                  to="/jobs"
                  className="btn-outline-navy border-slate-300 text-white hover:bg-white hover:text-navy-900 text-base font-semibold px-6 py-3.5 text-center"
                >
                  <Users className="w-4 h-4 mr-2" />
                  Find Job Opportunities
                </Link>
              </div>

              {/* 3 Trust Indicators Below Buttons */}
              <div className="pt-6 border-t border-navy-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-royal/40 flex items-center justify-center flex-shrink-0 text-gold">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white uppercase tracking-wider">Workforce</p>
                    <p className="text-xs text-slate-400">Recruitment</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-royal/40 flex items-center justify-center flex-shrink-0 text-gold">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white uppercase tracking-wider">Industry-Focused</p>
                    <p className="text-xs text-slate-400">Staffing</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-royal/40 flex items-center justify-center flex-shrink-0 text-gold">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white uppercase tracking-wider">Employer &amp; Candidate</p>
                    <p className="text-xs text-slate-400">Support</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Authentic Recruitment Photograph */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-navy-800 group">
                <img
                  src="/images/hero-recruitment.jpg"
                  alt="International Manpower and Skilled Workforce Team"
                  className="w-full h-[400px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                
                {/* Subtle Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-navy-950/90 backdrop-blur-md p-4 rounded-xl border border-navy-700/80 text-left">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-gold uppercase tracking-wider">Registered Office</p>
                      <p className="text-sm font-bold text-white">Lalbagh, Lucknow, Uttar Pradesh</p>
                    </div>
                    <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" title="Active Office Desk"></span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          2. ABOUT US PREVIEW SECTION (Two-Column Layout)
         ======================================================== */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: About Photograph */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative">
                <div className="rounded-xl overflow-hidden shadow-wp-hover border border-slate-100">
                  <img
                    src="/images/about-recruitment.jpg"
                    alt="NS International Manpower Recruitment Screening Team"
                    className="w-full h-[420px] object-cover"
                    loading="lazy"
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-6 -right-4 sm:right-6 bg-navy-800 text-white p-4 rounded-lg shadow-xl border-2 border-gold max-w-[260px] text-left">
                  <p className="font-heading font-bold text-sm text-gold">Ethical &amp; Transparent</p>
                  <p className="text-xs text-slate-300 mt-1 leading-snug">
                    Strict adherence to destination country labor guidelines &amp; candidate welfare.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Company Introduction */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 bg-navy-50 text-royal px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                About NS International Manpower
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-navy-900 tracking-tight leading-tight">
                Your Partner in Workforce Recruitment
              </h2>

              <p className="text-slate-600 text-base leading-relaxed">
                NS International Manpower is an overseas employment and recruitment consultancy headquartered at <strong>207, Jewel Height, Lalbagh, Lucknow, Uttar Pradesh</strong>. We bridge the requirements of international employers with skilled, semi-skilled, and technical talent from India.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-royal/10 text-royal flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-900 text-sm">Recruitment Approach</h4>
                    <p className="text-xs sm:text-sm text-slate-600">Structured mapping of client job descriptions against verified candidate competencies.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-royal/10 text-royal flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-900 text-sm">Candidate Screening &amp; Coordination</h4>
                    <p className="text-xs sm:text-sm text-slate-600">Rigorous verification of trade credentials, background coordination, and trade testing assistance.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-royal/10 text-royal flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-900 text-sm">Employer-Focused Workforce Solutions</h4>
                    <p className="text-xs sm:text-sm text-slate-600">Prompt responses, mobilization updates, and documentation support for overseas enterprises.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/about"
                  className="btn-navy text-sm font-bold uppercase tracking-wider px-6 py-3"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          3. OUR SERVICES SECTION (6 Visual Cards with Icons)
         ======================================================== */}
      <section className="py-20 bg-lightGrey border-y border-slate-200">
        <div className="container-custom">
          <SectionHeading
            badge="Recruitment Solutions"
            title="Our Professional Services"
            subtitle="Providing end-to-end workforce mobilization and candidate coordination services customized for global enterprise needs."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((svc) => (
              <div
                key={svc.id}
                className="card-wp p-8 flex flex-col justify-between group hover:-translate-y-1.5 transition-all duration-300 relative border-t-4 border-royal"
              >
                <div>
                  <div className="w-14 h-14 rounded-xl bg-navy-50 flex items-center justify-center mb-6 group-hover:bg-royal group-hover:text-white transition-colors duration-200">
                    {getServiceIcon(svc.iconName)}
                  </div>

                  <h3 className="text-xl font-bold font-heading text-navy-900 mb-3 group-hover:text-royal transition-colors">
                    {svc.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {svc.shortDesc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setSelectedService(svc)}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-royal hover:text-navy-900 transition-colors cursor-pointer"
                  >
                    <span>Know More</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <Link
                    to="/employer-enquiry"
                    className="text-xs font-semibold text-slate-400 hover:text-gold transition-colors"
                  >
                    Enquire
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="btn-outline-navy text-sm font-bold uppercase tracking-wider px-8 py-3"
            >
              View Full Services Overview
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. INDUSTRIES WE SERVE (8 Visual Cards with Photos)
         ======================================================== */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionHeading
            badge="Sector Expertise"
            title="Industries We Support"
            subtitle="Potential sectors and workforce categories NS International Manpower coordinates for overseas projects."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industriesData.map((ind) => (
              <div
                key={ind.id}
                className="group relative rounded-xl overflow-hidden card-wp flex flex-col justify-between border border-slate-200"
              >
                <div className="relative h-48 overflow-hidden bg-navy-900">
                  <img
                    src={ind.image}
                    alt={ind.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent"></div>
                  
                  <span className="absolute bottom-3 left-3 bg-gold text-navy-950 font-bold text-[11px] px-2.5 py-0.5 rounded shadow-sm uppercase tracking-wider">
                    Sector
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading font-bold text-base text-navy-900 mb-2 group-hover:text-royal transition-colors">
                      {ind.title}
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed mb-4">
                      {ind.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100">
                    <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1.5">Typical Roles:</p>
                    <div className="flex flex-wrap gap-1">
                      {ind.roles.slice(0, 2).map((role, rIdx) => (
                        <span key={rIdx} className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-medium">
                          {role}
                        </span>
                      ))}
                      <span className="text-[10px] text-royal font-bold self-center ml-1">+more</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-500 text-center max-w-3xl mx-auto">
            <p>
              * Note: Industries and roles listed represent sectors where NS International Manpower provides recruitment and talent sourcing support based on employer demand, not verified exclusivity.
            </p>
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/industries"
              className="btn-navy text-sm font-bold uppercase tracking-wider px-8 py-3"
            >
              Explore All Industries &amp; Roles
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. INTERNATIONAL RECRUITMENT SECTION (Global Map & Countries)
         ======================================================== */}
      <section className="py-20 bg-navy-950 text-white relative overflow-hidden">
        <div className="container-custom relative z-10">
          <SectionHeading
            badge="Global Placement Destinations"
            title="Supporting Recruitment for Global Opportunities"
            subtitle="Facilitating ethical recruitment pathways across key international employment regions in strict accordance with bilateral emigration guidelines."
            light={true}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* World Map Graphic */}
            <div className="lg:col-span-6">
              <div className="rounded-xl overflow-hidden border-2 border-navy-700 shadow-2xl relative">
                <img
                  src="/images/overseas-network.jpg"
                  alt="Global Recruitment Network Pathways"
                  className="w-full h-[360px] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 bg-navy-900/90 backdrop-blur-md p-3.5 rounded-lg border border-navy-700 text-xs text-slate-300">
                  <p className="font-semibold text-gold">Statutory Disclaimer</p>
                  <p className="mt-0.5">Recruitment opportunities depend entirely on verified employer requirements, valid labor visas, and destination country work authorizations.</p>
                </div>
              </div>
            </div>

            {/* Destination Categories */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {destinationsData.map((dest) => (
                <div
                  key={dest.id}
                  className="bg-navy-900/80 border border-navy-800 p-5 rounded-lg hover:border-gold/50 transition-all text-left"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Globe className="w-4 h-4 text-gold flex-shrink-0" />
                    <h3 className="font-heading font-bold text-base text-white">
                      {dest.region}
                    </h3>
                  </div>

                  <p className="text-slate-300 text-xs leading-relaxed mb-3">
                    {dest.overview}
                  </p>

                  <div className="text-[11px] text-slate-400">
                    <span className="font-semibold text-slate-300">Key Sectors: </span>
                    {dest.sectors.slice(0, 2).join(", ")}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/overseas-recruitment"
              className="btn-gold text-sm font-bold uppercase tracking-wider px-8 py-3.5 shadow-lg"
            >
              Discuss Your Recruitment Requirements
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================
          6. WHY CHOOSE NS INTERNATIONAL MANPOWER?
         ======================================================== */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionHeading
            badge="Trust & Integrity"
            title="Why Choose NS International Manpower?"
            subtitle="Committed to ethical recruitment, transparent communication, and reliable workforce coordination for global partners."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="card-wp p-6 flex items-start gap-4 hover:-translate-y-1 transition-all border-l-4 border-l-gold"
                >
                  <div className="w-12 h-12 rounded-lg bg-navy-50 text-navy-800 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-royal" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-navy-900 font-heading mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          7. RECRUITMENT PROCESS (4-Step Horizontal/Vertical)
         ======================================================== */}
      <section className="py-20 bg-lightGrey border-y border-slate-200">
        <div className="container-custom">
          <SectionHeading
            badge="Structured Workflow"
            title="Our 4-Step Recruitment Process"
            subtitle="A transparent, compliant, and structured methodology ensuring both client satisfaction and candidate protection."
          />

          <RecruitmentProcess />
        </div>
      </section>

      {/* ========================================================
          8. DUAL LEAD GENERATION BANNER (Employer & Job Seeker)
         ======================================================== */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Box 1: Employers */}
            <div className="bg-gradient-to-br from-navy-900 to-navy-950 text-white rounded-2xl p-8 md:p-10 shadow-xl border border-navy-800 flex flex-col justify-between">
              <div>
                <span className="inline-block bg-gold text-navy-950 font-bold text-xs uppercase px-3 py-1 rounded-full mb-4">
                  For International Employers
                </span>
                <h3 className="text-2xl md:text-3xl font-extrabold font-heading text-white mb-3">
                  Looking for the Right Workforce for Your Business?
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Share your manpower specifications, required trade numbers, and project location with our team to discuss customized recruitment support.
                </p>
              </div>

              <div>
                <Link
                  to="/employer-enquiry"
                  className="btn-gold w-full text-center text-sm font-bold uppercase tracking-wider py-3.5 shadow-md"
                >
                  <Briefcase className="w-4 h-4 mr-2" />
                  Submit Manpower Requirement
                </Link>
              </div>
            </div>

            {/* Box 2: Job Seekers */}
            <div className="bg-gradient-to-br from-royal-900 to-navy-900 text-white rounded-2xl p-8 md:p-10 shadow-xl border border-royal-800 flex flex-col justify-between">
              <div>
                <span className="inline-block bg-white text-navy-900 font-bold text-xs uppercase px-3 py-1 rounded-full mb-4">
                  For Job Seekers
                </span>
                <h3 className="text-2xl md:text-3xl font-extrabold font-heading text-white mb-3">
                  Looking for Employment Opportunities?
                </h3>
                <p className="text-slate-200 text-sm leading-relaxed mb-6">
                  Register your professional qualifications, vocational trade experience, and CV to be considered for legitimate upcoming overseas client openings.
                </p>
              </div>

              <div>
                <Link
                  to="/candidate-registration"
                  className="inline-flex items-center justify-center font-semibold bg-white hover:bg-slate-100 text-navy-900 w-full py-3.5 rounded text-sm uppercase tracking-wider shadow-md transition-all"
                >
                  <UserCheck className="w-4 h-4 mr-2 text-royal" />
                  Register Candidate Profile
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          9. TESTIMONIALS SECTION (WordPress Slider Component)
         ======================================================== */}
      <section className="py-20 bg-lightGrey border-y border-slate-200">
        <div className="container-custom">
          <SectionHeading
            badge="Client & Partner Experience"
            title="Partnership & Placement Perspectives"
            subtitle="Demonstration feedback framework illustrating our commitment to structured recruitment delivery."
          />

          <TestimonialSlider />
        </div>
      </section>

      {/* ========================================================
          10. FREQUENTLY ASKED QUESTIONS SECTION
         ======================================================== */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionHeading
            badge="Common Inquiries"
            title="Frequently Asked Questions"
            subtitle="Find clear and transparent answers regarding our recruitment process, candidate registration, and statutory compliances."
          />

          <FaqAccordion />

          <div className="mt-12 text-center text-sm text-slate-600">
            <span>Have a specific query not covered here? </span>
            <Link to="/contact" className="text-royal font-bold hover:underline inline-flex items-center gap-1">
              Contact our Lalbagh, Lucknow office desk
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================
          11. SERVICE DETAIL MODAL (Interactive)
         ======================================================== */}
      <Modal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        title={selectedService?.title || "Service Details"}
      >
        {selectedService && (
          <div className="space-y-4 text-left">
            <p className="text-slate-600 text-sm leading-relaxed">
              {selectedService.fullDesc}
            </p>

            <div className="pt-2">
              <h4 className="text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">
                Specialized Competency Areas:
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {selectedService.categories.map((cat, i) => (
                  <li key={i} className="flex items-center gap-2 text-slate-700 bg-slate-50 p-2 rounded border border-slate-100">
                    <CheckCircle className="w-3.5 h-3.5 text-royal flex-shrink-0" />
                    <span>{cat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <Link
                to="/employer-enquiry"
                onClick={() => setSelectedService(null)}
                className="btn-gold text-xs font-bold uppercase tracking-wider px-4 py-2.5"
              >
                Submit Requirement for this Service
              </Link>
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="text-xs text-slate-500 hover:text-slate-800 font-medium"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </Modal>

    </div>
  );
};
