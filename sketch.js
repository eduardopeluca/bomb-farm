let gameState = 'start';
let btnPlay
let inicial  
let sprites = []

function setup() {
  createCanvas(400, 400);
  criarSprites()
}
  
  
function preload(){ inicial=loadImage('inicial.jpg')    
//sprites [0] = loadImage('img/btnPlay.png') 
                   
}
                              







function draw() {
  background(220);
  telaInicial()
  
if(btnPlay.mouse.hovering())   {
 mouse.cursor = 'pointer'; 
 btnPlay.scale = 1.2
  }
else  {
  mouse.cursor = 'default';
  btnPlay.scale = 1
    

}
  
}

function telaInicial(){
  image(inicial,0,0,width,height)


  textAlign(CENTER)
  textSize(48)
  fill(255)
  text("Bomb farm",width/2, 50)

}

function criarSprites(){
  
  btnPlay = new Sprite()
 btnPlay.w = 150;// 
  btnPlay.h = 70; //
 btnPlay.x = width/2;//
 btnPlay.y = 330; //
  btnPlay.color="#884908"
 btnPlay.text="jogar"  
  btnPlay.textSize=24
  // btnPlay.image = sprites[0]
  // btnPlay.image.scale = 0.13

}




