var surfer,run
var road ,way

function preload(){
  run=loadImage ("Runner-1.png")
way=loadImage ("path.png")
}

function setup(){
  createCanvas(400,800)
  surfer=createSprite(150,150,10,245)
  surfer.scale=0.3
  surfer.addImage ("fast",run);
road=createSprite(200,200)
road.addImage ("path",way);
road.velocityY=20
road.scale=1.5

}

function draw() {
  background("white");
  if(road.y>400){
    road.y=height/4
  }
drawSprites()
}
