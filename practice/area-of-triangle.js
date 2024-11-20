let a = 20,b=10,c=15;

const area = (a,b,c) =>{
    let semiPer = (a+b+c)/2;
    
    let area = Math.sqrt(semiPer*(semiPer-a)*(semiPer-b)*(semiPer-c));
    return area;
}
console.log(area(a,b,c));

