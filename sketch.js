var dog,dogImg,dogImg1;
var database;
var foodS,foodStock,feedtime,lastFeed,foodObj,feed,addFood;

function preload(){
   dogImg=loadImage("Images/Dog.png");
   dogImg1=loadImage("Images/happy dog.png");
  }

//Function to set initial environment
function setup() {
  database=firebase.database();
  createCanvas(500,500);

  dog=createSprite(250,300,150,150);
  dog.addImage(dogImg);
  dog.scale=0.15;

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  textSize(20); 
  feed=createButton("Feed The Dog")
  feed.position(700,115);
feed.mousePressed(feedDog);

addFood=createButton("addFood");
addFood.position(720,90);
addFood.mousePressed(addFood)
//Food.getStock();
//Food.update(foodStock);
}

// function to display UI
function draw() {
  background(46,139,87);
 
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogImg1);
  }

  drawSprites();
  fill(255,255,254);
  stroke("black");
  text("Food remaining : "+foodS,170,200);
  textSize(13);
  text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20);
if(lastFeed>=12){
  text("lastFeed:"+lastFeed%12+'PM',350,35);
}else if(lastFeed==0){
text("Last Feed : 12 AM ",350,35);
}else {
text("Last feed :"+lastFeed+"AM",350,35);
  }
}



//Function to read values from DB
function readStock(data){
  foodS=data.val();
}

//Function to write values in DB
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  } 
  database.ref('/').update({
    Food:x
  })
}


//problem in functio feddog
function feedDog(){
  dog.addImage(dogImg1);

  foodObj.updatefoodStock(foodObj.getfoodStock()-1);
  database.ref('/').update({
    Food:foodObj.getfoodStock(),
    FeedTime:hour()
  })  
}

function addFood(){
  foodS++;
  database.ref('/').update({
    Food:foodS
  })
}