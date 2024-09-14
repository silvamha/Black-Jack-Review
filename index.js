// 1. Create two variables, firstCard and secondCard.
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards
// import  myPoints, {addPoints, removePoints} from "./myPoints.js";

const titleEl = document.querySelector("#title-el");
const headerEl = document.querySelector("#header-el");
const messageEl = document.querySelector("#message-el");
const cardsEl = document.querySelector("#sum-el");
const sumEl = document.querySelector("#sum-el");
const startGameBtn = document.querySelector("#start-game-btn");

let firstCard = 10;
let secondCard = 11;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

startGameBtn.addEventListener("click", () => {
  if (sum < 21) {
    message = "Do you want to draw a new card? 🙂";
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳";
    hasBlackJack = true;
  } else {
    message = "You're out of the game! 😭";
    isAlive = false;
  }
  console.log(`Do I have Black Jack? ${hasBlackJack}`);
console.log(`Am I still on the game? ${isAlive}`);
console.log(message);
});
// sumEl.textContent=`Sum: ${sum}`


