import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextAnimatedComponent } from '../text-animated/text-animated.component';

@Component({
  selector: 'app-card-info-main',
  standalone: true,
  imports: [
    CommonModule,
    TextAnimatedComponent
  ],
  templateUrl: './card-info-main.component.html',
  styleUrl: './card-info-main.component.scss'
})
export class CardInfoMainComponent {


}
