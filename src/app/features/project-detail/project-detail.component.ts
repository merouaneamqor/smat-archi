import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProjectService } from '../../core/services/project.service';
import { Project } from '../../core/models/project.model';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss'
})
export class ProjectDetailComponent implements OnInit {
  project: Project | undefined;

  constructor(private route: ActivatedRoute, private projectService: ProjectService) {}

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug') || '';
    this.projectService.getProjectBySlug(slug).subscribe(p => this.project = p);
  }
}
