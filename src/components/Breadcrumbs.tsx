import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbsProps {
  title: string;
  items?: { label: string; path?: string }[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ title, items = [] }) => {
  return (
    <div className="bg-navy-900 py-10 border-b border-navy-700/70 relative overflow-hidden">
      {/* Background Subtle Accent */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full border border-gold"></div>
        <div className="absolute right-40 bottom-0 w-60 h-60 rounded-full border border-royal-light"></div>
      </div>

      <div className="container-custom relative z-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-heading tracking-tight mb-3">
          {title}
        </h1>

        <nav aria-label="Breadcrumb" className="flex items-center text-xs sm:text-sm text-slate-300">
          <ol className="flex items-center flex-wrap gap-1.5 sm:gap-2">
            <li className="inline-flex items-center">
              <Link to="/" className="hover:text-gold transition-colors inline-flex items-center gap-1">
                <Home className="w-3.5 h-3.5" />
                <span>Home</span>
              </Link>
            </li>

            {items.map((item, index) => (
              <li key={index} className="inline-flex items-center gap-1.5 sm:gap-2">
                <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                {item.path ? (
                  <Link to={item.path} className="hover:text-gold transition-colors">
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-gold font-medium">{item.label}</span>
                )}
              </li>
            ))}

            <li className="inline-flex items-center gap-1.5 sm:gap-2">
              <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
              <span className="text-gold font-medium">{title}</span>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
};
