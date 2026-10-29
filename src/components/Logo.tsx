import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'dark', className = '', showSubtitle = true }) => {
  const isLight = variant === 'light';

  return (
    <Link to="/" className={`inline-flex items-center gap-3 group text-left ${className}`} aria-label="NS International Manpower - Home">
      {/* Monogram Badge */}
      <div className="relative flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-navy-800 border-2 border-gold flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-200">
        {/* Subtle globe meridian lines */}
        <div className="absolute inset-0 rounded-lg overflow-hidden pointer-events-none opacity-20">
          <div className="absolute inset-0 border border-gold rounded-full transform scale-125"></div>
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gold"></div>
          <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gold"></div>
        </div>
        
        {/* Monogram Letters */}
        <span className="font-heading font-extrabold text-xl sm:text-2xl text-white tracking-wider flex items-center">
          N<span className="text-gold">S</span>
        </span>

        {/* Small gold dot indicator */}
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-gold rounded-full ring-2 ring-navy-800"></span>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col">
        <span className={`font-heading font-extrabold tracking-tight text-base sm:text-lg leading-tight transition-colors ${
          isLight ? 'text-white group-hover:text-gold' : 'text-navy-900 group-hover:text-royal'
        }`}>
          NS INTERNATIONAL <span className="text-gold font-bold">MANPOWER</span>
        </span>
        {showSubtitle && (
          <span className={`text-[10px] sm:text-[11px] font-medium tracking-wider uppercase transition-colors ${
            isLight ? 'text-slate-300' : 'text-slate-500'
          }`}>
            Overseas Recruitment &amp; Placement Consultancy
          </span>
        )}
      </div>
    </Link>
  );
};
