let pcc;
let mouse;
let scl = 25;
let fr = 11; //starting FPS
let img;
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
  // Create variables to snap objects to grid
  let cols = floor(width / scl);
  let rows = floor(height / scl);

  createCanvas(width, height);
  pcc = new Snake(scl, snakeHead);
  mouse = new Mouse(scl, mouseIcon);
  bgMusic.setVolume(0.33);
  bgMusic.loop();
  frameRate(fr);
}

function draw() {
  background(fieldBG);
  // Render splatter for each location where mouse is eaten  
  for (let i = 0; i < splatters.length; i++) {
    let splatter = splatters[i];
    image(afterMath, splatter.x - 10, splatter.y - 10, scl + 20, scl + 20);
  }
  // Define actions when mouse "eaten" by snake
  if (pcc.eat(mouse)) {
    // Create/push splatter objects to array for rendering
    splatters.push({ x: mouse.x, y: mouse.y });
    // Re-locate mouse 
    mouse.locate();
    eatSound.play();
  } 
  
  pcc.gameOver();
  pcc.update();
  pcc.display();
  mouse.display(); 
}
// Start game via mouse-click
function mouseClicked(event) {
  event.preventDefault();
  pcc.gameStart();
} 
// Change snake direction using Snake object direction function
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
