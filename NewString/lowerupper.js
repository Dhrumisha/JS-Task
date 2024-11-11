let str = 'This string is converted to camelCase';

let str1 = str.split(" ");

for (var i = 0; i < str1.length; i++) {
  if (i === 0) {
    str1[i] = str1[i].toLowerCase(); // First word is in lowercase
  } else {
    str1[i] = str1[i][0].toUpperCase() + str1[i].substring(1).toLowerCase(); // Capitalize the first letter of subsequent words
  }
}

let camelCaseStr = str1.join("");
// console.log(camelCaseStr);

let stradd = "hy i dhumi";
// console.log(stradd.indexOf("i"));

let newstradd = stradd.substring(0,4) + "am " + stradd.substring(5);
function senAdd(str,char,length) {
 return str.padEnd(str.length + length , char);
}
// let newstradd = stradd.padEnd(stradd.length+1,"h");
// console.log(senAdd(stradd,"hello",4));


// console.log(newstradd);
// console.log(stradd);

function isString(str) {
  if(typeof(str) == 'string'){
    return true;
  }
  else{
    return false;
  }
}

function isBlank(str){
  return str.length == "0" ? "true" :"false";
}

function is_truncat(str,index) {
  return str.slice(0,index);
}

function is_abbreviate(str) {
  var splitName =  str.split(" ");
  return splitName.length < 1? splitName[0] : splitName[0] + " " + splitName[1].charAt(0) + ".";
}

function string_parameterize(str) {
  return str.replaceAll(" ","-").toLowerCase();
}

function swapcase(str) {
  // Use the replace method with a regular expression to match lowercase and uppercase letters separately
  return str.replace(/([a-z]+)|([A-Z]+)/g, function(match, chr) {
      // For each match, if chr (lowercase letter) exists, convert it to uppercase; otherwise, convert the match (uppercase letter) to lowercase
      return chr ? match.toUpperCase() : match.toLowerCase();
  });
}

const string_chop = function(str,char) {
  let chunk = [];
  while(str){
    if(str.length<char){
      chunk.push(str);
      return chunk;
      
    }
    else{
      for (let i = 0; i < str.length; i++) {
        chunk.push(str.substr(0,char));
        str = str.slice(char);
      }
    }
  }
  
}

function repeat(str,count) {
  return count < 1 ? "" : new Array(5).join(str);
}

// this keyword
// function Person(){
//   this.age = 0;

//   setInterval(() => {
//     this.age++; // |this| properly refers to the person object
//   }, 3000);
// }

// var p = new Person();
// console.log(p);



// console.log(isString([1,3,4,5]));
// console.log(isBlank("sfcds"));
// console.log("robin singh".split(" "));
// console.log(is_truncat("dhrumisha",6));
// console.log(is_abbreviate("dhrumisha rakholiya"));
// console.log(string_parameterize("Robin Singh from USA."));
// console.log(swapcase('AaBbc'));
console.log(string_chop('w3resources',3));
// console.log(repeat("Hi!",3));









