//　テキスト「オブジェクト」
// 練習問題：ボールのサイズをランダムに変更してみよう
// 練習問題：何も操作しなくてもボールが湧いてくる機能を追加しよう

let balls;
// let Balls;

function setup(){
  createCanvas(windowWidth, windowHeight);
  balls = [];
  // Balls = [];
}

function draw(){
  background(160, 192, 255);
  for(let i = 0; i < balls.length; i++){
    let b = balls[i];
    ellipse(b.x, b.y, b.size);
    b.x += b.vx;
    b.y += b.vy;    
  } 
}

//  while (Balls.length < 100){
//    const s = random (5,120);
//    const ba = new Ball(
//     random(0+s,width-s),
//     random(0+s,height-s),
//     randomRGB(),
//     s,
//   );
//   Balls.push(ba);
//   }   




function mouseDragged(){
  const dx = mouseX - pmouseX;
  const dy = mouseY - pmouseY;
  if(mag(dx, dy) > 5){
    const b = { x: mouseX, y: mouseY, size: random (5,120), vx: dx, vy: dy };
    balls.push(b);
  }
}  



function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
