import { Component, Output, EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero-section.component.html'
})
export class HeroSectionComponent {
  @Output() scrollToSection = new EventEmitter<string>();

  onScrollToSection(sectionId: string) {
    this.scrollToSection.emit(sectionId);
  }
}
