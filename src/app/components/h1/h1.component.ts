import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-h1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './h1.component.html',
  styleUrl: './h1.component.scss'
})
export class H1Component implements OnInit{

  @Input() color: string = '#275DAD';
  @Output() colorBorder = new EventEmitter<string>();

  constructor() {
    this.onIntersection = this.onIntersection.bind(this);
  }

  text: string[] = ['C', 'r', 'e', 'a', 't', 'i', 'v', 'o'];
  colors: string[] = ['#E87461', '#EDD382', '#275DAD'];
  words: string[][] = [
    ['F', 'r', 'o', 'n', 't', '-', 'E', 'n', 'd'],
    ['B', 'a', 'c', 'k', '-', 'E', 'n', 'd'],
    ['D', 'e', 's', 'i', 'g', 'n']
  ]
  isIntersectionAction: boolean = false;

  ngOnInit() {
    const observer = new IntersectionObserver(this.onIntersection, { threshold: 0.5 });
    const element = document.querySelector('h1');
    if (element) observer.observe(element);
  }

  onIntersection(entries: { intersectionRatio: number; }[]) {
    entries.forEach(async (entry: { intersectionRatio: number; }) => {
      if (entry.intersectionRatio > 0.5 && !this.isIntersectionAction) {
        await this.delay(2000)
        this.animationText();
        this.isIntersectionAction = true;
      }
    });
  }

  async animationText(): Promise<void> {
    await this.removeText(this.text);
    await this.delay(500);
    while (true) {
      for (let i = 0; i < this.words.length; i++){
        let number = Math.floor(Math.random() * 3)
        this.color = this.colors[number];
        this.colorBorder.emit(this.color)
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
