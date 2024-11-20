let number = 6;

const factorial = (num) =>{
    if(num==0 || num==1){
        return num;
    }
    else{
        return num *  factorial(num-1);
    }
}

const forFactorial = (num) => {
    if(num == 0 || num == 1) {return num;}
    else{
        for(let i = num;i >= 2;i--){
            num *= i-1;
        }
        return num;
    }
}
console.log(factorial(number));
console.log(forFactorial(number));
