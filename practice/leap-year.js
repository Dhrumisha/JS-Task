let year = 2640;

const leapYear = (year) => {
    if((year % 4 === 0) && ((year % 100 !== 0) && (year % 400 !== 0))){
        console.log("Leap Year");
    }
   else{
    console.log("not a Leap year");
   }
    
}
leapYear(year);