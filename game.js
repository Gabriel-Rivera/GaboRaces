function Game(canvas){
    this.board = new Board(canvas,500,1300);
    this.player=new Player(canvas,700,400,50,50);
    this.columns = [];
}