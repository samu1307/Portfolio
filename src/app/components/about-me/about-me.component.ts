import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

  @Input() tittle!: string;
  @Input() descrip!: string;
  @Input() color!: string;
  @Input() url!: string;
  @Input() alt!: string;

}
