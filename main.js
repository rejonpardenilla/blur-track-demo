const imageWidth = 1600/1.5
const imageHeight = 900/1.5
const initialBlurRadius = 10
const backgroundPath = "assets/bg.jpg"
const ellipseSize = 100

function preload() {
  bg = loadImage(backgroundPath)
}

function setup() {
  createCanvas(imageWidth, imageHeight)
  image(bg, 0, 0, imageWidth, imageHeight)
  filter(BLUR, initialBlurRadius)
}

function draw() {
  ellipse(mouseX, mouseY, ellipseSize)
  fill(255)
  noStroke()
}

function mousePressed() {
  clear()
  image(bg, 0, 0, imageWidth, imageHeight)
  filter(BLUR, initialBlurRadius)  
}
