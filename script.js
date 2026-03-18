console.log('Hello, World')

// Create function named getComputerChoice
function getComputerChoice() {
// Write code to randomly return Rock, Paper or Scissors
// I can use Math.floor(Math.random() * 3) + 1 to pick
// a random number between 1 and 3 
let randomNumber = Math.floor(Math.random() * 3) + 1
console.log(randomNumber)
let choice
// If number is 1 then assign choice === Rock
// Else if number is 2 then assign choice === Paper
// Else assign choice === Scissors
if (randomNumber == 1) {
    choice == 'Rock'
} else if (randomNumber == 2) {
    choice == 'Paper'
} else {
    choice == 'Scissors'
}
// Return the choice
console.log(choice)
return choice
}

console.log(getComputerChoice())