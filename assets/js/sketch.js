let pcc;
let mouse;
let scl = 25;
let img;
let mySound;
let splatters = [];

let width = 700;
let height = 700;

function preload() {
  snakeHead = loadImage("assets/images/square_snake.svg");
  mouseIcon = loadImage("assets/images/mouse.svg");
  afterMath = loadImage("assets/images/blood.png");
  fieldBG = loadImage("assets/images/field_bg.jpeg");
  soundFormats("wav", "mp3");
  eatSound = loadSound("assets/audio/num.wav");
  bgMusic = loadSound("assets/audio/thrash_metal.mp3");
}

function setup() {
  let cols = floor(width / scl);
  let rows = floor(height / scl);

  createCanvas(width, height);
  pcc = new Snake(scl, snakeHead);
  // console.log(pcc);
  mouse = new Mouse(scl, mouseIcon);
  // console.log(mouse);
  bgMusic.setVolume(0.33);
  bgMusic.loop();
  frameRate(11);
}

function draw() {
  background(fieldBG);
  for (let i = 0; i < splatters.length; i++) {
    let splatter = splatters[i];
    image(afterMath, splatter.x - 10, splatter.y - 10, scl + 20, scl + 20);
  }
  pcc.update();
  pcc.display();
  mouse.display();

  if (pcc.eat(mouse)) {
    splatters.push({ x: mouse.x, y: mouse.y });
    console.log(splatters);
    mouse.locate();
    eatSound.play();
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
