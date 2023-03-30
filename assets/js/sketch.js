let pcc;
let mouse;
let scl = 10;

let width = 500;
let height = 500;

let cols = Math.floor(width / scl);
let rows = Math.floor(height / scl);

function setup() {
  createCanvas(width, height);
  pcc = new Snake(245, 245);
  mouse = new Mouse();
  mouse.locate();
  // console.log(mouse);
  frameRate(10);
}

function draw() {
  background(0);
  pcc.update();
  pcc.display();
  mouse.display();
  if (pcc.eat(mouse)) {
    mouse.locate();
  }
};

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
