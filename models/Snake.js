function Snake(scl, img) {
  let cols = floor(width / scl);
  let rows = floor(height / scl);

  this.x = width / 10;
  this.y = height / 10;
  this.xSpeed = 0;
  this.ySpeed = 0;
  this.total = 1;
  this.tail = [];
  // Create unique tile using image
  this.head = (x, y) => {
    noStroke();
    noFill();
    image(img, x - 2.5, y - 2.5, scl + 5, scl + 5);
  };
  // Return boolean for snake to eat mouse
  this.eat = (pos) => {
    const prox = dist(this.x, this.y, pos.x, pos.y);
    if (prox < 10) {
      this.total++;
      return true;
    } else {
      return false;
    }
  };
  // Define actions for the game to start
  this.gameStart = () => {
    this.xSpeed = 1;
  };
  // Define conditions for the game to reset after snake death
  this.gameOver = () => {
    for (let i = 0; i < this.tail.length - 1; i++) {
      let pos = this.tail[i];
      let prox = dist(this.x, this.y, pos.x, pos.y);
      if (prox <= 1) {
        this.x = width / 10;
        this.y = height / 10;
        this.xSpeed = 0;
        this.ySpeed = 0;
        this.total = 0;
        this.tail = [];
      }
    }
  };
  // Create animation for snake(pcc) & conditions for tail growth, constraints for rendering
  this.update = () => {
    // Shift tail elements in array to create tail based on "movement history"
    if (this.total === this.tail.length) {
      for (let i = 0; i < this.tail.length - 1; i++) {
        this.tail[i] = this.tail[i + 1];
      }
    }
    // Create/store elements in tail array
    this.tail[this.total - 1] = createVector(this.x, this.y, scl, scl);

    this.x = this.x + this.xSpeed * scl;
    this.y = this.y + this.ySpeed * scl;
    this.x = constrain(this.x, 0, width - scl);
    this.y = constrain(this.y, 0, height - scl);
  };

  this.display = () => {
    if (this.tail.length > 1) {
      // Create and render tail element
      for (let i = 0; i < this.total; i++) {
        fill("green");
        noStroke();
        rect(this.tail[i].x, this.tail[i].y, scl, scl);
      }
    }
    // Change unique tile for initial (last) element in tail array
    this.head(
      this.tail[this.tail.length - 1].x,
      this.tail[this.tail.length - 1].y
    );
  };
  // Change snake direction based on key press events
  this.direction = (x, y) => {
    this.xSpeed = x;
    this.ySpeed = y;
  };
}
