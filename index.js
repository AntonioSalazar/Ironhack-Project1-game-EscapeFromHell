window.onload = function(){
    function update(){
        frames++
        
        ctx.clearRect(0,0, canvas.width, canvas.height)
        hellBackground.draw()
        hellBackground.counter()
        hellBackground.frames += 1;
        runner.drawImage()
        evil.drawImage()
        evil.evilWin()
        drawObstacle()
        checkCollision()
    }

    function startGame(){
        interval = setInterval(update, 5000/280)
    }

    

    startGame()
}