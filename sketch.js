const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bee, beeAnime,beeRotateAnime;
var bg;
var x1=0;
var x2;
var tree1Img,tree2Img,tree3Img,tree4Img;
var tree1,tree2,tree3,tree4;
var obs5;
var obstacles;
var honeyImg1,honeyImg2,honeys;
var scrollSpeed = 10;
var beeHive,beehiveImg;
//var gameState=PLAY;
//var PLAY;
//var END;
//ar SERVE;
var gameState="serve1";
//var stem,stemImg;
var honeyCount;
var platForm1,p1Img,platForm2,p2;
var wood1,woodImg,wood2;
var pathogenImg1,pathogenImg2,pathogenImg3;
var pathogens;
var bee4Img;
var endbeeImg;
var heartImg,heart1,heart2,heart3;
var honeySplash;
var honey;
var obstacleGroup;
var treeGroup;
var tree1Img,tree2Img,tree3Img;
var flower1,flower2,flower3,flower4,flower5,flower6,flowerImg1,flowerImg2;
var line1,line2,line3,line4;
var rec,recImg;
var gameOver,gameOverImg;
var beeStart1,beeStart1Img,flowerStart1,flowerStart1Img,arrow1,arow1Img;
var bgServe1,bgServe1Img;
var bgServe2,bgServe2Img;
var beeServe,beeServeImg;
var arrowRed1,arrowRedImg;
var arrowRed2;
var startImg,start;
var beeDead,beeDeadImg;
var block;
var score;
var honeyCount2,honeyCountImg;
var score2,score2Img;
var sadLeaf,mediumLeaf,happyLeaf1,happyLeaf2,happyLeaf3;
var sadLeafImg,mediumLeafImg,happyLeaf1Img,happyLeaf2Img,happyLeaf3Img;
var endBgImg,endBg;
var restartButton,restartImg;
var arrowKey,arrowKeyImg;
var beeServe2,beeServe2Img;
var confettiBgImg;
var sad,sadImg;
var happySound;
var errorSound;
var twinkleSound;
var happy2Sound;
var happy3Sound;
var drumSound,endSound,winSound,nextSound,flowerSound;
function preload(){
beeAnime=loadAnimation("FLY_RIGHT/1.png","FLY_RIGHT/2.png","FLY_RIGHT/3.png","FLY_RIGHT/4.png","FLY_RIGHT/5.png","FLY_RIGHT/6.png")
bg=loadImage("FLY_RIGHT/forest.png");
tree1=loadAnimation("obstacles/tree1.png");
tree3=loadAnimation("obstacles/tree3.png");
tree4=loadAnimation("obstacles/tree4.png");
//obs5=loadImage("obstacles/obs5.jpg");
honeyImg1=loadImage("images/honey1.png");
honeyImg2=loadImage("images/honey2.png");

beehiveImg=loadImage("beehive.png");

stemImg=loadImage("t3.png");

p1Img=loadImage("Platforms/p1.png");
p2Img=loadImage("Platforms/p2.png");
woodImg=loadImage("obstacles/wood.png");

pathogenImg1=loadImage("obstacles/p1.png");
pathogenImg2=loadImage("obstacles/p2.png");
pathogenImg3=loadImage("obstacles/p3.png");

beeRotateAnime=loadAnimation("beeRotate/r1.png","beeRotate/r2.png","beeRotate/r3.png","beeRotate/r4.png");
bee4Img=loadImage("FLY_RIGHT/4.png");

//endbeeImg=loadAnimation("endbee.png");

heartImg=loadImage("images/heart.png");

honeySplash=loadImage("images/honeySplash.png");

flowerImg1=loadImage("images/flower.png");

flowerImg2=loadImage("images/flower2.png");

recImg=loadImage("images/imgRec.png");

gameOverImg=loadImage("images/gameEnd.png");

beeStart1Img=loadImage("slide1/beeServe1.jpg");
flowerStart1Img=loadImage("slide1/flowerServe1.png");
arrow1Img=loadImage("slide1/arrowServe.png");

//arrowRed2Img=loadImage("slide2/arrowRed.png");
bgServe1Img=loadImage("slide1/bgServe.jpg");

bgServe2Img=loadImage("slide2/bluebg.jpg");
beeServeImg=loadImage("slide2/beeServe.png");
arrowRedImg=loadImage("slide2/arrowRed.png");
startImg=loadImage("slide2/start.png");
beeDeadImg=loadImage("images/beeDead.png");

honeyCountImg=loadImage("images/honeyCount.png");

score2Img=loadImage("images/score.png");

sadLeafImg=loadImage("images/sadleaf1.png");
mediumLeafImg=loadImage("images/mediumleaf2.png");
happyLeaf1Img=loadImage("images/happy1leaf3.png");
happyLeaf2Img=loadImage("images/happyleaf.png");

endBgImg=loadImage("images/endBg.jpg");

restartImg=loadImage("images/restart.png");

arrowKeyImg=loadImage("images/arrowKeys.png");

beeServe2Img=loadImage("slide2/beeServe.png");

confettiBgImg=loadImage("images/confettiBg.jpg");

sadImg=loadImage("images/sad.png");

happySound=loadSound("Happy.mp3");

errorSound=loadSound("error.mp3");

twinkleSound=loadSound("twinkle.wav");

happy2Sound=loadSound("happy2.wav");

happy3Sound=loadSound("happy3.wav");

drumSound=loadSound("drums.wav");
winSound=loadSound("win.wav");
nextSound=loadSound("next.wav");
endSound=loadSound("end.wav");
flowerSound=loadSound("flower.wav");
}

function setup(){
    
createCanvas(displayWidth,displayHeight);
 honeyCount=10;
 score=0;
engine = Engine.create();
world = engine.world;

obstacleGroup=new Group();
honeyGroup=new Group();
pathogenGroup=new Group();
//treeGroup=new Group();
//group.y=group.y+15;
//if(group.y===15){
 // group
//}
sadLeaf=createSprite(995,70);
sadLeaf.addImage(sadLeafImg);
sadLeaf.scale=0.6;
sadLeaf.visible=false;

mediumLeaf=createSprite(990,70);
mediumLeaf.addImage(mediumLeafImg);
mediumLeaf.scale=0.1;
mediumLeaf.visible=false;

happyLeaf1=createSprite(1000,70);
happyLeaf1.addImage(happyLeaf1Img);
happyLeaf1.scale=0.4;
happyLeaf1.visible=false;

happyLeaf2=createSprite(990,70);
happyLeaf2.addImage(happyLeaf2Img);
happyLeaf2.visible=false;


 x2 = width;
 bee=createSprite(206,170);
 bee.addAnimation("honeybee",beeAnime) ;
 bee.addAnimation("gameEnd",beeDeadImg);
 bee.scale=0.3;
 bee.velocityY=2;
 bee.visible=false;

 gameOver=createSprite(width/2,height/2);
 gameOver.addImage(gameOverImg);
 gameOver.visible=false;
 gameOver.scale=1.7;

 flowerStart1=createSprite(1000,430);
flowerStart1.addImage(flowerStart1Img);
flowerStart1.visible=false;




arrowRed1=createSprite(width/2-50,620);
arrowRed1.addImage(arrowRedImg);
arrowRed1.scale=0.3;




 beeHive=createSprite(700,100);
 beeHive.addImage(beehiveImg);
 //beeHive.visible=false;

 
 

 
block=createSprite(width/2,675,width,30);
 block.visible=false;

honeyCount2=createSprite(110,70);
honeyCount2.addImage(honeyCountImg);
honeyCount2.scale=0.2;
honeyCount2.visible=false;
 //console.log(mouseX,mouseY);
 
 score2=createSprite(1140,70);
 score2.addImage(score2Img);
 score2.visible=false;
 score2.scale=0.7;

 sad=createSprite(310,70);
      sad.addImage(sadImg);
      sad.scale=0.2;
      sad.visible=false;

 //restartButton.visible=false;

 endBg=createSprite(width,height);
 endBg.addImage(endBgImg);
 endBg.visible=false;

 arrowKey=createSprite(140,110)
 arrowKey.addImage(arrowKeyImg);
 arrowKey.scale=0.9;
 arrowKey.visible=false;


 start=createSprite(width/2-30,430);
    start.addImage(startImg);
    start.visible=false;
    start.scale=1;

    beeServe2=createSprite(1200,450);
    beeServe2.addImage(beeServe2Img);
    beeServe2.scale=1.6;
    beeServe2.visible=false;
}

function draw(){
  Engine.update(engine);
  camera.position.x=displayWidth/2;
 
  
  if(gameState==="serve1"){
   
    background(bgServe1Img);
   
    beeHive.visible=false;

   //restartButton.visible=false;

    fill("black");
    textSize(32);
    text("Bees provide us food by pollinating.",425,70);
    text("They are the most important pollinator of food crops.Its simple,no bees no food.",120,130)
   text("They save the environment.Thus bees are very important.",290,190);
   text("So now its your turn to become a bee and save the environment!!",240,300);
 flowerStart1.visible=true;
bee.visible=true;
if(bee.y===390 && bee.velocityY===2){
  bee.velocityX=4;
  bee.velocityY=0;
}
if(bee.isTouching(flowerStart1)){
  bee.velocityX=0;
}



if(mousePressedOver(arrowRed1)){
  nextSound.play();
 gameState="serve2";
}

  }
  if(gameState==="serve2"){
  background(bgServe2Img);
    bee.visible=false;
    flowerStart1.visible=false;
    
   beeServe2.visible=true;
    
   // restartButton.visible=false;
fill("black");
textSize(34);
text("You are a bee,you can move by using arrow keys.",340,110);
arrowKey.visible=true;
text("Your aim is to collect as much honey you can and drop them, ",265,165)
text("when a damaged tree passes  by clicking on the beehive .",285,207);
text("Remember to stay away from the parasites in the air and not fall!",270,285);
arrowRed1.visible=false;
//arrowRed2=createSprite(width/2-50,550);
//arrowRed2.addImage(arrowRedImg);
//arrowRed2.visible=false;
//arrowRed2.scale=0.2;
//arrowRed2.visible=true;
//beeServe=createSprite(990,height/2+50);
//beeServe.addImage(beeServeImg);
//start=createSprite(width/2+150,350);
//start.addImage(startImg);
start.visible=true;
if(mousePressedOver(start) && gameState==="serve2"){
  gameState="play"
  start.visible=false;
 
}
  }

  

 if(gameState==="serve3"){
  background("lightpink");
  beeServe.visible=false;
 }

  if(gameState==="play"){
 

if(bee.isTouching(honeyGroup)){
  honeyCount=honeyCount+5;
  honeyGroup.destroyEach();
 platForm1.destroy();
 twinkleSound.play();
}
beeServe2.visible=false;

arrowKey.visible=false;
//restartButton.visible=false;
beeHive.visible=true;
bee.visible=true;
start.visible=false;



//arrowRed1.visible=false;
 


    image(bg, x1, 0, width+10, height);
image(bg, x2, 0, width+25, height);

x1 -=scrollSpeed;
x2 -=scrollSpeed;

if(x1<= -width){
    x1 = width;
}

if(x2<=-width){
    x2=width;
}
    if(keyDown("RIGHT_ARROW")){
      bee.x=bee.x+5;
    }
    if(keyDown("LEFT_ARROW")){
      bee.x=bee.x-5;
    }
    if(keyDown("UP_ARROW")){
      bee.y=bee.y-5;
    }
    if(keyDown("DOWN_ARROW")){
      bee.y=bee.y+5;
    }
honeyCount2.visible=true;
    fill("black");
    textSize(33);
    text(":"+honeyCount,196,80);

score2.visible=true;
    fill("black");
    textSize(35);
    text(":"+score,1240,75);

    if(score<40){
      sadLeaf.visible=true;
    }
    if(score>40){
      sadLeaf.visible=false;
      mediumLeaf.visible=true;
    }
    if(score>60){
      mediumLeaf.visible=false;
      happyLeaf1.visible=true;
    }
  //  if(score>85){
  //    happyLeaf1.visible=false;
     // happyLeaf2.visible=true;
   // }

  //if(bee.isTouching(obstacleGroup)){
   
 // obstacleGroup.destroyEach();
    
// }
 if(bee.isTouching(pathogenGroup)){
bee.changeAnimation("gameEnd",beeDeadImg)
 bee.velocityY=4;
 obstacleGroup.destroyEach();
 pathogenGroup.destroyEach();
 errorSound.play();
  
 }
 if( bee.isTouching(block)){
  gameOver.visible=true;
  gameState="end"
  beeHive.visible=false;
  endSound.play();
 // restartButton=createSprite(600,500);
  //restartButton.addImage(restartImg);
   //restartButton.scale=1.3;


    }
  
  if(mousePressedOver(restartButton)){
    gameState="play"
  }
  
 // if(bee.y=475){
   // gameState="end"
//  }
  if(mousePressedOver(beeHive)){
    honey = createSprite(bee.x+70,bee.y);
 honey.addImage(honeySplash);
    honey.velocityY = 5;
    honey.scale=0.1;

    honeyCount=honeyCount-1;

    if(honey.isTouching(obstacleGroup)){
   
      obstacleGroup.destroyEach();
      pathogenGroup.destroyEach();
      score=score+50;

      flowerSound.play();

        flower1=createSprite(10,random(0,600));
        flower1.addImage(flowerImg1)
        flower1.velocity.y=3;
        flower1.scale=0.3;

        flower2=createSprite(600,random(0,400));
        flower2.addImage(flowerImg2)
        flower2.velocity.y=3;
        flower2.scale=0.3;

        flower3=createSprite(200,random(0,500));
        flower3.addImage(flowerImg1)
        flower3.velocity.y=3;
        flower3.scale=0.3;

        flower4=createSprite(800,random(0,700));
        flower4.addImage(flowerImg2)
        flower4.velocity.y=3;
        flower4.scale=0.3;

        flower5=createSprite(1000,random(0,200));
        flower5.addImage(flowerImg1)
        flower5.velocity.y=3;
        flower5.scale=0.3;

        flower6=createSprite(1300,random(0,100));
        flower6.addImage(flowerImg2)
        flower6.velocity.y=3;
        flower6.scale=0.2;

        flower7=createSprite(1200,random(0,300));
        flower7.addImage(flowerImg1)
        flower7.velocity.y=3;
        flower7.scale=0.2;

        flower8=createSprite(1500,random(0,400));
        flower8.addImage(flowerImg2)
        flower8.velocity.y=3;
        flower8.scale=0.2;

        obstacleGroup.destroyEach();
      honeyGroup.destroyEach();
      pathogenGroup.destroyEach();

     }
    if(honeyCount<5){
      
      sad.visible=true;
    }
    if(honeyCount>5){
      sad.visible=false;
    }

    
    if(honeyCount===0){
      gameState="end"
      gameOver.visible=true;
      beeHive.visible=false;
      sadLeaf.visible=false;
      mediumLeaf.visible=false;
      happyLeaf1.visible=false;
      happyLeaf2.visible=false;
      

    }
  }
  if(score===100 && gameState==="play"){
   gameState="restart"
  
    
         }
 
  if(gameState==="restart"){
    background(confettiBgImg);
    winSound.play();
    sadLeaf.visible=true;
  //  endBg.visible=true;
    bee.velocityY=0;

  
          fill("black")
          textSize(50);
          text("HURRAY YOU WON!!!",520,340);
         beeHive.visible=false;
          flower1.visible=false;
          flower1.destroy();
          flower2.visible=false;
          flower2.destroy();
          flower3.visible=false;
          flower3.destroy();
          flower4.visible=false;
          flower4.destroy();
          flower5.visible=false;
          flower5.destroy();
          flower6.visible=false;
          flower6.destroy();
          honeyCount2.visible=false;
          score.visible=false;
          platForm1.destroy();
          platForm2.destroy();
    
         
         }

         
         if(keyCode===32 && gameState==="restart"){
          gameState="play"
        }

 spawnObstacles();
   spawnHoney();
  spawnPathogens();
 //  tree1Spawn();
 //  tree3();
  //tree4();
 



    }
    else if(gameState==="end"){
      endSound.play();
      restartButton=createSprite(600,500);
      restartButton.addImage(restartImg);
       restartButton.scale=1.5;
   
 bee.velocityY=4;
      bee.velocityX=0;
      obstacleGroup.destroyEach();
      obstacleGroup.visible=false;
      honeyGroup.destroyEach();
      platForm1.velocityX=0;
      platForm1.visible=false;
      platForm2.velocityX=0;
      platForm2.visible=false;
      obstacleGroup.setLifetimeEach(-1);
      honeyGroup.setLifetimeEach(-1)
      pathogenGroup.destroyEach();
      pathogenGroup.setLifetimeEach(-1);
      beeHive.visible=false;
     // gameOver=createSprite(width/2,height/2);
     // gameOver.addImage(gameOverImg)
    }
   

  
   

  drawSprites();
}



  


 function spawnObstacles(){
  if(frameCount%150===0){
   obstacles=createSprite(width,475);
   obstacles.velocityX=-2;
    obstacles.scale = 1.3; 
    obstacles.lifetime= width/2
    var rand=Math.round(random(1,3));
    switch(rand){
     case 1:obstacles.addAnimation("tree1",tree1);
    
     tree1.scale=2;
            break;
       
            
    case 2:obstacles.addAnimation("tree3",tree3);
           tree3.scale=1.5;
           break;
        
    case 3:obstacles.addAnimation("tree4",tree4);
   tree4.scale=0.9;
           break;
        
   
        
    default:break;    
        
    }
    obstacleGroup.add(obstacles) ;
   }
 }
 
  function spawnHoney(){
    if(frameCount%200===0){
      
        platForm1=createSprite(width,Math.round(random(100,350)));
        platForm1.addImage(p1Img);
        platForm1.velocityX=-2;
        
      
    honeys=createSprite(platForm1.x,platForm1.y-40);
    honeys.velocityX=-2;
    
    honeys.lifetime=width-100/2;
    var rand2=Math.round(random(1,2));
   
    
    switch(rand2){
      case 1:honeys.addImage(honeyImg1);
      honeys.scale = 0.3;
            break;
        
      case 2:honeys.addImage(honeyImg2);
      honeys.scale = 0.1;
            break;
        
      default:break;
    }
  
    honeyGroup.add(honeys);
  }
  }
  

  function growHive(){
  if(keyCode == 32){
     
    

  }
}
function spawnPathogens(){
  if(frameCount%170===0){
    pathogens=createSprite(Math.round(random(110,width)),Math.round(random(100,170)));
    pathogens.velocityX=-2;
     pathogens.scale = 0.3; 
     pathogens.lifetime= width/2
     var rand=Math.round(random(1,3));
     switch(rand){
      case 1:pathogens.addImage(pathogenImg1);
      
             break;
          
      case 2:pathogens.addImage(pathogenImg2);
            
             break;
             
     case 3:pathogens.addImage(pathogenImg3);
            
            break;
            default:break;
       
}
pathogenGroup.add(pathogens);
  }
}



