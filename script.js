const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors"

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
    return playerChoice.trim().toLowerCase();
}