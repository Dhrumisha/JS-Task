async function country() {
    let data = await fetch("https://countries-api-836d.onrender.com/countries/")
    let response = await data.json();
    console.log(response);
    
}
// country()

