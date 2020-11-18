var bullet ;
var speed , weight;

var wall , thikness;


function setup() {
  createCanvas(1600,400);

  speed = random(223,321);
  weight = random(30,52);

  thikness = random(22,83);

  bullet = createSprite(50, 200, 50, 5);
  bullet.velocityX = speed;
  bullet.shapeColor= color("white");
   
  wall = createSprite(1200,200,thikness,height/2);
   wall.shapeColor=color("grey");
}

function draw() {
  background("black"); 
  
if (hasCollided(bullet,wall)){

bullet.velocityX = 0;

var damage = 0.5 * weight * speed * speed / (thikness* thikness * thikness);

if(damage>10){
  wall.shapeColor = color("red");
}

if(damage<10){
  wall.shapeColor = color("green");
}

}




 drawSprites();
}

function hasCollided(bullet,wall){
bulletRightEdge = bullet.x + bullet.width;
wallLeftEdge = wall.x;
if (bulletRightEdge>=wallLeftEdge){
  return true;
}
return false ;
}
