let india = 100000;


const indiaToUsa = (india) => {
    let usa = 84.48;
    let currency = india / usa;
   let indtous = Intl.NumberFormat("en-US",{ style: 'currency', currency: 'USD' }).format(currency);
   let indianrupee = Intl.NumberFormat("en-IN",{ style: 'currency', currency: 'INR' }).format(india);
    console.log(`${indianrupee}  = ${indtous}`);
}

const dubaiToIndia = (india) => {
    let dubai = 0.043;
    let currency = india * dubai;
   let indtodb = Intl.NumberFormat("en-US",{ style: 'currency', currency: 'AED' }).format(currency);
   let indianrupee = Intl.NumberFormat("en-IN",{ style: 'currency', currency: 'INR' }).format(india);
    console.log(`${indianrupee}  = ${indtodb}`);
}
indiaToUsa(india);
dubaiToIndia(india)