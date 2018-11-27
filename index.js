window.onload = function(){
    function update(){
        frames++

        ctx.clearRect(0,0, canvas.width, canvas.height)
        hellBackground.draw()
        runner.drawImage()
    }

    function startGame(){
        interval = setInterval(update, 1000/10)
    }

    startGame()
}