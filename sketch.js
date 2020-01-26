function setup() {
  createCanvas(windowWidth, windowHeight);
  background(51);

}

function draw() {
  background(151);
  fill(0);
  textSize(24);
  text('hello, yechen', mouseX, mouseY);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}