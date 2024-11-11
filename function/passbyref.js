const passByRef = (obj) =>{
    // let temp = obj.a;
    // obj.a = obj.b;
    // obj.b = temp;

    obj.a=30;
    obj.c = "hy"
    console.log(obj);
    
}
let obj = {
    a:10,
    b:20
}
passByRef(obj);
// console.log(obj);


// pass by reference and value

let flightNum = 'LH123';

const jonas2 = {
    name:"Jonas",
    passport : 234626842,
}

function checkIn(flightNum,passenger){
    flightNum = 'DH345',
    passenger.name = "MR." + passenger.name,

    passenger.passport === 234626842 ? console.log("Check IN"): console.log("Wrong Passport");
}
console.log(flightNum);
checkIn(flightNum,jonas2);

function newPassport(passenger) {
    passenger.passport = Math.trunc(Math.random()* 1000000)
}
newPassport(jonas2);
checkIn(flightNum,jonas2);

