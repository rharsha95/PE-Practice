const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object1;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  var object_options = {
    isStatic: true
  }

  object1 = Bodies.rectangle(200,200,20,20,object_options);
  World.add(world,object1);

  console.log(object1);
}

function draw() {
  background(0);  
  Engine.update(engine);
  rect(object1.position.x, object1.position.y, 20,20);

  drawSprites();
}