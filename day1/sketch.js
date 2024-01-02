function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(209,129,115);
  fill(251,247,234);
  for (var x=5;x<400;x=x+35) {
  for (var y=5;y<400;y=y+35) {
  fill(243,211,108);
  strokeWeight(0);
  ellipse(x,y,23,23);
  rect(0,200,200,400);
  rect(200,0,200,200);
  }
}
  translate(200,200);
   //cloth
   fill(236,117,38);
  rect(30,130,70,70);
  
 fill(62,168,166);
  stroke(62,168,166);
 
  ellipse(-140,180,120,120);
  ellipse(140,180,120,120);
  rect(-140,120,280,260)
  fill(236,117,38);
  ellipse(0,80,220,180);
  
  fill(236,117,38);
  rect(30,130,70,70);
  
  stroke(225,0,0);
  strokeWeight(12);
  line(30,130,30,200);
  line(100,130,100,200);
  line(60,130,60,200);
  ellipse(0,80,220,180);
  ellipse(0,80,185,125);
  ellipse(0,50,160,140); 
  ellipse(0,50,160,140); 
 
  
  
  fill(251,235,39);
  strokeWeight(0);
  ellipse(-70,120,10,10);
  ellipse(70,120,10,10);
  ellipse(-45,140,10,10);
  ellipse(45,140,10,10); 
  ellipse(-25,130,10,10);
  ellipse(25,130,10,10);
  ellipse(0,150,10,10);
  ellipse(70,180,10,10);
  ellipse(90,160,10,10);
  
  
  stroke(157,229,252);
  strokeWeight(30);
  line(120,140,120,200);
  line(-120,140,-120,200);
  strokeWeight(0);
  rect(-100,180,70,80);
 
  
  
  
  
  strokeWeight(10);
  stroke(62,168,166);
  line(120,140,120,200);
  line(-120,140,-120,200);
  line(140,140,140,200);
  line(-140,140,-140,200);
  
  


  
  //face OUTLINE
  fill(252,241,230),
  strokeWeight(0);
  rect(-80,-60,80,110);
  arc(0,50,160,140,90,180);
  fill(233,140,157);
  rect(0,-60,80,110);
  arc(0,50,160,140,0,90);
  fill(251,150,174);
  ellipse(0,58,20,20);
  
  //FACE EAR N FACE
  fill(254,187,188);
  ellipse(-55,50,40,30);
  arc(-80,30,45,45,90,270);
  fill(240,100,127);
  ellipse(55,50,40,30);
  fill(205,86,110);
  arc(80,30,45,45,270,90);
 
  //eye?
  fill(201,86,114);
  arc(42,15,72,65,180,30);
  fill(241,169,175);
  arc(-42,15,72,65,150,0);
  fill(255);
  ellipse(42,15,40,30);
  ellipse(-42,15,40,30);
  ellipse(-42,15,40,30);
  fill(138,69,18);
  ellipse(42,12,25,25);
  ellipse(-42,12,25,25);
  strokeWeight(3);
  stroke(0);
  line(30,-15,60,-10);
  line(-30,-15,-60,-10);
  stroke(0);
  strokeWeight(6);
  noFill(),
  arc(44,15,44,30,180,100);
  arc(-44,15,44,30,90,0);
  line(65,15,75,15);
  line(-65,15,-75,15);
  fill(0);
  ellipse(42,11,7,7);
  ellipse(-42,11,7,7);
  fill(255);
  strokeWeight(0);
  ellipse(35,16,5,4);
  ellipse(-48,16,5,4);
  
  //mouth
  fill(197,57,74);
  strokeWeight(0);
  beginShape();
  vertex(-20,90);
  vertex(-25,80);
  vertex(-5,80);
  vertex(0,85);
  vertex(5,80);
  vertex(25,80);
  vertex(20,90);
  endShape();
  fill(253,120,155);
  beginShape();
  vertex(20,90);
  vertex(10,100);
  vertex(-10,100);
  vertex(-20,90);
  endShape();
  fill(166,69,94);
  rect(-10,100,20,5);
 
  //nose
   strokeWeight(0);
  fill(241,172,180);
  quad(0,85,10,80,10,60,0,60),
  fill(231,133,151);
  quad(0,85,-10,80,-10,60,0,60),
  fill(224,102,133);
  rect(-10,15,20,45);
  ellipse(7,57,20,20);
  ellipse(-7,57,20,20);
  fill(251,150,174);
  ellipse(0,58,20,20);
  
  //hair
  fill(67,13,46);
  ellipse(95,-10,60,60);
  ellipse(130,100,80,80);
  ellipse(130,40,70,70);
  ellipse(130,0,60,60);
  ellipse(110,-55,80,80);
  ellipse(60,-105,90,90);
  ellipse(20,-140,80,80);
  arc(80,-100,190,160,90,200);
  
  fill(99,35,66);
  arc(-80,-100,190,160,350,90);
  ellipse(-95,-10,60,60);
  ellipse(-130,100,80,80);
  ellipse(-130,40,70,70);
  ellipse(-130,0,60,60);
  ellipse(-110,-55,80,80);
  ellipse(-60,-105,90,90);
  ellipse(-20,-140,80,80);

  
  
  
  //hair detail1
  fill(99,35,66);
  stroke(215,159,186);
  strokeWeight(1.5),
  ellipse(-95,-10, 40,40);
  ellipse(-130,100,60,60);
  ellipse(-130,40,50,50);
  ellipse(-130,0,40,40);
  ellipse(-110,-55,60,60);
  ellipse(-60,-105,70,70);
  ellipse(-20,-140,60,60);
  
  fill(197,137,166);
  stroke(150,100,150);
  arc(-80,-100,180,140,350,90);
  fill(99,35,66);
  stroke(215,159,186);
  arc(-80,-100,160,120,350,90);
  fill(197,137,166);
  stroke(150,100,150);
  arc(-80,-100,140,100,350,90);
  fill(99,35,66);
  stroke(215,159,186);
  arc(-80,-100,120,80,350,90);

  fill(197,137,166);
  stroke(215,159,186);
  ellipse(-95,-10, 30,30);
  ellipse(-130,100,50,50);
  ellipse(-130,40,40,40);
  ellipse(-130,0,30,30);
  ellipse(-110,-55,50,50);
  ellipse(-60,-105,60,60);
  ellipse(-20,-140,50,50);
  
  fill(99,35,66);
  stroke(215,159,186);
  stroke(150,100,150);
  ellipse(95,-10, 20,20);
  ellipse(130,100,40,40);
  ellipse(130,40,30,30);
  ellipse(130,0,20,20);
  ellipse(110,-55,40,40);
  ellipse(60,-105,50,50);
  ellipse(20,-140,40,40);

  strokeWeight(1.5),
  ellipse(-95,-10, 20,20);
  ellipse(-130,100,40,40);
  ellipse(-130,40,30,30);
  ellipse(-130,0,20,20);
  ellipse(-110,-55,40,40);
  ellipse(-60,-105,50,50);
  ellipse(-20,-140,40,40);
  
  strokeWeight(1),
  ellipse(-95,-10, 10,10);
  ellipse(-130,100,30,30);
  ellipse(-130,40,20,20);
  ellipse(-130,0,10,10);
  ellipse(-110,-55,30,30);
  ellipse(-60,-105,40,40);
  ellipse(-20,-140,30,30);
  
  strokeWeight(1),
  ellipse(-130,100,20,20);
  ellipse(-130,40,10,10);
  ellipse(-110,-55,20,20);
  ellipse(-60,-105,30,30);
  ellipse(-20,-140,20,20);
  
  strokeWeight(1),
  fill(197,137,166);
  ellipse(-130,100,10,10);
  ellipse(-110,-55,10,10);
  ellipse(-60,-105,20,20);
  ellipse(-20,-140,10,10);
  
  //hair detail 2
  fill(67,13,46);
  strokeWeight(1.5),
  stroke(150,100,150);
  ellipse(95,-10, 40,40);
  ellipse(130,100,60,60);
  ellipse(130,40,50,50);
  ellipse(130,0,40,40);
  ellipse(110,-55,60,60);
  ellipse(60,-105,70,70);
  ellipse(20,-140,60,60);
  
  fill(142,78,110);
  stroke(150,100,150);
  arc(80,-100,170,140,90,200);
  fill(67,13,46);
  stroke(150,100,150);
  arc(80,-100,150,120,90,200);
  fill(142,78,110);
  stroke(150,100,150);
  arc(80,-100,130,100,90,200);
  fill(67,13,46);
  stroke(150,100,150);
  arc(80,-100,110,80,90,200);
  
 fill(142,78,110);
  strokeWeight(1.5),
  stroke(150,100,150);
  ellipse(95,-10, 30,30);
  ellipse(130,100,50,50);
  ellipse(130,40,40,40);
  ellipse(130,0,30,30);
  ellipse(110,-55,50,50);
  ellipse(60,-105,60,60);
  ellipse(20,-140,50,50);
  
  fill(67,13,46);
  strokeWeight(1),
  stroke(150,100,150);
  ellipse(95,-10, 20,20);
  ellipse(130,100,40,40);
  ellipse(130,40,30,30);
  ellipse(130,0,20,20);
  ellipse(110,-55,40,40);
  ellipse(60,-105,50,50);
  ellipse(20,-140,40,40);
  
   strokeWeight(1),
  stroke(150,100,150);
  ellipse(95,-10, 10,10);
  ellipse(130,100,30,30);
  ellipse(130,40,20,20);
  ellipse(130,0,10,10);
  ellipse(110,-55,30,30);
  ellipse(60,-105,40,40);
  ellipse(20,-140,30,30);

  strokeWeight(1),
  stroke(150,100,150);
  ellipse(130,100,20,20);
  ellipse(130,40,10,10);
  ellipse(110,-55,20,20);
  ellipse(60,-105,30,30);
  ellipse(20,-140,20,20);

  strokeWeight(1),
  fill(142,78,110);
  stroke(150,100,150);
  ellipse(130,100,10,10);
  ellipse(110,-55,10,10);
  ellipse(60,-105,20,20);
  ellipse(20,-140,10,10);
  
  //jowellery
  strokeWeight(0);
  fill(92,128,64);
  ellipse(-90,60,25,40);
  fill(196,230,170);
  ellipse(90,60,25,40);
  fill(92,128,64);
  ellipse(90,60,10,25);
  fill(196,230,170);
  ellipse(-90,60,10,25);
  
  //make up
  stroke(240,100,127);
  strokeWeight(2);
  line(-65,45,-68,55);
  line(-55,45,-58,55);
  line(-45,45,-48,55);
  stroke(254,187,188);
   line(65,45,68,55);
  line(55,45,58,55);
  line(45,45,48,55);
}