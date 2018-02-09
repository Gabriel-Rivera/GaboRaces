var canvas;
var myGame;
var sound;
var myMusic;
var intro,acelerar,frenar,derrape;
var fps = 30;
var b,a;
var cont=0;
$(document).ready(function(){  
      intro = new sound("sonidos/Intro.mp3");
      //intro.play();
      b = setInterval(()=>{
        //intro.play()
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
                myGame.board.clearBoard();
                myGame.board.drawBoard();
                for (let i = 0; i < myGame.columns.length; i++) {
                  if(myGame.columns[i].crashWith(myGame.player1)){
                    myGame.player1.speed=0;
                  
                  }
                  if(myGame.columns[i].crashWith(myGame.player2)){
                    myGame.player2.speed=0;
                    
                  }
                }
                
                
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
         myGame.player1.angle -=10;
         derrape = new sound("sonidos/derrapeVuelta.mp3");
         derrape.play();       
        }
        if(e.keyCode === 39){
          myGame.player1.angle +=10;
          derrape = new sound("sonidos/derrapeVuelta.mp3");
         derrape.play();       
        }
        
        if(e.keyCode === 38){
          myGame.player1.moveFoward(); 
           frenar.stop();  
           acelerar.stop();       
           acelerar = new sound("sonidos/AcelerarCompleto.mp3");
           acelerar.play();                
        }

        if(e.keyCode === 40){
          myGame.player1.moveBack();      
           acelerar.stop();       
           frenar = new sound("sonidos/frenar.mp3");
           frenar.play();  
        }

        /*******************************************/
        
        if(e.keyCode===65){
          myGame.player2.angle -=10;
          derrape = new sound("sonidos/derrapeVuelta.mp3");
          derrape.play();       
         }
         if(e.keyCode === 68){
           myGame.player2.angle +=10;
           derrape = new sound("sonidos/derrapeVuelta.mp3");
          derrape.play();       
         }
         
         if(e.keyCode === 87){
           myGame.player2.moveFoward(); 
            //frenar.stop();  
            //acelerar.stop();       
            //acelerar = new sound("sonidos/AcelerarCompleto.mp3");
            //acelerar.play();                
         }
 
         if(e.keyCode === 83){
           myGame.player2.moveBack();      
            //acelerar.stop();       
            //frenar = new sound("sonidos/frenar.mp3");
            //frenar.play();  
         }

});