// テキスト「キーボード操作に反応する」
let x, y;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
}

function draw(){
  background(160, 192, 255);
  if(keyIsDown(LEFT_ARROW)){ x -= 5; }
  if(keyIsDown(RIGHT_ARROW)){ x += 5; }
  // if(keyIsDown(UP_ARROW)){ y -= 5; }
  // if(keyIsDown(DOWN_ARROW)){ y += 5; }
  // if(keyIsDown("A".charCodeAt(0))){ x+= 10; }
  // if(keyIsDown(" ".charCodeAt(0))){ x-= 10; }
  fill (209,110,40);
  rect (0,500, width, height/2.5);
  fill (243,250,37);
  ellipse(x, 500, 50);
}

// イベントハンドラを使用するパターン
// function keyPressed(){
//   if(keyCode == LEFT_ARROW){ x -= 5; }
//   else if(keyCode == RIGHT_ARROW){ x+= 5; }
//   else if(keyCode == DOWN_ARROW){ y += 5; }
//   else if(keyCode == UP_ARROW){ y -= 5; }
//   else if(key == "A"){ x += 10; }
// }



function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
