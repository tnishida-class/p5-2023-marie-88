// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;
let size;

function setup(){
  createCanvas(200, 200);
  count = 0;
  cycle = 100;
  size = 50;
}

function draw(){
  background(160, 192, 255);
  count = (count + 1) % cycle;
  // BLANK[1]
  if (keyIsPressed){
    count = (count +2) % cycle;
  }
  else{
    count = (count +1) % cycle;
  }
  if (count < cycle/2){
    size = count +50;
  }
  else{
    size = (cycle - count) +50;
  }
  ellipse(width / 2, height / 2, size);
}
