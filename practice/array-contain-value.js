let arr = [1,34,5,7,8,79,23];

const includeValue = (arr,val) => {
    for (const el of arr) {
        return arr.includes(val);
    }
}
console.log(includeValue(arr,23));
