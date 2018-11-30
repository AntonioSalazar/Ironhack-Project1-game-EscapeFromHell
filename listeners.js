addEventListener("keydown", function(e){
  if (e.keyCode === 32  ) {
    runner.jump()
  }

  else if(e.keyCode === 70){ // f letter
    
    generateObstacleBrick()
  }
})