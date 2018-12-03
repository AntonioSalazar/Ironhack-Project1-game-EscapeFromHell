addEventListener("keydown", function(e){
  if (e.keyCode === 32  ) {
    runner.jump()
  } else if(e.keyCode === 70){ // f key
    generateObstacleBrick()
  } else if(e.keyCode === 66){ // b key
    generateObstacleBeer()
  } else if(e.keyCode === 68){ // d key
    generateObstacleDrug()
  } else if(e.keyCode === 67){ // c key
    generateObstacleCigarrete()
  } else if(e.keyCode === 80){ // p key
    generateObstaclePorn()
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