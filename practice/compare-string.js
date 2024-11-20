let str1 = "Dhumi";
let str2 = "dhdasumi";

const compareStr = (str1,str2) => {

    str1.toLowerCase() === str2.toLowerCase() ? console.log("Both string are same") : console.log("String are not same");
}
compareStr(str1,str2);