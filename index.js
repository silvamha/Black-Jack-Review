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

const getRandomCard = () => {
  let randomCard = Math.floor(Math.random() * 13) + 1;
  if (randomCard > 10) {
    return 10;
  } else if (randomCard === 1) {
    return 11;
  } else {
    return randomCard;
  }
};

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
  cardsEl.textContent = `Cards: `;
  for (let i=0; i<cards.length; i++) {
    cardsEl.textContent += cards[i] + "_";
  }
  // cardsEl.textContent = `Cards: ${cards}`;
  sumEl.textContent = `Sum: ${sum}`;
  messageEl.textContent = message;
  console.log(`Do I have Black Jack? ${hasBlackJack}`);
  console.log(`Am I still on the game? ${isAlive}`);
  console.log(message);
};
startGameBtn.addEventListener("click", () => {
  renderGame();
  console.log("startGame() called by startGameBtn.addEventListener()");
});

newCardBtn.addEventListener("click", () => {
  newCard();
  console.log("newCard() called by newCardBtn.addEventListener()");
});

const newCard = () => {
  let card = Math.floor(Math.random() * 10) + 1;
  sum += card;
  cards.push(card);
  console.log(cards);
  renderGame();
  console.log("newCard() called by renderGame()");
};

let myArray = [];
for (let i = 10; i <= 100; i += 10) {
  myArray.push(i);
  console.log(i);
  console.log(myArray);
}
