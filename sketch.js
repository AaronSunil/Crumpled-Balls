
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperBall;
var ground;
var box1,box2,box3;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperBall = new Paper(350,350);

	ground = new DustBin(100,690,1500*2,10);

	box1 = new DustBin(1085,660,200,20);
	box1.shapeColor = color(255,0,0);
	box2 = new DustBin(990,620,20,100);
	box2.shapeColor = color(255,0,0);
	box3 = new DustBin(1190,620,20,100);
	box3.shapeColor = color(255,0,0);

	var render = Render.create({ element: document.body, engine: engine, options: { width: 1200, height: 700, wireframes: false } });
	Engine.run(engine);
	//Render.run(render); }
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  rect(100,690,1500,10);
  paperBall.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  keyPressed();
  drawSprites();
}

function keyPressed() {
	if (keyCode === UP_ARROW) 
	{
		Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:85,y:-85});
	}

}
