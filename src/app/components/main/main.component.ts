import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardInfoMainComponent } from '../card-info-main/card-info-main.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CommonModule,
    CardInfoMainComponent
  ],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  img!: string;
  aspect: string = '1 / 1';
  color: string = '#275DAD';
  gradient: string = 'radial-gradient(farthest-corner circle at 50% 50%, white 0%, 2%, #424242 70% 0%);';

  ngOnInit(): void {
    // const userAgent = navigator.userAgent;
    // const browser = userAgent.includes('Edg')

    // if (browser) {
    //   this.img = '../../../assets/img/note.png';
    // } else {
    //   this.img = '../../../assets/img/photo.avif';
    // }
  }

  getColor(colorBorder: string) {
    if (colorBorder !== this.color) {
      this.color = colorBorder;
      let number1 = Math.random() + 1;
      let number2 = Math.random() + 1;
      this.aspect = `${number1} / ${number2}`;
    }
  }

  openInfo(info: Element, btnInfo: Element): void {
    let isActiveInfo = info.classList.contains('infoView');
    let translateBtn = (value: string) => btnInfo.setAttribute('style', `transform: translateY(${value});`);

    info.classList.toggle('infoView', !isActiveInfo);
    if (!isActiveInfo) translateBtn(`${info.clientHeight - (0.65 * btnInfo.clientHeight)}px`);
    else translateBtn('-65%');
  }

}
