console.log(`Hello, let's play some Rock, Paper, Scissors`)


// Assign value of getHumanChoice and getComputerChoice to variables
const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()

// Write function named getComputerChoice
function getComputerChoice() {
    // Write code to randomly return Rock, Paper or Scissors
    // I can use Math.floor(Math.random() * 3) + 1 to pick
    // a random number between 1 and 3 
    let randomNumber = Math.floor(Math.random() * 3) + 1
    // Set type variable for choice
    let choice = 'scissors'
    // If number is 1 then assign choice === Rock
    // Else if number is 2 then assign choice === Paper
    // Else assign choice === Scissors
    if (randomNumber == 1) {
        choice = 'rock'
    } else if (randomNumber == 2) {
        choice = 'paper'
    } else {
        choice
    }
    // Return the choice
    return choice
}

console.log(`What will you chose?`)

// Write function that takes user choice and returns it
function getHumanChoice() {
    // Set variable to prompt user for their choice and save answer
    let humanChoice = prompt("Rock, Paper or Scissors?")
    // return the user choice
    return humanChoice.toString()
}



// Create function playGame that calls playRound to play 5 rounds
function playGame() {
// Move playRound function and score variables inside playGame
    // Set intialization variables for both human and computer score
    let humanScore = 0
    let computerScore = 0
    let tie = 0
// Loops playRound 5 times and keep track of scores
    // Write function playRound that takes humanChoice and 
    // computerChoice as parameters
    function playRound(humanChoice, computerChoice) {
        // Set initialization variable for winner's score
        // Use toLowerCase on humanChoice to make answer case-insensitive
        humanChoice = humanChoice.toLowerCase()
        // If humanChoice is Rock and computerChoice is Scissors
        // Or if humanChoice is Scissors and computerChoice is Paper
        // Or if humanChoice is Paper and computerChoic is Rock
        // console log 'You win! humanChoice beats computerChoice'
        // Add 1 point to humanScore
        // Else console log 'You lose! computerChoice beats humanChoice'
        // Add 1 point to computerScore
        if (humanChoice == 'rock' && computerChoice == 'scissors'
            || humanChoice == 'paper' && computerChoice == 'rock'
            || humanChoice == 'scissors' && computerChoice == 'paper'
        ) {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`)
            humanScore++
        } else if (humanChoice == computerChoice) { 
            alert('Tie! Please try again!')
            tie++
        } else {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
            computerScore++
        }
    }
    let i = 0
    while (i < 5) {
        playRound(getHumanChoice(), getComputerChoice())
        if ( i == 4 ) {
            console.log(humanScore, tie, computerScore)
        }
        i++
    }
}

playGame()