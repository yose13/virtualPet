var dog,dogImg,happyDog;
var food,foodStock
var database

function preload()
{
  dogImg = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();

  foodStock=database.ref('food');
  foodStock.on("value",readStock);

  dog = createSprite(250, 300)
  dog.addImage(dogImg)
  dog.scale=0.2
  
}


function draw() {  
  background(46,139,87)

  drawSprites();


  if(keyWentDown(UP_ARROW)){
    writeStock(foodStock);
    dog.addImage(dogHappy);
  }


  }


function writeStock(x){

  database.ref('/').update({
    food:x
  })

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

}


function readStock(){
  foodStock=data.val();
}





