var gardenImg;
var tom, jerry;
var catImg1,catImg2,catImg3,catImg4;
var mouseImg1,mouseImg2,mouseImg3,mouseImg4;

function preload() {
    //load the images here
    gardenImg = loadImage("images/garden.png");
    catImg1 = loadAnimation("images/cat1.png");
    catImg2 = loadAnimation("images/cat2.png,images/cat3.png");
    mouseImg1 = loadAnimation("images/mouse1.png");
    mouseImg2 = loadAnimation("images/mouse2.png,images/mouse3.png");
    catImg4 = loadAnimation("images/cat4.png");
    mouseImg4 = loadAnimation("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom=createSprite(870,600);
    tom.addAnimation("tom",catImg1);
    tom.scale = 0.2;

    jerry=createSprite(200,600);
    jerry.addAnimation("jerry",mouseImg1);
    jerry.scale = 0.15;
}

function draw() {

    background(gardenImg);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        tom.velocityX=0;
        tom.addAnimation("tomlastImage",catImg4);
        tom.x = 300;
        tom.scale=0.15;
        tom.changeAnimation("tomlastImage");
        jerry.addAnimation("jerrylastImage",mouseImg4);
        jerry.scale=0.15;
        jerry.changeAnimation("jerrylastImage");
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode === LEFT_ARROW){
      mouse.addAnimation("mouseTeasing",mouseImg2,mouseImg3);
      mouse.changeAnimation("mouseTeasing");
      mouse.frameDelay=25;

  }

  if(keyCode === RIGHT_ARROW){
      tom.addAnimation("catRunning",catImg2,catImg3);
      tom.addAnimation("catRunning");
      catImg3.frameDelay=25;

  }


}
