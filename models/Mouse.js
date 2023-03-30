function Mouse(scl, img) {
    let cols = floor(width/scl);
    let rows = floor(height/scl);
    
    this.x = (floor(random(cols))*scl);
    this.y = (floor(random(rows))*scl);
    // console.log(y);
    this.xSpeed = 0;
    this.ySpeed = 0;
    // this.c = GRAY;
  
    this.display = () => {
      noStroke();
      noFill();
      image(img, this.x, this.y, scl, scl);
    };
  
    this.locate = () => {
      // x = rect(floor(random(cols)), floor(random(rows)), scl, scl);
      // x.mult(scl);
      this.x = (floor(random(cols))*scl);
      this.y = (floor(random(rows))*scl);
      this.x = constrain(this.x, 0, width-scl);
      this.y = constrain(this.y, 0, height-scl);
      
    }
    // this.direction = (x, y) => {
    //   this.xSpeed = x;
    //   this.ySpeed = y;
    // };
  }
  