// Tut 2, Group G
// Creative coding major project
// Variation on Mondrian's 'Broadway Boogie Woogie'


let number = 30;
let rectSpacing = 10;
const numberOfaqua = 8;
const colors = ['#08527d', '#1678A2', '#093169'];
const colors2 = ['#Bffbfd', '#083360', '#2a91a4'];
// Create arrays to store multiple classes of rectangles:
let rectangles = [];
let rectanglesBig = [];


let piano, drum, bass;
let fftPiano, fftDrum, fftBass;
let isPlaying = false;
let button;

function preload() {
  piano = loadSound('audio/bigapple_piano.wav');
  drum = loadSound('audio/bigapple_drum.wav');
  bass = loadSound('audio/bigapple_bass.wav');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  piano.setVolume(0.7);
  bass.setVolume(1.0);
  drum.setVolume(0.7);

  //button to contrl the music
  button = createButton("play");
  button.mousePressed(togglePlaying);

  fftPiano = new p5.FFT(0.1, 2048);
  fftDrum = new p5.FFT(0.1, 2048);
  fftBass = new p5.FFT();
  
  // Connect the FFT objects to the sounds
  fftPiano.setInput(piano);
  fftDrum.setInput(drum);
  fftBass.setInput(bass);

  let y1 = random(0, 150);
  let y2 = y1;

  
  // Use windowwidth and windowheight instead of width and height in rectangles below:
  // Random small blocks:

  // 2
  for (let i = 0; i < number; i++) {
    const randomColor = colors[i % colors.length];
    let randomRectangle = new Rectangle(y2, i * (50 + rectSpacing), 15, 15, randomColor);
    rectangles.push(randomRectangle);
  }
  // 3
  for (let j = 0; j < 5; j++) {
    for (let i = 0; i < number; i++) {
      const randomColor = colors[j % colors.length];
      let randomRectangle = new Rectangle(y2 + (1 * y1), j * (100 + rectSpacing), 15, 15, randomColor);
      rectangles.push(randomRectangle);
    }
  }

  // 4
  for (let j = 0; j < 5; j++) {
    for (let i = 0; i < number; i++) {
      const randomColor = colors[i % colors.length];
      let randomRectangle = new Rectangle(250 + y1 * 2 - y1 * 2, (i * (50 + rectSpacing)), 15, 15, randomColor);
      rectangles.push(randomRectangle);
    }
  }
  // 5
  for (let i = 0; i < number; i++) {
    const randomColor = colors[i % colors.length];
    let randomRectangle = new Rectangle(250 + y1 * 2, i * (35 + rectSpacing), 15, 15, randomColor);
    rectangles.push(randomRectangle);
  }
  // 6
  for (let j = 0; j < 5; j++) {
    for (let i = 0; i < number; i++) {
      const randomColor = colors[i % colors.length];
      let randomRectangle = new Rectangle(250 + y1 * 2 + y1 * 2, (i * (80 + rectSpacing)), 15, 15, randomColor);
      rectangles.push(randomRectangle);
    }
  }

  // 7
 
    for (let i = 0; i < number; i++) {
      const randomColor = colors[i % colors.length];
      let randomRectangle = new Rectangle(i * (50 + rectSpacing), y1 - y1, 15, 15, randomColor);
      rectangles.push(randomRectangle);
    
  }
  // 8
  for (let i = 0; i < number; i++) {
    const randomColor = colors[i % colors.length];
    let randomRectangle = new Rectangle(i * (30 + rectSpacing), y2, 15, 15, randomColor);
    rectangles.push(randomRectangle);
  }
  // 9
  
    for (let i = 0; i < number; i++) {
      const randomColor = colors[i % colors.length];
      let randomRectangle = new Rectangle(i * (60 + rectSpacing), y1 + y1, 15, 15, randomColor);
      rectangles.push(randomRectangle);
    
  }
  // 10
  for (let i = 0; i < number; i++) {
    const randomColor = colors[i % colors.length];
    let randomRectangle = new Rectangle(i * (30 + rectSpacing), y1 + y1 + y1, 15, 15, randomColor);
    rectangles.push(randomRectangle);
  }

  // 11
  for (let i = 0; i < number; i++) {
    const randomColor = colors[i % colors.length];
    let randomRectangle = new Rectangle(i * (60 + rectSpacing), 250, 15, 15, randomColor);
    rectangles.push(randomRectangle);
  }
  // 12
  for (let i = 0; i < number; i++) {
    const randomColor = colors[i % colors.length];
    let randomRectangle = new Rectangle(i * (30 + rectSpacing), 250 + y1 * 2, 15, 15, randomColor);
    rectangles.push(randomRectangle);
  }
  // 13
  for (let i = 0; i < number; i++) {
    const randomColor = colors[i % colors.length];
    let randomRectangle = new Rectangle(i * (50 + rectSpacing), 250 + y1 * 2 + y1 * 2, 15, 15, randomColor);
    rectangles.push(randomRectangle);
  }
  // 14
  for (let i = 0; i < number; i++) {
    const randomColor = colors[i % colors.length];
    let randomRectangle = new Rectangle(i * (40 + rectSpacing), 250 + y1 * 2 + y1 * 2 + y1 * 2, 15, 15, randomColor);
    rectangles.push(randomRectangle);
  }

  noStroke();
  //Big rectangles
  for (let i = 0; i < 20; i++) {
    // Randomly generate the position, size, and colour of block A:


    let x = random(width);
    let y = random(height);
    let widthA = random(40, 60);
    let heightA = random(40, 60);

    // Randomly generate the size of blocks B and C:
    let widthB = widthA - random(10, 30);
    let heightB = heightA - random(10, 30);
    let widthC = widthA + random(10, 40);
    let heightC = heightA + random(10, 40);

    // Randomly generate colours:

    let colorA = random(colors2);
    let colorB = random(colors2);
    let colorC = random(colors2);


    // Create a block object and add it to an array:

    rectanglesBig.push(new Rectangle(x, y, widthC, heightC, colorC));
    rectanglesBig.push(new Rectangle(x, y, widthA, heightA, colorA));
    rectanglesBig.push(new Rectangle(x, y, widthB, heightB, colorB));

  }
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function draw() {
  background('#000a0c');
  
  //Analyze drum frequencies
  let spectrumDrum = fftDrum.analyze();
  let drumAmplitude = fftDrum.getEnergy(7000, 10000);
  // Map the drum amplitude to the shake effect
  let shakeAmount = map(drumAmplitude, 0, 255, 0, 10); 


  // Draw rectangle and apply shake effect to its x, y positions:
  for (let i = 0; i < rectangles.length; i++) {
    rectangles[i].x += random(-shakeAmount, shakeAmount);
    rectangles[i].y += random(-shakeAmount, shakeAmount);
    rectangles[i].draw();
  }
  push();
  rectMode(CENTER);

  //Analyze piano frequencies
  let spectrumPinao = fftPiano.analyze();
  let pianoAmplitude = fftPiano.getEnergy(600, 6000);
  // Map the piano amplitude to the breathe effect
  let sizeAmount = map(pianoAmplitude, 0, 255, 0, 15); 
  let brightness = map(pianoAmplitude, 0, 255, 30, 100); // 假设亮度值在30到100之间变化
  
  for (let i = 0; i < rectanglesBig.length; i++) {
    rectanglesBig[i].width += random(-sizeAmount, sizeAmount);
    rectanglesBig[i].height += random(-sizeAmount, sizeAmount);
    let currentColor = rectanglesBig[i].color;
    fill(hue(currentColor), saturation(currentColor), brightness);
    rectanglesBig[i].draw();
  }
  pop();
}

function togglePlaying() {
  if (!isPlaying) {
    // Start playing the music
    piano.play();
    drum.play();
    bass.play();
    button.html("pause");
    isPlaying = true;
  } else {
    piano.pause();
    drum.pause();
    bass.pause();
    button.html("play");
    isPlaying = false;
  }
}


class Rectangle {
  constructor(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    fill(this.color);
    rect(this.x, this.y, this.width, this.height);
  }
}

