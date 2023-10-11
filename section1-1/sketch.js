function setup() {
  createCanvas(250,300);
}

function draw() {
  background(270);
  strokeWeight(4);
  fill(170, 280, 20);
  triangle(12,120,116,120,116,10);
  fill(94, 18, 84);
  triangle(0,120,106,120,106,0);
  fill(204);
  textSize(88);
  textFont("serif");
  text("46", 68, 100);
}
