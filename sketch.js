
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    
    
	engine = Engine.create();
	world = engine.world;
    
	//Create the Bodies Here.
    bob1 = new Bob (400,350,15);
     
	Engine.run(engine);
     
}


function draw() {
  rectMode(CENTER);
  background(255);
  bob1.display();
  drawSprites();
 
}



