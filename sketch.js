var wall,car;
var speed,weight;


function setup() {
  createCanvas(1500,1500);
  
  speed=random(55,90);
  weight=random(400,150);
  car=createSprite(50,200,20,20);
  wall=createSprite(800,90,30,height/2)
  car.velocityX = 10;

  
}

function draw() {
  background(255,255,255);  
  drawSprites();
}





if(wall.x-car.x < (car.width+wall.width)/2)
{car.velocityX=0;
  var deformation= 0.5 *2260 * 60 *70/22509;
  if(deformation>180)
  {
    car.shapeColor=color(255,0,0);
  }

  if(deformation<180 && deformation>100)
  {
    car.shapeColor=color(230,230,0);
  }
  if(deformation<100)
  {
    car.shapeColor=color(0,255,0);
  }
}