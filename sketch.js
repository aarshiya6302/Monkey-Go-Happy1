var bananaimg, bananagroup, obstacleimg, obstaclegroup, backimg, back, monkeyimg, monkey, ground, score;



function preload() {
  
  backimg=loadImage("Jungle4.png");
  bananaimg=loadImage("banana.png");
  obstacleimg=loadImage("stone.png");

  monkeyimg=loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");
  
}
function setup() {
  createCanvas(800, 600);
  background(225)
  
  score=0;
  
  back=createSprite(300,150);
  back.scale=2
  back.addImage("back", backimg);
  back.velocityX=-5;
  back.x=back.width/2;
  
  monkey=createSprite(70,300,40,40);
  monkey.addAnimation ("monkey", monkeyimg);
  monkey.scale=0.1
  
  ground=createSprite(300,300,600,10);
  ground.visible=false;
  
  
  bananagroup = new Group();
  obstaclegroup = new Group();
  
}

function draw() {
  
  edges=createEdgeSprites();
   
  monkey.collide(ground);
  
  
  if (back.x < 600){
    back.x = back.width/2;
     }
  

     //camera.position.x=displayWidth/2;
   camera.position.y=monkey.y;

 
  
  if(keyDown(UP_ARROW)&& monkey.y>=200){
     monkey.velocityY=-15
     }
  
    if(keyDown("space")&& monkey.y>=200){
     monkey.velocityY=-15
     }
  
  if(monkey.isTouching(bananagroup)){
bananagroup.destroyEach()
    score=score+1
    stroke("white");
    textSize(20);
    fill("white");
    text("score: "+score,700,200)
  }
  
  
  if(monkey.isTouching(obstaclegroup)){
obstaclegroup.destroyEach()
    monkey.scale=0.1;
  }
  
  
  monkey.velocityY = monkey.velocityY + 0.9;
  
  
    stroke("white");
    textSize(20);
    fill("white");
    text("score: "+score,700,200)
  
  
   var rand = Math.round(random(1,6));
    switch(score) {
      case 10: monkey.scale=0.12;
              break;
      case 20: monkey.scale=0.14;
              break;
      case 30: monkey.scale=0.16;
              break;
      case 40: monkey.scale=0.18;
              break;
      default: break;
    }
   
  score.depth= monkey.depth;
  
  drawSprites();
  spawnBanana();
  spawnObstacles()
  
  stroke("white");
    textSize(20);
    fill("white");
    text("score: "+score,700,100)
  

}

   
function spawnBanana() {
if(frameCount %100===0){
    banana=createSprite(600,random(90,150));
    banana.addImage ("banana", bananaimg);
    banana.scale=0.05;
    banana.velocityX=-5;
    banana.lifetime=1200;
    bananagroup.add(banana);
  }
}

function spawnObstacles(){
 if(World.frameCount %600===0){
    var obstacle=createSprite(600,300);
    obstacle.addImage("obstacle", obstacleimg);
    obstacle.scale=0.20;
    obstacle.velocityX=-5;
    obstacle.lifetime=1200;
   obstaclegroup.add(obstacle);
  }
}

