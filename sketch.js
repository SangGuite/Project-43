var hr,mn,sc;
var hrAngle,mnAngle,scAngle;

function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
}

function draw() {
  background("black");
  translate(400,200);
  hr = hour();
  mn = minute();
  sc = second();
  hrAngle = map(hr,0,12,0,360);
  mnAngle = map(mn,0,60,0,360);
  scAngle = map(sc,0,60,0,360);

  push();
  rotate(hrAngle);
  stroke("green");
  strokeWeight(7);
  line(0,0,80,0);
  pop();

  push();
  rotate(mnAngle);
  stroke("blue")
  strokeWeight(7);
  line(0,0,90,0);
  pop();

  push();
  rotate(scAngle);
  stroke("red");
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  strokeWeight(7);
  noFill();
  stroke("red");
  arc(0,0,200,200,0,scAngle);

  strokeWeight(7);
  noFill();
  stroke("green");
  arc(0,0,160,160,0,hrAngle);

  strokeWeight(7);
  noFill();
  stroke("blue");
  arc(0,0,180,180,0,mnAngle);

  drawSprites();
}