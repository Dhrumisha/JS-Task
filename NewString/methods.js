let str = "The quick brown fox jumps over the lazy dog";

function countSubstrig(mainStr,subStr) {
    return typeof(mainStr.match(new RegExp(subStr,'gi')));
}

// console.log(countSubstrig(str,"the"));
console.log("" || undefined  || "h" || 0);

