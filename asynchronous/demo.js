// console.log("outside the the time");

// setTimeout(()=>{
//     console.log("inner time");
    
// },3000)

// console.log("out timer");

// async function display() {
//     let myPromise = new Promise(function(resolve) {
//         setTimeout(function() {resolve("I am leaner!!");}, 2000);
//       });
//       console.log(await myPromise);
      

// }
// display();
// console.log("outside async await");


var p = new Promise(function(resolve,reject) {
     resolve("ok");
});

var p2 = p.then(function(data) {
     console.log(data);
     
});

var p3 = p2.then(function(data) {
     console.log(data + " Bye");
     
});

// console.log(p2);

