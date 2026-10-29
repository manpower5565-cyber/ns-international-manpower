import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { siteConfig } from '../config/siteConfig';
import { ShieldAlert, AlertTriangle, FileText, CheckCircle2 } from 'lucide-react';

export const DisclaimerPage: React.FC = () => {
  return (
    <div className="w-full">
      <Breadcrumbs title="Disclaimer" items={[{ label: "Regulatory Compliance" }]} />

      <section className="py-16 md:py-20 bg-white text-left">
        <div className="container-custom max-w-4xl">
          <div className="card-wp p-8 md:p-12 space-y-6 text-sm text-slate-700 leading-relaxed">
            
            <div className="border-b border-slate-200 pb-4">
              <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                <ShieldAlert className="w-4 h-4 text-amber-600" />
                <span>Statutory &amp; Emigration Disclaimer</span>
              </div>
              <h2 className="text-2xl font-bold font-heading text-navy-900 mb-1">
                Official Regulatory &amp; Recruitment Disclaimer
              </h2>
              <p className="text-xs text-slate-500">Applicable to all operations at nsinternationalmanpower.online</p>
            </div>

            <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-amber-900 text-xs sm:text-sm leading-relaxed">
              <strong>Crucial Transparency Statement:</strong> NS International Manpower maintains zero-tolerance for fraudulent recruitment, visa sales, or unauthorized job guarantees. Please read the following disclosures thoroughly before engaging with our services.
            </div>

            <h3 className="text-base font-bold text-navy-900 font-heading pt-2">1. No Guaranteed Employment or Visa Issuance</h3>
            <p>
              NS International Manpower operates as a recruitment facilitation and talent sourcing consultancy. We coordinate candidate sourcing, skills evaluation, and document forwarding on behalf of verified employer principals. 
            </p>
            <p>
              <strong>We do not, under any circumstances, guarantee overseas job placement, work visas, or consular entry clearances.</strong> The issuance of employment visas and entry permits rests entirely within the sovereign authority of the respective destination country's Ministry of Foreign Affairs, Ministry of Human Resources, and Emigration Consulates.
            </p>

            <h3 className="text-base font-bold text-navy-900 font-heading pt-2">2. Nature of Job Openings &amp; Listings</h3>
            <p>
              Any sample listings or opportunity overviews featured on this website are provided for illustrative demonstration of common industry trade categories. Active overseas recruitment campaigns are announced strictly upon receipt of formal Demand Letters, Power of Attorney (POA), and quota approvals verified through legal channels.
            </p>

            <h3 className="text-base font-bold text-navy-900 font-heading pt-2">3. Selection Criteria &amp; Assessment</h3>
            <p>
              All candidate selections are governed exclusively by employer merit criteria. Key criteria include:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600">
              <li>Direct evaluation during client interviews or technical trade test center demonstrations.</li>
              <li>Verification of required vocational diplomas, technical licenses, and certified credentials.</li>
              <li>Mandatory medical fitness certification (GAMCA/Wafid) free of communicable conditions.</li>
              <li>Security and background clearances as mandated by destination country laws.</li>
            </ul>

            <h3 className="text-base font-bold text-navy-900 font-heading pt-2">4. Fraud Warning &amp; Official Payment Channels</h3>
            <p>
              Candidates are strongly cautioned against engaging with unauthorized third-party brokers, fraudulent sub-agents, or individuals claiming to represent NS International Manpower outside our verified office coordinates.
            </p>
            <p>
              NS International Manpower never requests cash deposits into personal banking accounts or via unofficial mobile payment numbers. All official communications originate strictly from our registered domain (<strong>nsinternationalmanpower.online</strong>) or from our authorized Lucknow office desk.
            </p>

            <h3 className="text-base font-bold text-navy-900 font-heading pt-2">5. Verification of Office Desk</h3>
            <p>
              To confirm the authenticity of any recruitment drive, interview schedule, or communication, please visit our registered office or contact us directly:<br />
              <strong>NS International Manpower</strong><br />
              {siteConfig.address.full}<br />
              Official Email: {siteConfig.contact.email}<br />
              Office Telephone: {siteConfig.contact.phoneDisplay}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
