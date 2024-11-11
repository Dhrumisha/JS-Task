// (function greet() {
//     console.log("hyy"); 
// })();

function sum(a,b){
    return arguments[0] + arguments[1];
}

// console.log(sum("hy","good"));

(function digitalRoot(n) {
    // ...
    let sum = 0;
    let newSum = 0;
  
    while (n) {
      sum += n % 10;
      n = Math.floor(n / 10);
    }
    if (sum >= 10) {
      while (sum) {
        newSum += sum % 10;
        sum = Math.floor(sum / 10);
      }
        console.log(newSum);
    }
    else{
     console.log(sum);
     
    }
  
  })(16);
  

  