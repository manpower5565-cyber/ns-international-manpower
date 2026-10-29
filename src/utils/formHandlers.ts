// Form handling utilities for lead generation and recruitment submissions

export interface EmployerEnquiryData {
  id?: string;
  timestamp?: string;
  companyName: string;
  contactPerson: string;
  businessEmail: string;
  phoneNumber: string;
  industry: string;
  requiredJobRoles: string;
  workersCount: string;
  preferredLocation: string;
  additionalRequirements?: string;
}

export interface CandidateRegistrationData {
  id?: string;
  timestamp?: string;
  fullName: string;
  mobileNumber: string;
  emailAddress: string;
  currentLocation: string;
  qualification: string;
  workExperience: string;
  preferredJobRole: string;
  preferredDestination: string;
  resumeFileName?: string;
  consent: boolean;
}

export interface ContactMessageData {
  id?: string;
  timestamp?: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const STORAGE_KEYS = {
  EMPLOYERS: "ns_employer_enquiries",
  CANDIDATES: "ns_candidate_registrations",
  CONTACT: "ns_contact_messages",
};

export async function submitEmployerEnquiry(data: EmployerEnquiryData): Promise<{ success: boolean; message: string; recordId: string }> {
  // Simulate network delay for realistic WordPress / server interaction
  await new Promise((resolve) => setTimeout(resolve, 800));

  // Basic validation check
  if (!data.companyName || !data.contactPerson || !data.businessEmail || !data.phoneNumber || !data.industry || !data.requiredJobRoles) {
    throw new Error("Please fill in all mandatory fields before submitting.");
  }

  const recordId = `EMP-${Date.now().toString().slice(-6)}`;
  const record = {
    ...data,
    id: recordId,
    timestamp: new Date().toISOString(),
  };

  try {
    const existing = JSON.parse(localStorage.getItem(STORAGE_KEYS.EMPLOYERS) || "[]");
    existing.unshift(record);
    localStorage.setItem(STORAGE_KEYS.EMPLOYERS, JSON.stringify(existing));
  } catch (err) {
    console.warn("Local storage write failed", err);
  }

  return {
    success: true,
    message: "Thank you for sharing your workforce requirement. Our international recruitment desk will review your specifications and contact your representative within 24 business hours.",
    recordId,
  };
}

export async function submitCandidateRegistration(data: CandidateRegistrationData): Promise<{ success: boolean; message: string; recordId: string }> {
  await new Promise((resolve) => setTimeout(resolve, 900));

  if (!data.fullName || !data.mobileNumber || !data.emailAddress || !data.qualification || !data.workExperience || !data.preferredJobRole || !data.consent) {
    throw new Error("Please complete all required fields and confirm candidate processing consent.");
  }

  const recordId = `CND-${Date.now().toString().slice(-6)}`;
  const record = {
    ...data,
    id: recordId,
    timestamp: new Date().toISOString(),
  };

  try {
    const existing = JSON.parse(localStorage.getItem(STORAGE_KEYS.CANDIDATES) || "[]");
    existing.unshift(record);
    localStorage.setItem(STORAGE_KEYS.CANDIDATES, JSON.stringify(existing));
  } catch (err) {
    console.warn("Local storage write failed", err);
  }

  return {
    success: true,
    message: "Your profile has been successfully registered with NS International Manpower. Our recruitment team will review your qualifications against active employer requirements.",
    recordId,
  };
}

export async function submitContactMessage(data: ContactMessageData): Promise<{ success: boolean; message: string; recordId: string }> {
  await new Promise((resolve) => setTimeout(resolve, 700));

  if (!data.name || !data.email || !data.phone || !data.message) {
    throw new Error("Please provide your name, contact email, phone number, and message.");
  }

  const recordId = `MSG-${Date.now().toString().slice(-6)}`;
  const record = {
    ...data,
    id: recordId,
    timestamp: new Date().toISOString(),
  };

  try {
    const existing = JSON.parse(localStorage.getItem(STORAGE_KEYS.CONTACT) || "[]");
    existing.unshift(record);
    localStorage.setItem(STORAGE_KEYS.CONTACT, JSON.stringify(existing));
  } catch (err) {
    console.warn("Local storage write failed", err);
  }

  return {
    success: true,
    message: "Thank you for reaching out to NS International Manpower. Your enquiry has been received and routed to our Lalbagh, Lucknow office desk.",
    recordId,
  };
}
