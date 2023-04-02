function Txt(string, newFont) {
    this.string = string;
    this.newFont = newFont;
    this.txtSize = height / 6;
    this.display = () => {
      textSize(this.txtSize);
      textAlign(CENTER);
      textFont(this.newFont);
      fill("rgb(29,0,0)");
      // text(this.string, windowWidth / 2, height / 2 - this.txtSize * 4);
      // fill("rgb(75,0,0)");
      text(this.string, windowWidth / 2, height / 2 - this.txtSize * 3);
      fill("rgb(32,0,0)");
      text(this.string, windowWidth / 2, height / 2 - this.txtSize * 2);
      fill("rgb(95,0,0)");
      text(this.string, windowWidth / 2, height / 2 - this.txtSize);
      fill("red");
      text(this.string, windowWidth / 2, height / 2);
      fill("rgb(95,0,0)");
      text(this.string, windowWidth / 2, height / 2 + this.txtSize);
      fill("rgb(41,0,0)");
      text(this.string, windowWidth / 2, height / 2 + this.txtSize * 2);
      fill("rgb(22,0,0)");
      text(this.string, windowWidth / 2, height / 2 + this.txtSize * 3); 
      // fill("rgb(29,0,0)");
      // text(this.string, windowWidth / 2, height / 2 + this.txtSize * 4);
    };
    this.paused = () => {
      textSize(this.txtSize);
      textAlign(CENTER);
      textFont(this.newFont);
      fill("red");
      text(this.string, windowWidth / 2, height / 2);
    }
  }
  