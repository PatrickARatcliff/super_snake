function Snake() {
  this.size = 10;
  this.x = 245;
  this.y = 245;
  this.xSpeed = 0;
  this.ySpeed = 0;
  this.c = color(this.x, this.y, 0)

  this.update = () => {
    this.x = this.x + this.xSpeed*scl;
    this.y = this.y + this.ySpeed*scl;
    this.c = color(this.x, this.y, 0);
    this.x = constrain(this.x, 0, width-this.size);
    this.y = constrain(this.y, 0, height-this.size);
  };

  this.display = () => {
    mySquare(this.x, this.y, this.size, this.c, ("red"));
  };

  this.direction = (x, y) => {
    this.xSpeed = x;
    this.ySpeed = y;
  };
}