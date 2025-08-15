import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ContactService } from '../../../core/services/contact.service';
import { ContactInfo } from '../../../core/models/contact.model';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {
  contactInfo: ContactInfo | null = null;
  currentYear = new Date().getFullYear();

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.contactService.getContactInfo().subscribe(info => {
      this.contactInfo = info;
    });
  }

  get socialMediaLinks() {
    if (!this.contactInfo?.socialMedia) {
      return [];
    }
    
    const links = [];
    if (this.contactInfo.socialMedia.linkedin) {
      links.push({ type: 'linkedin', url: this.contactInfo.socialMedia.linkedin, icon: 'linkedin' });
    }
    if (this.contactInfo.socialMedia.instagram) {
      links.push({ type: 'instagram', url: this.contactInfo.socialMedia.instagram, icon: 'photo_camera' });
    }
    if (this.contactInfo.socialMedia.behance) {
      links.push({ type: 'behance', url: this.contactInfo.socialMedia.behance, icon: 'design_services' });
    }
    if (this.contactInfo.socialMedia.pinterest) {
      links.push({ type: 'pinterest', url: this.contactInfo.socialMedia.pinterest, icon: 'bookmark' });
    }
    
    return links;
  }
}
