import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building, 
  Target, 
  Eye, 
  ShieldCheck, 
  Users, 
  CheckCircle, 
  Briefcase, 
  ArrowRight,
  MapPin,
  Clock,
  Compass
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionHeading } from '../components/SectionHeading';

export const AboutPage: React.FC = () => {
  return (
    <div className="w-full">
      <Breadcrumbs title="About Us" items={[{ label: "Company Profile" }]} />

      {/* Main Introduction */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Column */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-wp-hover border-2 border-slate-100">
                <img
                  src="/images/about-recruitment.jpg"
                  alt="NS International Manpower Corporate Team"
                  className="w-full h-[460px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 bg-navy-900/90 backdrop-blur-md p-4 rounded-xl border border-navy-700 text-white">
                  <p className="text-xs font-semibold text-gold uppercase tracking-wider">Operational Center</p>
                  <p className="text-sm font-bold">207, Jewel Height, Lalbagh, Lucknow</p>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 bg-navy-50 text-royal px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                Company Overview
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-navy-900 tracking-tight leading-tight">
                Your Partner in Workforce Recruitment
              </h2>

              <p className="text-slate-600 text-base leading-relaxed">
                <strong>NS International Manpower</strong> is an international manpower recruitment and workforce coordination consultancy established to bridge qualified Indian professionals, vocational tradesmen, and support staff with verified overseas enterprises.
              </p>

              <p className="text-slate-600 text-sm leading-relaxed">
                Operating from our office in <strong>Lalbagh, Lucknow, Uttar Pradesh</strong>, we act as a disciplined recruitment bridge. We assist overseas employers across the Gulf, Middle East, Europe, and Asia-Pacific in fulfilling their staffing requirements through structured candidate screening, interview coordination, and documentation logistics.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-lg bg-lightGrey border border-slate-200">
                  <h4 className="font-bold text-navy-900 text-sm flex items-center gap-2 mb-1">
                    <Target className="w-4 h-4 text-royal" />
                    Our Core Objective
                  </h4>
                  <p className="text-xs text-slate-600">
                    To deliver accurate, prompt, and ethical recruitment solutions that respect employer project benchmarks while safeguarding candidate interests.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-lightGrey border border-slate-200">
                  <h4 className="font-bold text-navy-900 text-sm flex items-center gap-2 mb-1">
                    <Compass className="w-4 h-4 text-gold" />
                    Ethical Standards
                  </h4>
                  <p className="text-xs text-slate-600">
                    Strict adherence to emigration regulations, legal employment authorization, and transparent job role briefings without exaggerated promises.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link to="/employer-enquiry" className="btn-gold text-xs font-bold uppercase tracking-wider px-6 py-3">
                  Submit Manpower Demand
                </Link>
                <Link to="/contact" className="btn-outline-navy text-xs font-bold uppercase tracking-wider px-6 py-3">
                  Contact Lucknow Office
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4 Pillars of Operation */}
      <section className="py-20 bg-lightGrey border-y border-slate-200">
        <div className="container-custom">
          <SectionHeading
            badge="Methodology & Governance"
            title="Our Professional Recruitment Pillars"
            subtitle="How we structure recruitment, candidate screening, and international coordination."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card-wp p-6 border-t-4 border-royal">
              <div className="w-12 h-12 rounded-lg bg-navy-50 flex items-center justify-center text-royal mb-4">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-base text-navy-900 mb-2">Recruitment Approach</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                We begin with a thorough examination of employer job descriptions, technical trade requirements, and statutory visa prerequisites before mobilizing talent.
              </p>
            </div>

            <div className="card-wp p-6 border-t-4 border-gold">
              <div className="w-12 h-12 rounded-lg bg-navy-50 flex items-center justify-center text-gold mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-base text-navy-900 mb-2">Candidate Screening</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Multi-stage assessment verifying candidate certifications, past trade experience, medical fitness protocols, and overseas orientation readiness.
              </p>
            </div>

            <div className="card-wp p-6 border-t-4 border-royal">
              <div className="w-12 h-12 rounded-lg bg-navy-50 flex items-center justify-center text-royal mb-4">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-base text-navy-900 mb-2">Employer Solutions</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Customized workforce sourcing plans for technical projects, shutdown operations, hospitality openings, and large-scale infrastructure deployments.
              </p>
            </div>

            <div className="card-wp p-6 border-t-4 border-gold">
              <div className="w-12 h-12 rounded-lg bg-navy-50 flex items-center justify-center text-gold mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-base text-navy-900 mb-2">Clear Communication</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Direct and honest status reporting at every phase. We do not make false promises or fabricate timelines, ensuring trust on both sides.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Authenticity Statement */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <div className="p-8 rounded-2xl bg-navy-950 text-white border-2 border-gold shadow-xl">
            <div className="flex items-start gap-4">
              <ShieldCheck className="w-10 h-10 text-gold flex-shrink-0 mt-1" />
              <div className="space-y-3">
                <h3 className="text-xl font-heading font-bold text-white">
                  Our Commitment to Legal &amp; Ethical Standards
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  NS International Manpower operates strictly within statutory guidelines governing overseas recruitment. We mandate that all employer job offers be backed by verified labor approvals, legitimate work visas, and transparent employment contracts.
                </p>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Candidates are educated about destination country employment laws and medical standards (GAMCA/Wafid). We strictly forbid deceptive practices and guarantee full transparency in all communications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
