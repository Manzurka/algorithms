function rSigma(number){
    if (number <= 0) {
      return 0;
    }
    return number+rSigma(number-1);
  }
  
  console.log(rSigma(5));

function rFactorial(number){
    if (number <= 1) {
      return 0;
    }
    return number*rFactorial(number-1);
  }
  
  console.log(rFactorial(5));

function rFib(num) {
    if (num == 0){
      return 0;
    }
    if (num == 1){
      return 1;
    }
    return rFib(num-1)+rFib(num-2);
  }

  console.log(rFib(2));

function rTrib(num) {
    
    if (num < 2){
      return 0;
    }
    if (num == 2){
      return 1;
    }
    return rTrib(num-1)+rTrib(num-2)+rTrib(num-3);
  }
  
  console.log(rTrib(6));