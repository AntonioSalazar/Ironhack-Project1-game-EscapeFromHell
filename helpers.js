function generateObstacleBrick() {
   let brickObst = new brick()
   brickObstaclesArray.push(brickObst)
}

function drawBrick() {
  brickObstaclesArray.forEach(function(obstacle) {
    obstacle.draw()
  })
}

function checkCollision(){
  brickObstaclesArray.forEach(function(obstacle){
    if(runner.isTouching(obstacle)){
       console.log("touching");
       runner.x -= 50;
       brickObstaclesArray.pop();
    } 
  })
  
}

