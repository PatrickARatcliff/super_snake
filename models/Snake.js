function Snake(scl, img) {
  let cols = floor(width / scl);
  let rows = floor(height / scl);

  // this.size = scl;
  this.x = 250;
  this.y = 250;
  this.xSpeed = 0;
  this.ySpeed = 0;
  // this.c = color(this.x, this.y, 0);
  this.total = 1;
  this.tail = [];

  // this.mySquare = (x, y, size, backgroundColor, strokeColor) => {
  //   stroke(strokeColor);
  //   strokeWeight(1);
  //   fill(backgroundColor);
  //   quad(x, y, x + size, y, x + size, y + size, x, y + size);
  //   stroke(255, 0, 0, 50);
  //   line(x, y, x + size, y + size);
  //   line(x, y + size, x + size, y);
  // };

  this.head = (x, y) => {
    noStroke();
    noFill();
    image(img, x - 2.5, y - 2.5, scl + 5, scl + 5);
  };

  this.eat = (pos) => {
    const prox = dist(this.x, this.y, pos.x, pos.y);
    if (prox < 10) {
      // console.log("eat");
      this.total++;
      return true;
    } else {
      return false;
    }
  };

  this.update = () => {
    if (this.total === this.tail.length) {
      for (let i = 0; i < this.tail.length - 1; i++) {
        this.tail[i] = this.tail[i + 1];
        
      }
    }
    this.tail[this.total - 1] = createVector(this.x, this.y, scl, scl);

    this.x = this.x + this.xSpeed * scl;
    this.y = this.y + this.ySpeed * scl;
    this.x = constrain(this.x, 0, width - scl);
    this.y = constrain(this.y, 0, height - scl);
  };

  this.display = () => {
    if (this.tail.length > 1) {
      for (let i = 0; i < this.total; i++) {
        fill("green");
        noStroke();
        rect(this.tail[i].x, this.tail[i].y, scl, scl);
        
      }
    } else {
      for (let i = 0; i < this.total; i++) {
        fill("green");
        noStroke();
        rect(this.tail[i].x, this.tail[i].y, scl, scl);
      }
    }

    this.head(
      this.tail[this.tail.length - 1].x,
      this.tail[this.tail.length - 1].y
    );
  };

  this.direction = (x, y) => {
    this.xSpeed = x;
    this.ySpeed = y;
  };
}
