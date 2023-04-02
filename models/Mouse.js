function Mouse(scl, img) {
  let cols = floor(windowWidth / scl);
  let rows = floor(height / scl);

  this.x = floor(random(cols)) * scl;
  this.y = floor(random(rows)) * scl;
  this.xSpeed = 0;
  this.ySpeed = 0;
  // Render mouse using unique image
  this.display = () => {
    noStroke();
    noFill();
    image(img, this.x, this.y, scl, scl);
  };

  this.locate = () => {
    // Locate/Re-locate mouse to random grid space
    this.x = floor(random(cols)) * scl;
    this.y = floor(random(rows)) * scl;
    this.x = constrain(this.x, 0, windowWidth - scl);
    this.y = constrain(this.y, 0, height - scl);
  };

  this.splatter = () => {
    for (let i = 0; i < splatters.length; i++) {
      let splatter = splatters[i];
      image(afterMath, splatter.x - 20, splatter.y - 20, scl + 40, scl + 40);
    }
  };
}
