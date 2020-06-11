
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var ball2
function setup() {
  createCanvas(200,400);
  engine = Engine.create();
  world = engine.world;

 ball = new Ball(95,10,5,5);
 ob1 = new Obs(10,100,15,15)
 ob2 = new Obs(100,100,15,15)
 ob3 = new Obs(190,100,15,15)
 ob4 = new Obs(50,150,15,15)
 ob5 = new Obs(100,150,15,51)
 ob6 = new Obs(150,150,15,15)
 ob7 = new Obs(100,200,15,15)
// ob8 = new Obs(10,200,10,10)
 //ob9 = new Obs(10,100,10,10)
//  ob10 = new Obs(10,100,10,10)
 // ob11 = new Obs(10,100,10,10)
 // ob12= new Obs(10,100,10,10)
  // ob13 = new Obs(10,100,10,10)
  //  ob14= new Obs(10,100,10,10)
  //  ob15 = new Obs(10,100,10,10)
  //  ob16= new Obs(10,100,10,10)
  //  ob17 = new Obs(10,100,10,10)
}
 
function draw() {
  Engine.update(engine);
background(212,65,99);
  ob1.display()
  ob2.display()
  ob3.display()
  ob4.display()
  ob5.display()
  ob6.display()
  ob7.display()
  ball.display() 

  if(keyDown("space")){
  // ball .body.position.x = 95 
   //ball.body.position.y = 10
  ball2 = new Ball(95,100,10);
  console.log("hi")
  } 
}
      
