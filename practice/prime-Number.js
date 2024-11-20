let number = 27;

const primeNumber = (num) => {
  let isPrime = true;
  if (num == 1) console.log("1 is neither prime nor composite number");
  else if (num > 1) {
    for (let i = 2; i <= num / 2; i++) {
      if (num % i == 0) {
        isPrime = false;
        break;
      }
    }
  }
  isPrime ? console.log("prime Number") : console.log("Not Prime Number");
};
primeNumber(number);
