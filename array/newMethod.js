const bookings = [];

function createBooking(flightNum,passenger=1,price=100*passenger){ //default parameters

    const booking = {
        flightNum,
        passenger,
        price,
    }
    bookings.push(booking);
    console.log(bookings);
    
}
createBooking("LH123");
createBooking("LH123",3);

let arr = ["a","b","c","d","e"];
console.log(arr.slice(2,4));
console.log(arr.shift());
console.log(arr.unshift());
