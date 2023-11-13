import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../shared/components/nav/nav.component';
import { MainComponent } from './components/main/main.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavComponent,
    MainComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  scrollH(event: WheelEvent){
    const contScrollH = document.querySelector('.scrollH');
    if(contScrollH){
      contScrollH.scrollLeft += event.deltaY * 0.1;
    }
  }

}
