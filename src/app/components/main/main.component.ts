import { Component, HostListener, } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  text: string[] = ['C', 'r', 'e', 'a', 't', 'i', 'v', 'o'];
  words: string[][] = [
    ['A', 'u', 't', 'o', 'd', 'i', 'd', 'a', 'c', 't', 'a'],
    ['I', 'n', 'n', 'o', 'v', 'a', 'd', 'o', 'r'],
    ['C', 'r', 'e', 'a', 't', 'i', 'v', 'o']
  ]
  action: boolean = false;

  onMouseOver() {
    if (!this.action) {
      this.animationText();
      this.action = true;  // Marca que la animación se ha ejecutado
    }
  }

  async animationText() {
    await this.removeText(this.text);
    await this.delay(1000);
    while (true) {
      for (let i = 0; i < this.words.length; i++) {
        await this.addText(this.words[i]);
        await this.delay(4000);
        await this.removeText(this.words[i]);
      }
    }
  }

  addText(arr: string[]): Promise<void> {
    return new Promise<void>(resolve => {
      arr.forEach((l, i) => {
        setTimeout(() => {
          this.text.push(l);
          if (i === arr.length - 1) resolve();
        }, (i + 1) * 100);
      });
    });
  }

  removeText(arr: string[]): Promise<void> {
    return new Promise<void>(resolve => {
      for (let i = 0; i < arr.length; i++) {
        setTimeout(() => {
          this.text.pop();
          if (i === arr.length - 1) resolve();
        }, (i + 1) * 100);
      }
    });
  }

  delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

