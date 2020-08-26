const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var world;
var score=0;
const Constraint = Matter.Constraint;

function setup() {
  

  engine = Engine.create();
  world = engine.world
  createCanvas(800,400);
  ground = new Ground(600,380,300,10);
  ground2 = new Ground(600,150,300,10);
  block1 = new Block(600,350,50,50);
  block2 = new Block(550,350,50,50);
  block3 = new Block(650,350,50,50);
  block4 = new Block(700,350,50,50);
  block5 = new Block(500,350,50,50);
  block6 = new Block(600,350,50,50);
  block7 = new Block(600,350,50,50);
  block8 = new Block(650,340,50,50);
  block9 = new Block(550,350,50,50);
  block10 = new Block(650,120,50,50);
  block11 = new Block(600,120,50,50);
  block12 = new Block(550,120,50,50);
  block13 = new Block(600,80,50,50);

  polygon = new Polygon(300,300,80);
  slingshot = new Slingshot(polygon.body,{x:300,y:200});

  ground.display();
  Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  textSize(30);
  text("Score:"+score,50,200);
  
  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();

  ground.display();
  ground2.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();

  polygon.display();
   drawSprites();
}
function mouseDragged()
{
Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
slingshot.fly();
}
function keyPressed(){
  if(keyCode == 32){
    Matter.Body.setPosition(polygon.body,{x:235,y:420})
    slingshot.attach(polygon.body);
  }
}