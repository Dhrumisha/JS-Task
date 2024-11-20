// Data
const account1 = {
  owner: "Dhrumisha Rakholiya",
  movements: [200, -450, 500, 300, -250, 100, 550],
  interseRate: 1.2,
  pin: 1111,
  movementDates: [
    "2024-11-13T01:31:17.178Z",
    "2024-09-14T12:45:34.178Z",
    "2024-11-12T14:56:12.178Z",
    "2023-04-09T16:31:38.178Z",
    "2020-11-28T15:32:45.178Z",
    "2021-10-10T04:10:17.178Z",
    "2024-11-13T21:12:58.178Z",
  ],
  locale: "pt-PT",
  currency: "EUR",
};

const account2 = {
  owner: "Jinal Sidapara",
  movements: [-800, -350, -100, 30, 20, -150, 60],
  interseRate: 1.5,
  pin: 2222,
  movementDates: [
    "2019-01-25T14:18:46.235Z",
    "2019-02-05T16:33:06.386Z",
    "2019-03-10T14:43:26.374Z",
    "2019-04-25T18:49:59.371Z",
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
  ],
  locale: "en-US",
  currency: "USD",
};

const accounts = [account1, account2];

// Element Selected
let movementApp = document.querySelector(".app");
let movementContainer = document.querySelector(".movements");
let totalBalance = document.querySelector(".balance__value");

// user and pin
let loginBtn = document.querySelector(".login__btn");
let inputLoginUsername = document.querySelector(".login__input--user");
let inputLoginPin = document.querySelector(".login__input--pin");

let labelSumIn = document.querySelector(".summary__value--in");
let labelSumOut = document.querySelector(".summary__value--out");
let labelInterest = document.querySelector(".summary__value--interest");
let labelSort = document.querySelector(".btn--sort");

// welcome
let labelWelcome = document.querySelector(".welcome");

// transfer money
let inputTransferTo = document.querySelector(".form__input--to");
let transferAmount = document.querySelector(".form__input--amount");
let transferBtn = document.querySelector(".form__btn--transfer");

// close account
let closeBtn = document.querySelector(".form__btn--close");
let inputCloseUser = document.querySelector(".form__input--user");
let inputClosePin = document.querySelector(".form__input--pin");

// request a loan
let inputReqLoanAmt = document.querySelector(".form__input--loan-amount");
let inputReqLoanBtn = document.querySelector(".form__btn--loan");

// timer
let LabelTimer = document.querySelector(".timer");

// Date
let labelDate = document.querySelector(".date");

// display timer
const logoutTimer = function () {
  let time = 30;
  const tick = function () {
    let min = String(Math.trunc(time / 60)).padStart(2, 0);
    let sec = String(time % 60).padStart(2, 0);
    LabelTimer.textContent = `${min}:${sec}`;
    if (time === 0) {
      clearInterval(timer);
      movementApp.style.opacity = "0";
      labelWelcome.textContent = "Log In again to start...";
    }
    
    time--;
  };

  tick();
  const timer = setInterval(tick, 1000);
  return timer;
};

// FORMATEDMOVEMENTDATES
const formatMovementDate = function (date, locale) {
  const calcPassedDays = (day1, day2) =>
    Math.round(Math.abs(day2 - day1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcPassedDays(new Date(), date);

  if (daysPassed === 0) return "Today";
  if (daysPassed === 1) return "Yesterday";
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  else {
    // const day = `${date.getDate()}`
    // const month = `${date.getMonth()+1}`
    // const year = `${date.getFullYear()}`

    // return `${day}/${month}/${year}`

    return new Intl.DateTimeFormat(locale).format(date);
  }
};

// formatted numbers
const formateCurr = function (value, locale, currency) {
  // formatted movement
  return new Intl.NumberFormat(
    locale,
    (options = {
      style: "currency",
      currency: currency,
    })
  ).format(value);
};

const displayMovements = function (acc, sort = false) {
  movementContainer.innerHTML = "";

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const date = new Date(acc.movementDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);

    const html = `<div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
            <div class="movements__date">${displayDate}</div>
    <div class="movements__value">${formateCurr(
      mov,
      acc.locale,
      acc.currency
    )}</div>
  </div>`;

    movementContainer.insertAdjacentHTML("afterbegin", html);

    // convert euro to USD
    //   const eurToUsd = 1.1;
    //   const movemetToUsd = movements.map((mov) => {
    //      return mov * eurToUsd;
    //   });
    //   console.log(movements);
    //   console.log(movemetToUsd);
  });

  const movementDescriptions = acc.movements.map((mov, i) => {
    return `Movement ${i + 1}: You ${
      mov > 0 ? "deposited" : "withdrew"
    } ${Math.abs(mov)}`;
  });
};

// total money calculating
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
  totalBalance.innerHTML = `${formateCurr(
    acc.balance,
    acc.locale,
    acc.currency
  )}`;
};

const calcDisplaySummary = function (acc) {
  const income = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, curr) => acc + curr, 0);
  labelSumIn.innerHTML = `${formateCurr(income, acc.locale, acc.currency)}`;

  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, curr) => acc + curr, 0);
  labelSumOut.innerHTML = `${formateCurr(
    Math.abs(out),
    acc.locale,
    acc.currency
  )}`;

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interseRate) / 100)
    .reduce((acc, curr) => acc + curr, 0);
  labelInterest.innerHTML = `${formateCurr(
    interest,
    acc.locale,
    acc.currency
  )}`;
};

const createUsernames = function (accs) {
  accs.forEach((user) => {
    user.userName = user.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join(""); //this will add new property to the object
  });
};
createUsernames(accounts);

// update UI
const updateUI = function (acc) {
  // display movements
  displayMovements(acc);

  // display summary
  calcDisplaySummary(acc);

  // display Balance
  calcDisplayBalance(acc);
};

// REset timer
const resetTime = function(){
  // Reset timer
  clearInterval(timer);
  timer = logoutTimer();
}

// transfer money from one account to other

transferBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let amount = +transferAmount.value;
  let receiverAcc = accounts.find(
    (tracc) => tracc.userName === inputTransferTo.value
  );

  transferAmount.value = inputTransferTo.value = "";
  transferAmount.blur();

  if (
    amount > 0 &&
    amount < currentAccount.balance &&
    receiverAcc?.userName !== currentAccount.userName
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // push new date to movementDates
    currentAccount.movementDates.push(new Date().toISOString());
    receiverAcc.movementDates.push(new Date().toISOString());

    updateUI(currentAccount);
    
    resetTime();

  }
});

// login authentication

let currentAccount,timer;
loginBtn.addEventListener("click", function (e) {
  e.preventDefault();

  currentAccount = accounts.find(
    (acc) => acc.userName === inputLoginUsername.value
  );

  // Display Current date
  let now = new Date();
  let options = {
    hour: "numeric",
    minute: "numeric",
    day: "numeric",
    month: "numeric",
    year: "numeric",
  };
  labelDate.textContent = new Intl.DateTimeFormat(
    currentAccount.locale,
    options
  ).format(now);
  //  const day = `${date.getDate()}`.padStart(2,0);
  //  const month = `${date.getMonth()+1}`.padStart(2,0);
  //  const year = `${date.getFullYear()}`
  //  const hours = `${date.getHours()}`.padStart(2,0);
  //  const min = `${date.getMinutes()}`.padStart(2,0);

  // labelDate.textContent = `${day}/${month}/${year} ${hours}:${min}`;

  if (currentAccount?.pin === +inputLoginPin.value) {
    movementApp.style.opacity = "1";
    labelWelcome.style.color = "black";
    labelWelcome.textContent = `Welcome ${currentAccount.owner.split(" ")[0]}`;

    // clear input fields
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur(); //remove focus from pin element

    if(timer) clearInterval(timer);
    timer =  logoutTimer();

    updateUI(currentAccount);
  } else {
    movementApp.style.opacity = "0";
    labelWelcome.textContent = `Please Enter valid credentials...`;
    labelWelcome.style.color = "red";
  }
});

// Fake account logged in
// currentAccount = account1;
// updateUI(currentAccount);
// movementApp.style.opacity = "1";

// close account
closeBtn.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    inputCloseUser.value === currentAccount.userName &&
    +inputClosePin.value === currentAccount.pin
  ) {
    inputCloseUser.value = inputClosePin.value = "";
    inputClosePin.blur();
    const index = accounts.findIndex(
      (acc) => acc.userName === currentAccount.userName
    );

    // delete account
    accounts.splice(index, 1);
    movementApp.style.opacity = "0";
  }
});

// sort the movements
let sorted = false;
labelSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

// request a loan
inputReqLoanBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = +inputReqLoanAmt.value;
  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  );

  setTimeout(function () {
    currentAccount.movements.push(amount);

    // current date when we request a loan
    currentAccount.movementDates.push(new Date().toISOString());

    updateUI(currentAccount);
  }, 2500);
  inputReqLoanAmt.value = "";
  inputReqLoanAmt.blur();
  resetTime();
});
