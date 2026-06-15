export interface AIProfile {
  tagline: string;
  professionalBio: string;
  seoTitle: string;
  seoMetaDescription: string;
  chamberGuide: string;
  patientAdvices: Array<{
    title: string;
    description: string;
  }>;
  brandStrategy: string[];
}

export interface DoctorInput {
  name: string;
  specialty: string;
  degrees: string;
  chamberName: string;
  chamberAddress: string;
  contactPhone: string;
  workingHours: string;
  language: string;
}
