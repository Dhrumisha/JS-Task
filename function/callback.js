function lowerCase(str) {
    return str.replace(/ /g," ").toLowerCase();
}

function upperFirstWord(str) {
  const [first,...others] =  str.split(" ");
  return [first.toUpperCase(),...others].join(" ");
}

// HigherOrder Function
function transform(str,fn) {
    console.log(`Original String: ${str}`);
    console.log(`Transformed String: ${fn(str)}`);
    console.log(`Transformed by: ${fn.name}`);
}

transform("Javascript is the best!",upperFirstWord);
console.log("----------------------------------");

transform("Javascript is the Best!",lowerCase);


// callback function that also return function
// const greet = (greeting) => {
//     return function(name) {
//         console.log(`${greeting} ${name}`);
//     }
// }

// we can also write upper function in shorte way
const greet = (greeting) => (name) => {
        console.log(`${greeting} ${name}`);
}

const greetHey = greet("Hey");
greetHey("Jonas");

greet("Hello")("Dhrumisha");

