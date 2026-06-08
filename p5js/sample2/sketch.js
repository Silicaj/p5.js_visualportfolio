function setup() {

  createCanvas(400, 600);

}



function draw() {

  background(220);

  

    noStroke();

   fill("#dbd6c9");

  ellipse(200,350,170,80)



  fill("#ECC7C1");

  ellipse(140, 265, 45,60);

  ellipse(260, 265, 45,60);

  fill("#F4D9CB");

  rect(130, 250, 140, 70, 0, 0, 40, 40); 

  ellipse(200, 250, 155, 190);

  rect(120, 170, 160, 100, 80, 80);

  fill("FFFFFF");

  

  stroke("#25242a");

  arc(160, 250, 42, 25, 0,radians(185),CHORD);

  arc(240, 250, 42, 25, radians(355),radians(180),CHORD);

  fill("#25242a");

  ellipse(160, 255, 18, 13);

  ellipse(240, 255, 18, 13);

  fill("FFFFFF");

  ellipse(160, 252, 10, 5);

  ellipse(240, 252, 10, 5);

  

  fill("#525059");

  quad(135, 225, 135, 236, 180, 237, 180, 228);

  quad(265, 225, 265, 236, 220, 237, 220, 228);

  rect(190, 250, 20, 3);

  rect(122, 245, 10, 3);

  rect(268, 245, 10, 3);

  noFill();

  strokeWeight(3);

  ellipse(160,255,65,55);

  ellipse(240,255,65,55);

  stroke("#8e7964");

  strokeWeight(1);

  ellipse(160,255,65,55);

  ellipse(240,255,65,55);

  fill("#ECC7C1");

  noStroke();

  triangle(200,265,190,290,200,300);

  stroke("#ffb59e");

  strokeWeight(2);

  line(180,315,220, 315);

  

  

  fill("#525059");

  noStroke();

  arc(200, 220, 170,160,PI,0,CHORD);

  fill("#F4D9CB");

  triangle(170,220, 180, 190, 180, 220);

  triangle(210,220, 230, 180, 230, 220);

  fill("#e6e0d3");

  rect(90, 350, 220,300, 80, 80);

  fill("#F4D9CB");

  ellipse(200, 350, 40, 55);

   fill("#dbd6c9");

  arc(155,360,90,70,radians(30),radians(210),CHORD);

  arc(245,360,90,70,radians(330),radians(150),CHORD);



}