var canvas;
var myGame;
var frame =0;
var fps = 30;
$(document).ready(function(){  
  $(".title").on("click", function(){
    canvas = document.getElementById("canvas").getContext('2d');
        myGame = new Game (canvas); 
        var a = setInterval (function (){
                myGame.board.drawBoard();
                myGame.player.drawPlayer();
                myGame.player.renderPosition();
                myGame.player.limitLeft();
        },1000/fps) 
  })    
})


addEventListener("keydown", function(e){
        
        if(e.keyCode===37){
         myGame.player.angle -=10;
        }
        if(e.keyCode === 39){
          myGame.player.angle +=10;
        }
        
        if(e.keyCode === 38){
          myGame.player.moveFoward();      
        }

        if(e.keyCode === 40){
          myGame.player.moveBack();      
        }
        
});