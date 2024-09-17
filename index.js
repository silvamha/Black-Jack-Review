// 1. Create two variables, firstCard and secondCard.
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards
// import  myPoints, {addPoints, removePoints} from "./myPoints.js";

const titleEl = document.querySelector("#title-el");
const headerEl = document.querySelector("#header-el");
const messageEl = document.querySelector("#message-el");
const cardsEl = document.querySelector("#cards-el");
const sumEl = document.querySelector("#sum-el");
const startGameBtn = document.querySelector("#start-game-btn");
const newCardBtn = document.querySelector("#new-card-btn");

let firstCard = Math.floor(Math.random() * 10) + 1;
let secondCard = Math.floor(Math.random() * 10) + 1;
let cards = [firstCard, secondCard];
let card = 7;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

const startGame = () => {
  renderGame();
};
const renderGame = () => {
  if (sum < 21) {
    message = "Do you want to draw a new card? 🙂";
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳";
    hasBlackJack = true;
  } else {
    message = "You're out of the game! 😭";
    isAlive = false;
  }
  cardsEl.textContent = `Cards: ${cards[0]} - ${cards[1]}`;
  sumEl.textContent = `Sum: ${sum}`;
  messageEl.textContent = message;
  console.log(`Do I have Black Jack? ${hasBlackJack}`);
  console.log(`Am I still on the game? ${isAlive}`);
  console.log(message);
};
startGameBtn.addEventListener("click", () => {
  renderGame();
});

newCardBtn.addEventListener("click", () => {
  newCard();
});

const newCard = () => {
  let card = 7;
  sum += card;
  renderGame();
};

/**!SECTION
 * For testing purposes
 * Create an array of professional experience
 *
 */

let professionalExperience = ["banking", "healthcare", "teaching English"];

const iterateProfessionalExperience = () => {
  for (let i = 0; i < professionalExperience.length; i++) {
    console.log(professionalExperience[i]);
  }
};

/** !SECTION
 *
 */
professionalExperience.forEach((job, index) => {
  console.log(`The experience is in ${job}, and the index # is: ${index}`);
});

let mixedArray = ["string", 1, true, "hello"];

const iterateMixedArray = () => {
  for (let i = 0; i < mixedArray.length; i++) {
    console.log(mixedArray[i]);
  }
};  

