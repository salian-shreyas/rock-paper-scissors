const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    // Get a number that is between 0 (inclusive) and 3(exclusive)
    let randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber == 0) {
        return ROCK;
    } else if (randomNumber == 1) {
        return PAPER;
    } else {
        return SCISSORS;
    }
}

function getPlayerChoice() {
    let playerChoice = prompt("CHOOSE: ROCK | PAPER | SCISSORS");
    playerChoice = formatPlayerChoice(playerChoice); 

    while (playerChoice !== ROCK
        && playerChoice !== PAPER
        && playerChoice !== SCISSORS
    ) {
        playerChoice = prompt("PLEASE CHOOSE: ROCK | PAPER | SCISSORS");
        playerChoice = formatPlayerChoice(playerChoice);
    }

    return playerChoice;
}

function formatPlayerChoice(playerChoice) { 
    return playerChoice.trim().toUpperCase();
}

function playRound(playerChoice, computerChoice) {
    if ((playerChoice === ROCK && computerChoice === SCISSORS)
    || (playerChoice === PAPER && computerChoice === ROCK)
    || (playerChoice === SCISSORS && computerChoice === PAPER)
    ) {
        // Player has won
        // Increment player's score and display winning message
        playerScore++;
        console.log(`YOU WON! ${playerChoice} beats ${computerChoice}`);
    } else if (playerChoice === computerChoice) { 
        // Tie
        console.log("TIE!");
    } else {  
        // Player has lost
        // Increment computer's score and display losing message
        computerScore++;
        console.log(`YOU LOSE! ${computerChoice} beats ${playerChoice}`);
    }
}