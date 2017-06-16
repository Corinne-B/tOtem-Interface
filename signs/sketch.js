var posX1 = [100,200,300,400];
var posY1 = [100,200,300,400];
var posX2 = [-100,0,100];
var posY2 = [-100,0,100];

var calcPosX2;
var calcPosY2;
var selectPosX1;
var selectPosY1;
var selectPosX2;
var selectPosY2;

var numberLines;

function setup() {
  createCanvas(500,500);
}

function draw() {
  drawLines();
  drawPattern();
}

function drawPattern() {
  for (var y=0; y<4; y++) {
    for (var x=0; x<4; x++) {
      fill(0);
      noStroke();
      ellipse(x*100+100, y*100+100, 7, 7);
    }
  }
  noLoop();
}

function drawLines() {
  var numberLines = random(1,43);
  for (var a= 0; a<numberLines; a++) {  
    
    //Define X1 and X2 position randomly;
    selectPosX1 = posX1[int(random(posX1.length))];
    if(selectPosX1 == 100) {
      selectPosX2 = selectPosX1+100;
    }
    else if(selectPosX1 == 400) {
      selectPosX2 = selectPosX1-100;
    }
    else {
      calcPosX2 = posX2[int(random(posX2.length))];
      selectPosX2 = selectPosX1+calcPosX2;
    }
    
    //Define Y1 and Y2 position randomly;
    selectPosY1 = posY1[int(random(posY1.length))];
    if(selectPosY1 == 100) {
      selectPosY2 = selectPosY1+100;
    }
    else if(selectPosY1 == 400) {
      selectPosY2 = selectPosY1-100;
    }
    else {
      calcPosY2 = posY2[int(random(posY2.length))];
      selectPosY2 = selectPosY1+calcPosY2;
    }

    //Draw the lines;
    fill(0);
    strokeWeight(20);
    line(selectPosX1, selectPosY1, selectPosX2, selectPosY2);
  }
  noLoop();
}