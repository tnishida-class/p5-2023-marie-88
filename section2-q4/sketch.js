// タイ国旗
function setup(){
const red = color(247,7,39);
const blue = color(68,47,204);
const white = color(255);
createCanvas(400,400);    
background(255);

let d = 300
let t = 200
 
// noStroke();
rect (0,0,d,t);

let y = t / 6; //縞一本の太さ

for (let j = 0; j < 6; j++){
  
   noStroke();
   if (j == 0){
   fill (red);
   rect (0, y*j, d, y); 
   }
   
   else if (j == 1){
    fill (white);
    rect (0,y*j,d,y);
   }

   else if (j==2){
    fill (blue);
    rect (0,y*j,d,y);
   }

   else if (j==3){
    fill (blue);
    rect (0,y*j,d,y);
   }

   else if (j==4){
    fill (white);
    rect (0,y*j,d,y);
   }

   else{
    fill (red);
    rect (0,y*j,d,y);
   }
}
}
   





  
