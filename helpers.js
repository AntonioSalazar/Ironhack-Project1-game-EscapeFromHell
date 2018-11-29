function generateBrickObstacle(){
  if(!(frames % 300 === 0)) return
  let singleObstacle = new obstacleBrick();
  brickObstaclesArray.push(singleObstacle);
}

function drawBrick(){
  for (i = 0; i < myObstacles.length; i += 1) {
    myObstacles[i].x += -1;
    myObstacles[i].update();
  }
}