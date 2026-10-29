import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Users, SearchCheck, CheckCircle2, ArrowRight } from 'lucide-react';

export const RecruitmentProcess: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Understand Requirements",
      desc: "Detailed review of employer job profiles, skill requirements, compensation benchmarks, and destination country labor guidelines.",
      icon: FileText,
    },
    {
      number: "02",
      title: "Source Suitable Candidates",
      desc: "Targeted mobilization across verified regional talent networks, skill databases, and vocational trade associations in India.",
      icon: Users,
    },
    {
      number: "03",
      title: "Screen & Coordinate",
      desc: "Rigorous profile verification, trade skill testing, pre-interviews, and structured coordination of employer assessment sessions.",
      icon: SearchCheck,
    },
    {
      number: "04",
      title: "Support the Process",
      desc: "Transparent coordination for medical examinations, documentation verification, visa application steps, and pre-departure orientation.",
      icon: CheckCircle2,
    },
  ];

  return (
    <div className="w-full">
      {/* 4-Step Grid (Horizontal on Desktop, Vertical on Mobile) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div
              key={step.number}
              className="relative card-wp p-6 flex flex-col justify-between group hover:-translate-y-1 transition-all duration-200 border-t-4 border-t-royal"
            >
              <div>
                {/* Step Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-navy-50 text-royal flex items-center justify-center group-hover:bg-royal group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-heading font-black text-2xl text-slate-200 group-hover:text-gold transition-colors">
                    {step.number}
                  </span>
                </div>

                {/* Step Title */}
                <h3 className="text-lg font-bold text-navy-900 mb-2 font-heading">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Step indicator arrow for desktop */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-gold text-navy-900 flex items-center justify-center shadow-sm">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* CTA Button */}
      <div className="mt-10 text-center">
        <Link
          to="/employer-enquiry"
          className="btn-gold px-8 py-3.5 text-base font-bold uppercase tracking-wider shadow-lg hover:shadow-xl inline-flex items-center gap-2"
        >
          <span>Start an Enquiry</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};
