var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,box1, box2, box3
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
  
  
    bone=createSprite(300, 650, 10, 100);
    bone.shapeColor="red"
  
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

    rose=createSprite(100, 650, 10, 100);
    rose.shapeColor="red"
    lol=createSprite(375, height-35, 160.1, 10);
    lol.shapeColor="red"
 
  
	engine = Engine.create();
	world = engine.world;

     box1 = Bodies.rectangle(300, 610, packageSprite.width/5, 100 , {isStatic:true} );
 	World.add(world, box1);
  
  
    box2 = Bodies.rectangle(450, 610, packageSprite.width/5, 100 , {isStatic:true} );
 	World.add(world, box1);
  
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true, friction:2000.0, density : 1.0});
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
  bone.x= box1.position.x 
  bone.y= box1.position.y 
  rose.x= box2.position.x 
  rose.y= box2.position.y 
  keyPressed();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);

  }
}



