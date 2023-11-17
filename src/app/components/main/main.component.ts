import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { H1Component } from '../h1/h1.component';
import { CardInfoMainComponent } from '../card-info-main/card-info-main.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CommonModule,
    H1Component,
    CardInfoMainComponent
  ],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent{

  aspect: string = '1 / 1';
  color: string = '#275DAD';
  gradient: string = 'radial-gradient(farthest-corner circle at 50% 50%, white 0%, 2%, #424242 70% 0%);';

  getColor(colorBorder: string) {  
    if (colorBorder !== this.color) {
      this.color = colorBorder;
      let number1 = Math.random() + 1;
      let number2 = Math.random() + 1;
      this.aspect = `${number1} / ${number2}`
    }
  }

}
