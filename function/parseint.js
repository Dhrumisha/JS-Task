let str = "100";
// console.log(parseInt(str));

let str2 = "hi i am dhdhrumisha";
let regex = /dh/g;

// console.log((str2.match(regex)));

// closure
let f;
const g = () =>{
   let a = 10;
    f = () =>{
        console.log(a*2);
    }
}
const h = () =>{
   let b = 20;
    f = () =>{
        console.log(b*2);
    }
}

g();
f();
h();
f();

