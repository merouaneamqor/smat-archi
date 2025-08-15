import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Project } from '../../../core/models/project.model';

@Component({
  selector: 'app-featured-projects',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './featured-projects.component.html'
})
export class FeaturedProjectsComponent {
  @Input() projects: Project[] = [];
  @Input() isLoading: boolean = false;
}
