var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var container1, container2, container3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	container1=createSprite(400,660,200,20);
	container1.shapeColor=color("red")
	container2=createSprite(310,600,20,100);
	container2.shapeColor=color("red")
	container3=createSprite(490,600,20,100);
	container3.shapeColor=color("red")


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
		 


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  keyPressed();
   drawSprites();
  
 
}

function keyPressed() {
 if (keyCode===LEFT_ARROW) {
   helicopterSprite.x = helicopterSprite.x-20;
   translation={x:-20,y:0}
	Matter.Body.translate(packageBody, translation)
  } else if (keyCode===RIGHT_ARROW) {
	helicopterSprite.x = helicopterSprite.x+20;
	translation={x:20,y:0}
	Matter.Body.translate(packageBody, translation)
  } else if (keyCode===DOWN_ARROW) {
	  Matter.Body.setStatic(packageBody,false)
  }
}



