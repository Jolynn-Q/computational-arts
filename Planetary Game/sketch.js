//Name：Ling Qiao
//Title: Planetary Game

//Gameplay: Press the LEFT_ARROW key to accelerate the movement of the planets; press the RIGHT_ARROW key to decelerate the movement of the planets. Click the left mouse button to explode the selected planet. This game can be played in both single-player and multiplayer modes. The faster the speed, the lower the probability of successfully exploding a planet by clicking the mouse.



// Game Instructions: Click on the mouse to explode the planets. Use the left and right arrow keys to change the speed of eye and planet movement.

// Load planet images
let fingerBall;
let earthBall;
let melonBall;
let pillBall;
let bubbleBall;
let cellBall;
let dotBall;
let squareBall;
let magic;
let magicBall;
let radar;
let dot;
let eyes;
let brand;

// Define data
let yPosition1;
let xPosition1;
let diameter = 20;
let r;
let angle = 0;
let circleRadius;
const numEyes = 5;
let eyeList = [];
let planetList = [];
let spd = 1;
let theta = 0;


// Load all images
function preload() {
  fingerBall = loadImage("fingerBall.png");
  earthBall = loadImage("earthBall.png");
  melonBall = loadImage("melonBall.png");
  pillBall = loadImage("pillBall.png");
  bubbleBall = loadImage("bubbleBall.png");
  cellBall = loadImage("cellBall.png");
  dotBall = loadImage("dotBall.png");
  squareBall = loadImage("squareBall.png");
  magic = loadImage("magic.png");
  radar = loadImage("radar.png");
  magicBall = loadImage("magicBall.png");
  dot = loadImage("dot.png");
  eyes = loadImage("eyes.gif");
  brand = loadImage("brand.gif");
}


function setup() {
  // Create canvas and set image mode
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  
// Initialize background ball positions
  yPosition1 = height / 2;
  xPosition1 = width / 2;
  
// Draw eyeballs: Loop through the eye array and call the display method for each eye object to draw them on the canvas.
  for (let i = 0; i < 10; i++) {
    eyeList[i] = new Eye();
  }
  
  // Planet drawing: Initialize planets and add more planets using planetList.push(new Planet(...));
  
  r = width / 12; // Initialize variable r, representing the radius of the planets, set to 1/12 of the canvas width.
  planetList.push(
    new Planet(
      cellBall,
      (1) / 10,
      ( 2) / 5,
      r * 1.8,
      r * 1.8,
      1.8
    )
  );
  planetList.push(
    new Planet(
      melonBall,
      (3.5) / 10,
      ( 0.7) / 5,
      r * 1.5,
      r * 1.5,
      2
    )
  );
  planetList.push(
    new Planet(
      fingerBall,
      (3) / 10,
      (3) / 5,
      r * 2.2,
      r * 2.2,
      3
    )
  );
  planetList.push(
    new Planet(
      earthBall,
      ( 5) / 10,
      ( 4) / 5,
      r * 2,
      r * 2,
      1
    )
  );
  planetList.push(
    new Planet(
      dotBall,
      ( 5.5) / 10,
      ( 2) / 5,
      r * 2,
      r * 2,
      3
    )
  );
  planetList.push(
    new Planet(
      pillBall,
      (8) / 10,
      ( 1.5) / 5,
      r * 2,
      r * 2,
      1.5
    )
  );
  planetList.push(
    new Planet(bubbleBall, (width * 8.5) / 10, (height * 4.5) / 5, r, r, 2.8)
  );
  planetList.push(
    new Planet(
      magicBall,
      ( 9) / 10,
      (3) / 5,
      r * 1.5,
      r * 1.5,
      4
    )
  );
  planetList.push(
    new Planet(
      squareBall,
      (1.5) / 10,
      (4) / 5,
      r * 1.3,
      r * 1.3,
      -3
    )
  );
  // planetList.push(new Planet()); Add more planets by pushing new Planet objects into the planetList array.
}


function draw() {
  // Clear the background
  background(0);
  theta += spd;

  // Draw background grid
  push();
  stroke(70);
  strokeWeight(3);
  for (let i = 0; i < 5; i++) {
    let y1 = (height / 5) * (i + 1);
    line(0, y1, width, y1);
  }
  for (let i = 0; i < 10; i++) {
    let x1 = (width / 10) * (i + 1);
    line(x1, 0, x1, height);
  }
  pop();

  // Draw background snowflakes
  push();
  f=random(100,150);
  stroke(f);
  k=random(2,7);
  strokeWeight(k);
  for (let i = 0; i < 1000; i++) {
    point(random(width), random(height));
  }
  pop();
  
  // Draw background balls
  for (let i = 0; i < 4; i++) {
    if (yPosition1 < height + diameter * 0.5) {
      yPosition1 = yPosition1 + 1;
    } else {
      yPosition1 = -diameter * 0.5;
    }
    let xo = (width / 5) * (i + 1);
    let x1 = width / 10 + (width / 5) * (i + 1);
    circle(xo, yPosition1, diameter);
    circle(xo, height - yPosition1, diameter);
    circle(xo, yPosition1 + 700, diameter / 2);
    circle(xo, height - yPosition1 + 700, diameter / 2);
  }

  for (let i = 0; i < 4; i++) {
    if (xPosition1 < width + diameter * 0.5) {
      xPosition1 = xPosition1 + 1;
    } else {
      xPosition1 = -diameter * 0.5;
    }
    let yo = (height / 5) * (i + 1);
    circle(xPosition1, yo, diameter * 0.7);
    circle(xPosition1 + 800, yo + height / 5, diameter);
    circle(width - xPosition1, yo, diameter * 0.7);
    circle(width - xPosition1 + 800, yo + height / 5, diameter);
  }
 
  // Draw planet backgrounds
  rotateAndDisplayImage(//cellBall的背景
    magic,
    (width * 1) / 10,
    (height * 2) / 5,
    r * 8,
    r * 8,
    1.8
  );
  rotateAndDisplayImage(//melonBall背景
    radar,
    (width * 3.5) / 10,
    (height * 0.7) / 5,
    r * 5,
    r * 5,
    -4
  );
  rotateAndDisplayImage(//fingerBall背景
    magic,
    (width * 3) / 10,
    (height * 3) / 5,
    r * 10,
    r * 10,
    -3
  );

    rotateAndDisplayImage(//earthball背景2
    magic,
    (width * 5) / 10,
    (height * 4) / 5,
    r * 10,
    r * 10,
    -1
  );
  rotateAndDisplayImage(//lightball背景
    dot,
    (width * 5.5) / 10,
    (height * 2) / 5,
    r * 6,
    r * 6,
    -3
  );
  rotateAndDisplayImage(//lightball背景2
    dot,
    (width * 5.5) / 10,
    (height * 2) / 5,
    r * 3.5,
    r * 3.5,
    3
  );
  rotateAndDisplayImage(//pillball背景1
    magic,
    (width * 8) / 10,
    (height * 1.5) / 5,
    r * 9,
    r * 9,
    -4.5
  );
    rotateAndDisplayImage(//pillball背景2
    dot,
    (width * 8) / 10,
    (height * 1.5) / 5,
    r * 6,
    r * 6,
    -1
  );

  rotateAndDisplayImage(//magicball背景1
    radar,
    (width * 9) / 10,
    (height * 3) / 5,
    r * 5,
    r * 5,
    5
  );

  rotateAndDisplayImage(//squareball背景
  dot,
    (width * 1.5) / 10,
    (height * 4) / 5,
    r * 6,
    r * 6,
    -0.5
  );

  //draw planet
  for (let i = 0; i < planetList.length; i++) {
    planetList[i].display();
  }

  // Draw eyes
  for (let i = 0; i < 10; i++) {
    eyeList[i].display();
  }
  
  // Draw game explanation
  image(brand, width*8.5/10 , height*4/5, width / 4*0.9, width / 6*0.9);
}

 
// Keyboard controls speed
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    spd -= 0.2;
  } else if (keyCode === RIGHT_ARROW) {
    spd += 0.2;
  }
  spd = constrain(spd, 0, 100);
}

// Resize the canvas
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


// Custom function: Rotate and display an image
function rotateAndDisplayImage(img, x, y, w, h, speed) {
  push();
  translate(x, y + sin(theta * 0.02 + x * 0.01 + y * 0.01) * 100);
  
  //Adjust the magnitude and speed of amplification and reduction
  let scaleFactor = 1 * sin(theta * 0.01 * speed); 
  scale(scaleFactor);
  rotate(radians(theta * speed));
  image(img, 0, 0, w, h);
  pop();
}


// Eye array programming
class Eye {
  constructor() {
    this.x = -random(0, 200);
    this.y = random(height);
    this.vx = random(5, 12);
    this.h = random(height / 15, height / 7);
    this.w = this.h * 1.5;
  }
  display() {
    this.x += this.vx * spd;
    if (this.x > width) {
      this.x = 0;
      this.y = random(height);
      this.vx = random(5, 12);
      this.h = random(height / 15, height / 7);
      this.w = this.h * 1.5;
    }
    image(eyes, this.x, this.y, this.w, this.h);
  }
}

// planet array programming
class Planet {
  constructor(img1, xscl, yscl, w1, h1, speed1) {
    this.img1 = img1;
    
    this.xscl = xscl;
    this.yscl = yscl;
    this.w1 = w1;
    this.h1 = h1;

    this.speed1 = speed1;

    this.part = [];
    this.died = 0;
  }
  display() {
    this.x=width*this.xscl
    this.y=height*this.yscl
    //Adjust the magnitude and speed of amplification and reduction
    let scaleFactor = 1 * sin(theta * 0.01 * this.speed);
    push();
    this.trueY =
      this.y + sin(theta * 0.02 + this.x * 0.01 + this.y * 0.01) * 100;
    translate(this.x, this.trueY);

    scale(scaleFactor);
    rotate(radians(theta * this.speed1));
    if (this.died == 0) {
      image(this.img1, 0, 0, this.w1, this.h1);
    } else {
      this.died -= 1;
    }
    pop();
    for (let i = 0; i < this.part.length; i++) {
      this.part[i].update();
      this.part[i].display(this.trueY);
    }
    for (let i = this.part.length - 1; i >= 0; i--) {
      if (this.part[i].alp < 5) {
        this.part.splice(i);
      }
    }
  }
  click() {
    
    
     // Check if the mouse clicks on a planet
    //Whether the particles have been cleared
    if (this.part.length == 0) {
      if (dist(mouseX, mouseY, this.x, this.y) < this.w1) {
        this.died = 300;
        for (let i = 0; i < 500; i++) {
          let angle = random(TWO_PI);
          let r = random(this.w1 / 2);
          let x = this.x + cos(angle) * r;
          let y = sin(angle) * r;
          this.part.push(new Particle(x, y));
        }
      }
    }
  }
}
//Left mouse button click on the planet can be an explosion effect
function mousePressed() {
  for (let i = 0; i < planetList.length; i++) {
   // Check if the left mouse button is pressed and if the mouse is over a planet
    planetList[i].click();
  }
}

//explode particles
class Particle {
  //Constructor: Initializes a particle with a position, velocity, and lifespan.
  constructor(x, y) {
    this.pos0 = createVector(x, y);
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D().mult(random(2, 5));
    this.life = 240;
    this.alp = 215;
  }
  display(ty) {
    push();
    blendMode(ADD);
    stroke(255, this.alp);
    strokeWeight(9);
    point(this.pos.x, this.pos.y + ty);
    pop();
  }
  update() {
    if (this.life > 0) {
      this.pos.add(this.vel);
      this.life -= 1;
    } else {
      this.pos.lerp(this.pos0, 0.08);
      this.alp -= 2.5;
    }
  }
}
