import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ContactForm, ContactInfo } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contactInfo: ContactInfo = {
    email: 'soukaina@smat-archi.com',
    phone: '+212 6 12 34 56 78',
    address: '123 Architecture Street, Casablanca, Morocco',
    socialMedia: {
      linkedin: 'https://linkedin.com/in/soukaina-matfi',
      instagram: 'https://instagram.com/smat_archi',
      behance: 'https://behance.net/smat-archi',
      pinterest: 'https://pinterest.com/smat-archi'
    },
    officeHours: 'Monday - Friday: 9:00 AM - 6:00 PM'
  };

  constructor() { }

  getContactInfo(): Observable<ContactInfo> {
    return of(this.contactInfo);
  }

  submitContactForm(form: ContactForm): Observable<{ success: boolean; message: string }> {
    // In a real application, this would send the form data to a backend API
    console.log('Contact form submitted:', form);
    
    // Simulate API call delay
    return new Observable(observer => {
      setTimeout(() => {
        observer.next({
          success: true,
          message: 'Thank you for your message! We will get back to you soon.'
        });
        observer.complete();
      }, 1000);
    });
  }

  validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  validatePhone(phone: string): boolean {
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{8,}$/;
    return phoneRegex.test(phone);
  }
}
