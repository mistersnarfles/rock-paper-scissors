console.log('Hello, World')

// Write function named getComputerChoice
function getComputerChoice() {
// Write code to randomly return Rock, Paper or Scissors
// I can use Math.floor(Math.random() * 3) + 1 to pick
// a random number between 1 and 3 
let randomNumber = Math.floor(Math.random() * 3) + 1
// Set type variable for choice
let choice = 'Scissors'
// If number is 1 then assign choice === Rock
// Else if number is 2 then assign choice === Paper
// Else assign choice === Scissors
if (randomNumber == 1) {
    choice = 'Rock'
} else if (randomNumber == 2) {
    choice = 'Paper'
} else {
    choice
}
// Return the choice
return choice
}

console.log(getComputerChoice())

// Write function that takes user choice and returns it
function getHumanChoice() {
// Set variable to prompt user for their choice and save answer
let humanChoice = prompt("Rock, Paper or Scissors?")
// return the user choice
return humanChoice
}

console.log(getHumanChoice())

// Set intialization variables for both human and computer score
let humanScore = 0
let computerScore = 0

// Write function playRound that takes humanChoice and 
// computerChoice as parameters
function playRound(humanChoice, computerChoice) {
// Set initialization variable for winner's score
let winnerScore = 0
// Use toLowerCase on humanChoice to make answer case-insensitive
humanChoice = humanChoice.toLowerCase()
// If humanChoice is Rock and computerChoice is Scissors
// console log 'You win! humanChoice beats computerChoice'
// Add 1 point to winnerScore
// Else if humanChoice is Scissors and computerChoice is Paper
// console log 'You win! humanChoice beats computerChoice'
// Add 1 point to winnerScore
// Else if humanChoice is Paper and computerChoic is Rock
// console log 'You win! humanChoice beats computerChoice'
// Add 1 point to winnerScore
// Else console log 'You lose! computerChoice beats humanChoice'
If (humanChoice == 'rock' && computerChoice == 'Scissors') {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`)
}
}