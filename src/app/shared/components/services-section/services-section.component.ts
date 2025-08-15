import { Component } from '@angular/core';

interface Service {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [],
  templateUrl: './services-section.component.html'
})
export class ServicesSectionComponent {
  services: Service[] = [
    {
      icon: 'home',
      title: 'Residential Design',
      description: 'Custom homes designed for clarity and comfort.'
    },
    {
      icon: 'business',
      title: 'Commercial Projects',
      description: 'Productive spaces that make a lasting impression.'
    },
    {
      icon: 'design_services',
      title: 'Interior Design',
      description: 'Thoughtful interiors for inspiring environments.'
    },
    {
      icon: 'location_city',
      title: 'Urban Planning',
      description: 'Sustainable, livable urban strategies.'
    }
  ];
}
