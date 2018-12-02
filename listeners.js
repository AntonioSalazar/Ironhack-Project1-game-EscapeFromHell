addEventListener("keydown", function(e){
  if (e.keyCode === 32  ) {
    runner.jump()
  }

  else if(e.keyCode === 70){ // f letter
    generateObstacleBrick()
  } else if(e.keyCode === 66){
    generateObstacleBeer()
  }

  // switch (e.keyCode) {
  //   case 32:
  //     runner.jump
  //     break;
    
  //   case 70:
  //     generateObstacleBrick()
  //     break;
  // }

})