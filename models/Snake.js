function Snake(scl, img) {
  let cols = floor(windowWidth / scl);
  let rows = floor(height / scl);

  this.x = windowWidth / 10;
  this.y = height / 10;
  this.xSpeed = 0;
  this.ySpeed = 0;
  this.total = 1;
  this.tail = [];
  this.img = img;
  // Create unique tile using image
  this.head = (x, y, img, size) => {
    noStroke();
    noFill();
    image(img, x - size / 2, y - size / 2, scl + size, scl + size);
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
    running = true;
    newText = "";
    this.x = windowWidth / 10;
    this.y = height / 10;
    this.img = img;
    this.xSpeed = 1;
    this.ySpeed = 0;
    this.total = 0;
    this.tail = [];
    splatters = [];
    bgMusic.loop();
  };
  // Define conditions for the game to reset after snake death
  this.gameOver = () => {
    for (let i = 0; i < this.tail.length - 1; i++) {
      let pos = this.tail[i];
      let prox = dist(this.x, this.y, pos.x, pos.y);
      if (prox <= 1) {
        running = false;
        background(0);
        bgMusic.stop();
        newText = "YOU ARE DEAD";
        gameText = new Txt(newText, myFont);
        gameText.display();
        return true;
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
    this.x = constrain(this.x, 0, windowWidth - scl);
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
      this.tail[this.tail.length - 1].y,
      this.img,
      5
    );
  };
  // Change snake direction based on key press events
  this.direction = (x, y) => {
    this.xSpeed = x;
    this.ySpeed = y;
  };
}
