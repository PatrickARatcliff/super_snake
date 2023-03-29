let pcc;
let scl = 3;
let prey; 

function setup() {
  createCanvas(500, 500);
  pcc = new Snake();
}

function draw() {
  background(0);
  pcc.update();
  pcc.display();
}

function mySquare(x, y, size, backgroundColor, strokeColor) {
  stroke(strokeColor);
  strokeWeight(1);
  fill(backgroundColor);
  quad(x, y, x + size, y, x+ size, y + size, x, y + size);
  stroke(255, 0, 0, 50);
  line(x, y, x + size, y + size);
  line(x, y + size, x + size, y);
}

function mousePressed() {
  background(0);
  pcc.x = 245;
  pcc.y = 245;
  pcc.xSpeed = 0;
  pcc.ySpeed = 0;
}

function keyPressed(event) {
  event.preventDefault();
  if (keyCode === UP_ARROW) {
    pcc.direction(0, -1);
  } else if (event.keyCode === DOWN_ARROW) {
    pcc.direction(0, 1);
  } else if (event.keyCode === LEFT_ARROW) {
    pcc.direction(-1, 0);
  } else if (event.keyCode === RIGHT_ARROW) {
    pcc.direction(1, 0);
  } else if (event.key == " " || event.code == "Space" || event.keyCode == 32) {
    pcc.direction(0, 0);
  }
}
