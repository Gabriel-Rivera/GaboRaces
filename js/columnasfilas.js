function Columnas(canvas,x,y,width,height){
    this.ctx=canvas;
    this.posX=x;
    this.posY=y;
    this.width=width;
    this.height=height;
    //this.drawLimit();
}

Columnas.prototype.drawColumn=function(){
    this.ctx.fillStyle = 'rgba(225,225,225,0)';
    this.ctx.strokeRect(this.posX,this.posY,this.width,this.height);
    this.ctx.fillRect(this.posX,this.posY,this.width,this.height);
}

function generateColumns(){
    myGame.columns.push(new Columnas(canvas,0,0,myGame.board.width,15));
    myGame.columns.push(new Columnas(canvas,0,0,15,myGame.board.height));
    myGame.columns.push(new Columnas(canvas,myGame.board.width-20,0,20,myGame.board.height));
    myGame.columns.push(new Columnas(canvas,0,myGame.board.height-12,myGame.board.width,12));
    myGame.columns.push(new Columnas(canvas,259,110,80,250));
    myGame.columns.push(new Columnas(canvas,965,110,65,250));
    myGame.columns.push(new Columnas(canvas,280,335,740,40));
    myGame.columns.push(new Columnas(canvas,643,0,50,240));
}

function drawColumns(){
  generateColumns();
  myGame.columns.forEach(function(column){
    column.drawColumn();
  })
}
