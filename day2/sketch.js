let img;
let ball;
let balla;
let ballb;
let ballc;
let videoClip;
let back;
let back1;
let b;
let v;
let h1;
let h2;
let h3;
let h4;
let sound;
let start;

function preload(){
 
  ball= loadImage("snow.png");
  balla= loadImage("1ball.png");
  ballb= loadImage("2ball.png");
  ballc= loadImage("ball3.png");
  back= loadImage("rrr.png");
  back1= loadImage("eee.png");
  b= loadImage("b.png");
  h1=loadImage("hand1.png");
  h2=loadImage("hand2.png");
  h3=loadImage("hand3.png");
  h4=loadImage("hand4.png");
  sound=loadSound("sound.MP3");

  
  
}

function setup() {
  createCanvas(3200, 2000);
  videoClip = createVideo('111.mp4'); 
  videoClip.loop(); // 
  videoClip.hide(); 
  imageMode(CENTER);
  sound.play();
   sound.loop(); 
  

}

function draw() {
  background(0);
  //视频背景
  push();
  tint(150, 255); 
  image(videoClip, width/2, height/2, width, height);
  pop();

  //图片背景
  push();
  f=random(1,2)
  p=random(140,150);
  tint(p, 255); 
  image(back1,1600,1000, width*f, height*f);
  pop();
  //绘制snow小球
  drawsnow(1600,0);
  //绘制balls小球
  drawballs(0,0)
  //绘制抓手,要用arduino控制的
   push();
   t=random(150,255)
   tint(t, 255); 
   w=random(100,700);
   let W= map(mouseX, 0, width/2, 3200, 1600);
   let H = map(mouseY, 0, height/2, 0,500);
  ///////////第一象限的映射
 
   image(h1,width-W,H, w*2,  w*2);
   ///////////第二象限的映射
   
   image(h2,W,H,  w*2,  w*2);
   ///////////第一象限的映射

   image(h3,W,height-H,  w*2, w*2);
   image(h4,width-W,height-H,  w*2,  w*2);
   pop();

}
////////////////snow小球

  function drawsnow(x,y){
    push();
    translate(1600,1000);
    r1=random(50,300);
    push();
    ball.positionX=sin(frameCount/8) *100+200;
    ball.positionY=sin(frameCount/6) *100+200;
    //左下
    image(ball, ball.positionX, ball.positionY, r1, r1);
    image(ball, ball.positionX/2+400, ball.positionY+400, r1*1.5, r1*1.5);
    //左上
     image(ball, ball.positionX, -ball.positionY, r1, r1);
     image(ball, ball.positionX/2+400,-ball.positionY-400, r1*1.5, r1*1.5);
    //右上
    image(ball, -ball.positionX, -ball.positionY, r1, r1);
    image(ball, -ball.positionX/2-400,-ball.positionY-400, r1*1.5, r1*1.5);
    //右下
    image(ball,-ball.positionX, ball.positionY, r1, r1);
    image(ball,-ball.positionX/2-400, ball.positionY+400, r1*1.5, r1*1.5);
  
    ball.positionX=sin(frameCount/30) *100+400;
    ball.positionY=sin(frameCount/12) *200+400;
    //左下
    image(ball, ball.positionX, ball.positionY, r1/2, r1/2);
    image(ball, ball.positionX*2, ball.positionY*1.5, r1, r1);
    //左上
    image(ball, ball.positionX, -ball.positionY, r1/2, r1/2);
    image(ball, ball.positionX*2,-ball.positionY*1.5, r1, r1);
    //右上
    image(ball, -ball.positionX, -ball.positionY, r1/2, r1/2);
    image(ball, -ball.positionX*2,-ball.positionY*1.5, r1, r1);
    //右下
    image(ball, -ball.positionX, ball.positionY, r1/2, r1/2);
    image(ball, -ball.positionX*2, ball.positionY*1.5, r1, r1);
    /////////////ball3
    //左下
    image(ball, ball.positionX, ball.positionY, r1, r1);
    image(ball, ball.positionX/2+400, ball.positionY+400, r1*1.5, r1*1.5);
    
    pop();
    pop();
  }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //左上

   
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 function drawballs(x,y) {
     push();
    translate(1600,1000);
    imageMode(CENTER);
    r2=random(50,300);
    balla.positionX=sin(frameCount/30) *700+100;
    balla.positionY=sin(frameCount/7) *100+100;
    rotate(frameCount)
    image(balla, balla.positionX, balla.positionY, r2*2, r2);
    image(balla,100, 0, r2*2, r2);
    image(balla,100, 100, r2*4, r2*4);
    r3=200
    ballb.positionX=sin(frameCount/30) *600;
    ballb.positionY=sin(frameCount/7) *100;
    rotate(-frameCount/10)
    image(ballb, ballb.positionX, ballb.positionY, r3*1.6, r3);
    image(balla,0, 100, r2*2, r2);
    image(balla,100, 100, r2*4, r2*4);
    rotate(frameCount/10)
    image(ballb, ballb.positionX+100, ballb.positionY+100, r2*1.6, r2);
    rotate(frameCount)
    image(ballb, ballb.positionX+10, ballb.positionY+10, r2*3.2, r2*2);
    r4=random(50,300);
    ballc.positionX=sin(frameCount/30) *600;
    ballc.positionY=sin(frameCount/7) *100;
    rotate(frameCount/70)
    image(ballc, ballc.positionX, ballc.positionY, r4, r4);
    image(balla, balla.positionX, balla.positionY, r3, r3);
    image(balla, balla.positionX/2, balla.positionY/2, r3, r3);
   
   pop()
   
 }
function keyPressed(){
  console.log(key);
  if(key == 'z'){
  //sound.paused
  videoClip = createVideo('start.mp4'); 
  videoClip.loop(); // 
  videoClip.hide(); 

 }
  
    console.log(key);
  if(key == 'n'){
  //sound.paused
  videoClip = createVideo('congratulation.mp4'); 
  videoClip.loop(); // 
  videoClip.hide(); 

  }
  
    console.log(key);
  if(key == 'm'){
  //sound.paused
  videoClip = createVideo('congratulation.mp4'); 
  videoClip.loop(); // 
  videoClip.failed(); 
 }
}

