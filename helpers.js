function generateObstacleBrick() {
   let brickObst = new brick()
   obstacles.push(brickObst)
}

function generateObstacleBeer(){
  let beerObst = new Beer()
  obstacles.push(beerObst)
}

function generateObstacleDrug(){
  let drugObst = new Drug()
  obstacles.push(drugObst)
}

function generateObstacleCigarrete(){
  let cigObst = new Cigarrete()
  obstacles.push(cigObst)
}

function generateObstaclePorn(){
  let pornObst = new Porn()
  obstacles.push(pornObst)
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
       console.log(runner.x)
       runner.x -= 50;
       obstacles.shift();
    } 
  })
  
}

