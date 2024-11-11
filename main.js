// // function click() {
// //     let ip = document.getElementById("id1");
// // if(!ip.checkValidity()){
// //     document.getElementsByClassName("demo").innerHTML = ip.validationMessage;
// // }
// // else{
// //     document.getElementsByClassName("demo").innerHTML = "ok";

// // }
// // }

// let random = Math.floor(Math.random() * 20 + 1);

// let totalScore = 20;
// let score =20;
// let highScore= 0;

// document.querySelector(".again").addEventListener("click",()=>{
//     score = 20;
//     random = Math.floor(Math.random() * 20 + 1);
//     // window.location.reload(); everything will be refresh and we don't want that
//     document.querySelector(".msg").textContent = "Start Guessing...";
//     document.querySelector(".score-num").textContent = score;
//     document.querySelector(".usernum").value ="";

// })

// document.querySelector(".check").addEventListener("click", () => {
//   const guess = +document.querySelector(".usernum").value;

//   if (!guess) {
//     document.querySelector(".msg").textContent = "No Input";
//   }
//   if (guess == random) {
//     document.querySelector(".msg").textContent = "Correct Number...";
//     if(score > highScore){
//         highScore = score;
//         document.querySelector(".highscore-num").textContent = highScore;
//     }
//     document.querySelector(".attempt").textContent = `you guess the number in ${(totalScore-score)+1} attempts`;
// }

// else if(guess !== random){
//     if (score > 1) {
//         document.querySelector(".msg").textContent = (guess>random)? "Too High..." : "Too Low...";
//         score--;
//         document.querySelector(".score-num").textContent = score;
//       } else {
//         document.querySelector(".score-num").textContent = 0;
//         document.querySelector(".msg").textContent = "You Lost the Game...";
//       }
// }
// })
// //   else if (guess > random) {
// //     if (score > 1) {
// //       document.querySelector(".msg").textContent = "Too High...";
// //       score--;
// //       document.querySelector(".score-num").textContent = score;
// //     } else {
// //       document.querySelector(".score-num").textContent = 0;
// //       document.querySelector(".msg").textContent = "You Lost the Game...";
// //     }
// //   } else if (guess < random) {
// //     if (score > 1) {
// //       document.querySelector(".msg").textContent = "Too Low...";
// //       score--;
// //       document.querySelector(".score-num").textContent = score;
// //     } else {
// //       document.querySelector(".score-num").textContent = 0;
// //       document.querySelector(".msg").textContent = "You Lost the Game...";

// //     }
// //   }

// });

// practice js
// let age = [24, 45, 234, 50];
// let age2 = [24, 45, "test", 234, 50, "hy"];

// // console.log(age.sort());
// let ans = age.sort(
//   (a, b) =>
//     // console.log(a-b);
//     a - b
// );

// console.log(ans);

// age.copyWithin(5,2,3);  //index,copy element between index excluding last
// console.log(age);

// let newage = age.every((el) => {return el > 20} );
// console.log(age);
// console.log(newage);

// age.fill(50,2,3);//value,index excluding last
// console.log(age);

// let findInd = [1, 45, 67, 23, 80];
// function findFun(element) {
//   return element % 2 == 1;
// }
// console.log(findInd.findIndex(findFun));
// let newarr = [];

// for (let i = findInd.length-1; i >= 0; i--) {
//  newarr.push(findInd[i]);

// }

// console.log(findInd);
// console.log(newarr);

// console.log(findInd.shift());

// let multarr = [
//   [1, 2, 3],
//   [4, 5, 6],
// ];

// for (let i = 0; i < multarr.length; i++) {
//   for (let j = 0; j < multarr[i].length; j++) {
    // console.log(multarr[i][j]);
//   }
// }

// let my3dim = [
//   [
//     [1, 2],
//     [3, 4],
//   ],
//   [
//     [5, 6],
//     [7, 8],
//   ],
//   [
//     [9, 10],
//     [11, 12],
//   ],
// ];

// for (let i = 0; i < my3dim.length; i++) {
//   for (let j = 0; j < my3dim[i].length; j++) {
//     for (let k = 0; k < my3dim[i][j].length; k++) {
        //  console.log(my3dim[i][j][k]);
//     }
//   }
// }

// let person = new Map([["test", "45"]]);
// person['name'] = 'John';
// person['age'] = 30; 
// console.log(person.get("test"));

// let dbarr = [1,2,3,4].map((el)=>{
  // return String(el);
  // return el*2;
// })
// console.log(dbarr);

// let caparr = ["hY","reYXS","Ycxsj"].map((el)=> {
//   String(el);
//   return el.toLowerCase();
// })
// console.log(caparr);

// function makeStrings(arr){
//     arr.map((el)=>{
//    console.log( (el.name));
//   })
// }
// let ansob = [
//   {
//       name: "Angelina Jolie",
//       age: 80
//   },
// ];

// console.log(makeStrings(ansob)); 
// makeStrings(ansob);

// let str = "preme";
// console.log(str.replaceAll('e','a'));
// console.log(str.split('e').fill('a',1));
// console.log(str.indexOf("e"));
// str[2] = "a";
// console.log(str);


let anotherObj;
let funObj = {
    name:"Dhumi",
    age:22,
    greet: function(a,b){
       return a+b;
    }
}

// console.log(funObj.greet(3,5));

const fruits = {Bananas:300, Oranges:200, Apples:500}; 

const myMap = new Map(Object.entries(fruits));
myMap.set("Mangoes",50);
console.log(myMap.get("Mangoes"));




