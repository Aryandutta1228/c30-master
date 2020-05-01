const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg,platform;
var hero1, slingshot;


function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;


    ground1 = new Ground(600,600,1200,20);
    ground2 = new Ground(1000,360,200,20);
    ground3 = new Ground(1000,550,200,20);
    ground4 = new Ground(1000,180,200,20);
    
    hero1 = new Hero(200,50);
    block1 = new Block1(1000,350,50,100);
    block2 = new Block2(1000,450,50,100);
    block3 = new Block3(750,550,50,100);
    block4 = new Block4(600,550,50,100);
    block5 = new Block5(1000,150,50,100);
    

    slingshot = new SlingShot(hero1.body,{x:200, y:430});
}

function draw(){
    background(0);
    Engine.update(engine);
    hero1.display();
    slingshot.display(); 
    ground1.display(); 
    ground2.display();
    ground3.display();
    ground4.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    
}

function mouseDragged(){
    Matter.Body.setPosition(hero1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(hero1.body);
    }
}