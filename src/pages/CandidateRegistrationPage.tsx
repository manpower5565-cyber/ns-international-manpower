import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  UserCheck, 
  User, 
  Phone, 
  Mail, 
  MapPin, 
  GraduationCap, 
  Briefcase, 
  Globe, 
  Upload, 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck, 
  FileCheck,
  Send
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionHeading } from '../components/SectionHeading';
import { submitCandidateRegistration, type CandidateRegistrationData } from '../utils/formHandlers';

export const CandidateRegistrationPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const prefillRole = searchParams.get('jobRole') || '';

  const [formData, setFormData] = useState<CandidateRegistrationData>({
    fullName: '',
    mobileNumber: '',
    emailAddress: '',
    currentLocation: '',
    qualification: '',
    workExperience: '2 - 5 Years',
    preferredJobRole: prefillRole,
    preferredDestination: 'Gulf Region',
    consent: false,
  });

  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string; recordId?: string }>({
    type: null,
    message: '',
  });

  useEffect(() => {
    if (prefillRole) {
      setFormData(prev => ({ ...prev, preferredJobRole: prefillRole }));
    }
  }, [prefillRole]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
    if (status.type) setStatus({ type: null, message: '' });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFileError(null);

    if (file) {
      // Validate file format: PDF, DOC, DOCX
      const allowedExtensions = ['.pdf', '.doc', '.docx'];
      const fileExt = file.name.substring(file.name.lastIndexOf('.')).toLowerCase();
      
      if (!allowedExtensions.includes(fileExt)) {
        setFileError('Invalid file type. Please upload your resume in PDF, DOC, or DOCX format.');
        setResumeFile(null);
        return;
      }

      // Max 5MB
      if (file.size > 5 * 1024 * 1024) {
        setFileError('File size exceeds 5MB limit. Please upload a smaller document.');
        setResumeFile(null);
        return;
      }

      setResumeFile(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.mobileNumber.trim() || !formData.emailAddress.trim() || !formData.qualification.trim() || !formData.preferredJobRole.trim()) {
      setStatus({
        type: 'error',
        message: 'Please complete all required fields.',
      });
      return;
    }

    if (!formData.consent) {
      setStatus({
        type: 'error',
        message: 'You must provide consent for processing your candidate profile.',
      });
      return;
    }

    setLoading(true);
    setStatus({ type: null, message: '' });

    try {
      const response = await submitCandidateRegistration({
        ...formData,
        resumeFileName: resumeFile ? resumeFile.name : undefined,
      });

      setStatus({
        type: 'success',
        message: response.message,
        recordId: response.recordId,
      });

      // Reset
      setFormData({
        fullName: '',
        mobileNumber: '',
        emailAddress: '',
        currentLocation: '',
        qualification: '',
        workExperience: '2 - 5 Years',
        preferredJobRole: '',
        preferredDestination: 'Gulf Region',
        consent: false,
      });
      setResumeFile(null);
    } catch (err: unknown) {
      setStatus({
        type: 'error',
        message: err instanceof Error ? err.message : 'An error occurred during candidate registration.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <Breadcrumbs title="Candidate Registration" items={[{ label: "Job Seekers" }]} />

      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Guidance & Ethical Advice */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 bg-navy-50 text-royal px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                Candidate Services
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-navy-900 tracking-tight leading-tight">
                Looking for Employment Opportunities?
              </h1>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Share your details and areas of experience to register your interest in suitable opportunities. Our talent team maps registered profiles to verified international client requirements.
              </p>

              {/* Ethical Warning Banner */}
              <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 space-y-2">
                <p className="font-bold flex items-center gap-1.5 text-amber-950">
                  <ShieldCheck className="w-4 h-4 text-amber-700" />
                  Candidate Protection Notice:
                </p>
                <p>
                  NS International Manpower does NOT sell visas or guarantee overseas job placements. Candidate selection is determined solely by client evaluations, trade test performance, medical clearance, and immigration authority approvals.
                </p>
              </div>

              {/* What Happens Next Checklist */}
              <div className="space-y-3 pt-2">
                <h4 className="font-heading font-bold text-sm text-navy-900 uppercase tracking-wider">
                  What Happens After Registration:
                </h4>

                <div className="flex items-start gap-3 p-3 bg-lightGrey rounded-lg border border-slate-200">
                  <div className="w-6 h-6 rounded-full bg-royal text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h5 className="font-bold text-xs text-navy-900">Credential Verification</h5>
                    <p className="text-[11px] text-slate-600">Our desk in Lucknow screens your trade background against active or upcoming employer demands.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-lightGrey rounded-lg border border-slate-200">
                  <div className="w-6 h-6 rounded-full bg-royal text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h5 className="font-bold text-xs text-navy-900">Direct Interview Alert</h5>
                    <p className="text-[11px] text-slate-600">When an authentic opening matches your skills, our recruitment coordinator contacts you directly.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-lightGrey rounded-lg border border-slate-200">
                  <div className="w-6 h-6 rounded-full bg-royal text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h5 className="font-bold text-xs text-navy-900">Zero Misleading Costs</h5>
                    <p className="text-[11px] text-slate-600">All discussions and interview briefings adhere strictly to statutory emigration regulations.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Candidate Profile Registration Form */}
            <div className="lg:col-span-7">
              <div className="card-wp p-8 md:p-10 border-t-4 border-royal shadow-xl">
                <div className="mb-6 pb-4 border-b border-slate-100 text-left">
                  <h3 className="text-xl font-bold font-heading text-navy-900 mb-1">
                    Submit Your Profile
                  </h3>
                  <p className="text-xs text-slate-500">
                    Please provide accurate information as stated on your passport and trade documents.
                  </p>
                </div>

                {/* Status Messages */}
                {status.type === 'success' && (
                  <div className="mb-6 p-4 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-start gap-3 animate-fadeIn text-left">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold">Profile Registered Successfully!</p>
                      <p className="text-xs mt-1">{status.message}</p>
                      {status.recordId && (
                        <p className="text-xs font-mono font-bold mt-2 bg-emerald-100 text-emerald-900 px-2 py-1 rounded inline-block">
                          Candidate Reg ID: {status.recordId}
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {status.type === 'error' && (
                  <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 text-red-800 text-sm flex items-start gap-3 text-left">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold">Registration Incomplete</p>
                      <p className="text-xs mt-1">{status.message}</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                      Full Name (As per Passport) <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="e.g. Ramesh Kumar Sharma"
                        required
                        className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-royal focus:ring-1 focus:ring-royal"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Mobile Number */}
                    <div>
                      <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                        Mobile Number (WhatsApp Preferred) <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="tel"
                          name="mobileNumber"
                          value={formData.mobileNumber}
                          onChange={handleInputChange}
                          placeholder="+91 XXXXXXXXXX"
                          required
                          className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-royal focus:ring-1 focus:ring-royal"
                        />
                      </div>
                    </div>

                    {/* Email Address */}
                    <div>
                      <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="email"
                          name="emailAddress"
                          value={formData.emailAddress}
                          onChange={handleInputChange}
                          placeholder="candidate@gmail.com"
                          required
                          className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-royal focus:ring-1 focus:ring-royal"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Current Location */}
                    <div>
                      <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                        Current Location (City / State) <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          name="currentLocation"
                          value={formData.currentLocation}
                          onChange={handleInputChange}
                          placeholder="e.g. Lucknow, Gorakhpur, Delhi, etc."
                          required
                          className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-royal focus:ring-1 focus:ring-royal"
                        />
                      </div>
                    </div>

                    {/* Qualification */}
                    <div>
                      <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                        Highest Qualification / Trade <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <GraduationCap className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          name="qualification"
                          value={formData.qualification}
                          onChange={handleInputChange}
                          placeholder="e.g. ITI Welder / Diploma / 10th / 12th"
                          required
                          className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-royal focus:ring-1 focus:ring-royal"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Work Experience */}
                    <div>
                      <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                        Work Experience <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="workExperience"
                        value={formData.workExperience}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-royal focus:ring-1 focus:ring-royal bg-white"
                      >
                        <option value="Fresher / Entry Level">Fresher / Entry Level</option>
                        <option value="1 - 2 Years">1 - 2 Years</option>
                        <option value="2 - 5 Years">2 - 5 Years</option>
                        <option value="5 - 10 Years">5 - 10 Years</option>
                        <option value="10+ Years / Senior">10+ Years / Senior</option>
                      </select>
                    </div>

                    {/* Preferred Destination */}
                    <div>
                      <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                        Preferred Destination Region <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="preferredDestination"
                        value={formData.preferredDestination}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-royal focus:ring-1 focus:ring-royal bg-white"
                      >
                        <option value="Gulf Region (UAE, Saudi, Qatar, Kuwait, Oman, Bahrain)">Gulf Region (GCC)</option>
                        <option value="Europe">Europe</option>
                        <option value="Asia-Pacific (Singapore, Malaysia, etc.)">Asia-Pacific</option>
                        <option value="Any Verified Overseas Destination">Any Verified Overseas Destination</option>
                      </select>
                    </div>
                  </div>

                  {/* Preferred Job Role */}
                  <div>
                    <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                      Preferred Job Role / Trade <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Briefcase className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        name="preferredJobRole"
                        value={formData.preferredJobRole}
                        onChange={handleInputChange}
                        placeholder="e.g. Electrician, Pipe Fitter, Site Supervisor, Housekeeping, etc."
                        required
                        className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-royal focus:ring-1 focus:ring-royal"
                      />
                    </div>
                  </div>

                  {/* Resume Upload (PDF/DOC/DOCX) */}
                  <div>
                    <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                      Upload Resume / CV (PDF, DOC, DOCX — Max 5MB)
                    </label>
                    <div className="border-2 border-dashed border-slate-300 rounded-lg p-4 text-center hover:border-royal transition-colors bg-slate-50">
                      <input
                        type="file"
                        id="resume-upload"
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                      />
                      <label htmlFor="resume-upload" className="cursor-pointer flex flex-col items-center">
                        <Upload className="w-6 h-6 text-slate-400 mb-1" />
                        <span className="text-xs font-bold text-royal hover:underline">
                          {resumeFile ? resumeFile.name : 'Click to select resume document'}
                        </span>
                        <span className="text-[11px] text-slate-400 mt-0.5">
                          {resumeFile ? `(${(resumeFile.size / 1024).toFixed(1)} KB)` : 'Supported formats: .pdf, .doc, .docx'}
                        </span>
                      </label>
                    </div>
                    {fileError && (
                      <p className="text-xs text-red-600 mt-1">{fileError}</p>
                    )}
                  </div>

                  {/* Consent Checkbox */}
                  <div className="pt-2">
                    <label className="flex items-start gap-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        name="consent"
                        checked={formData.consent}
                        onChange={handleInputChange}
                        required
                        className="w-4 h-4 mt-0.5 rounded border-slate-300 text-royal focus:ring-royal"
                      />
                      <span className="text-xs text-slate-600 leading-snug">
                        I hereby consent to NS International Manpower retaining and evaluating my submitted resume data for potential international employment opportunities in compliance with privacy guidelines.
                      </span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-navy w-full text-sm font-bold uppercase tracking-wider py-3.5 shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                    >
                      {loading ? (
                        <span>Submitting Profile...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Your Profile</span>
                        </>
                      )}
                    </button>
                  </div>

                </form>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
};
