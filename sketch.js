var fairy,fairyImage;
var bg,bgImage
var star,starImage;

function preload()
{
   //preload the images here

fairyImage=loadImage("images/fairy1.png");
starImage=loadImage("images/star.png");
bgImage=loadImage("images/starnight.png");


}

function setup() {
  createCanvas(1000,1000);
  
  bg=createSprite(1000,1000,1000,1000);
  bg.addImage(bgImage)
fairy=createSprite(100,500,5,5);
fairy.addImage(fairyImage);
star=createSprite(700,150,5,5);
star.addImage(starImage);
}


function draw() {
  background("black");

if(keyDown("space")){
 fairy.velocityX=2;
  star.velocityY=2;}
  



drawSprites();
}
