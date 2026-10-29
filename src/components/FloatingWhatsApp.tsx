import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  // If no whatsapp number configured, do not render
  if (!siteConfig.contact.whatsappNumber || siteConfig.contact.whatsappNumber === "") {
    return null;
  }

  const defaultMsg = encodeURIComponent(
    "Hello NS International Manpower, I would like to inquire about recruitment and manpower services."
  );
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${defaultMsg}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Tooltip Card */}
      {showTooltip && (
        <div className="mb-3 p-3 bg-white text-darkText rounded-lg shadow-xl border border-slate-200 text-xs w-64 animate-fadeIn relative">
          <button 
            type="button" 
            onClick={() => setShowTooltip(false)}
            className="absolute top-1.5 right-1.5 text-slate-400 hover:text-slate-600"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <p className="font-bold text-navy-800 text-sm mb-1 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            NS Recruitment Desk
          </p>
          <p className="text-slate-600 mb-2">
            Have a manpower requirement or seeking candidate assistance? Connect with our team on WhatsApp.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full text-center bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-1.5 px-3 rounded text-xs transition-colors"
          >
            Start WhatsApp Chat
          </a>
        </div>
      )}

      {/* Floating Action Button */}
      <div className="relative group">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setShowTooltip(true)}
          className="flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-200"
          aria-label="Chat with NS International Manpower on WhatsApp"
        >
          <MessageCircle className="w-7 h-7 fill-current" />
          {/* Subtle online pulse */}
          <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-gold rounded-full ring-2 ring-white"></span>
        </a>
      </div>
    </div>
  );
};
