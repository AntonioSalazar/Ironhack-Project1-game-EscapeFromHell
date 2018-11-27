function gameArea(){
    this.y = 0;
    this.x = 0;
    this.width = 1000;
    this.height = 800;
    this.hellImage = new Image();
    this.hellImage.src = "https://cdn1.vectorstock.com/i/1000x1000/81/00/fantasy-wide-sci-fi-martian-background-for-ui-game-vector-18888100.jpg";
    
    this.hellImage.onload = function(){
        console.log(this);
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

function runner(){
    this.spriteWidth = 100;
    this.spriteHeight = 150;

    this.rows = 1;
    this.cols = 8;

    this.trackRight = 0;
    this.trackLeft = 1;

    this.width = spriteWidth/cols;
}