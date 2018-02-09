function CheckCollition(){
    this.crashWith = function(item){
      return  (this.x < item.x + item.width) &&
              (this.x + this.width > item.x) &&
              (this.y < item.y + item.height) &&
              (this.y + this.height > item.y);
    }
  }

function checkCollitions(){
    pipes.forEach(function(pipe){
      if(flappy.crashWith(pipe)){
        stopGame();
      }
    });
  }