let obj = {
    name:"Dhumi",
    age : 21,
}

const existKey = (obj,key) => {
    return obj.hasOwnProperty(key);
}
console.log(existKey(obj,"name"));
console.log(existKey(obj,"grade"));
