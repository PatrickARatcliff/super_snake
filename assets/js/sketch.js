let pcc, mouse, gameText;
let newText = "CLICK TO START";
let scl = 25;
// Starting FPS
let fr = 11;
let splatters = [];

let running = false;

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
  background(0);
  gameText = new Txt(newText);
  gameText.display();
  pcc = new Snake(scl, snakeHead);
  mouse = new Mouse(scl, mouseIcon);
  bgMusic.setVolume(0.33);
  frameRate(fr);
}

function draw() {
  // Render splatter for each location where mouse is eaten
  for (let i = 0; i < splatters.length; i++) {
    let splatter = splatters[i];
    image(afterMath, splatter.x - 20, splatter.y - 20, scl + 40, scl + 40);
  }
  // Pause game with spacebar event
  if (!running) return;
  // everything after this point doesn't run
  background(fieldBG);
  for (let i = 0; i < splatters.length; i++) {
    let splatter = splatters[i];
    image(afterMath, splatter.x - 20, splatter.y - 20, scl + 40, scl + 40);
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
  if (!running) pcc.gameStart();
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
    running = !running; // Pause game/flip the boolean;
    if (!running) {
      bgMusic.pause();
      newText = "PAUSED";
      gameText = new Txt(newText); 
      gameText.paused();
    } else {
      bgMusic.loop();
      // newText = "";
    }
    
  }
}
