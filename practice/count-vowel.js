let vowel = ['a','e','i','o','u'];
let str = 'Dhraumisha'

const countVowel = (str,vowel) => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
            if(vowel.includes(str[i])){
                count++;
            }
    }
    return count;
}
console.log(countVowel(str,vowel));
