let canvas;


function setup() {
  canvas = createCanvas(500, 500);
  canvas.position(0, 0);

}

function draw() {
  clear();
  fill(0);
  textSize(24);
  text('hello, yechen', mouseX, mouseY);
}

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }