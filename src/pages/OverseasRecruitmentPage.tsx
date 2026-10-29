import React from 'react';
import { Link } from 'react-router-dom';
import { Globe2, FileText, CheckCircle2, ShieldCheck, Info, ArrowRight } from 'lucide-react';
import { destinationsData } from '../config/siteConfig';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionHeading } from '../components/SectionHeading';

export const OverseasRecruitmentPage: React.FC = () => {
  return (
    <div className="w-full">
      <Breadcrumbs title="Overseas Recruitment" items={[{ label: "Global Opportunities" }]} />

      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <SectionHeading
            badge="Global Placement Scope"
            title="Supporting Recruitment for Global Opportunities"
            subtitle="NS International Manpower facilitates recruitment pathways for Indian talent seeking verified opportunities with overseas enterprises."
          />

          {/* Banner Graphic */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-2xl border-2 border-navy-800 relative bg-navy-950">
            <img
              src="/images/overseas-network.jpg"
              alt="International Recruitment Pathways and Placement Routes"
              className="w-full h-[380px] sm:h-[440px] object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent"></div>
            
            <div className="absolute bottom-6 left-6 right-6 max-w-3xl text-left text-white">
              <span className="bg-gold text-navy-950 text-xs font-bold px-3 py-1 rounded uppercase tracking-wider mb-2 inline-block">
                International Mobility Framework
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-heading mb-2">
                Ethical, Compliant, and Documented Cross-Border Staffing
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                We coordinate candidate sourcing strictly in accordance with destination country employment standards, labor contracts, and verified consular visas.
              </p>
            </div>
          </div>

          {/* Transparency Alert */}
          <div className="mb-14 bg-amber-50 border border-amber-200 rounded-xl p-5 flex items-start gap-3.5 text-xs sm:text-sm text-amber-900 leading-relaxed">
            <Info className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-amber-950 mb-1">
                Important Compliance &amp; Regulatory Statement:
              </p>
              <p>
                International placement opportunities are strictly dependent upon genuine employer mandates, destination country immigration quotas, medical fitness clearances (GAMCA/Wafid), trade test assessments, and valid employment work permits. NS International Manpower maintains candidate coordination services from our Lucknow office and strictly does not guarantee overseas employment, tourist-to-work conversions, or visas without legitimate employer sponsorship.
              </p>
            </div>
          </div>

          {/* Regional Placement Focus Areas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {destinationsData.map((dest) => (
              <div
                key={dest.id}
                className="card-wp p-8 border-t-4 border-royal flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-navy-50 text-royal flex items-center justify-center">
                      <Globe2 className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-navy-900 font-heading">
                      {dest.region}
                    </h3>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {dest.overview}
                  </p>

                  <div className="space-y-2 mb-4 bg-slate-50 p-4 rounded-lg border border-slate-100">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-navy-800">
                      Primary Sector Demands:
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-700">
                      {dest.sectors.map((s, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 italic">
                  <strong>Prerequisites:</strong> {dest.notes}
                </div>
              </div>
            ))}
          </div>

          {/* Standard Overseas Placement Checklist */}
          <div className="p-8 rounded-2xl bg-lightGrey border border-slate-200">
            <h3 className="text-xl font-heading font-bold text-navy-900 mb-4 text-center">
              Mandatory Prerequisites for Overseas Deployment
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
              <div className="p-4 bg-white rounded-lg border border-slate-200">
                <FileText className="w-5 h-5 text-royal mb-2" />
                <h4 className="font-bold text-navy-900 text-sm mb-1">Valid Passport</h4>
                <p className="text-xs text-slate-600">Must hold minimum 6 to 8 months validity with sufficient blank visa leaves.</p>
              </div>

              <div className="p-4 bg-white rounded-lg border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-gold mb-2" />
                <h4 className="font-bold text-navy-900 text-sm mb-1">Trade Credentials</h4>
                <p className="text-xs text-slate-600">Verified educational degrees, ITI trade certificates, or authentic experience letters.</p>
              </div>

              <div className="p-4 bg-white rounded-lg border border-slate-200">
                <ShieldCheck className="w-5 h-5 text-royal mb-2" />
                <h4 className="font-bold text-navy-900 text-sm mb-1">Medical Clearance</h4>
                <p className="text-xs text-slate-600">Approved fitness screening from authorized centers (such as GAMCA/Wafid medical panels).</p>
              </div>

              <div className="p-4 bg-white rounded-lg border border-slate-200">
                <Globe2 className="w-5 h-5 text-gold mb-2" />
                <h4 className="font-bold text-navy-900 text-sm mb-1">Legal Work Visa</h4>
                <p className="text-xs text-slate-600">Formal employment visa processed with destination labor ministries and consulates.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/employer-enquiry"
              className="btn-gold text-sm font-bold uppercase tracking-wider px-8 py-3.5 shadow-lg"
            >
              Discuss Your Recruitment Requirements
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
