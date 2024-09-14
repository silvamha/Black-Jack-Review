// 1. Create two variables, firstCard and secondCard.
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards
// import  myPoints, {addPoints, removePoints} from "./myPoints.js";

let fistCard = 10;
let secondCard = 11;
let sum = fistCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let msg = ""

if (sum < 21) {
  console.log("Do you want to draw a new card? 🙂");
  msg = "Sorry, you don't have Black Jack!"

} else if (sum === 21) {
  console.log("Wohoo! You've got Blackjack! 🥳");
  hasBlackJack = true;
  msg = "You have Black Jack!"

} else {
  console.log("You're out of the game! 😭");
  isAlive = false;
  msg = "Sorry! You are out of the game!"
}

console.log(`Do I have Black Jack? ${hasBlackJack}`);
console.log(`Am I still on the game? ${isAlive}`)
console.log(msg)