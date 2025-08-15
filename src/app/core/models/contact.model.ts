export interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject: string;
  message: string;
  projectType?: 'residential' | 'commercial' | 'public' | 'consultation' | 'other';
  budget?: string;
  timeline?: string;
  preferredContact?: 'email' | 'phone';
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
  socialMedia: {
    linkedin?: string;
    instagram?: string;
    behance?: string;
    pinterest?: string;
  };
  officeHours: string;
}
