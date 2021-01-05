
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy, boyImage;
var lstone, lmango;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10, mango11, mango12, mango13;
var tree, ground, stone, rope1;

function preload()
{
	boyImage = loadImage("images/boy.png");
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	boy = createSprite(200,530,50,50);
	boy.addImage(boyImage);
	boy.scale = 0.1;

	tree = new Tree(600,400,400,400);
	ground = new Ground(400,600,800,20);
	stone = new Stone(50,450,50);
	rope1 = new Rope (stone.body,{x:50,y:450});

	mango1 = new Mango(600,400,50,50);
	mango2 = new Mango(550,350,40,40);
	mango3 = new Mango(500,300,50,50);
	mango4 = new Mango(650,350,40,40);
	mango5 = new Mango(700,400,50,50);
	mango6 = new Mango(550,300,40,40);
	mango7 = new Mango(530,250,50,50);
	mango8 = new Mango(650,240,40,40);
	mango9 = new Mango(700,350,50,50);
	mango10 = new Mango(750,300,40,40);
	mango11 = new Mango(600,300,50,50);
	mango12 = new Mango(450,350,40,40);
	mango13 = new Mango(500,400,40,40);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(80);

  tree.display();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  mango13.display();

  rope1.display();
  
  drawSprites();
  stone.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);
  detectCollision(stone,mango11);
  detectCollision(stone,mango12);
  detectCollision(stone,mango13);
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	rope1.fly();
}

function detectCollision(lstone,lmango){
	mangoBodyPosition = lmango.body.position
	stoneBodyPosition = lstone.body.position
	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r)
	{
		Matter.Body.setStatic(lmango.body,false);
	}
}

function keyPressed(){
	if(keyCode == 32){
		Matter.Body.setPosition(stone.body,{x:30,y:400})
		rope1.attach(stone.body);
	}
}

