import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project, ProjectFilter } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project[] = [
    {
      id: '1',
      title: 'Modern Villa Design',
      description: 'A contemporary residential villa that seamlessly blends indoor and outdoor living spaces.',
      shortDescription: 'Contemporary residential villa with open-plan design',
      location: 'Casablanca, Morocco',
      year: 2023,
      area: '450 sqm',
      status: 'completed',
      category: 'residential',
      images: [
        {
          id: '1',
          url: '/assets/images/projects/villa-1.jpg',
          alt: 'Modern Villa Exterior',
          isMain: true,
          category: 'exterior'
        }
      ],
      features: ['Open-plan living', 'Large windows', 'Sustainable materials'],
      technologies: ['Reinforced concrete', 'Glass facades', 'Solar panels'],
      client: 'Private Client',
      publishedAt: new Date('2023-12-01'),
      slug: 'modern-villa-design'
    },
    {
      id: '2',
      title: 'Urban Office Complex',
      description: 'A mixed-use development combining modern office spaces with retail and dining areas.',
      shortDescription: 'Mixed-use urban development',
      location: 'Rabat, Morocco',
      year: 2023,
      area: '2,500 sqm',
      status: 'in-progress',
      category: 'commercial',
      images: [
        {
          id: '2',
          url: '/assets/images/projects/office-1.jpg',
          alt: 'Office Complex Exterior',
          isMain: true,
          category: 'exterior'
        }
      ],
      features: ['Flexible office spaces', 'Green building design', 'Smart technology'],
      technologies: ['Steel frame', 'Green roof', 'Smart building systems'],
      client: 'Corporate Client',
      publishedAt: new Date('2023-11-15'),
      slug: 'urban-office-complex'
    }
  ];

  constructor() { }

  getProjects(): Observable<Project[]> {
    return of(this.projects);
  }

  getProjectById(id: string): Observable<Project | undefined> {
    const project = this.projects.find(p => p.id === id);
    return of(project);
  }

  getProjectBySlug(slug: string): Observable<Project | undefined> {
    const project = this.projects.find(p => p.slug === slug);
    return of(project);
  }

  getProjectsByFilter(filter: ProjectFilter): Observable<Project[]> {
    let filteredProjects = this.projects;

    if (filter.category) {
      filteredProjects = filteredProjects.filter(p => p.category === filter.category);
    }

    if (filter.status) {
      filteredProjects = filteredProjects.filter(p => p.status === filter.status);
    }

    if (filter.year) {
      filteredProjects = filteredProjects.filter(p => p.year === filter.year);
    }

    if (filter.location) {
      filteredProjects = filteredProjects.filter(p => 
        p.location.toLowerCase().includes(filter.location!.toLowerCase())
      );
    }

    return of(filteredProjects);
  }

  getFeaturedProjects(): Observable<Project[]> {
    return of(this.projects.filter(p => p.status === 'completed').slice(0, 3));
  }
}
