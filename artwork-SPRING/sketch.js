frame=0
function setup() {
  createCanvas(550, 400,WEBGL);
  angleMode(DEGREES)
    background(30);

 
 
  
 
}

function draw() {

  
    
  noFill()
  stroke(255)  
 var x=sin(frameCount*2) *80
 var y=cos(frameCount) *80
 var z=sin(frameCount*4) *50
  translate(x,y,z)

  rotateX(frameCount)
  rotateY(frameCount/2)
  rotateZ(frameCount/4)
for (var i=0;i<360;i=i+1){
  //the first circle
  push()   
  var x=sin(frameCount) *300
  var y=cos(frameCount) *300
  var z=sin(frameCount) *300
  translate(x,y,z)
  var r=map(sin(i+frameCount),-1,1,230,90)
  var g=map(sin(i+frameCount/3),-1,1,90,250)
  var b=map(cos(i+frameCount/7),-1,1,80,200)
  stroke(r,g,b)
  rotateY(i*9)
  ellipse(0,0,200,200,50)  
  pop()
  
  //the second circle
  push()
  var x=sin(frameCount*4) *300
  var y=cos(frameCount*3) *80
  var z=sin(frameCount) *100
  translate(x,y,z)
  var r=map(sin(i+frameCount),-1,1,50,250)
  var g=map(sin(i+frameCount/3),-1,1,150,250)
  var b=map(cos(i+frameCount/7),-1,1,200,250)
  stroke(r,g,b)
  rotateY(i*2)
  ellipse(0,0,100,100,50) 

  
      // // draw the earth
   
   
  //the third circle
  push()
  var x=sin(frameCount) *100
  var y=cos(frameCount) *200
  var z=sin(frameCount) *300
  translate(x,y,z)
  
  var r=map(sin(i+frameCount),-1,1,100,250)
  var g=map(sin(i+frameCount/3),-1,1,250,100)
  var b=map(cos(i+frameCount/7),-1,1,100,250)
  stroke(r,g,b)
  rotateY(i*12)
  ellipse(0,0,150,150,50) 
  pop()
  // the forth circle
  push()
  var x=sin(frameCount) *100
  var y=cos(frameCount) *200
  var z=sin(frameCount) *300
  translate(x,y,z)
  var r=map(sin(i+frameCount),-1,1,100,200)
  var g=map(sin(i+frameCount/3),-1,1,250,100)
  var b=map(cos(i+frameCount/7),-1,1,100,90)
  stroke(r,g,b)
  rotateY(i*8)
  ellipse(0,0,150,150,100) 
  pop()
  //the fifth circle  
  push()
  var x=sin(frameCount*2) *200
  var y=cos(frameCount*2) *400
  var z=sin(frameCount*2) *800
  translate(x,y,z)
  var r=map(sin(i+frameCount),-1,1,100,200)
  var g=map(sin(i+frameCount),-1,1,250,100)
  var b=map(cos(i+frameCount),-1,1,100,50)
  stroke(r,g,b)
  rotateY(6*i)
  ellipse(0,0,120,120,50)
  pop()
  //the sixth circle
  push()
   var x=sin(frameCount*2) *200
   var y=cos(frameCount*2) *100
   var z=sin(frameCount) *100
  translate(x,y,z)
  rotateX(frameCount)
  rotateY(frameCount)
  rotateZ(frameCount)
  var r=map(sin(i+frameCount/5),-1,1,200,50)
  var g=map(sin(i+frameCount),-1,1,120,200)
  var b=map(cos(i+frameCount/3),-1,1,120,200)
  stroke(r,g,b)
  rotateY(i)
  ellipse(0,0,70,70,50)
  pop()
}
}
//save image as "drawing .png"when press s
function keyPressed(){
 console.log(key);
 if(key == 's'){
 save("drawing.png");
 }
 }