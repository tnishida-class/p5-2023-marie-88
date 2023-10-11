// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
      let x = size * i
      let y = size * j
    if((x+y)%2==1){
      fill(100);
      rect (x,y,size,size);
    }
    else{
      fill(500)
      rect (x,y,size,size);
    } 
     if(((x+y)%2==1) && (j<3)){
      fill(255,0,0);
      ellipse(x+size/2,y+size/2,size);
    }
    else if(((x+y)%2==1) && (j>4)){
      fill(0);
      ellipse(x+size/2,y+size/2,size);
    }
    }
  }
  }
