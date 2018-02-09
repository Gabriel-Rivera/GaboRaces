function Columnas(canvas,x,y,width,height){
    this.ctx=canvas;
    this.posX=x;
    this.posY=y;
    this.width=width;
    this.height=height;
    this.top = y;
    this.left =x;
    this.bottom =y + height;
    this.right = x + width;
}

Columnas.prototype.drawColumn=function(){
    this.ctx.fillStyle = 'rgba(225,225,225,0)';
    this.ctx.strokeRect(this.posX,this.posY,this.width,this.height);
    this.ctx.fillRect(this.posX,this.posY,this.width,this.height);
    
}

Columnas.prototype.crashWith = function(player){
    //Condiciones que usamos para comprobar la colision
    //daros cuenta que devolvemos False cuando dentro de ella se
    //comprueba que son true
      return !((this.bottom < player.top())    ||
               (this.top    > player.bottom()) ||
               (this.right  < player.left())   ||
               (this.left   > player.right()))
               
    }

function generateColumns(){
    myGame.columns.push(new Columnas(canvas,0,0,myGame.board.width,40));
    myGame.columns.push(new Columnas(canvas,0,0,25,myGame.board.height));
    myGame.columns.push(new Columnas(canvas,myGame.board.width-3,0,20,myGame.board.height));
    myGame.columns.push(new Columnas(canvas,0,myGame.board.height+25,myGame.board.width,12));
    myGame.columns.push(new Columnas(canvas,285,140,80,210));
    myGame.columns.push(new Columnas(canvas,985,130,65,250));
    myGame.columns.push(new Columnas(canvas,290,355,740,40));
    myGame.columns.push(new Columnas(canvas,660,0,50,260));
}

function drawColumns(){
  generateColumns();

}
