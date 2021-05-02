const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var particle = []
var plinkos = []
var divisions = []

var divisionHeight = 300;
var score = 0;
var particle;
var gameState = 1;
function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  for (var k = 0; k <= width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2,10,divisionHeight))
  }

  for(var j = 5; j <= width; j=j+50){
    plinkos.push(new Plinko(j,375,7));
  }

  for(var j = 15; j <= width; j=j+50){
    plinkos.push(new Plinko(j,275,7));
  }

  for(var j = 40; j <= width; j=j+50){
    plinkos.push(new Plinko(j,75,7));
  }

  for (var i = 15; i <= width-10; i= i+50){
    plinkos.push(new Plinko(i,175,7));
  }
}

function draw() {
  background(0);
  Engine.update(engine);
  ground.display();

  if(frameCount%60===0){
    particle.push(new Particle(random(width/2-30, width/2+30), 10,10))
  }

  for(var j = 0; j < particle.length; j++){
    particle[j].display();
  }
  for(var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }
  for(var i = 0; i < plinkos.length; i++){
    plinkos[i].display();
  }
}
