// async function fetchApi() {
//     let url =  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

//     let res = await fetch(url);
//     const superHeroes = await res.json();
//     console.log(superHeroes);
    
// }
// fetchApi();

async function fetchApi() {
    let url =  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

    let res = await fetch(url);
    const superHeroes = await res.text();
  let hero = JSON.parse(superHeroes);
console.log(typeof(superHeroes));

  console.log(hero);
  
    
}
fetchApi();

