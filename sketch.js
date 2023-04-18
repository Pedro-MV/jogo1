var player
var sprite
var imagem
var personagem
var c1
function preload(){
imagem=loadImage ("fundo.jpg")
personagem=loadImage ("personagem.png")
}
function setup() {
    createCanvas(600,600);
    sprite=createSprite (300,300,600,600)
    sprite.addImage (imagem)
    player=createSprite (300,300,40,40)
    player.shapeColor = "white"
    sprite.scale=1.25
    player.addImage (personagem)
    player.scale=0.5
    c1=createSprite (75,320,10,350)
    c1.visible=false
   
}

function draw() {
    background("green");
    //códigos que serão executados ao longo de todo o jogo
if (keyDown (LEFT_ARROW)){
    player.x-=3
}
if (keyDown (RIGHT_ARROW)){
    player.x+=3
}
if (keyDown (UP_ARROW)){
    player.y-=3
}
if (keyDown (DOWN_ARROW)){
    player.y+=3
}
player.collide(c1)

    drawSprites();
    textSize(20)
    fill (0)
    text("x: "+mouseX+" y: "+mouseY,mouseX-50,mouseY)
    
}

