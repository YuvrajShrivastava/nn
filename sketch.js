var plane,passenger,sky,startButton,crashedPlane
var man_running,man,backgroundi,bgI

var skyImage,planeImage,passengerImage
var gameState =3;
var play,ground
var plank,pi

function preload(){
planeImage = loadImage("images.png");
skyImage = loadImage("download.jfif")
crashedPlane = loadImage("cp.png")
passengerImage = loadAnimation("m1.jpg","m2.jpg","m3.jpg")
man_running = loadAnimation("c1.png","c2.png","c3.png");
bgI = loadImage("bg1.png")
pi = loadImage("wood2.png")
}


function setup(){
var canvas = createCanvas(600,600)
plane = createSprite(20,300,50,50);

plane.addImage(planeImage)
plane.velocityX = 0;
//passenger = createSprite(100,500,10,20)
man = createSprite(100,500,20,50);
man.addAnimation("running", man_running);
man.scale = 0.7;
backgroundi = createSprite(100,300,600,600)
backgroundi.x = backgroundi.width/2;
backgroundi.addImage("image",bgI)
backgroundi.scale = 2
//backgroundi.velocityX=2;
if (frameCount % 60 === 0) {
  plank = createSprite(600,120,40,10);
 plank.y = Math.round(random(300,550));
 
 //.addImage(cloudImage);
 //cloud.scale = 0.5;
 plank.velocityX = -3;
 
  //assign lifetime to the variable
 plank.lifetime = 500;
 plank.addImage("hosqbif",pi)
 
 //adjust the depth
 //clou.depth = trex.depth;
 //trex.depth = trex.depth + 1;
 
 //add each cloud to the group
//   cloudsGroup.add(cloud);
plank.display();
}

}

function draw(){
  background("lightblue")

if(gameState === 0){
console.log(gameState)
plane.display();
}
if(plane.x===300){
  gameState = 1
  console.log(gameState)
}
if(gameState===1){

    plane.addImage(crashedPlane)
    plane.display();
  
}
if(plane.x === 600){
  gameState = 2;
}
if(gameState === 2){
   play = createButton("play");

   if(play.mousePressed(game3()));
}


if(gameState===3){
 

ground = createSprite(200,580,600,20);
ground.x = ground.width /2;
ground.velocityX = -4;
/*if( backgroundi.x < 600) {
  backgroundi.x = backgroundi.width / 2;
}*/
if(keyDown("space")){
  man.velocityY = -10


}
man.velocityY = man.velocityY+0.8
man.collide(ground)
/*passenger.addAnimation("hee",passengerImage)
passenger.scale = 0.5
passenger.velocityX=2
passenger.display();*/
if (backgroundi.x < 600){
  backgroundi.x = 300
}
backgroundi.display();
man.display();
ground.display();
if (frameCount % 300 === 0) {
  plank = createSprite(600,500,40,10);
 plank.y = Math.round(random(400,550));
 //.addImage(cloudImage);
 //cloud.scale = 0.5;
 plank.velocityX = -3;
 
  //assign lifetime to the variable
 plank.lifetime = 500;
 plank.addImage("hosqbif",pi)
 
 //adjust the depth
 //clou.depth = trex.depth;
 //trex.depth = trex.depth + 1;
 
 //add each cloud to the group
//   cloudsGroup.add(cloud);

}
plank.collide(man)
plank.display();


}



  /*if(gameState === "play"){

    plane = createSprite(20,300,50,50);
    plane.addImage(planeImage)
    plane.velocityX = 2;
   

  }*/

//drawSprites();
}
function game3(){
  gameState=3
}
function plankS(){
  if (frameCount % 60 === 0) {
     plank = createSprite(600,120,40,10);
    plank.y = Math.round(random(80,120));
    //.addImage(cloudImage);
    //cloud.scale = 0.5;
    plank.velocityX = -3;
    
     //assign lifetime to the variable
    plank.lifetime = 500;
    plank.addImage("hosqbif",pi)
    
    //adjust the depth
    //clou.depth = trex.depth;
    //trex.depth = trex.depth + 1;
    
    //add each cloud to the group
 //   cloudsGroup.add(cloud);
 plank.display();
}
}
