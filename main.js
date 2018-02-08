var canvas;
var myGame;
var sound;
var myMusic;
var intro,acelerar,frenar,derrape;
var fps = 30;
var b,a;
var col;
$(document).ready(function(){  
      intro = new sound("sonidos/Intro.mp3");
      intro.play();
      b = setInterval(()=>{
        intro.play()
      }, 1000); 
      
  $(".title").on("click", function(){
      
        canvas = document.getElementById("canvas").getContext('2d');
        clearInterval(b);
        intro.stop();
        myGame = new Game (canvas);   
        acelerar = new sound("sonidos/AcelerarCompleto.mp3");
        acelerar.play();        
        drawColumns(); 
         a = setInterval (function (){
                myGame.board.drawBoard();
                myGame.player.drawPlayer();
                myGame.player.renderPosition();
                //myGame.player.crashWith();
                               
        },1000/fps) 
  })    
})


function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function(){
      this.sound.play();
  }
  this.stop = function(){
   this.sound.pause();
  }    
}

addEventListener("keydown", function(e){
        
        if(e.keyCode===37){
         myGame.player.angle -=10;
         derrape = new sound("sonidos/derrapeVuelta.mp3");
         derrape.play();       
        }
        if(e.keyCode === 39){
          myGame.player.angle +=10;
          derrape = new sound("sonidos/derrapeVuelta.mp3");
         derrape.play();       
        }
        
        if(e.keyCode === 38){
          myGame.player.moveFoward(); 
           frenar.stop();  
           acelerar.stop();       
           acelerar = new sound("sonidos/AcelerarCompleto.mp3");
           acelerar.play();                
        }

        if(e.keyCode === 40){
          myGame.player.moveBack();      
           acelerar.stop();       
           frenar = new sound("sonidos/frenar.mp3");
           frenar.play();  
        }
        
});