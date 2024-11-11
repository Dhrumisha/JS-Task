let arr = ["Geeks", "for", "Geeks"];

console.log(arr.join(""));
console.log(arr.toString());
let str ="";
for (let i = 0; i < arr.length; i++) {
     str += arr[i];
}
// console.log(str);

console.log(
    str.substring(0, 2).padEnd(3, " ") +
        str.substring(2, 5).padEnd(3,"") +
        str.substring(10).padStart(3, " ")
);

let str1 = `this is 
multiline string
okay!!!!!!`;
console.log(str1);

let str2 = "this is " +
"multiline string " +
"okay!!!!!!";
console.log(str2);

