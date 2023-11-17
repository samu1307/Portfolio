export class AnimationText {

  tittle: string[] = [];
  colors: string[] = ['#E87461', '#EDD382', '#275DAD'];

  toArray(words: string[]): string[][] {
    const result: string[][] = [];
    words.forEach((word) => {
      const wordArray = Array.from(word);
      result.push(wordArray);
    });
    return result;
  }

  async animationText(words: string[]): Promise<string> {

    const arrWords = this.toArray(words);

    this.tittle = arrWords[0];

    await this.delay(2000);
    await this.removeText(this.tittle);
    await this.delay(500);

    while (true) {

      for (let i = 0; i < arrWords.length; i++) {

        let number = Math.floor(Math.random() * 3)
        // this.color = this.colors[number];
        // this.colorBorder.emit(this.color)
        await this.addText(arrWords[i]);
        await this.delay(4000);
        await this.removeText(arrWords[i]);

        return this.colors[number]

      }

    }
  }


  addText(arr: string[]): Promise<void> {
    return new Promise<void>(resolve => {
      arr.forEach((l, i) => {
        setTimeout(() => {
          this.tittle.push(l);
          if (i === arr.length - 1) resolve();
        }, (i + 1) * 100);
      });
    });
  }

  removeText(arr: string[]): Promise<void> {
    return new Promise<void>(resolve => {
      for (let i = 0; i < arr.length; i++) {
        setTimeout(() => {
          this.tittle.pop();
          if (i === arr.length - 1) resolve();
        }, (i + 1) * 100);
      }
    })
  }

  delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}