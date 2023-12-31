import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-text-animated',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text-animated.component.html',
  styleUrl: './text-animated.component.scss'
})
export class TextAnimatedComponent implements OnInit{

  @Input() color: string = '#275DAD';
  @Output() colorBorder = new EventEmitter<string>();

  constructor() {
    this.onIntersection = this.onIntersection.bind(this);
  }

  words: string[] = ['Front-End', 'Back-End', 'Design✨'];
  wordsToArray: string[][] = this.toArray(this.words);
  text: string[] = ['F','r','o','n','t','-','E','n','d'];
  colors: string[] = ['#E87461', '#EDD382', '#275DAD'];
  isIntersectionAction: boolean = false;

  ngOnInit() {
    const observer = new IntersectionObserver(this.onIntersection, { threshold: 0.5 });
    const element = document.querySelector('h2');
    if (element) observer.observe(element);
  }

  onIntersection(entries: { intersectionRatio: number; }[]) {
    entries.forEach(async (entry: { intersectionRatio: number; }) => {
      if (entry.intersectionRatio > 0.5 && !this.isIntersectionAction) {
        this.animationText();
        this.isIntersectionAction = true;
      }
    });
  }

  toArray(words: string[]): string[][] {
    const result: string[][] = [];
    words.forEach((word) => {
      const wordArray = Array.from(word);
      result.push(wordArray);
    });
    return result;
  }

  async animationText(): Promise<void> {
    let primary = true;
    await this.delay(2000)
    await this.removeText();
    while (true) {
      for (let i = 0; i < this.wordsToArray.length; i++){
        if(primary) {i = 1; primary = false;}
        let number = Math.floor(Math.random() * 3)
        this.color = this.colors[number];
        this.colorBorder.emit(this.color)
        await this.addText(this.wordsToArray[i]);
        await this.delay(4000);
        await this.removeText();
      }
    }
  }

  addText(arr: string[]): Promise<void> {
    return new Promise<void>(resolve => {
      arr.forEach((l, i) => {
        setTimeout(() => {
          this.text.push(l);
          if (arr.length === i + 1) resolve();
        }, (i + 1) * 100);
      });
    });
  }

  removeText(): Promise<void> {
    return new Promise<void>(resolve => {
      for (let i = 0; i < this.text.length; i++) {
        setTimeout(() => {
          this.text.pop();
          if (this.text.length === 0) resolve();
        }, (i + 1) * 100);
      }
    });
  }

  delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}
