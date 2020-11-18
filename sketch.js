const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var object;
var object2;
function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  var option={
    isStatic:true
  }
  //to create body
  object=Bodies.rectangle(400,380,800,10,option);
  object2=Bodies.circle(200,100,20,{restitution:0.3});
  //add body inside world
  World.add(world,object);
  World.add(world,object2);
  console.log(object);
  console.log(object.type);
  //Engine.run(engine);
}

function draw() {
  background(0);
  Engine.update(engine);
  var pos=object.position;
  rectMode(CENTER);
  ellipseMode(RADIUS);
  rect(pos.x,pos.y,800,10) ;
  ellipse(object2.position.x,object2.position.y,20,20);

}