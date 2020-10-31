
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperObject
var paperSprite
var wall1, wall2, wall3
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(400, 650, 800, 5)

	paperObject = new Paper(200, 600, 10)

	rectMode("center")
	wall1 = new Dustbin(700, 500, 10, 60)
	wall2 = new Dustbin(750, 500, 10, 60)
	wall3 = new Dustbin(725, 530, 50, 10)



	Engine.run(engine);
  
}


function draw() {

	background(0)
	paperObject.display()

	wall1.display()
	wall2.display()
	wall3.display()
	
	ground.display();


  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Body.applyForce(paperObject.body, paperObject.body.position,{x:10, y:-30})
	}
}



