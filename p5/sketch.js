let mobilenet;
let puffin;
function modelReady() {
	console.log('Model is ready!!!');
}
function setup() {
  // put setup code here
  createCanvas(800,480);
  background(0);
  puffin = createImg('bird');
  console.log('hello');

  mobilenet = ml5.imageClassifier('MobileNet', modelReady);
}

function draw() {
  // put drawing code here
}