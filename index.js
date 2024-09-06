// 1. Create two variables, firstCard and secondCard.
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards
// import  myPoints, {addPoints, removePoints} from "./myPoints.js";

let fistCard = 6;
let secondCard = 15;
let sum = fistCard + secondCard;

if (sum < 21) {
  console.log("Do you want to draw a new card? 🙂");
} else if (sum === 21) {
  console.log("Wohoo! You've got Blackjack! 🥳");
} else {
  console.log("You're out of the game! 😭");
}

console.log(sum);

// let num1 = parseFloat(prompt("Enter the first number:")); // Get first number from user
// let num2 = parseFloat(prompt("Enter the second number:")); // Get second number from user

// let sum1 = num1 + num2; // Perform the calculation

// alert("The sum is: " + sum1); // Display the result in an alert box

// const updatePoints = addPoints(12)
// const lowerPoints = removePoints(1)

// console.log(updatePoints)

let myPoints = 3;

const add3points = () => {
  return (myPoints += 3);
};

const remove1Point = () => {
  return (myPoints -= 1);
};

console.log(myPoints);
console.log(myPoints);

console.log(typeof ("2" + 2));
console.log(typeof (11 + 7));
console.log(typeof (6 + "5"));
console.log(typeof ("My points: " + (5 + 9)));
console.log(typeof (2 + 2));
console.log(typeof ("11" + "14"));

// 50 + 10 / 8 + 2 =
// PEMDAS
let myCalc = 50 + 10 / 8 + 2;
console.log(myCalc);
