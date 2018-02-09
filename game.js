function Game(canvas){
    this.board = new Board(canvas,500,1300);
    this.player1=new Player(canvas,700,400,50,50,"images/cargreen.png");
    this.player2=new Player(canvas,700,460,50,50,"images/cargreen.png");
    this.columns = [];
    this.meta={};
}