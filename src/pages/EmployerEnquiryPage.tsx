import React, { useState } from 'react';
import { 
  Briefcase, 
  Building2, 
  User, 
  Mail, 
  Phone, 
  Globe, 
  Users, 
  CheckCircle2, 
  AlertCircle, 
  FileText,
  Clock,
  ShieldCheck,
  Send
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionHeading } from '../components/SectionHeading';
import { submitEmployerEnquiry, type EmployerEnquiryData } from '../utils/formHandlers';

export const EmployerEnquiryPage: React.FC = () => {
  const [formData, setFormData] = useState<EmployerEnquiryData>({
    companyName: '',
    contactPerson: '',
    businessEmail: '',
    phoneNumber: '',
    industry: 'Engineering & Manufacturing',
    requiredJobRoles: '',
    workersCount: '',
    preferredLocation: '',
    additionalRequirements: '',
  });

  // Honeypot for spam prevention
  const [honeypot, setHoneypot] = useState('');

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

    // Spam check
    if (honeypot) {
      console.warn("Spam submission blocked.");
      return;
    }

    // Validation
    if (!formData.companyName.trim() || !formData.contactPerson.trim() || !formData.businessEmail.trim() || !formData.phoneNumber.trim() || !formData.requiredJobRoles.trim()) {
      setStatus({
        type: 'error',
        message: 'Please complete all required fields (Company, Contact Person, Business Email, Phone, and Required Job Roles).',
      });
      return;
    }

    setLoading(true);
    setStatus({ type: null, message: '' });

    try {
      const response = await submitEmployerEnquiry(formData);
      setStatus({
        type: 'success',
        message: response.message,
        recordId: response.recordId,
      });
      // Reset form
      setFormData({
        companyName: '',
        contactPerson: '',
        businessEmail: '',
        phoneNumber: '',
        industry: 'Engineering & Manufacturing',
        requiredJobRoles: '',
        workersCount: '',
        preferredLocation: '',
        additionalRequirements: '',
      });
    } catch (err: unknown) {
      setStatus({
        type: 'error',
        message: err instanceof Error ? err.message : 'An unexpected error occurred while transmitting your requirement.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <Breadcrumbs title="Employer Enquiry" items={[{ label: "Hire Manpower" }]} />

      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Context, Benefits & Address */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 bg-navy-50 text-royal px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                International Employer Desk
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-navy-900 tracking-tight leading-tight">
                Looking for the Right Workforce for Your Business?
              </h1>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Share your workforce requirements with our team to discuss suitable recruitment support. Our recruitment coordinators review candidate profiles and mobilization timelines according to your technical standards.
              </p>

              {/* Recruitment Highlights */}
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3 p-3.5 bg-lightGrey rounded-lg border border-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-royal flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-navy-900">Customized Talent Pooling</h4>
                    <p className="text-xs text-slate-600">Access to trade-tested tradesmen, technicians, engineering personnel, and service crews across India.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 bg-lightGrey rounded-lg border border-slate-200">
                  <ShieldCheck className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-navy-900">Verification &amp; Documentation</h4>
                    <p className="text-xs text-slate-600">Strict scrutiny of trade certificates, medical clearances, and emigration documents.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 bg-lightGrey rounded-lg border border-slate-200">
                  <Clock className="w-5 h-5 text-royal flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-navy-900">Dedicated Account Support</h4>
                    <p className="text-xs text-slate-600">Direct coordination with our recruitment officers stationed at our Lalbagh, Lucknow office.</p>
                  </div>
                </div>
              </div>

              {/* Office Details */}
              <div className="p-5 rounded-xl bg-navy-950 text-white border border-navy-800 text-xs space-y-2">
                <p className="font-bold text-gold uppercase tracking-wider">Corporate Recruitment Office:</p>
                <p className="text-slate-300">{siteConfig.address.full}</p>
                <p className="text-slate-300">Desk Email: {siteConfig.contact.email}</p>
                <p className="text-slate-300">Office Desk: {siteConfig.contact.phoneDisplay}</p>
              </div>
            </div>

            {/* Right Column: Working Employer Enquiry Form */}
            <div className="lg:col-span-7">
              <div className="card-wp p-8 md:p-10 border-t-4 border-gold shadow-xl">
                <div className="mb-6 pb-4 border-b border-slate-100 text-left">
                  <h3 className="text-xl font-bold font-heading text-navy-900 mb-1">
                    Submit Manpower Requirement
                  </h3>
                  <p className="text-xs text-slate-500">
                    Fields marked with an asterisk (<span className="text-red-500">*</span>) are mandatory.
                  </p>
                </div>

                {/* Form Status Messages */}
                {status.type === 'success' && (
                  <div className="mb-6 p-4 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-start gap-3 animate-fadeIn text-left">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold">Requirement Submitted Successfully!</p>
                      <p className="text-xs mt-1">{status.message}</p>
                      {status.recordId && (
                        <p className="text-xs font-mono font-bold mt-2 bg-emerald-100 text-emerald-900 px-2 py-1 rounded inline-block">
                          Tracking Reference: {status.recordId}
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {status.type === 'error' && (
                  <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 text-red-800 text-sm flex items-start gap-3 text-left">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold">Submission Incomplete</p>
                      <p className="text-xs mt-1">{status.message}</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  
                  {/* Honeypot hidden input */}
                  <div className="hidden" aria-hidden="true">
                    <input
                      type="text"
                      name="website_url_hp"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Company Name */}
                    <div>
                      <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                        Company Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Building2 className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleChange}
                          placeholder="e.g. Al-Hamad Engineering LLC"
                          required
                          className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-royal focus:ring-1 focus:ring-royal"
                        />
                      </div>
                    </div>

                    {/* Contact Person */}
                    <div>
                      <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                        Contact Person <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          name="contactPerson"
                          value={formData.contactPerson}
                          onChange={handleChange}
                          placeholder="Full Name / Designation"
                          required
                          className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-royal focus:ring-1 focus:ring-royal"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Business Email */}
                    <div>
                      <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                        Business Email <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="email"
                          name="businessEmail"
                          value={formData.businessEmail}
                          onChange={handleChange}
                          placeholder="hr@company.com"
                          required
                          className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-royal focus:ring-1 focus:ring-royal"
                        />
                      </div>
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="tel"
                          name="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={handleChange}
                          placeholder="+971 50 XXXXXXX / +91..."
                          required
                          className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-royal focus:ring-1 focus:ring-royal"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Industry */}
                    <div>
                      <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                        Industry / Sector <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="industry"
                        value={formData.industry}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-royal focus:ring-1 focus:ring-royal bg-white"
                      >
                        <option value="Engineering & Manufacturing">Engineering &amp; Manufacturing</option>
                        <option value="Construction & Infrastructure">Construction &amp; Infrastructure</option>
                        <option value="Hospitality & Hotels">Hospitality &amp; Hotels</option>
                        <option value="Healthcare Support Roles">Healthcare Support Roles</option>
                        <option value="Logistics & Warehousing">Logistics &amp; Warehousing</option>
                        <option value="Facility Management">Facility Management</option>
                        <option value="Retail & Customer Service">Retail &amp; Customer Service</option>
                        <option value="Technical & Skilled Trades">Technical &amp; Skilled Trades</option>
                        <option value="Other / Multi-Sector">Other / Multi-Sector</option>
                      </select>
                    </div>

                    {/* Number of Workers Required */}
                    <div>
                      <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                        Number of Workers Required <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Users className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          name="workersCount"
                          value={formData.workersCount}
                          onChange={handleChange}
                          placeholder="e.g. 25 Technicians / 50 Helpers"
                          required
                          className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-royal focus:ring-1 focus:ring-royal"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Required Job Roles */}
                  <div>
                    <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                      Required Job Roles / Trade Specializations <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="requiredJobRoles"
                      value={formData.requiredJobRoles}
                      onChange={handleChange}
                      placeholder="e.g. 6G Welders, Pipe Fitters, Electricians, Site Supervisors"
                      required
                      className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-royal focus:ring-1 focus:ring-royal"
                    />
                  </div>

                  {/* Preferred Country or Work Location */}
                  <div>
                    <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                      Preferred Country or Work Location <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Globe className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        name="preferredLocation"
                        value={formData.preferredLocation}
                        onChange={handleChange}
                        placeholder="e.g. UAE (Dubai/Abu Dhabi), Saudi Arabia, Qatar, Europe, etc."
                        required
                        className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-royal focus:ring-1 focus:ring-royal"
                      />
                    </div>
                  </div>

                  {/* Additional Requirements */}
                  <div>
                    <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                      Additional Requirements &amp; Project Specifications
                    </label>
                    <textarea
                      name="additionalRequirements"
                      rows={4}
                      value={formData.additionalRequirements}
                      onChange={handleChange}
                      placeholder="Specify project duration, food/accommodation provisions, trade testing requirements, salary brackets, or mobilization deadlines..."
                      className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-royal focus:ring-1 focus:ring-royal"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-gold w-full text-sm font-bold uppercase tracking-wider py-3.5 shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                    >
                      {loading ? (
                        <span>Transmitting Manpower Demand...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Manpower Requirement</span>
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[11px] text-slate-500 text-center pt-2">
                    Submissions are stored securely and routed directly to our recruitment coordination desk in Lucknow.
                  </p>
                </form>
              </div>

              {/* Developer / CRM Integration Blueprint Guide */}
              <div className="mt-6 p-4 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-600 text-left">
                <p className="font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-royal" />
                  Production Deployment &amp; CRM Webhook Configuration
                </p>
                <p>
                  This form is currently equipped with client validation and browser persistence. To stream lead records directly to your corporate inbox or CRM (Zoho, HubSpot, Salesforce, or Formspree), simply configure the <code className="bg-slate-200 px-1 py-0.5 rounded text-navy-900 font-mono">VITE_EMPLOYER_WEBHOOK_URL</code> or SMTP variables in your deployment environment.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
};
