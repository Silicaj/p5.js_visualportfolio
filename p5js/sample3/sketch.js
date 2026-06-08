/***************************************

1. mouse
    -안경의 위치가 마우스 포인터를 따라감
    -마우스 버튼 클릭 중 안경알이 검게 변화
    -마우스 버튼 클릭 중 배경화면 색이 기존 배경화면 색과 유사한 구간 내에서 랜덤하게 변화

2. keyboard  
    -키보드 좌우 방향키를 통해 배경화면 색 변경
    -q키를 통해 안경 위치 고정
    -w키를 통해 안경 위치 고정 해제
    
****************************************/


let backgroundColor = 200;
let br = 0;
let bg = 0;
let bb = 0;
let mx = 0;
let my = 0;
let isFixed = 0;
let fix_mx = 0;
let fix_my = 0;


function setup(){
    createCanvas(400, 600);
}

function draw() {
  
  if (keyIsPressed) //좌우방향키로 배경색깔 변경
  {
   if (keyCode === LEFT_ARROW) 
     backgroundColor -=4;
   if (keyCode === RIGHT_ARROW) 
     backgroundColor +=4;
  }
  backgroundColor = constrain(backgroundColor, 50, 255);
  
  br = backgroundColor;
  bg = 210;
  bb = 305 - backgroundColor;
  
  background( br, bg , bb );
  
  if(mouseIsPressed) //마우스 누르면 배경색에 따라 발광
  {
  
    background(br + random(-50,50), bg + random(-50,50), bb + random(-50,50));
  }
  
   noStroke();
   fill("#dbd6c9");
  ellipse(200,350,170,80);

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
  
  if (keyIsPressed) //안경 고정 q, w
  {
    if ((key === 'q') && !isFixed) //q: 고정 (고정상태가 아닌경우에만 작동) 
    {
      fix_mx = mouseX;
      fix_my = mouseY;
      isFixed = 1; //
    }
    if (key === 'w')
    { 
      isFixed = 0; //w : 고정해제
    }
  }
  
  if (isFixed) //고정되었다면 고정좌표 사용
  {
    mx = fix_mx;
    my = fix_my;
  }
  else // 아니라면 마우스 좌표 사용
  {
    mx = mouseX;
    my = mouseY;
  }
  
  
  fill("#525059"); //안경 시작
  stroke("#25242a");
  rectMode(CENTER);
  rect(mx, my, 20, 3);
  rect(mx - 78, my - 5, 10, 3);
  rect(mx + 78, my - 5, 10, 3);
  
   if (mouseIsPressed) //마우스 클릭 시 썬글라스로 변경
  {
    fill(50,50,50,220);
  }
  else
    noFill();
  
  strokeWeight(3);
  ellipse(mx - 40, my + 5,65,55);
  ellipse(mx + 40, my + 5,65,55);
  stroke("#8e7964");
  strokeWeight(1);
  ellipse(mx - 40, my + 5,65,55);
  ellipse(mx + 40, my + 5,65,55); //안경끝
  
  rectMode(CORNER);
}


function keyPressed()
{
  if (key === 's')
  {
    saveGif('mySketch', 5);
  }
}
