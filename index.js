// 1. Create two variables, firstCard and secondCard.
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards
// import  myPoints, {addPoints, removePoints} from "./myPoints.js";

let titleEl = document.querySelector("#title-el");
let headerEl = document.querySelector("#header-el");
let messageEl = document.querySelector("#message-el");
let cardsEl = document.querySelector("#cards-el");
let sumEl = document.querySelector("#sum-el");
let startGameBtn = document.querySelector("#start-game-btn");
let newCardBtn = document.querySelector("#new-card-btn");
let playerEl = document.querySelector('#player-el')



let cards = [];
// let card = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

let player = {
  name: 'Ed',
  chips: 145
}

playerEl.textContent=`${player.name}: $${player.chips}`
// console.log(cards);
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
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  isAlive = true;
  hasBlackJack = false;

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
  for (let i = 0; i < cards.length; i++) {
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
  if (isAlive === false) {
    startGame();
    console.log("startGame() called by startGameBtn.addEventListener()");
  } else {
    newCard();
    console.log("newCard() called by startGameBtn.addEventListener()");
  }
  renderGame();
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  console.log("startGame() called by startGameBtn.addEventListener()");
});

newCardBtn.addEventListener("click", () => {
  newCard();
  console.log("newCard() called by newCardBtn.addEventListener()");
});

const newCard = () => {
  let card = getRandomCard();
  if (isAlive && !hasBlackJack) {
    sum += card;
    cards.push(card);
      renderGame();
  }
  console.log(cards);
  console.log("newCard() called by renderGame()");
};



