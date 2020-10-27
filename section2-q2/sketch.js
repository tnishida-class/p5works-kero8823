// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
  for(let j = 0; j < 8; j++){
      if((i+j)%2==0){
        fill(255);
      }
      else {
        fill(0);
      }
      rect(size*i,size*j,40,40)
      if(j<3&&((i+j)%2==1)){
      console.log(i,j)
           fill(255,0,0);
           ellipse((size*i)+12,(size*j)+12,23);
  //BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
　　　}
     if(j>4&&((i+j)%2==1)){
     fill(100,100,100);
     ellipse((size*i)+12,(size*j)+12,23);
//BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
　　　}
    }
  }
}
