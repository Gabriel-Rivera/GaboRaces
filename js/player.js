function Player (canvas,posX,posY,height,width){
    this.ctx = canvas;
    this.posX = posX;
    this.posY = posY;
    this.height = height;
    this.width = width;
    this.angle = 180;
    this.speed = 1;

    this.image = new Image();
    this.image.src = "images/cargreen.png";
    //Con esta funcion auto-ejecutamos drawBoard()
    this.image.addEventListener("load",this.drawPlayer.bind(this) )
}

Player.prototype.drawPlayer = function (){
    this.ctx.translate (this.posX,this.posY)
    this.ctx.rotate(this.angle*Math.PI/180); 
    this.ctx.drawImage(this.image,-(this.width/2),-(this.width/2),this.width,this.height);
    this.ctx.restore()

}
Player.prototype.moveFoward = function(){
    this.speed++;
}

Player.prototype.moveBack = function(){
    this.speed--;
}

Player.prototype.renderPosition = function(){
    this.posX += Math.cos(this.angle * Math.PI / 180) * this.speed;
    this.posY += Math.sin(this.angle * Math.PI / 180) * this.speed;
}

Player.prototype.crashWith=function(item){
        if(this.posX<item.posX+item.width&&
            this.posX + this.width > item.posX){
            console.log("chocaste");
            clearInterval(a);
        }

}

/*function CheckCollition(){
  this.crashWith = function(item){
    return  (this.x < item.x + item.width) &&
            (this.x + this.width > item.x) &&
            (this.y < item.y + item.height) &&
            (this.y + this.height > item.y);
  }
}
*/