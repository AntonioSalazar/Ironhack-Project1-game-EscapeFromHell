function generateObstacleBrick() {
  //if(!(frames % 300 === 0)) return
   let brickObst = new brick()
   brickObstaclesArray.push(brickObst)
}
function drawBrick() {
  brickObstaclesArray.forEach(function(obstacle) {
    obstacle.draw()
  })
}