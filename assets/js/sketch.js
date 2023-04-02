let pcc, mouse, gameText, myFont, scl;
let newText = "CLICK TO START";
// Starting FPS
let fr = 12;
let splatters = [];

let running = false;

function preload() {
  myFont = loadFont('assets/fonts/SanitariumBB.ttf');
  snakeHead = loadImage("assets/images/square_snake.svg");
  mouseIcon = loadImage("assets/images/mouse.svg");
  afterMath = loadImage("assets/images/blood.png");
  fieldBG = loadImage("assets/images/field_bg.jpeg");
  soundFormats("wav", "mp3");
  eatSound = loadSound("assets/audio/num.wav");
  bgMusic = loadSound("assets/audio/thrash_metal.mp3");
}

function setup() {
  windowWidth = constrain(windowWidth, 0, displayWidth);
  height = windowWidth;
  scl = height / 28;
  // Create variables to snap objects to grid
  let cols = floor(windowWidth / scl);
  let rows = floor(height / scl);

  createCanvas(windowWidth, height);
  background(0);
  gameText = new Txt(newText, myFont);
  gameText.display();
  pcc = new Snake(scl, snakeHead);
  mouse = new Mouse(scl, mouseIcon);
  bgMusic.setVolume(0.33);
  frameRate(fr);
}

function draw() {
  // Render splatter for each location where mouse is eaten
  mouse.splatter();
  // Pause game with spacebar event
  if (!running) return;
  // everything after this point doesn't run
  background(fieldBG);
  mouse.splatter();
  // mouse.display();
  // Define actions when mouse "eaten" by snake
  if (pcc.eat(mouse)) {
    // Create/push splatter objects to array for rendering
    splatters.push({ x: mouse.x, y: mouse.y });
    // Re-locate mouse
    mouse.locate();
    for (let i = 0; i < pcc.tail.length; i++) {
      let segment = pcc.tail[i];
      // If mouse is re-located on the snakes tail
      let prox = dist(mouse.x, mouse.y, segment.x, segment.y);
      if (prox < 1) {
        // Re-locate mouse until no longer on tail
        do {
          mouse.locate();
          // Reset proximity for new mouse location
          prox = dist(mouse.x, mouse.y, segment.x, segment.y);
        } while (prox < 1);
      }
    }
    eatSound.play();
  }
  mouse.display();
  pcc.gameOver();
  pcc.update();
  pcc.display();
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
      gameText = new Txt(newText, myFont);
      gameText.paused();
    } else {
      bgMusic.loop();
    }
  }
}
