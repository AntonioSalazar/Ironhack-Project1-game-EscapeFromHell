function gameArea(){
    this.y = 0;
    this.x = 0;
    this.width = 1000;
    this.height = 800;
    this.hellImage = new Image();
    this.hellImage.src = "https://cdn1.vectorstock.com/i/1000x1000/81/00/fantasy-wide-sci-fi-martian-background-for-ui-game-vector-18888100.jpg";
    
    this.hellImage.onload = function(){
        //console.log(this);
        this.draw();
    }.bind(this)
    this.move = function(){
        this.x--
        if (this.x < -canvas.width) this.x = 0 ;
    }
    this.draw = function(){
        this.move()
        ctx.drawImage(this.hellImage, this.x, this.y, this.width, this.height)
        ctx.drawImage(this.hellImage, this.x + this.width, this.y, this.width, this.height)
    }
}

function runningMotherFucker(){
    this.x = 90;
    this.y = 220;
    this.srcX;
    this.srcY;
    this.sheetWidth = 2048;
    this.sheetHeight = 256;
    
    this.frameCountCols = 8; // the number of frames in the frame sheet 
    this.frameCountRows = 1;
    
    this.width = this.sheetWidth / this.frameCountCols;
    this.height = this.sheetHeight / this.frameCountRows;
    this.currentFrame = 0; 
    
    this.runner = new Image();
    this.runner.src = "./images/Punk_Run/Punk_Run.png"
    this.runner.onload = function(){
        this.drawImage()
      }.bind(this)
    
    this.updateFrame = function(){
        this.currentFrame = ++ this.currentFrame % this.frameCountCols; // 1 % 8 = 1, 2 % 8 = 1, ...., 8 % 8 = 1.
            
        this.srcX = this.currentFrame * this.width;
        this.srcY = 0;
    }
    this.drawImage = function(){
        this.updateFrame();
        ctx.drawImage(this.runner, this.srcX, this.srcY, this.width, this.height, this.x, this.y, this.width, this.height )
    }
    this.interval = setInterval(this.drawImage(), 100)
        console.log(this)
}