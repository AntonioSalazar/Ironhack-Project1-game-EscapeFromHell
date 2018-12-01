window.onload = function(){
    function update(){
        frames++
        
        ctx.clearRect(0,0, canvas.width, canvas.height)
        hellBackground.draw()
        hellBackground.counter()
        hellBackground.frames += 1;
        runner.drawImage()
        evil.drawImage()
        drawBrick()
        checkCollision()

    }

    function startGame(){
        interval = setInterval(update, 5000/80)
    }



    startGame()
}