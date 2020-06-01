var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody, ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var paper1;
var dustbin1, dustbin2, dustbin3;
var ground1;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	ground1 = new Ground(width/2, 680, width, 20);
	dustbin1 = new Dustbin(1300, 660, 200, 20);
	dustbin2 = new Dustbin(1210, 620, 20, 100);
	dustbin3 = new Dustbin(1410, 620, 20, 100);
	paper1 = new Paper(200, 675, 40);


	var render = Render.create({
		element: document.body,
		Engine: engine, 
		options:{
			width: 1200,
			height: 700,
			wireframes: false
		}
	});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper1.display();

  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper1.body, paper1.body.position, {x: 95, y:-95});
	}
  
}