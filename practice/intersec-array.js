let arr1 = [2,54,34,7,67,8,4,3,34,2];
let arr2 = [2,23,6,7,89,8,4,21,5,46,68,9];

const intersecArr = (arr1,arr2) => {
    let newarr = [];
    for (const ar1 of arr1) {
        for (const ar2 of arr2) {
            if(ar1 == ar2){
                newarr.push(ar1);
            }
        }
    }
    let newSet = new Set(newarr)
    return  Array.from(newSet);
}
console.log(intersecArr(arr1,arr2));
