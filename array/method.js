// Reduce  method
let numbers = [88, 50, 25,10];

// Performing reduce method
let sub = numbers.reduce(geeks);

function geeks(total, num) {
    return total - num;
}

console.log(sub);


// Original array
var numbers1 = [4, 9, 16, 25];
console.log(numbers1);


// function geeks() {
//     return numbers1.map(Math.sqrt);
// }

// Performing map method
// let sub1 = numbers1.map(geeks());

// console.log(sub1);

function isPositive(el,i,arr) {
    return el>6;
}
let arr = [8,9];

let res = arr.every(isPositive);
// console.log(res);

let ar1 = [1,2,3,4];
let copy = [];

// ar1.fill(10,2,3);
// console.log(ar1);

ar1.forEach((item)=>{
   copy.push(item*item);
})
// console.log(copy);


let student = {
	details: function () {
		return this.name;
	}
}
let stud1 = {
	name: "Dinesh",
	class: "11th",
}
let stud2 = {
	name: "Vaibhav",
	class: "11th",
}

let x = student.details.apply(stud1);
// console.log(x);


let age = [24,45,10,4,50];

// let arrc = ["eb",34,"c",4,"f","adhs"];

// console.log(age.sort());
// console.log(age.sort((a,b)=>{
// 	console.log(a-b);
	
// }));

// console.log(arrc.splice(1,2));
// console.log(arrc.sort());



let num= [];
// console.log(num.pop());


let courses = ["HTML", "CSS", "JavaScript", "React"]; 
let newarr = [];

// newarr = courses;

for (let i = 0; i < courses.length; i++) {
	// console.log(newarr[i]);
	// newarr[1]= "hy";

	newarr.push(courses[i]);
	 newarr[1]= "hy";
	
}
// console.log(courses);
// console.log(newarr);


// console.log([21,-35,-6,46].sort());

// static method
// console.log(typeof(Array.of(1,"test",7)));



// all methods of array
// arr.copyWithin(2,0,2);//at which index we want to replace,second from which index eleement put at replace index, third how many element we want to replace

// arr.flatMap();//map element then return array

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 0, "Lemon", "Kiwi");//at index we want to add after second parqameter element, delete element count

const fruits = ["Banana", "Orange", "Apple", "Mango",30,14,3];
// console.log(fruits.reverse());
let arrm = [1,2,3];
let arrd = [1,2,3,1,2,3];
// console.log(Math.min(1,2,3));
// console.log(Math.min(...arrm));//The destructuring assignment syntax is a JavaScript expression that makes it possible to extract data from arrays or objects into distinct variables. min and max method only appply on distinct values
// console.log(Math.min.apply(Math,arrm));
// console.log(...arrd);
// console.log(arrd);

let myArr = Array.from("abdcd");
// console.log(myArr.indexOf('d'));


// let arr = [12,3,4];
// let newarr = arr.push(14);this don't work
// console.log(newarr);
// console.log(arr);

let findarr = ["hy","isha","jolly","helephent"];

function greaterh(arr){
	for (let i = 0; i < arr.length; i++) {
		if(arr[i].startsWith("h")){
			 console.log(arr[i]);
		 }
		
	}
	
	 
}
// console.log(greaterh(findarr));
// greaterh(findarr);









