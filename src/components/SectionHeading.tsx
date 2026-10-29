import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  centered = true,
  light = false,
  className = '',
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center max-w-3xl mx-auto' : 'text-left max-w-2xl'} ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-3 ${
          light 
            ? 'bg-gold/20 text-gold border border-gold/30' 
            : 'bg-navy-50 text-royal border border-royal/20'
        }`}>
          <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
          <span>{badge}</span>
        </div>
      )}

      <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading tracking-tight leading-tight mb-4 ${
        light ? 'text-white' : 'text-navy-900'
      }`}>
        {title}
      </h2>

      {subtitle && (
        <p className={`text-sm sm:text-base leading-relaxed ${
          light ? 'text-slate-300' : 'text-slate-600'
        }`}>
          {subtitle}
        </p>
      )}

      {/* WordPress-style subtle decorative divider */}
      <div className={`flex items-center gap-1.5 mt-4 ${centered ? 'justify-center' : 'justify-start'}`}>
        <span className="w-8 h-1 bg-royal rounded-full"></span>
        <span className="w-3 h-1 bg-gold rounded-full"></span>
        <span className="w-1.5 h-1 bg-royal-400 rounded-full"></span>
      </div>
    </div>
  );
};
