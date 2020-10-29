var fixedrect,movingrect;


function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(400, 200, 50, 100);
  fixedrect.shapeColor="red";
  fixedrect.debug=false;
  movingrect=createSprite(600,200,100,50)
  movingrect.shapeColor="green";
  movingrect.debug=false;
}

function draw() {
  background(0); 

  movingrect.y=World.mouseY;
  movingrect.x=World.mouseX;

  if(movingrect.x-fixedrect.x <= movingrect.width/2+fixedrect.width/2 && fixedrect.x-movingrect.x <= movingrect.width/2+fixedrect.width/2 && movingrect.y-fixedrect.y <= movingrect.height/2+fixedrect.height/2 && fixedrect.y-movingrect.y <= movingrect.height/2+fixedrect.height/2){
    movingrect.shapeColor="blue";
    fixedrect.shapeColor="yellow";
  }
  else{
    fixedrect.shapeColor="red";
    movingrect.shapeColor="green";
  }

  drawSprites();
}