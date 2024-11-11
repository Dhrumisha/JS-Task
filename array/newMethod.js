const bookings = [];

function createBooking(flightNum,passenger=1,price=100*passenger){ //default parameters

    const booking = {
        flightNum,
        passenger,
        price,
    }
    bookings.push(booking);
    console.log(booking);
    
}
createBooking("LH123");
createBooking("LH123",3);