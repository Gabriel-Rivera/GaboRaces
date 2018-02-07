function Board (canvas,height,width){
    this.height = height;
    this.width = width;
    this.ctx = canvas ;
    this.image = new Image();
    this.image.src = "images/pista.png";
    //Con esta funcion auto-ejecutamos drawBoard()
    this.image.addEventListener("load",this.drawBoard.bind(this));
}

Board.prototype.drawBoard = function (){
    this.ctx.drawImage(this.image, 0, 0, this.width, this.height);  
    this.ctx.save() 
}

Board.prototype.clearBoard = function (){
    this.ctx.clearRect(0,0,this.width,this.height,false);
}   

