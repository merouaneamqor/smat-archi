import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../core/services/project.service';
import { Project } from '../../core/models/project.model';
import { HeroSectionComponent } from '../../shared/components/hero-section/hero-section.component';
import { FeaturedProjectsComponent } from '../../shared/components/featured-projects/featured-projects.component';
import { ServicesSectionComponent } from '../../shared/components/services-section/services-section.component';
import { CtaSectionComponent } from '../../shared/components/cta-section/cta-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroSectionComponent,
    FeaturedProjectsComponent,
    ServicesSectionComponent,
    CtaSectionComponent
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  featuredProjects: Project[] = [];
  isLoading = true;

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.projectService.getFeaturedProjects().subscribe(projects => {
      this.featuredProjects = projects;
      this.isLoading = false;
    });
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
