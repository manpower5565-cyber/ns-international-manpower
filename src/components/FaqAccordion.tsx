import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { faqsData, type FaqItem } from '../config/siteConfig';

interface FaqAccordionProps {
  items?: FaqItem[];
  defaultOpenIndex?: number;
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({ 
  items = faqsData, 
  defaultOpenIndex = 0 
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-3.5 max-w-4xl mx-auto">
      {items.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`border rounded-lg transition-all duration-200 overflow-hidden ${
              isOpen 
                ? 'border-royal/40 bg-white shadow-md' 
                : 'border-slate-200 bg-white hover:border-slate-300 shadow-sm'
            }`}
          >
            <button
              type="button"
              onClick={() => toggleItem(index)}
              className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 font-heading font-semibold text-base text-navy-900 focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="flex items-center gap-3">
                <HelpCircle className={`w-5 h-5 flex-shrink-0 transition-colors ${isOpen ? 'text-royal' : 'text-gold'}`} />
                <span className="leading-snug">{faq.question}</span>
              </span>
              <ChevronDown
                className={`w-5 h-5 text-slate-500 transition-transform duration-300 flex-shrink-0 ${
                  isOpen ? 'transform rotate-180 text-royal' : ''
                }`}
              />
            </button>

            {isOpen && (
              <div className="px-5 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100/80 bg-slate-50/50">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
