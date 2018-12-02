function generateObstacleBrick() {
   let brickObst = new brick()
   obstacles.push(brickObst)
}

function generateObstacleBeer(){
  let beerObst = new Beer()
  obstacles.push(beerObst)
}

function drawObstacle() {
  obstacles.forEach(function(obstacle) {
    obstacle.draw()
  })
}

function checkCollision(){
  obstacles.forEach(function(obstacle){
    if(runner.isTouching(obstacle)){
       console.log("touching");
       runner.x -= 50;
       obstacles.shift();
    } 
  })
  
}

