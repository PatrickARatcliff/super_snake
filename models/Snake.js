function Snake(x, y) {
  this.size = 10;
  this.x = x;
  this.y = y;
  this.xSpeed = 0;
  this.ySpeed = 0;
  this.c = color(this.x, this.y, 0);

  this.mySquare = (x, y, size, backgroundColor, strokeColor) => {
    stroke(strokeColor);
    strokeWeight(1);
    fill(backgroundColor);
    quad(x, y, x + size, y, x + size, y + size, x, y + size);
    stroke(255, 0, 0, 50);
    line(x, y, x + size, y + size);
    line(x, y + size, x + size, y);
  };

  this.update = () => {
    this.x = this.x + this.xSpeed * scl;
    this.y = this.y + this.ySpeed * scl;
    this.c = color(this.x, this.y, 0);
    this.x = constrain(this.x, 0, width - this.size);
    this.y = constrain(this.y, 0, height - this.size);
  };

  this.display = () => {
    this.mySquare(this.x, this.y, this.size, this.c, "red");
  };

  this.direction = (x, y) => {
    this.xSpeed = x;
    this.ySpeed = y;
  };

  this.eat = (position) => {
    const prox = dist(this.x, this.y, position.x, position. y);
    if (prox < 5) {
      console.log("eat");
      return true;
    } else {
      return false;
    }
  };
};
