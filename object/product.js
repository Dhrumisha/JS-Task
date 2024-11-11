let product = {
    itemname:"bag",
    price:200,
    discount:"10%",
    itemcode:"xjsdw"
}
// console.log(product);

function p1(name,price,discount,code){
    return {
        itemname:name,
        price:price,
        discount:discount,
        itemcode:code
    }
}
const football = p1("football",100,10,"f40");
// console.log(football);

const jonas = {
    year:2000,
    calcAge: function() {
        console.log(2037 - this.year);
    }
}
// jonas.calcAge();

const games= {
    scored:["Dowski","Gnarby","hummes"],
    odds:{
        team1:1,
        x:3,
        team2:6,
    }
}

for (const [i,score] of games.scored.entries()) {
    // console.log(`Goal ${i + 1} : ${score}`)
}

for (const [i,score] of Object.entries(games.scored)) {
    // console.log(`Goa ${i + 1} : ${score}`)
}

for (const va of Object.values(games.odds)) {
    // console.log(va);
}

// console.log(games.scored.entries());  for getting entries of the array
// console.log(Object.entries(games.scored))  for getting entries of an array



