

var myObstacles = [];
var myEnemies = [];

function startGame(){
    window.onload = function(){
        gameArea.start();
    }
}

var gameArea = {
    canvas: document.createElement("canvas"),
    start: function(){
        this.canvas.width = 500;
        this.canvas.height = 500;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
    },
    frames: 0,
    clear: function(){
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    },
    metersRunned: function(){
        meters = (Math.floor(this.frames/5));
        this.context.font = "18px IBM Plex Mono";
        this.context.fillStyle = "black";
        this.context.fillText("Meters runned: " + meters, 350, 100)
    }, 
    stop: function(){
        clearInterval(this.interval)
    }
}

function newPlayer(width, height, xPosition, yPosition){
    this.width = width;
    this.height = height;
    this.xPosition = xPosition;
    this.yPosition = yPosition;
    this.xVelocity = 0;
    this.yVelocity = 0;
    this.update = function(){
        ctx = gameArea.context;
        ctx.fillRect(this.xPosition, this.yPosition, this.width, this.height)
    };
    this.newPosition = function(){
        this.xPosition += xVelocity;
        this.yPosition += yVelocity;
    };
    this.left = function(){ return this.xPosition };
    this.right = function(){ return (this.xPosition + this.width)};
    this.top = function(){ return this.yPosition };
    this.bottom = function(){ return this.yPosition + (this.height)}
}

function moveUp(){
    player.yVelocity -= 1;
}

function moveDown(){
    player.yVelocity += 1;
}

function moveRight(){
    player.xVelocity += 1;
}

function moveLeft(){
    player.xVelocity -= 1;
}

document.onkeydown = function(e){
    switch(e.keyCode){
        case 38 || 87:
            moveUp();
            return;
        case 40 || 88:
            moveDown();
            return;
        case 39 || 68:
            moveRight();
            return;
        case 37 || 65:
            moveLeft();
            return
    }
}

document.onkeyup = function(){
    stopMovement();
}

function stopMovement(){
    player.xVelocity = 0;
    player.yVelocity = 0;
}

startGame()