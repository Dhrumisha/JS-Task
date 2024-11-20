const airline = {
    airline : "First Airline",
    code : "FA",
    bookings : [],
    book(FlightNum,name){
        console.log(`${name} booked a seat on ${this.airline} flight ${FlightNum
        }${this.code}`);
        this.bookings.push({flight : `${this.code}` ,flightNumber:`${FlightNum}`, name});
    }
}

airline.book(23,"Dhrumisha");
airline.book(236,"Jonas");
console.log(airline);

// call method to explicitly tell javascript on which object method was call
const newAirline = {
    airline:"New Airline",
    code:"NA",
    bookings:[]
}

const airlineApply = {
    airline:"Airline Apply",
    code:"AP",
    bookings:[]
}

const book = airline.book;

book.call(newAirline,10,"Dhumi");
console.log(newAirline);


// Apply method does not take an argument it takes array as second argument
let applyArr = [40,"Mariya"];
book.apply(airlineApply,applyArr);
console.log(airlineApply);


// bind method
const airlineFirst = book.bind(airline);
airlineFirst(56,"Rajat");
