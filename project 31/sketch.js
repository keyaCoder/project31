const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;

    var particle = [];
    var plinko = [];
    var division = [];

    var divisionHeight = 390;

function setup(){
  var canvas = createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;


  ground = new Ground(240,790,480,20);

  for(var i = 0; i <= width; i = i+80){
      division.push(new Division(i,height = divisionHeight,10,
      divisionHeight));
  }

  for(var j = 40; j <= width; j = j+50){
      plinko.push(new Plinko(j,75));
  }
  for(var j = 15; j <= width-10; j = j+50){
    plinko.push(new Plinko(j,175));
}
for(var j = 40; j <= width; j = j+50){
  plinko.push(new Plinko(j,275));
}
for(var j = 15; j <= width-10; j = j+50){
plinko.push(new Plinko(j,375));
}
 
 
 

}

function draw(){
  background("black");
  Engine.update(engine);
  strokeWeight(4);
  
  ground.display();

//   for(var j = 0; j < plinko.length; j = j++){
//     plinko[j].display();
//  }

//  for(var i = 0; i < division.length; i = i++){
//   division[i].display();
// }

plinko[0].display();
plinko[2].display();
plinko[3].display();
plinko[4].display();

division[0].display();
division[1].display();
division[2].display();
division[3].display();
division[4].display();
division[5].display();
division[6].display();
division[7].display();

  drawSprites();
  
}