console.log("hello ma'am");
console.log('Remember to say "please" and "thank you."');


//string primitive and string object
const strPrim3 = String(1 + 2); // Coerced into the string primitive "true", because if perform first parenthesis operation which return 3 and than it convert into "3"
const strObj = new String(1); //return object

console.log( strPrim3);
console.log( strObj);

// const stringObj = new String(null);
const stringObj = "hello";

// console.log(stringObj);
// Expected output: String { "foo" }

console.log(stringObj.toString());

const areEqualInUpperCase = (str1, str2) =>
    str1.toUpperCase() === str2.toUpperCase();
  const areEqualInLowerCase = (str1, str2) =>
    str1.toLowerCase() === str2.toLowerCase();


console.log(  areEqualInUpperCase("ß", "ss"));// true; should be false
  console.log(areEqualInLowerCase("ı", "I")); // false; should be true
  console.log("I".toLowerCase());
  

  console.log("😄".split(""));
  



