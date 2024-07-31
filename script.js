const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const PLAYER = "PLAYER";
const COMPUTER = "COMPUTER";

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
    let playerScore = 0;
    let computerScore = 0;
    let playerChoice;
    let computerChoice;
    let winner;

    for (let i = 0; i < 5; i++) {
        playerChoice = getPlayerChoice();
        computerChoice = getComputerChoice();

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

