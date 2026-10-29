import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Info } from 'lucide-react';

interface SampleTestimonial {
  id: string;
  category: string;
  quote: string;
  role: string;
  region: string;
}

export const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Clearly labeled sample template items (Honoring Section 14)
  const testimonials: SampleTestimonial[] = [
    {
      id: "1",
      category: "Employer Feedback Template",
      quote: "NS International Manpower coordinated the sourcing and preliminary screening of industrial tradesmen according to our exact technical benchmarks. Communication was prompt and transparent throughout the mobilization schedule.",
      role: "Operations Director, International Contracting Enterprise",
      region: "Gulf Region Partner",
    },
    {
      id: "2",
      category: "Candidate Feedback Template",
      quote: "The guidance provided regarding overseas documentation, medical testing protocols, and client interview preparation was clear, honest, and professional at every step of the selection process.",
      role: "Certified Piping Specialist & Vocational Craftsman",
      region: "Overseas Placed Candidate",
    },
    {
      id: "3",
      category: "Recruitment Coordination Template",
      quote: "Structured interview schedules and thorough document verification saved our hiring managers significant time during our overseas workforce deployment drive.",
      role: "HR & Mobilization Manager, Facility Group",
      region: "Middle East Partner",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <div className="max-w-4xl mx-auto">
      {/* Transparency Note */}
      <div className="mb-6 bg-amber-50 border border-amber-200 rounded-lg p-3.5 flex items-start gap-2.5 text-xs text-amber-800">
        <Info className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
        <p>
          <strong>Transparency Notice:</strong> This section features demonstration testimonial formatting. In compliance with strict recruitment standards, NS International Manpower displays genuine client testimonials upon completion of verified bilateral reviews.
        </p>
      </div>

      {/* WordPress-style testimonial card */}
      <div className="card-wp p-8 md:p-12 relative overflow-hidden text-center border-t-4 border-gold">
        <Quote className="w-12 h-12 text-gold/30 mx-auto mb-4" />

        <div className="inline-block bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
          {current.category}
        </div>

        <blockquote className="text-base md:text-xl text-navy-900 font-medium italic leading-relaxed mb-6">
          &ldquo;{current.quote}&rdquo;
        </blockquote>

        <div className="border-t border-slate-100 pt-4">
          <p className="font-heading font-bold text-navy-900 text-base">
            {current.role}
          </p>
          <p className="text-slate-500 text-xs sm:text-sm font-medium">
            {current.region}
          </p>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-3 mt-8">
          <button
            type="button"
            onClick={handlePrev}
            className="w-10 h-10 rounded-full border border-slate-200 hover:border-royal text-navy-800 hover:text-royal flex items-center justify-center transition-colors shadow-sm focus:outline-none"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <div className="flex gap-1.5">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrentIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  currentIndex === i ? 'bg-royal w-6' : 'bg-slate-300'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={handleNext}
            className="w-10 h-10 rounded-full border border-slate-200 hover:border-royal text-navy-800 hover:text-royal flex items-center justify-center transition-colors shadow-sm focus:outline-none"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
