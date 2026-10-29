import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  Users, 
  Wrench, 
  Hotel, 
  Briefcase, 
  UserCheck, 
  CheckCircle, 
  ArrowRight,
  ShieldAlert,
  ChevronRight
} from 'lucide-react';
import { servicesData, type ServiceItem } from '../config/siteConfig';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionHeading } from '../components/SectionHeading';
import { Modal } from '../components/Modal';

export const ServicesPage: React.FC = () => {
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'Globe': return <Globe className="w-8 h-8 text-royal" />;
      case 'Users': return <Users className="w-8 h-8 text-royal" />;
      case 'Wrench': return <Wrench className="w-8 h-8 text-royal" />;
      case 'Hotel': return <Hotel className="w-8 h-8 text-royal" />;
      case 'Briefcase': return <Briefcase className="w-8 h-8 text-royal" />;
      case 'UserCheck': return <UserCheck className="w-8 h-8 text-royal" />;
      default: return <Briefcase className="w-8 h-8 text-royal" />;
    }
  };

  return (
    <div className="w-full">
      <Breadcrumbs title="Our Services" items={[{ label: "Recruitment Services" }]} />

      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <SectionHeading
            badge="Workforce Solutions"
            title="Comprehensive Recruitment Services"
            subtitle="Tailored candidate mobilization, screening, and placement assistance designed to fulfill demanding international project criteria."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((svc) => (
              <div
                key={svc.id}
                className="card-wp p-8 flex flex-col justify-between group hover:-translate-y-1.5 transition-all duration-300 border-t-4 border-royal"
              >
                <div>
                  <div className="w-16 h-16 rounded-xl bg-navy-50 flex items-center justify-center mb-6 group-hover:bg-royal group-hover:text-white transition-colors duration-200">
                    {getServiceIcon(svc.iconName)}
                  </div>

                  <h3 className="text-xl font-bold font-heading text-navy-900 mb-3 group-hover:text-royal transition-colors">
                    {svc.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {svc.shortDesc}
                  </p>

                  <div className="space-y-2 mb-6">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Key Focus Areas:</p>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {svc.categories.map((cat, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                          <span>{cat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setActiveModalService(svc)}
                    className="inline-flex items-center gap-1 text-sm font-bold text-royal hover:text-navy-900 transition-colors cursor-pointer"
                  >
                    <span>Full Description</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  <Link
                    to="/employer-enquiry"
                    className="btn-gold text-xs font-bold uppercase px-3 py-1.5 rounded"
                  >
                    Enquire
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      <Modal
        isOpen={!!activeModalService}
        onClose={() => setActiveModalService(null)}
        title={activeModalService?.title || "Service Overview"}
      >
        {activeModalService && (
          <div className="space-y-4 text-left">
            <p className="text-slate-700 text-sm leading-relaxed">
              {activeModalService.fullDesc}
            </p>

            <div className="pt-2">
              <h4 className="text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">
                Operational Deliverables:
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {activeModalService.categories.map((cat, i) => (
                  <li key={i} className="flex items-center gap-2 text-slate-700 bg-slate-50 p-2.5 rounded border border-slate-100">
                    <CheckCircle className="w-4 h-4 text-royal flex-shrink-0" />
                    <span>{cat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <Link
                to="/employer-enquiry"
                onClick={() => setActiveModalService(null)}
                className="btn-gold text-xs font-bold uppercase tracking-wider px-5 py-2.5"
              >
                Submit Demand for {activeModalService.title}
              </Link>
              <button
                type="button"
                onClick={() => setActiveModalService(null)}
                className="text-xs text-slate-500 hover:text-slate-800 font-medium"
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </Modal>

      {/* Call to action */}
      <section className="py-16 bg-navy-950 text-white text-center">
        <div className="container-custom max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-extrabold font-heading text-white mb-4">
            Need a Customized Manpower Solution?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
            Connect with our corporate recruitment desk to discuss your project mobilization schedule, required skill certifications, and candidate volume.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/employer-enquiry" className="btn-gold text-sm font-bold uppercase px-8 py-3.5 shadow-lg">
              Submit Manpower Requirement
            </Link>
            <Link to="/contact" className="btn-outline-navy border-slate-300 text-white hover:bg-white hover:text-navy-900 text-sm font-semibold px-8 py-3.5">
              Contact Us Directly
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
