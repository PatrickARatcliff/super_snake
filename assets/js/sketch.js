let pcc;
let mouse;
let scl = 10;

let width = 500;
let height = 500;

function setup() {
  let cols = floor(width / scl);
  let rows = floor(height / scl);

  createCanvas(width, height);
  pcc = new Snake(scl);
  console.log(pcc);
  mouse = new Mouse(scl);
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
    console.log(mouse)
  }
}

function keyPressed(event) {
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
