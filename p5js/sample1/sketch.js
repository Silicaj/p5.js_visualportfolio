function setup() {
createCanvas(600, 400);
}
function draw() {
background("#7A8790");
stroke("#000000");
strokeWeight(3);
line(200,0,50,400);
line(190,0,40,400);
line(180,0,30,400);
line(400,0,550,400);
line(410,0,560,400);
line(420,0,570,400);
line(0,50,600,50);
line(0,60,600,60);
line(0,70,600,70);

stroke("#378DCC");
strokeWeight(5);

fill("#5DA0C9");
arc(200,400,200,220,radians(180),0,PIE);
arc(400,400,200,220,radians(180),0,PIE);

noStroke();
fill("#7A8790");
triangle(50,400,100,300,230,400);
triangle(550,400,500,300,370,400);

stroke("#4275A8");
strokeWeight(5);
fill("#4D87A7");
arc(150,400,200,120,radians(210),0,PIE);
arc(450,400,200,120,radians(180),radians(330),PIE);

noStroke();
fill("#D44352");
arc(300,200,250,250,0,radians(72));
fill("#FCB85C");
arc(300,200,180,180,radians(72),radians(144));
fill("#C0C28C");
arc(300,200,215,215,radians(144),radians(216));
fill("#3DB7CD");
arc(300,200,200,200,radians(216),radians(288));
fill("#CD88A8");
arc(300,200,230,230,radians(288),0);

fill("#FFFFFF");
ellipse(300,200,130,100);

stroke("#6C9DCD");
strokeWeight(5);
fill("#80B0CC");
quad(275,230,325,230,310,400,290,400);

noStroke();
fill("#995F15");
arc(300,200,80,90,radians(310),radians(130));
fill("#D8F2F9");
arc(300,200,80,90,radians(130),radians(310));

stroke("#405360");
strokeWeight(4);
fill("#001313");
ellipse(300,200,40,65);
}