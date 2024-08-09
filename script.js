const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const PLAYER = "PLAYER";
const COMPUTER = "COMPUTER";

let playerScore = 0;
let computerScore = 0;
let playerChoice;
let computerChoice;

// Get player's choice from button clicks 
const buttonContainer = document.querySelector(".button-container");
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

	playGame();
});

const playerChoiceDisplay = document.querySelector(".player-choice");
const computerChoiceDisplay = document.querySelector(".computer-choice");
const roundWinnerDisplay = document.querySelector(".round-winner");
const playerScoreDisplay = document.querySelector(".player-score");
const computerScoreDisplay = document.querySelector(".computer-score");
const gameMessageDisplay = document.querySelector(".game-message");

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

function updateChoice() {
	playerChoiceDisplay.textContent = `PLAYER'S CHOICE: ${playerChoice}`;
	computerChoiceDisplay.textContent = `COMPUTER'S CHOICE: ${computerChoice}`;
}

function updateScore() {
	playerScoreDisplay.textContent = `PLAYER SCORE: ${playerScore}`;
	computerScoreDisplay.textContent = `COMPUTER SCORE: ${computerScore}`;
}

function displayGameMessage() {
	if (playerScore > computerScore) {
		gameMessageDisplay.textContent = "YOU WON!!";
	} else {
		gameMessageDisplay.textContent = "YOU LOSE!!";
	}
}

function resetGame() {
	playerChoiceDisplay.textContent = "PLAYER'S CHOICE:";
	computerChoiceDisplay.textContent = "COMPUTER'S CHOICE:";
	playerScoreDisplay.textContent = "PLAYER SCORE:";
	computerScoreDisplay.textContent = "COMPUTER SCORE:";
}

function playGame() {
	computerChoice = getComputerChoice();
	updateChoice();

	const winner = playRound(playerChoice, computerChoice);

	if (winner === PLAYER) {
		playerScore++;
		roundWinnerDisplay.textContent = `YOU WON! ${playerChoice} beats ${computerChoice}`
	} else if (winner === COMPUTER) {
		computerScore++;
		roundWinnerDisplay.textContent = `YOU LOSE! ${computerChoice} beats ${playerChoice}`
	} else {
		roundWinnerDisplay.textContent = "TIE!";
	}

	updateScore();

    // Declare Winner
    if (playerScore === 5 || computerScore === 5) {
		displayGameMessage();
		resetGame();
	}
}

