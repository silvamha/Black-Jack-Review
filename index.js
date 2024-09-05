// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards



let fistCard = 6
let secondCard = 15
let sum = fistCard + secondCard

if (sum < 21) {
    console.log("Do you want to draw a new card? 🙂")
} else if (sum === 21) {
    console.log("Wohoo! You've got Blackjack! 🥳")
} else {
    console.log("You're out of the game! 😭")
}

console.log(sum)

let num1 = parseFloat(prompt("Enter the first number:")); // Get first number from user
let num2 = parseFloat(prompt("Enter the second number:")); // Get second number from user

let sum1 = num1 + num2; // Perform the calculation

alert("The sum is: " + sum1); // Display the result in an alert box