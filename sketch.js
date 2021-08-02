const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase;
var computer, computerBase;

//Declare an array for arrows playerArrows = [ ]


var playerArrow = [];

var arrow = [];

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  playerBase = new PlayerBase(300, random(450, height - 300), 180, 150);
  player = new Player(285, playerBase.body.position.y - 153, 50, 180);
  playerArcher = new PlayerArcher(
    340,
    playerBase.body.position.y - 180,
    120,
    120
  );

  computerBase = new ComputerBase(
    width - 300,
    random(450, height - 300),
    180,
    150
  );
  computer = new Computer(
    width - 280,
    computerBase.body.position.y - 153,
    50,
    180
  );
  computerArcher = new ComputerArcher(
    width - 340,
    computerBase.body.position.y - 180,
    120,
    120
  );
  
 


}

function draw() {
  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

 
  playerBase.display();
  player.display();
  

  computerBase.display();
  computer.display();
  
  playerArcher.display();
  computerArcher.display()

 // Use for loop to display arrow using showArrow() function
 function showarrow(arrow, index) {
  arrow.display();
  if (arrow.body.position.x >= width || arrow.body.position.y >= height - 50) {
    Matter.World.remove(world, arrow.body);
    arrow.splice(index, 1);
  }
}

}

function keyPressed() {

  if(keyCode === 32){
    // create an arrow object and add into an array ; set its angle same as angle of playerArcher
var posX = playerArcher.body.position.x;
var posY = playerArcher.body.position.y;
var angle = playerArcher.body.angle+PI/2;

var arrow = new PlayerArrow(posX,posY,100,10);

arrow.trajectory = [];
Matter.Body.setAngle(arrow.body,angle);
playerArrow.push(arrow);
  }
}

function keyReleased () { 
  if(keyCode === 32){ 
     if (playerArrow.length) {
    var angle = playerArcher.body.angle+PI/2;
    playerArrow[playerArrow.length - 1].shoot(angle); } }
    }

//Display arrow and Tranjectory
function showArrows(index, arrows) {
  
    playerArrow.display();
    if (playerArrow.body.position.x >= width || playerArrow.body.position.y >= height - 50) {
      Matter.World.remove(world, arrow.body);
      arrow.splice(index, 1);
    }
  
 

}
