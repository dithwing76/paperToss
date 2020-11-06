
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground
var block1,block2,block3
var ball

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	block1= new Block(650,675,10,35);
	block2= new Block(750,675,10,35);
	block3= new Block(700,690,100,10);
	//Create the Bodies Here.
	ground= new Ground(400,700,800,10);
	ball= new Ball(30,20,10,10);

	Engine.run(engine);
  
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  block1.display();
  block2.display();
  block3.display();

  ball.display();
  
  
  ground.display();


  if (keyWentDown("up")){
	  Matter.Body.applyForce(ball.body,ball.body.position,{x:1,y:-5});
  }
  drawSprites();
 
}



