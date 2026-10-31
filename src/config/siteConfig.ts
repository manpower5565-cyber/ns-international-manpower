export interface SiteConfig {
  name: string;
  tagline: string;
  domain: string;
  url: string;
  address: {
    line1: string;
    line2: string;
    road: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
    full: string;
  };
  contact: {
    // Configurable contact details
    email: string;
    supportEmail: string;
    phoneDisplay: string;
    phoneRaw: string;
    whatsappNumber: string; // international format without + (e.g. 919415000000)
    businessHours: string;
    directionsUrl: string;
    googleMapsEmbedUrl: string;
  };
  social: {
    linkedin?: string;
    facebook?: string;
    twitter?: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "NS International Manpower",
  tagline: "Connecting Global Opportunities with Skilled Indian Talent",
  domain: "nsinternationalmanpower.online",
  url: "https://nsinternationalmanpower.online",
  address: {
    line1: "207, Office No. 2, 2nd Floor",
    line2: "Jewel Height",
    road: "23 BN Road, Lalbagh",
    area: "Lalbagh",
    city: "Lucknow",
    state: "Uttar Pradesh",
    pincode: "226001",
    country: "India",
    full: "207, Office No. 2, 2nd Floor, Jewel Height, 23 BN Road, Lalbagh, Lucknow, Uttar Pradesh – 226001, India.",
  },
  contact: {
    email: "nawabhasmi1901@gmail.com",
    supportEmail: "nawabhasmi1901@gmail.com",
    phoneDisplay: "+91 78605 79407", // Configurable
    phoneRaw: "+917860579407",
    whatsappNumber: "917860579407", // Configure with active WhatsApp business number
    businessHours: "Monday – Saturday: 9:30 AM – 6:30 PM (IST)",
    directionsUrl: "https://maps.google.com/?q=Jewel+Height+23+BN+Road+Lalbagh+Lucknow+226001",
    // Embed map centered on Lalbagh Lucknow / BN Road Jewel Height
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.8856006427506!2d80.9392285!3d26.8436034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd078b549f05%3A0x6bbf69f244a2b918!2sLalbagh%2C%20Lucknow%2C%20Uttar%20Pradesh%20226001!5e0!3m2!1sen!2sin!4v1714000000000!5m2!1sen!2sin",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/ns-international-manpower",
    facebook: "https://www.facebook.com/nsinternationalmanpower",
  }
};

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  categories: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "international-recruitment",
    title: "International Manpower Recruitment",
    shortDesc: "Support employers seeking suitable candidates for overseas workforce requirements.",
    fullDesc: "We assist overseas enterprises and recruitment partners in identifying and engaging skilled Indian professionals and workforce personnel. Our process adheres strictly to statutory emigration norms and destination country labor guidelines.",
    iconName: "Globe",
    categories: ["Cross-border Staffing", "Candidate Sourcing", "Document Coordination", "Compliance Assistance"],
  },
  {
    id: "skilled-unskilled-workforce",
    title: "Skilled & Unskilled Workforce",
    shortDesc: "Recruitment support for a range of workforce requirements based on employer specifications.",
    fullDesc: "Comprehensive workforce coordination addressing diverse operational tiers—from certified craftsmen and machine operators to general utility support staff, tailored to specific project timelines.",
    iconName: "Users",
    categories: ["Tradesmen", "General Labor", "Helpers & Operators", "Project Batches"],
  },
  {
    id: "technical-industrial-staffing",
    title: "Technical & Industrial Staffing",
    shortDesc: "Candidate sourcing for technical, engineering, manufacturing, and industrial roles.",
    fullDesc: "Specialized sourcing for industrial manufacturing plants, refineries, mechanical workshops, fabrication hubs, and construction contractors requiring certified technical proficiencies.",
    iconName: "Wrench",
    categories: ["Mechanical & Civil Engineers", "Welders & Fitters", "CNC Operators", "Industrial Technicians"],
  },
  {
    id: "hospitality-facility-staffing",
    title: "Hospitality & Facility Staffing",
    shortDesc: "Recruitment support for eligible hospitality, housekeeping, and facility-related positions.",
    fullDesc: "Coordination of hospitality personnel for hotels, resorts, commercial catering facilities, and comprehensive building maintenance teams seeking service-oriented personnel.",
    iconName: "Hotel",
    categories: ["Front Office & Service Staff", "Chefs & Kitchen Crews", "Facility Technicians", "Housekeeping Crew"],
  },
  {
    id: "employer-recruitment-solutions",
    title: "Employer Recruitment Solutions",
    shortDesc: "Understand employer requirements and coordinate candidate sourcing and screening.",
    fullDesc: "End-to-end recruitment management for corporate HR departments and international contractors: job specification mapping, candidate pooling, preliminary interviews, and trade testing coordination.",
    iconName: "Briefcase",
    categories: ["Requirement Scoping", "Pre-screening", "Trade Testing Support", "Mobilization Updates"],
  },
  {
    id: "candidate-recruitment-assistance",
    title: "Candidate Recruitment Assistance",
    shortDesc: "Provide information and coordination to candidates throughout the recruitment process.",
    fullDesc: "Clear, transparent guidance for Indian candidates seeking legitimate overseas employment opportunities, ensuring they understand job descriptions, interview logistics, and legal documentation prerequisites.",
    iconName: "UserCheck",
    categories: ["Document Verification", "Interview Briefing", "Pre-departure Guidance", "Candidate Communication"],
  },
];

export interface IndustryItem {
  id: string;
  title: string;
  desc: string;
  image: string;
  roles: string[];
}

export const industriesData: IndustryItem[] = [
  {
    id: "construction",
    title: "Construction & Infrastructure",
    desc: "Sourcing for civil projects, road networks, commercial developments, and structural engineering projects.",
    image: "/images/ind-construction.jpg",
    roles: ["Civil Site Supervisors", "Carpenters & Masons", "Steel Fixers", "Crane Operators", "Safety Officers"],
  },
  {
    id: "engineering",
    title: "Engineering & Manufacturing",
    desc: "Talent coordination for heavy engineering facilities, automotive assemblies, and precision manufacturing.",
    image: "/images/ind-engineering.jpg",
    roles: ["Mechanical Engineers", "Electrical Engineers", "CNC Machinists", "QA/QC Technicians", "Draftsmen"],
  },
  {
    id: "hospitality",
    title: "Hospitality & Hotels",
    desc: "Service personnel sourcing for international hotel chains, catering enterprises, and resort destinations.",
    image: "/images/ind-hospitality.jpg",
    roles: ["Executive Chefs & Cooks", "Food & Beverage Captains", "Housekeeping Executives", "Front Office Personnel"],
  },
  {
    id: "healthcare",
    title: "Healthcare Support Roles",
    desc: "Candidate coordination for institutional healthcare, eldercare, clinics, and medical facility support.",
    image: "/images/ind-healthcare.jpg",
    roles: ["Nursing Aides", "Medical Lab Technicians", "Caregivers", "Biomedical Assistants", "Hospital Support Staff"],
  },
  {
    id: "logistics",
    title: "Logistics & Warehousing",
    desc: "Workforce sourcing for distribution centers, port terminals, freight hubs, and supply chain operators.",
    image: "/images/ind-logistics.jpg",
    roles: ["Forklift & Reach Truck Drivers", "Warehouse Inventory Clerks", "Packers & Sorters", "Logistics Coordinators"],
  },
  {
    id: "facility",
    title: "Facility Management",
    desc: "Comprehensive staffing for large commercial properties, corporate towers, and residential complexes.",
    image: "/images/ind-facility.jpg",
    roles: ["HVAC Technicians", "Facility Supervisors", "Plumbers & Electricians", "BMS Operators", "Maintenance Crews"],
  },
  {
    id: "retail",
    title: "Retail & Customer Service",
    desc: "Customer-facing and operational roles for supermarket chains, retail fashion malls, and luxury showrooms.",
    image: "/images/ind-retail.jpg",
    roles: ["Retail Sales Executives", "Cashiers & Store Associates", "Visual Merchandisers", "Customer Service Reps"],
  },
  {
    id: "trades",
    title: "Technical & Skilled Trades",
    desc: "Vocational tradesmen and certified technical specialists for industrial maintenance and fabrication.",
    image: "/images/ind-trades.jpg",
    roles: ["6G Certified Welders", "Industrial Electricians", "Pipe Fabricators", "Instrumentation Technicians"],
  },
];

export interface DestinationItem {
  id: string;
  region: string;
  overview: string;
  sectors: string[];
  notes: string;
}

export const destinationsData: DestinationItem[] = [
  {
    id: "gulf",
    region: "Gulf Region (GCC)",
    overview: "Coordinating recruitment for construction, facility maintenance, engineering, oil & gas auxiliary services, and hospitality across member states.",
    sectors: ["Infrastructure Development", "Oil & Gas Support", "Hospitality & Catering", "Facilities Management"],
    notes: "Recruitment is subject to approved employer visas, medical fitness certificates (GAMCA/Wafid), and valid work permit authorizations.",
  },
  {
    id: "middle-east",
    region: "Broader Middle East",
    overview: "Supporting emerging commercial sectors, technical fabrication units, and municipal utility infrastructure programs.",
    sectors: ["Heavy Industrial Fabrication", "Water & Energy Projects", "Logistics & Storage", "Commercial Services"],
    notes: "All deployments adhere strictly to destination country labour regulations and bilateral employment agreements.",
  },
  {
    id: "europe",
    region: "Europe",
    overview: "Assisting international partners seeking certified technical specialists, manufacturing technicians, logistics workers, and vocational tradesmen.",
    sectors: ["Manufacturing & Assembly", "Logistics & Transport", "Hospitality Support", "Skilled Trades"],
    notes: "Requires formal employer sponsorship, recognized credential evaluation, and compliance with EU/national work visa mandates.",
  },
  {
    id: "asia-pacific",
    region: "Asia-Pacific",
    overview: "Facilitating candidate coordination for specialized manufacturing, infrastructure, and technical service projects across the region.",
    sectors: ["Industrial Plants", "Civil Engineering", "Specialized Tradecraft", "Service Logistics"],
    notes: "Placement opportunities depend on quota authorizations, employer sponsorship, and required trade certifications.",
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqsData: FaqItem[] = [
  {
    question: "What services does NS International Manpower provide?",
    answer: "NS International Manpower provides professional manpower recruitment and overseas workforce placement coordination. We assist international employers with candidate sourcing, screening, trade verification coordination, and documentation logistics. We also assist Indian job seekers by providing genuine information regarding legitimate employer opportunities and guiding them through the application process.",
  },
  {
    question: "How can an employer submit a manpower requirement?",
    answer: "Employers and overseas recruitment managers can submit their detailed manpower demands directly through our Employer Enquiry form on this website, or by emailing our corporate desk at nawabhasmi1901@gmail.com. Our team will review the required job roles, volume, destination location, and statutory prerequisites to discuss a tailored recruitment plan.",
  },
  {
    question: "How can candidates register their profiles?",
    answer: "Job seekers can submit their resume, professional qualifications, work history, and preferred destination countries via our Candidate Registration portal. Candidate profiles are reviewed against verified client openings, and eligible candidates are contacted when matching opportunities arise.",
  },
  {
    question: "What documents may be required for overseas employment?",
    answer: "Required documents typically include a valid passport (with at least 6–8 months remaining validity), updated curriculum vitae (CV), educational and trade certificates, previous employment experience letters, recent passport-sized photographs, and relevant medical fitness test reports as mandated by destination country laws.",
  },
  {
    question: "How does the recruitment process work?",
    answer: "Our recruitment process operates across four structured stages: (1) Requirement Understanding — reviewing employer specifications and legal criteria; (2) Candidate Sourcing — identifying eligible profiles from our talent pool; (3) Screening & Coordination — conducting pre-evaluations and client interviews/trade tests; (4) Recruitment & Documentation Support — coordinating visa paperwork, medical clearance, and travel logistics in accordance with applicable laws.",
  },
  {
    question: "Are international job opportunities guaranteed?",
    answer: "No. NS International Manpower maintains complete transparency and does NOT promise or guarantee overseas employment or visa issuances. Selection is strictly determined by employer assessment, candidate interview performance, trade test outcomes, medical clearance, and legal visa approvals granted by immigration authorities.",
  },
  {
    question: "How can I contact the recruitment team?",
    answer: "You can visit our registered office at 207, Office No. 2, 2nd Floor, Jewel Height, 23 BN Road, Lalbagh, Lucknow, Uttar Pradesh – 226001, India. You may also connect via email at nawabhasmi1901@gmail.com, call our office desk, or initiate a conversation through our WhatsApp enquiry channel during business hours (Monday – Saturday, 9:30 AM – 6:30 PM IST).",
  },
];

export interface JobListing {
  id: string;
  title: string;
  industry: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
  isSample: boolean;
}

export const sampleJobsData: JobListing[] = [
  {
    id: "JOB-SMP-101",
    title: "Structural Steel Fabricator / Welder",
    industry: "Engineering & Manufacturing",
    location: "Gulf Region",
    type: "Full-Time (Contract)",
    experience: "3 - 5 Years",
    description: "Sample listing for demonstration. Coordinate candidate sourcing for certified MIG/TIG structural fabricators capable of reading industrial fabrication drawings.",
    requirements: ["Trade certification (ITI or equivalent)", "Proven experience in heavy structural welding", "Valid passport"],
    isSample: true,
  },
  {
    id: "JOB-SMP-102",
    title: "Civil Site Supervisor",
    industry: "Construction & Infrastructure",
    location: "Middle East",
    type: "Full-Time (Contract)",
    experience: "4 - 7 Years",
    description: "Sample listing for demonstration. Candidate coordination for supervising civil construction works, manpower allocation, and site safety standards.",
    requirements: ["Diploma / Degree in Civil Engineering", "Previous overseas project experience preferred", "Strong team coordination skills"],
    isSample: true,
  },
  {
    id: "JOB-SMP-103",
    title: "Commercial HVAC Maintenance Technician",
    industry: "Facility Management",
    location: "Asia-Pacific",
    type: "Full-Time (Contract)",
    experience: "3 - 6 Years",
    description: "Sample listing for demonstration. Sourcing technicians for preventive and corrective maintenance of central chillers, VRF systems, and AHUs in corporate towers.",
    requirements: ["Technical diploma in Air Conditioning & Refrigeration", "Familiarity with BMS controls", "English communication capability"],
    isSample: true,
  },
  {
    id: "JOB-SMP-104",
    title: "Warehouse Logistics Supervisor",
    industry: "Logistics & Warehousing",
    location: "Europe",
    type: "Full-Time (Contract)",
    experience: "2 - 5 Years",
    description: "Sample listing for demonstration. Coordination for automated distribution center personnel, managing pallet inventory, scanner protocols, and dispatch queues.",
    requirements: ["Relevant warehouse operations background", "Forklift license preferred", "Good organizational aptitude"],
    isSample: true,
  },
  {
    id: "JOB-SMP-105",
    title: "Hotel F&B Captain / Service Associate",
    industry: "Hospitality & Hotels",
    location: "Gulf Region",
    type: "Full-Time (Contract)",
    experience: "2 - 4 Years",
    description: "Sample listing for demonstration. Sourcing energetic hospitality staff for 4-star and 5-star hotel banquet and dining operations.",
    requirements: ["Diploma or degree in Hotel Management", "Pleasing personality and fluent spoken English", "Customer-oriented demeanor"],
    isSample: true,
  },
];
