const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const PLAYER = "PLAYER";
const COMPUTER = "COMPUTER";

let playerScore = 0;
let computerScore = 0;
let playerChoice;
let computerChoice;

// Get player's choice by listening to click event 
const buttonContainer = document.querySelector(".container");
buttonContainer.addEventListener( "click", e => {
	const target = e.target;

	switch (target.id) {
		case "rock":
			playerChoice = ROCK;
			break;
		
		case "paper":
			playerChoice = PAPER;
			break;

		case "scissors":
			playerChoice = SCISSORS;
			break;

		default:
			console.log("Unknown id value");
	}
});

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

function playRound(playerChoice, computerChoice) {
    if ((playerChoice === ROCK && computerChoice === SCISSORS)
    || (playerChoice === PAPER && computerChoice === ROCK)
    || (playerChoice === SCISSORS && computerChoice === PAPER)
    ) {
        // Player has won
        return PLAYER;
    } else if (playerChoice === computerChoice) { 
        // Tie
        return; 
    } else {  
        // Player has lost
        return COMPUTER;
    }
}

function displayScore(playerScore, computerScore) {
    console.log(`PLAYER SCORE    : ${playerScore}`);
    console.log(`COMPUTER SCORE  : ${computerScore}`);
}

function playGame() {
	winner = playRound(playerChoice, computerChoice);

	if (winner === PLAYER) {
		playerScore++;
		console.log(`YOU WON! ${playerChoice} beats ${computerChoice}`);
	} else if (winner === COMPUTER) {
		computerScore++;
		console.log(`YOU LOSE! ${computerChoice} beats ${playerChoice}`);
	} else {
		console.log("TIE!");
	}

    // Declare Winner
    if (playerScore > computerScore) {
        console.log("YOU WON THE GAME!!");
    } else if (playerScore === computerScore) {
        console.log("TIE!!");
    } else {
        console.log("YOU LOST THE GAME!!");
    }
    displayScore(playerScore, computerScore);
}

