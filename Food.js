class Food {
constructor(){
    var foodStock={

    }
    var lastFed={

    }

    var milkBImg = loadImage("Images/Milk.png");

    getStock(){
        var foodStockRef  = database.ref('food');
        foodStockRef.on("value",function(data){
           foodStock = data.val();
        });
    }

    update(foodStock){
        database.ref('/').update({
          Food: stock
        });
        //deductFood(){

       // }
}
}

display(){
    var x = 80,y=100;
    imageMode(CENTER);
    image(milkBImg,720,220,70,70);
if(this.foodStock!=0){
    for(var i=0<this,foodStock;i++){
        if(i%10===0){
            x=80;
            y=y+50;
        }
        image(this.image,x,y,50,50);
        x=x+30;
    }
}

}
}
