let str = "Hello i aM dhrumiShA";

const capitalizeStr = (str) => {
   let word =  str.toLowerCase().split(" ");
   let result = word.map(word => word[0].toUpperCase() + word.slice(1));
   console.log(result.join(" "));
   
}

const wordCount = (str) => {
    let result = str.split(" ");
    console.log(result.length);
    
}
capitalizeStr(str);
wordCount(str)