
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject;
var world;
var paperObj;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);
	keyPressed();

	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new Dustbin(1200,650);
	paperObj=new paper(300,500,50,50);

	Engine.run(engine);
 // Render.run(render);
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  
  groundObject.display();
  paperObj.display();
  dustbinObj.display();
  
  
}
function keyPressed(){
	if(keyCode=== UP_ARROW){
		Matter.Body.applyForce(paperObj.body,paperObj.body.position,{x:160,y:-170});
	}
}
