import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  MapPin, 
  Briefcase, 
  Clock, 
  CheckCircle, 
  Info, 
  AlertCircle,
  UserPlus,
  ArrowRight
} from 'lucide-react';
import { sampleJobsData, type JobListing } from '../config/siteConfig';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionHeading } from '../components/SectionHeading';
import { Modal } from '../components/Modal';

export const JobsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [activeJobModal, setActiveJobModal] = useState<JobListing | null>(null);
  const [viewMode, setViewMode] = useState<'sample' | 'live'>('sample');

  const navigate = useNavigate();

  const industries = ['All', 'Engineering & Manufacturing', 'Construction & Infrastructure', 'Facility Management', 'Logistics & Warehousing', 'Hospitality & Hotels'];
  const locations = ['All', 'Gulf Region', 'Middle East', 'Asia-Pacific', 'Europe'];

  const filteredJobs = sampleJobsData.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesIndustry = selectedIndustry === 'All' || job.industry === selectedIndustry;
    const matchesLocation = selectedLocation === 'All' || job.location === selectedLocation;
    return matchesSearch && matchesIndustry && matchesLocation;
  });

  const handleApply = (job: JobListing) => {
    setActiveJobModal(null);
    navigate(`/candidate-registration?jobRole=${encodeURIComponent(job.title)}`);
  };

  return (
    <div className="w-full">
      <Breadcrumbs title="Jobs & Opportunities" items={[{ label: "Career Openings" }]} />

      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <SectionHeading
            badge="Candidate Placement Desk"
            title="Jobs &amp; Overseas Opportunities"
            subtitle="Search sample requirement roles and register your profile with NS International Manpower to be considered for verified employer recruitment drives."
          />

          {/* Mode Switcher / Notice Banner */}
          <div className="mb-8 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-start gap-3 text-xs sm:text-sm">
              <AlertCircle className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-amber-950">Development &amp; Demonstration Notice:</strong>
                <p className="mt-0.5 text-amber-800">
                  Vacancies shown below are demonstration sample templates illustrating role criteria. To view live vacancies, or to register for upcoming recruitment drives, please register your candidate profile.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 flex-shrink-0">
              <button
                type="button"
                onClick={() => setViewMode('sample')}
                className={`text-xs font-bold px-3 py-1.5 rounded transition-colors ${
                  viewMode === 'sample' ? 'bg-amber-800 text-white' : 'bg-amber-100 text-amber-800 hover:bg-amber-200'
                }`}
              >
                Sample Listings View
              </button>
              <button
                type="button"
                onClick={() => setViewMode('live')}
                className={`text-xs font-bold px-3 py-1.5 rounded transition-colors ${
                  viewMode === 'live' ? 'bg-navy text-white' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                }`}
              >
                Live Vacancies (Official State)
              </button>
            </div>
          </div>

          {/* If Live Vacancies View is selected, show official empty state */}
          {viewMode === 'live' ? (
            <div className="py-16 px-6 text-center max-w-2xl mx-auto card-wp border-2 border-dashed border-slate-300">
              <Briefcase className="w-16 h-16 text-slate-300 mx-auto mb-4" />
              <h3 className="text-2xl font-bold font-heading text-navy-900 mb-2">
                No Active Public Vacancies Listed Right Now
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Active recruitment drives are conducted directly based on specific employer interview schedules and client quota releases. Register your professional profile with us to be alerted when matching vacancies open.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/candidate-registration"
                  className="btn-gold text-sm font-bold uppercase tracking-wider px-6 py-3"
                >
                  <UserPlus className="w-4 h-4 mr-2" />
                  Register Candidate Profile
                </Link>
                <button
                  type="button"
                  onClick={() => setViewMode('sample')}
                  className="btn-outline-navy text-sm font-semibold px-6 py-3"
                >
                  View Sample Profiles
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Search & Filter Bar */}
              <div className="card-wp p-5 mb-10 border border-slate-200">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                  {/* Search Input */}
                  <div className="md:col-span-6 relative">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Search by job title or keyword (e.g. Welder, Supervisor, HVAC)..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-royal focus:ring-1 focus:ring-royal"
                    />
                  </div>

                  {/* Industry Filter */}
                  <div className="md:col-span-3">
                    <select
                      value={selectedIndustry}
                      onChange={(e) => setSelectedIndustry(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-royal focus:ring-1 focus:ring-royal text-slate-700 bg-white"
                      aria-label="Filter by Industry"
                    >
                      {industries.map((ind) => (
                        <option key={ind} value={ind}>
                          Industry: {ind}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Location Filter */}
                  <div className="md:col-span-3">
                    <select
                      value={selectedLocation}
                      onChange={(e) => setSelectedLocation(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-royal focus:ring-1 focus:ring-royal text-slate-700 bg-white"
                      aria-label="Filter by Location"
                    >
                      {locations.map((loc) => (
                        <option key={loc} value={loc}>
                          Region: {loc}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Job Listings Grid */}
              {filteredJobs.length === 0 ? (
                <div className="text-center py-16 card-wp">
                  <p className="text-base font-bold text-navy-900 mb-2">No matching listings found.</p>
                  <p className="text-xs text-slate-500 mb-4">Try adjusting your keyword or reset filters.</p>
                  <button
                    type="button"
                    onClick={() => { setSearchTerm(''); setSelectedIndustry('All'); setSelectedLocation('All'); }}
                    className="btn-outline-navy text-xs font-semibold py-2 px-4"
                  >
                    Reset All Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredJobs.map((job) => (
                    <div
                      key={job.id}
                      className="card-wp p-6 flex flex-col justify-between border-t-4 border-royal hover:-translate-y-1 transition-all"
                    >
                      <div>
                        {/* Sample Badge */}
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-100 text-amber-800 border border-amber-200">
                            Sample Listing
                          </span>
                          <span className="text-xs font-mono text-slate-400">
                            {job.id}
                          </span>
                        </div>

                        <h3 className="font-heading font-bold text-lg text-navy-900 mb-2 leading-snug">
                          {job.title}
                        </h3>

                        <div className="space-y-1.5 text-xs text-slate-600 mb-4">
                          <div className="flex items-center gap-1.5">
                            <Briefcase className="w-3.5 h-3.5 text-royal" />
                            <span>{job.industry}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-gold" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 text-slate-400" />
                            <span>Exp: {job.experience} | {job.type}</span>
                          </div>
                        </div>

                        <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                          {job.description}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                        <button
                          type="button"
                          onClick={() => setActiveJobModal(job)}
                          className="text-xs font-bold text-royal hover:underline"
                        >
                          View Details
                        </button>

                        <button
                          type="button"
                          onClick={() => handleApply(job)}
                          className="btn-gold text-xs font-bold uppercase px-4 py-2 rounded shadow-sm"
                        >
                          Apply Now
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}

          {/* Candidate Registration Prompt Banner */}
          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-navy-900 to-navy-950 text-white flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-left">
              <h3 className="text-xl sm:text-2xl font-bold font-heading mb-2">
                Don't See Your Exact Role?
              </h3>
              <p className="text-slate-300 text-sm max-w-xl">
                We continuously receive overseas demands across multiple trades and certifications. Register your resume to be placed on our active talent roster.
              </p>
            </div>
            <Link
              to="/candidate-registration"
              className="btn-gold text-xs sm:text-sm font-bold uppercase px-6 py-3 whitespace-nowrap shadow-md"
            >
              Register Candidate Profile
            </Link>
          </div>
        </div>
      </section>

      {/* Job Details Modal */}
      <Modal
        isOpen={!!activeJobModal}
        onClose={() => setActiveJobModal(null)}
        title={activeJobModal?.title || "Job Details"}
      >
        {activeJobModal && (
          <div className="space-y-4 text-left">
            <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 text-xs text-amber-800">
              <strong>Notice:</strong> This is a sample job description illustrating typical employer criteria. Applying will register your profile for similar upcoming roles.
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs bg-slate-50 p-3 rounded-lg border border-slate-100">
              <div><strong className="text-slate-500">Industry:</strong> <span className="text-slate-800">{activeJobModal.industry}</span></div>
              <div><strong className="text-slate-500">Destination:</strong> <span className="text-slate-800">{activeJobModal.location}</span></div>
              <div><strong className="text-slate-500">Experience:</strong> <span className="text-slate-800">{activeJobModal.experience}</span></div>
              <div><strong className="text-slate-500">Engagement:</strong> <span className="text-slate-800">{activeJobModal.type}</span></div>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-navy-900 mb-1">Role Description:</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{activeJobModal.description}</p>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-navy-900 mb-1.5">Candidate Criteria:</h4>
              <ul className="space-y-1 text-xs text-slate-700">
                {activeJobModal.requirements.map((req, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-royal flex-shrink-0" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                type="button"
                onClick={() => handleApply(activeJobModal)}
                className="btn-gold text-xs font-bold uppercase tracking-wider px-6 py-2.5"
              >
                Proceed to Apply
              </button>
              <button
                type="button"
                onClick={() => setActiveJobModal(null)}
                className="text-xs text-slate-500 hover:text-slate-800"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};
