import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { siteConfig } from '../config/siteConfig';

export const TermsPage: React.FC = () => {
  return (
    <div className="w-full">
      <Breadcrumbs title="Terms & Conditions" items={[{ label: "Legal" }]} />

      <section className="py-16 md:py-20 bg-white text-left">
        <div className="container-custom max-w-4xl">
          <div className="card-wp p-8 md:p-12 space-y-6 text-sm text-slate-700 leading-relaxed">
            <div className="border-b border-slate-200 pb-4">
              <h2 className="text-2xl font-bold font-heading text-navy-900 mb-1">
                Terms &amp; Conditions of Service
              </h2>
              <p className="text-xs text-slate-500">Effective Date: October 2026 | Domain: nsinternationalmanpower.online</p>
            </div>

            <p>
              Welcome to the official website of <strong>NS International Manpower</strong>. By browsing, accessing, or submitting information via <strong>https://nsinternationalmanpower.online</strong>, you agree to comply with and be bound by the following Terms &amp; Conditions.
            </p>

            <h3 className="text-base font-bold text-navy-900 font-heading pt-2">1. Scope of Services</h3>
            <p>
              NS International Manpower operates as an international workforce recruitment and placement coordination consultancy. Our services encompass talent sourcing, screening, coordination of trade testing, interview facilitation, and administrative guidance regarding documentation for overseas employment opportunities.
            </p>

            <h3 className="text-base font-bold text-navy-900 font-heading pt-2">2. No Guarantee of Employment or Visas</h3>
            <p>
              Submission of a candidate profile or resume does not constitute a contract of employment, nor does it guarantee selection, visa issuance, or overseas deployment. Candidate placement is strictly subject to:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600">
              <li>Direct evaluation and final selection by verified overseas employers.</li>
              <li>Successful completion of technical trade tests and client interview rounds.</li>
              <li>Medical fitness clearance from certified panels (such as GAMCA/Wafid).</li>
              <li>Verification of all academic and technical credentials by authorized bodies.</li>
              <li>Issuance of lawful employment visas and emigration clearance by respective government authorities.</li>
            </ul>

            <h3 className="text-base font-bold text-navy-900 font-heading pt-2">3. Accuracy of Information</h3>
            <p>
              Candidates and employers warrant that all information, documents, certificates, and specifications submitted through this website are truthful, authentic, and complete. Submission of falsified certificates, forged credentials, or misleading representations will result in immediate disqualification and reporting to relevant statutory authorities.
            </p>

            <h3 className="text-base font-bold text-navy-900 font-heading pt-2">4. Employer Responsibilities</h3>
            <p>
              Employers submitting manpower demands confirm that all requirements represent legitimate job openings supported by approved visas and compliant with bilateral labor treaties. Employers are responsible for providing authentic employment terms, wages, and project working conditions.
            </p>

            <h3 className="text-base font-bold text-navy-900 font-heading pt-2">5. Intellectual Property</h3>
            <p>
              All branding, trade names, logos, text, website structure, and custom content displayed on this website are the property of NS International Manpower and are protected under copyright and intellectual property laws.
            </p>

            <h3 className="text-base font-bold text-navy-900 font-heading pt-2">6. Limitation of Liability</h3>
            <p>
              NS International Manpower shall not be liable for any direct, indirect, or consequential damages resulting from delays in visa processing caused by immigration authorities, changes in foreign immigration legislation, or employer project adjustments beyond our direct control.
            </p>

            <h3 className="text-base font-bold text-navy-900 font-heading pt-2">7. Governing Law &amp; Jurisdiction</h3>
            <p>
              These Terms &amp; Conditions shall be governed by and construed in accordance with the laws of the Republic of India. Any legal disputes arising out of the use of this website shall be subject to the exclusive jurisdiction of the competent courts in Lucknow, Uttar Pradesh, India.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
