import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProjectService } from '../../core/services/project.service';
import { Project } from '../../core/models/project.model';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
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
