import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { siteConfig } from '../config/siteConfig';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="w-full">
      <Breadcrumbs title="Privacy Policy" items={[{ label: "Legal" }]} />

      <section className="py-16 md:py-20 bg-white text-left">
        <div className="container-custom max-w-4xl">
          <div className="card-wp p-8 md:p-12 space-y-6 text-sm text-slate-700 leading-relaxed">
            <div className="border-b border-slate-200 pb-4">
              <h2 className="text-2xl font-bold font-heading text-navy-900 mb-1">
                Privacy Policy &amp; Data Protection
              </h2>
              <p className="text-xs text-slate-500">Effective Date: October 2026 | Domain: nsinternationalmanpower.online</p>
            </div>

            <p>
              At <strong>NS International Manpower</strong>, located at {siteConfig.address.full}, we value the trust you place in us when sharing your personal details, resumes, corporate contacts, and employment requirements. This Privacy Policy outlines our procedures regarding the collection, use, retention, and protection of information submitted on <strong>https://nsinternationalmanpower.online</strong>.
            </p>

            <h3 className="text-base font-bold text-navy-900 font-heading pt-2">1. Information We Collect</h3>
            <p>We collect information through our website in the following circumstances:</p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600">
              <li><strong>Employer Inquiries:</strong> Company legal name, contact representative name, corporate email address, telephone numbers, required trade roles, and project workforce criteria.</li>
              <li><strong>Candidate Profiles:</strong> Full applicant name, contact numbers, email address, physical location, highest qualifications, vocational trade experience, preferred destination countries, and uploaded CV/resume files.</li>
              <li><strong>General Inquiries:</strong> Name, phone number, email address, and subject matter communicated through our contact form.</li>
            </ul>

            <h3 className="text-base font-bold text-navy-900 font-heading pt-2">2. Purpose of Information Processing</h3>
            <p>We process candidate and employer information strictly for legitimate recruitment and workforce placement operations, including:</p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600">
              <li>Evaluating candidate credentials against verified overseas employer openings.</li>
              <li>Coordinating technical pre-screenings, interview appointments, and trade testing schedules.</li>
              <li>Communicating mobilization logistics, medical testing updates, and legal visa documentation requirements.</li>
              <li>Maintaining necessary recruitment records required under statutory emigration frameworks.</li>
            </ul>

            <h3 className="text-base font-bold text-navy-900 font-heading pt-2">3. Resume &amp; Document Security</h3>
            <p>
              Uploaded resumes and credentials are treated with strict confidentiality. We do not sell, rent, or trade applicant personal data to third-party commercial marketing agencies. Candidate profiles are shared exclusively with verified overseas employers and client interview panels who have active manpower demands matching the candidate's declared trade.
            </p>

            <h3 className="text-base font-bold text-navy-900 font-heading pt-2">4. Data Retention</h3>
            <p>
              We retain candidate information in our active talent pool for as long as relevant to evaluate potential employment opportunities, or until the candidate formally requests deletion of their profile.
            </p>

            <h3 className="text-base font-bold text-navy-900 font-heading pt-2">5. Candidate Rights</h3>
            <p>
              You have the right to request access to your submitted data, request corrections, or request removal of your profile from our candidate database. You may exercise these rights at any time by contacting our Lucknow recruitment desk at <a href={`mailto:${siteConfig.contact.email}`} className="text-royal font-medium hover:underline">{siteConfig.contact.email}</a>.
            </p>

            <h3 className="text-base font-bold text-navy-900 font-heading pt-2">6. Contacting the Data Officer</h3>
            <p>
              If you have any questions regarding our privacy practices, please contact our administrative office:<br />
              <strong>NS International Manpower</strong><br />
              {siteConfig.address.full}<br />
              Email: {siteConfig.contact.email}<br />
              Telephone: {siteConfig.contact.phoneDisplay}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
