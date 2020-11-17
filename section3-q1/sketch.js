
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("MUZUKASHISUGI!!!!",40,50);
}

function balloon(t,x,y){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 4;
  fill(0);
  rect(20, 20, w + p * 2, h + p * 2);
  triangle(0,0,20,20,20,30);

  fill(255,0,0);
  text(t, p+20, h + p+15);  
}
