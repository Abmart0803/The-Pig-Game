/* eslint-disable no-console */
/* eslint-disable no-continue */
/* eslint-disable no-plusplus */
/* eslint-disable func-names */

// Selecting the elements.
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
// const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
// const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
// const btnHold = document.querySelector('.btn--hold');

// Stylling condition.
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;

// rolling dice functionality.
btnRoll.addEventListener('click', () => {
  // Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  // Display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  // check for roll 1
  if (dice !== 1) {
    // add to the current score
    currentScore += dice;
    current0El.textContent = currentScore; // chnge later
  } else {
    // switch to next player.
  }
});
