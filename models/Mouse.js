function Mouse(scl, img) {
    let cols = floor(width/scl);
    let rows = floor(height/scl);
    
    this.x = (floor(random(cols))*scl);
    this.y = (floor(random(rows))*scl);
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
      this.x = (floor(random(cols))*scl);
      this.y = (floor(random(rows))*scl);
      this.x = constrain(this.x, 0, width-scl);
      this.y = constrain(this.y, 0, height-scl);
      
    }
  }
  