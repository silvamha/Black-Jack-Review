// 1. Create two variables, firstCard and secondCard.
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards
// import  myPoints, {addPoints, removePoints} from "./myPoints.js";

let fistCard = 10;
let secondCard = 11;
let sum = fistCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

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
