var bgImg, bg;
var catImg1,catImg2,catImg3,cat;
var mouseImg1,mouseImg2,mouseImg3,mouse;

function preload() {
    //Cargar aqui las imagenes
    bgImg=loadImage("images/garden.png");
    catImg1=loadAnimation("images/tomOne.png");
    mouseImg1=loadAnimation("images/jerryOne.png");
    catImg2=loadAnimation("images/tomTwo.png,images/tomThree.png");
    mouseImg2=loadAnimation("images/jerryTwo.png,images/jerryThree.png");
    catImg3=loadAnimation("images/tomFour.png");
    mouseImg3=loadAnimation("images/jerryFour.png");
}

function setup(){
    createCanvas(1000,800);
    //carga los sprites de Tom y Jerry
    bg=createSprite(450,400);
    bg.addImage("fondo",bgImg);

    cat=createSprite(870,600);
    cat.addAnimation("gatoSentado",catImg1);
    cat.scale=0.2;

    mouse=createSprite(800,600);
    mouse.addAnimation("ratónNormal",mouseImg1);
    mouse.scale=0.2;
}

function draw() {

    background(bg);
    //escribe la condición para verificar si Tom y Jerry chocan
    if(cat.x-mouse.x < (cat.width-mouse.width)/2){
        cat.velocityX=0;
        cat.addAnimation("últimaImagenGato",catImg3);
        cat.changeAnimation("últimaImagenGato");
        cat.x=300;
        cat.scale=0.2;
    }
    
    drawSprites();
}

function keyPressed(){
    //escribe aqui el código para la animación del movimiento y cambio
    if(keyCode === LEFT_ARROW){
        mouse.addAnimation("ratónMolestando",mouse2);
        mouse.changeAnimation("ratónMolestando");
        mouse.frameDelay=25;

        cat.velocityX=-5;
        cat.addAnimation("catRunning",catImg2)
        cat.changeAnimation("catRunning")
    }
}