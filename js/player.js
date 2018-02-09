function Player (canvas,posX,posY,height,width,url){
    this.ctx = canvas;
    this.posX = posX;
    this.posY = posY;
    this.height = height;
    this.width = width;
    this.angle = 180;
    this.speed = 1;

    this.image = new Image();
    this.image.src =url;
    //Con esta funcion auto-ejecutamos drawBoard()
    this.image.addEventListener("load",this.drawPlayer.bind(this) )

}
Player.prototype.top=function(){
    return this.posY;
}

Player.prototype.left=function(){
    return this.posX;
}

Player.prototype.right=function(){
    return this.posX+this.width;
}

Player.prototype.bottom=function(){
    return this.posY+this.height;
}



Player.prototype.drawPlayer = function (){
    this.ctx.save();
    this.ctx.translate (this.posX,this.posY)
    this.ctx.rotate(this.angle*Math.PI/180); 
    this.ctx.drawImage(this.image,-(this.width/2),-(this.width/2),this.width,this.height);
    this.ctx.restore();
}
Player.prototype.moveFoward = function(){
    this.speed++;
}

Player.prototype.moveBack = function(){
    this.speed--;
}

Player.prototype.renderPosition = function(){
    this.posX += Math.cos(this.angle * Math.PI / 180) * this.speed;
    this.posY += Math.sin(this.angle * Math.PI / 180) * this.speed;}