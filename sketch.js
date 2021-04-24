
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var world;

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
	
	//Create a Ground
ground = new Round(0,700,1600,2);
ball1 = new Ball(200,120,80);
dustbin1 = new Sides(1200,445,250,250);
}

function draw() {
  background("white");
Engine.update(engine) 

 ball1.display();
  ground.display();  
  dustbin1.display();  
 // dustbin2.display();  
  //dustbin3.display();
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

   Matter.Body.applyForce(ball1.body,ball1.body.position,{x:85,y:-85});
    
  	}
}





