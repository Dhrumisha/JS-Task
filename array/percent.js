let arr = [250,34,56,27,80,900];
let i=0;
for (let el of arr) {
    let offer = el/10;
    arr[i]= arr[i] - offer;
    i++;
}
console.log(arr);

let courses = ["HTML", "CSS", "JavaScript", "React"];

// Convert array ot String
console.log(typeof(courses.toString()));
