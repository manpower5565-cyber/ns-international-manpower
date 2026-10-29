import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, CheckCircle, ArrowRight, Info } from 'lucide-react';
import { industriesData } from '../config/siteConfig';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionHeading } from '../components/SectionHeading';

export const IndustriesPage: React.FC = () => {
  return (
    <div className="w-full">
      <Breadcrumbs title="Industries We Serve" items={[{ label: "Sectors & Specializations" }]} />

      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <SectionHeading
            badge="Industry Expertise"
            title="Sectors &amp; Workforce Specializations"
            subtitle="NS International Manpower mobilizes competent, industry-trained talent across essential technical, infrastructure, service, and industrial sectors."
          />

          {/* Transparency Disclaimer */}
          <div className="mb-10 bg-slate-50 border border-slate-200 rounded-lg p-4 flex items-start gap-3 text-xs text-slate-600 max-w-4xl mx-auto">
            <Info className="w-4 h-4 text-royal flex-shrink-0 mt-0.5" />
            <p>
              <strong>Sector Scope Clarification:</strong> The industry sectors featured below represent categories in which NS International Manpower maintains sourcing networks and candidate talent pools. Placement opportunities in these domains depend upon specific overseas employer mandates and verified work visas.
            </p>
          </div>

          {/* Grid of 8 Industries */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industriesData.map((ind) => (
              <div
                key={ind.id}
                className="card-wp overflow-hidden flex flex-col justify-between group border border-slate-200"
              >
                <div>
                  <div className="relative h-52 overflow-hidden bg-navy-900">
                    <img
                      src={ind.image}
                      alt={ind.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent"></div>
                    <span className="absolute bottom-3 left-3 bg-gold text-navy-950 font-bold text-xs px-2.5 py-1 rounded shadow-sm uppercase tracking-wider">
                      Industry Profile
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="font-heading font-bold text-lg text-navy-900 mb-2 group-hover:text-royal transition-colors">
                      {ind.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                      {ind.desc}
                    </p>

                    <div className="border-t border-slate-100 pt-3">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Common Job Roles Sourced:
                      </h4>
                      <ul className="space-y-1.5 text-xs text-slate-700">
                        {ind.roles.map((role, idx) => (
                          <li key={idx} className="flex items-center gap-1.5">
                            <CheckCircle className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                            <span>{role}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    to="/employer-enquiry"
                    className="btn-outline-navy w-full text-center text-xs font-bold uppercase tracking-wider py-2.5"
                  >
                    Hire in This Sector
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-sector Coordination CTA */}
      <section className="py-16 bg-navy-900 text-white text-center border-t border-navy-800">
        <div className="container-custom max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-extrabold font-heading text-white mb-4">
            Require Staffing in Another Technical Sector?
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed mb-8">
            Our talent acquisition network across India covers specialized vocational trades, civil construction, automation, and industrial services. Submit your detailed role specifications to our recruitment team.
          </p>
          <Link to="/employer-enquiry" className="btn-gold text-sm font-bold uppercase px-8 py-3.5 shadow-lg">
            Submit Specific Manpower Demand
          </Link>
        </div>
      </section>
    </div>
  );
};
