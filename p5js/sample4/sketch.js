function setup() {
  createCanvas(600, 400);
}

function draw() {
  background("#7A8790");

  stroke("#000000"); //검은선
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
  
  stroke("#378DCC"); //잎
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
  
  let TRotate = frameCount * 0.01;
  let t = (sin(frameCount * 0.02));
  let ct = constrain(t, 0.15, 0.85);
  let BaseSize = [250, 180, 215, 200, 230];
  
  let sizes = [];
  for (let i = 0; i<5; i++) {
    let s = BaseSize[i] + sin(t + i*TWO_PI/5)*40;
    s = constrain(s, BaseSize[i]-40,BaseSize[i]+40);
    sizes.push(s);
  }
  
  //꽃잎색
  let leafColors = [
    lerpColor(color("#D44352"), color("#FCB85C"), ct),  
    lerpColor(color("#FCB85C"), color("#C7AD8A"), ct), 
    lerpColor(color("#C0C28C"), color("#5FA0AC"), ct),  
    lerpColor(color("#3DB7CD"), color("#AF5D84"), ct),  
    lerpColor(color("#CD88A8"), color("#CACE73"), ct),  
  ];
  
  //회전각
    let angles =
    [
    [0,radians(72)], 
    [radians(72),radians(144)], 
    [radians(144),radians(216)],
    [radians(216),radians(288)], 
    [radians(288),radians(360)],
    ];
  
   push();
    translate(300, 200);
    rotate(TRotate);
    noStroke();
    for (let i = 0; i < 5; i++) {
      fill(leafColors[i]);
      arc(0, 0, sizes[i], sizes[i], angles[i][0], angles[i][1]);
    }
  pop();
  
  noStroke();
  fill("#FFFFFF");
  ellipse(300,200,130,100);
  
  stroke("#6C9DCD");
  strokeWeight(5);
  fill("#80B0CC");
  quad(275,230,325,230,310,400,290,400);
  
 
  let Iris1 = lerpColor(color("#995F15"), color("#B4C420"), ct);  
  let Iris2 = lerpColor(color("#D8F2F9"), color("#2080A3"), ct);  
  let pupil = lerpColor(color("#001313"), color("#818E96"), ct);  
  
  noStroke();
  fill(Iris1);
  arc(300,200,80,90,radians(310),radians(130));
  fill(Iris2);
  arc(300,200,80,90,radians(130),radians(310));
  
  stroke("#405360");
  strokeWeight(4);
  fill(pupil);
  ellipse(300,200,40,65);
}



function keyPressed() {
  if (key === 's') {
    saveGif('mySketch', 10);
  }
}