import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../shared/components/nav/nav.component';
import { MainComponent } from './components/main/main.component';
import { AboutMeComponent } from './components/about-me/about-me.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavComponent,
    MainComponent,
    AboutMeComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  descri: string = ' Esta es la descripción de la musica en un lorem ipsum con pan de molde y pan de molde de pan de molde'; 

  scrollH(event: WheelEvent){
    const contScrollH = document.querySelector('.scrollH');
    if(contScrollH){
      contScrollH.scrollLeft += event.deltaY * 0.1;
    }
  }

}
