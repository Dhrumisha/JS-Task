let arr = [ { a: 1, b: 2, c: 3, d: 6 }, { a: 4, b: 5, c: 3, d: 6 }, { a: 8, b: 9, c: 3, d: 6 } ] ;

const extractProperty = (arr) => {
   for (const el of arr) {
       console.log(el);
        console.log(`C: ${el.c}`);
        
   }
}
extractProperty(arr);