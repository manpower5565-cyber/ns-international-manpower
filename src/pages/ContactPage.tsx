import React, { useState } from 'react';
import { 
  MapPin, 
  Mail, 
  Phone, 
  MessageCircle, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Globe2, 
  ExternalLink,
  Building2
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionHeading } from '../components/SectionHeading';
import { submitContactMessage, type ContactMessageData } from '../utils/formHandlers';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactMessageData>({
    name: '',
    email: '',
    phone: '',
    subject: 'General Recruitment Inquiry',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string; recordId?: string }>({
    type: null,
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (status.type) setStatus({ type: null, message: '' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.message.trim()) {
      setStatus({
        type: 'error',
        message: 'Please fill in all contact form fields before submitting.',
      });
      return;
    }

    setLoading(true);
    setStatus({ type: null, message: '' });

    try {
      const response = await submitContactMessage(formData);
      setStatus({
        type: 'success',
        message: response.message,
        recordId: response.recordId,
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'General Recruitment Inquiry',
        message: '',
      });
    } catch (err: unknown) {
      setStatus({
        type: 'error',
        message: err instanceof Error ? err.message : 'Failed to send message. Please try again.',
      });
    } finally {
      setLoading(false);
    }
  };

  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    "Hello NS International Manpower, I would like to make an inquiry."
  )}`;

  return (
    <div className="w-full">
      <Breadcrumbs title="Contact Us" items={[{ label: "Official Contact Desk" }]} />

      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <SectionHeading
            badge="Get In Touch"
            title="Connect with NS International Manpower"
            subtitle="Visit our registered Lucknow office, call our recruitment coordination desk, or submit an online enquiry."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left: Official Contact Card & Address */}
            <div className="lg:col-span-5 space-y-6 text-left">
              
              {/* Highlight Address Box */}
              <div className="card-wp p-8 border-l-4 border-l-gold space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-royal mb-2">
                    <Building2 className="w-4 h-4" />
                    <span>Registered Business Address</span>
                  </div>
                  <h3 className="font-heading font-extrabold text-xl text-navy-900 mb-2">
                    NS International Manpower
                  </h3>
                  <div className="text-slate-700 text-sm leading-relaxed space-y-0.5">
                    <p className="font-semibold text-navy-800">207, Office No. 2, 2nd Floor, Jewel Height,</p>
                    <p>23 BN Road, Lalbagh,</p>
                    <p>Lucknow, Uttar Pradesh – 226001,</p>
                    <p className="font-medium text-slate-800">India.</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-3.5 text-sm">
                  {/* Phone */}
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-navy-50 text-royal flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-semibold uppercase">Telephone / Mobile</p>
                      <a href={`tel:${siteConfig.contact.phoneRaw}`} className="font-bold text-navy-900 hover:text-royal transition-colors">
                        {siteConfig.contact.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-navy-50 text-royal flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-semibold uppercase">Corporate Email</p>
                      <a href={`mailto:${siteConfig.contact.email}`} className="font-bold text-navy-900 hover:text-royal transition-colors">
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-navy-50 text-gold flex items-center justify-center flex-shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-semibold uppercase">Business Working Hours</p>
                      <p className="font-semibold text-slate-700 text-xs">
                        {siteConfig.contact.businessHours}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase px-4 py-3 rounded-lg shadow transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>WhatsApp Chat</span>
                  </a>

                  <a
                    href={siteConfig.contact.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 btn-outline-navy text-xs font-bold uppercase px-4 py-3 rounded-lg transition-colors"
                  >
                    <Globe2 className="w-4 h-4" />
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>

              {/* Central Settings Note */}
              <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-600">
                <p>
                  <strong>Note:</strong> All contact coordinates are configurable through the site's central configuration file (<code className="text-navy-900 font-mono">src/config/siteConfig.ts</code>).
                </p>
              </div>

            </div>

            {/* Right: Working Contact Form */}
            <div className="lg:col-span-7">
              <div className="card-wp p-8 md:p-10 border-t-4 border-royal shadow-xl text-left">
                <h3 className="text-xl font-bold font-heading text-navy-900 mb-1">
                  Send Us an Inquiry
                </h3>
                <p className="text-xs text-slate-500 mb-6">
                  Whether you are an overseas employer or a job applicant, our desk will attend to your query promptly.
                </p>

                {/* Status Alerts */}
                {status.type === 'success' && (
                  <div className="mb-6 p-4 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-start gap-3 animate-fadeIn">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold">Message Sent Successfully</p>
                      <p className="text-xs mt-1">{status.message}</p>
                      {status.recordId && (
                        <p className="text-xs font-mono font-bold mt-2 bg-emerald-100 text-emerald-900 px-2 py-1 rounded inline-block">
                          Ticket Reference: {status.recordId}
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {status.type === 'error' && (
                  <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 text-red-800 text-sm flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold">Submission Error</p>
                      <p className="text-xs mt-1">{status.message}</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Full Name"
                        required
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-royal focus:ring-1 focus:ring-royal"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@example.com"
                        required
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-royal focus:ring-1 focus:ring-royal"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                        Phone / WhatsApp <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 / International code"
                        required
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-royal focus:ring-1 focus:ring-royal"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                        Subject / Category <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-royal focus:ring-1 focus:ring-royal bg-white"
                      >
                        <option value="General Recruitment Inquiry">General Recruitment Inquiry</option>
                        <option value="Employer Manpower Requirement">Employer Manpower Requirement</option>
                        <option value="Candidate Application Status">Candidate Application Status</option>
                        <option value="Trade Test & Documentation">Trade Test &amp; Documentation</option>
                        <option value="Corporate Partnership">Corporate Partnership</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please write your detailed enquiry, requirement specifications, or questions..."
                      required
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-royal focus:ring-1 focus:ring-royal"
                    ></textarea>
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-navy w-full text-sm font-bold uppercase tracking-wider py-3.5 shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                    >
                      {loading ? (
                        <span>Sending Message...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message to Office</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>

          </div>

          {/* Google Maps Embed Section */}
          <div className="mt-16">
            <div className="card-wp p-4 border border-slate-200">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-3 mb-3 border-b border-slate-100 gap-2">
                <div>
                  <h4 className="font-heading font-bold text-base text-navy-900 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-royal" />
                    Office Location Map — Jewel Height, Lalbagh, Lucknow
                  </h4>
                  <p className="text-xs text-slate-500">207, Office No. 2, 2nd Floor, Jewel Height, 23 BN Road, Lalbagh, Lucknow 226001</p>
                </div>
                <a
                  href={siteConfig.contact.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold text-xs font-bold px-3 py-1.5 rounded inline-flex items-center gap-1"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="w-full h-[400px] rounded-lg overflow-hidden bg-slate-100">
                <iframe
                  title="NS International Manpower Office Location"
                  src={siteConfig.contact.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
