
function Board (canvas,height,width){
    this.height = height;
    this.width = width;
    this.ctx = canvas;
    //this.ctx2= canvas;
    this.image = new Image();
    this.image.src = "images/pista.png";
    //Con esta funcion auto-ejecutamos drawBoard()
    this.image.addEventListener("load",this.drawBoard.bind(this));
}

Board.prototype.drawBoard = function (){    
    this.ctx.drawImage(this.image, 0, 0, this.width, this.height);         
    myGame.player1.drawPlayer();
    myGame.player2.drawPlayer();
    myGame.player1.renderPosition();
    myGame.player2.renderPosition();
    this.ctx.fillStyle = 'rgba(225,225,225,1)';
    this.ctx.fillRect(660,375,1,110);
}

Board.prototype.clearBoard = function (){
    this.ctx.clearRect(0,0,this.width,this.height,false);
}   

