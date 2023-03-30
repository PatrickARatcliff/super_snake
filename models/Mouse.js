function Mouse() {
    this.size = 10;
    this.x = 0;
    // console.log(x);
    this.y = 0;
    // console.log(y);
    this.xSpeed = 0;
    this.ySpeed = 0;
    this.c = GRAY;
  
    this.display = () => {
      fill(this.c);
      stroke(255);
      ellipse(this.x + 5, this.y + 5, this.size, (this.size*(3/4)));
    };
  
    this.locate = () => {
      this.x = floor(random(cols) * scl);
      this.y = floor(random(rows) * scl);
      this.x = constrain(this.x, 0, width-this.size);
      this.y = constrain(this.y, 0, height-this.size);
    };
    
    // this.direction = (x, y) => {
    //   this.xSpeed = x;
    //   this.ySpeed = y;
    // };
  }