//Reference to same object
const jessica = {
    name:"jessica",
    lastName:"millian",
}

const marriedJessica = jessica; //reference to the same object
marriedJessica.lastName = "Davis";

// console.log(jessica);
// console.log(marriedJessica);


//copy of object---->this only work for first level it's not work for object inside object
const jessica2 = {
    name:"jessica",
    lastName:"millian",
    arr:["hy","hey"],
}

const jessicacopy = Object.assign({},jessica2);
jessicacopy.lastName = "davis";
jessicacopy.arr.push("Hello");//for this object refer to the same inner object

console.log(jessica2);
console.log(jessicacopy);