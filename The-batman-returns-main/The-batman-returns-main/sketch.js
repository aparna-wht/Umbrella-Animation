
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var drops = [];
var rand;
var maxDrops=100;

function preload(){
}

function setup(){
    engine = Engine.create();
    world = engine.world;

   createCanvas(500,700);

   umbrella = new Umbrella(400,900);

   if(frameCount % 150 === 0){

    for(var i=0; i<maxDrops; i++){
        drops.push(new Drop(random(0,1000), random(0,1000)));
    }

}

}

function draw(){
    Engine.update(engine);
    background(0);

    umbrella.display();

    //displaying rain drops
    for(var i = 0; i<maxDrops; i++){
        drops[i].display();
        drops[i].updateY()
        
    }
}
