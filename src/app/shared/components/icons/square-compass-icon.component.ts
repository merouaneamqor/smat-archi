import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-square-compass-icon',
  standalone: true,
  imports: [CommonModule],
  template: `
    <svg
      [attr.width]="size"
      [attr.height]="size"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="inline-block align-middle"
      [attr.stroke]="stroke"
      [attr.stroke-width]="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <!-- Compass (upper) -->
      <!-- Left leg of compass -->
      <path d="M100 40 L65 140" />
      <!-- Right leg of compass -->
      <path d="M100 40 L135 140" />
      <!-- Compass hinge/pivot -->
      <circle cx="100" cy="40" r="6" fill="none" />
      
      <!-- Square (lower, interlaced) -->
      <!-- Vertical arm of square -->
      <path d="M70 100 L70 160" />
      <!-- Horizontal arm of square -->
      <path d="M70 160 L130 160" />
      <!-- Square corner reinforcement -->
      <path d="M70 150 L80 150 L80 160" fill="none" />
      
      <!-- Letter G in center -->
      <text x="100" y="110" text-anchor="middle" dominant-baseline="central" 
            [attr.font-size]="fontSize" 
            [attr.fill]="stroke" 
            font-family="serif" 
            font-weight="bold">G</text>
    </svg>
  `
})
export class SquareCompassIconComponent {
  @Input() size: number | string = 96;
  @Input() stroke = 'currentColor';
  @Input() strokeWidth: number | string = 2;
  @Input() showG = true;
  
  get fontSize() {
    const sizeNum = typeof this.size === 'string' ? parseInt(this.size) : this.size;
    return Math.round(sizeNum * 0.25);
  }
}
