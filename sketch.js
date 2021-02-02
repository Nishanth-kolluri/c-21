var obj1,obj2,obj3,obj4; 
var mr;



function setup() {
  createCanvas(1200,800);
  obj1 = createSprite(400,400,50,50);
  obj2 = createSprite(700,400,70,70);
  obj3 = createSprite(300,300,65,65);
  obj4 = createSprite(300,500,75,80);
  mr = createSprite(500,500,60,60);
  obj1.velocityX = 2;
  obj2.velocityX = -2;
}
function draw() {
  background('pink');
  mr.y = World.mouseY;
  mr.x = World.mouseX;
  bounceoff(obj1,obj2); 
  if(istouching(obj3,mr)) {
   obj3.shapeColor = 'blue';
   mr.shapeColor = 'blue';
  }
  if(istouching(obj4,mr)) {
    obj4.shapeColor = 'black';
    mr.shapeColor = 'black';
  }
  drawSprites();
}
