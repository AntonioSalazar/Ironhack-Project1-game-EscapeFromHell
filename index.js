// var demons = [];

// var obstacles = [];

// function startGame(){
//     window.onload = function(){
//         gameArea.start();
//         runner = new runningMotherFucker()
//     }
// }

// var gameArea = {
//     canvas : document.createElement("canvas"),
//     start : function(){
//         this.canvas.width = 1000;
//         this.canvas.height = 550;
//         this.context = this.canvas.getContext('2d');
//         document.body.insertBefore(this.canvas, document.body.childNodes[0]);
//     },
//     frames : 0,
//     clear: function(){
//         this.context.clearRect(0,0, this.canvas.width, this.canvas.height)
//     },
//     metersRunned : function(){
//         meters = (Math.floor(this.frames/5))
//         this.context.font = "18px serif",
//         this.context.fillStyle ="black",
//         this.context.fillText("meters Runned: " + meters, 350, 100)
//     }, 
    
// }

// function runningMotherFucker(){
//     this.x = x;
//     this.y = y;
//     this.srcX;
//     this.srcY;
//     this.sheetWidth = 2048;
//     this.sheetHeight = 256;

//     this.frameCountCols = 8; // the number of frames in the frame sheet 
//     this.frameCountRows = 1;

//     this.width = sheetWidth / frameCountCols;
//     this.height = sheetHeight / frameCountRows;
//     this.currentFrame = 0; 

//     this.runner = new Image();
//     runner.src = "./images/Punk_Run/Punk_Run.png"

//     this.updateFrame = function(){
//         this.currentFrame = ++ this.currentFrame % this.frameCountCols; // 1 % 8 = 1, 2 % 8 = 1, ...., 8 % 8 = 1.
        
//         this.srcX = this.currentFrame * this.width;
//         this.srcY = 0;
//     }
//     this.drawImage = function(){
//         this.updateFrame();
//         this.context.drawImage(runner, this.srcX, this.srcY, this.width, this.height, this.x, this.y, this.width, this.height )
//     }
//     this.interval = setInterval(drawImage(), 100)
//     console.log(this)
// }