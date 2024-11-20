const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const curre0El = document.querySelector("#current--0");
const curre1El = document.querySelector("#current--1");
const diceEl = document.querySelector(".dice");
const body = document.querySelector(".body");

const btnNew = document.querySelector(".btn-new");
const btnRoll = document.querySelector(".btn-roll");
const btnHold = document.querySelector(".btn-hold");

let scores, currentScore, activePlayer, playing;

//currently score is set to 0
function init() {
  score0El.textContent = 0;
  score1El.textContent = 0;
  curre0El.textContent = 0;
  curre1El.textContent = 0;
  currentScore = 0;
  activePlayer = 0;
  scores = [0, 0];
  playing = true;
  diceEl.classList.add("hidden");
  player0El.classList.remove("player-winner");
  player1El.classList.remove("player-winner");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
}
init();

function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;

  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
}

//generate random number
btnRoll.addEventListener("click", function () {
  if (playing) {
    let dice = Math.trunc(Math.random() * 6) + 1;
    // console.log(dice);

    diceEl.classList.remove("hidden");
    diceEl.src = `C:/Users/ventura/Desktop/kaushalam/pigGame/dice-${dice}.png`;

    if (dice != 1) {
      currentScore += dice;

      // dynamically slected player
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      // curre0El.textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    // curretscore get 0 and it add into total score and switch the player
    // document.getElementById(`current--${activePlayer}`).textContent = 0;

    // directly we can add current score to the activeplayer

    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // by using codition we can add current score to the active player
    // if(activePlayer === 1){
    //     scores[1] += currentScore;
    //     score1El.textContent = scores[1];
    // }
    // else{
    //     scores[0] += currentScore;
    //     score0El.textContent = scores[0];
    // }

    if (scores[activePlayer] >= 10) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player-winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player-active");
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener("click", init);

