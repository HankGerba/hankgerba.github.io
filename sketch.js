function setup() {
  createCanvas(windowWidth, windowHeight);
  background(51);

}

function draw() {
  background(151);
  fill(0);
  ellipse(mouseX, mouseY, 16, 16);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}