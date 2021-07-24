var bgImg
var cat,cat1,mcat2;
var mouse,mouse1,mouse2;


function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    cat1 = loadImage("images/ca1.png");
    mouse1 = loadImage("iages/mouse1.png");
    cat2 = loadImage("images/cat2.png,cat3.png");
    mouse2 = loadImage("images/mouse2.png,mouse3.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

}

function draw() {

    background("bgImg");
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x < (cat.width - mouse.width)/2) {
        cat.velocityX = 0;
        cat.addAnimation("catRunning",  catimg2);
        cat.changeAnimation("catRunning");
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

 if(eyCode === RIGHT_ARROW) {
    mouse.addAnimations("mouseTeasing", mouseimage2);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay = 25;
 }




 if(keyCode === LEFT_ARROW) {
     mouse.addAnimations("mouseTeasing", mouseimage2);
     mouse.changeAnimation("mouseTeasing");
     mouse.frameDelay = 25;
 }

}
