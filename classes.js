function gameArea(){
    this.y = 0;
    this.x = 0;
    this.width = 1000;
    this.height = 800;
    this.frames = 0;
    this.hellImage = new Image();
    this.hellImage.src = "https://cdn1.vectorstock.com/i/1000x1000/81/00/fantasy-wide-sci-fi-martian-background-for-ui-game-vector-18888100.jpg";
    this.minGap = 256;
    this.hellImage.onload = function(){
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
   
    this.counter = function(){
        this.counterTimer = (Math.floor(this.frames/16))
        ctx.font = "40px VT323";
        ctx.fillStyle = "white";
        ctx.fillText("You have 1 minute! try to escape!: " + this.counterTimer , 200, 50)
        if (this.counterTimer === 60) {
            ctx.font = "30px VT323";
            ctx.fillText("TIMES OVER!!!....BITCH!!!!",300,200);
            ctx.fillText("RUNNER WINS!!!!",360,250);
            clearInterval(interval)
            interval = 0
        }
    }
}


function runningMotherFucker(){
    this.x = 550;
    this.y = 230;
    this.srcX;
    this.srcY;
    this.sheetWidth = 2046;
    this.sheetHeight = 250;
    this.gravity = 5;
    this.yVelocity = 0; 
    this.xVelocity = 0;
    this.isJumping = false;    
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
    this.jump = function(){     
        this.y -= 180;
        this.isJumping = true;
    }

    this.hitBottom = function(){
        this.ground = 230;
        if (this.y  > this.ground) {
            this.isJumping = false;
            this.y = this.ground;
            this.yVelocity = 1;
        }
        clearInterval(this.interval)
    }
 
    this.drawImage = function(){
        this.updateFrame();
        ctx.drawImage(this.runner, this.srcX, this.srcY, this.width, this.height, this.x, this.y, this.width, this.height );
        this.yVelocity -= 1;
        this.y -= this.yVelocity;
        this.yVelocity *= 0.90;  
    }

    this.updateFrame = function(){
        this.currentFrame =++ this.currentFrame % this.frameCountCols; // 1 % 8 = 1, 2 % 8 = 2, ...., 8 % 8 = 1.
        this.srcX = this.currentFrame * this.width;
        this.srcY = 0;
        this.hitBottom();
    }

    this.isTouching = function(brick){
        return (this.x + 40 < brick.x + brick.width) &&
               (this.x + this.width - 40> brick.x)  &&
               (this.y < brick.y + brick.height) &&
               (this.y + this.height > brick.y)
    }
    //console.log(this.width);


    this.interval = setInterval(this.drawImage(), 1000)
}

function tinyEvilMtfkr(){
    this.x = 50;
    this.y = 330;
    this.srcX;
    this.srcY;
    this.sheetWidth = 1000;
    this.sheetHeight = 463;
    
    this.frameCountCols = 10; // the number of frames in the frame sheet 
    this.frameCountRows = 3;
    
    this.width = this.sheetWidth / this.frameCountCols;
    this.height = this.sheetHeight / this.frameCountRows;
    this.currentFrame = 0; 
    
    this.runner = new Image();
    this.runner.src = "./images/tinyEvilMtfkr/blackDemon.png"
    this.runner.onload = function(){
        this.drawImage()
      }.bind(this)
    
    this.updateFrame = function(){
        this.currentFrame = ++ this.currentFrame % this.frameCountCols; // 1 % 8 = 1, 2 % 8 = 2, ...., 8 % 8 = 1.
            
        this.srcX = this.currentFrame * this.width;
        this.srcY = 0;
    }
    this.drawImage = function(){
        this.updateFrame();
        ctx.save();
        ctx.scale(2, 2);
        ctx.drawImage(this.runner, this.srcX, this.srcY, this.width, this.height, this.x/3.9, this.y/3.8, this.width, this.height )
        ctx.restore();
    }

    this.evilWin = function(){
        if (evil.x === runner.x) {
            //console.log("you will be my dinner!");
            console.log("TIMES OVER!!!....BITCH!");
            ctx.font = "30px VT323";
            ctx.fillText("YOU WILL NEVER ESCAPE FROM HELL!!!....BITCH!!!!",200,200);
            ctx.fillText("Devil Wins!!", 400, 250)
            clearInterval(interval)
            interval = 0
        } 
    }

    this.interval = setInterval(this.drawImage(), 3000)
}

function brick( ){
    this.x = canvas.width
    this.y = 430
    this.width = 50
    this.height = 50
    this.brick = new Image()
    this.brick.src = "images/obstacles/Bricks/brick_2.png"
    this.draw = function(){
      this.x--
      ctx.drawImage(this.brick, this.x, this.y, this.width, this.height)
    }
}

function Beer( ){
    this.x = canvas.width
    this.y = 430
    this.width = 50
    this.height = 50
    this.brick = new Image()
    this.brick.src = "images/obstacles/Beer/Beer.png"
    this.draw = function(){
      this.x--
      ctx.drawImage(this.brick, this.x, this.y, this.width, this.height)
    }
}

function Drug(){
    this.x = canvas.width
    this.y = 370
    this.width = 100
    this.height = 100
    this.brick = new Image()
    this.brick.src = "images/obstacles/Drugs/blunt.png"
    this.draw = function(){
      this.x--
      ctx.drawImage(this.brick, this.x, this.y, this.width, this.height)
    }
}

function Cigarrete(){
    this.x = canvas.width
    this.y = 370
    this.width = 100
    this.height = 100
    this.brick = new Image()
    this.brick.src = "images/obstacles/Drugs/cigarrete2.png"
    this.draw = function(){
      this.x--
      ctx.drawImage(this.brick, this.x, this.y, this.width, this.height)
    }
}

function Porn(){
    this.x = canvas.width
    this.y = 370
    this.width = 70
    this.height = 90
    this.brick = new Image()
    this.brick.src = "images/obstacles/Drugs/playboy.png"
    this.draw = function(){
      this.x--
      ctx.drawImage(this.brick, this.x, this.y, this.width, this.height)
    }
}

