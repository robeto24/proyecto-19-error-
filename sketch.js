
var play 
var end
var gamestate = play




var zombie;
var oruga;
var fondo;
var suelo;



function preload(){


}

function setup() {
createCanvas(600, 300);
suelo=createSprite(300,280,600,20);
oruga=createSprite(50,250,20,20);
fondo=createSprite(200,50,30,20);

suelo.visible = false;

}

function draw() {
 background("blue")

 oruga.collide(suelo)
oruga.velocityY = oruga.velocityY + 1


if(gamestate === play){

    
   
    if(oruga.isTouching(zombie)){

        
    gamestate = end;
    
      
    
    }
    if(keyDown("space")&& oruga.y >= 250) {
        oruga.velocityY = -12;
            
        }







    
}
else if (gamestate === end) {
    

    
    zombie.lifetime = 0;

    
    if(mousePressedOver(restart)) {
        reset();
      }

}











if (frameCount % 60 === 0){

zombie=createSprite(600,250,30,20);
zombie.velocityX = -5;
zombie.lifetime = 300;





}

 drawSprites();
}

function reset(){
    gamestate = play
    zombie.destroyEach(); 
    
    
    
    }