let playerScore = 0;
let computerScore = 0;

// Computer play
function computerPlay() {
    // Get one random number between 0 and 2 (inclusive)
    const choice = Math.floor(Math.random() * 10) % 3;

    // Return the corresponding string
    if (choice === 0) {
        return 'rock';
    } else if (choice === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

// Return the winner of the round 
function playRound(playerSelection, computerSelection) {
    if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'rock')) {
        return printWinner(1, playerSelection, computerSelection);
    } else if (playerSelection === computerSelection) {
        return printWinner(0, playerSelection, computerSelection);
    } else {
        return printWinner(2, playerSelection, computerSelection);
    }
}

// Print the winner 
function printWinner(winner, playerSelection, computerSelection) {
    
    console.log(`You selected ${playerSelection}\nComputer selected ${computerSelection}`)
    if (winner == 1) {
        console.log("You won !");
        ++playerScore;
    } else if (winner == 0) {
        console.log("Play tied");
    } else {
        console.log("You lost!");
        ++computerScore;
    }
    console.log(`Your score : ${playerScore} \nComputer score : ${computerScore}`);
}

function game() {

    // Store selection
    let playerSelection;
    let computerSelection;

    // Play game of 5 rounds
    for (let i = 0; i < 5; ++i) {
        
        // Get the player slection
        playerSelection = prompt("ROCK or PAPER or SCISSORS ?", "");
        playerSelection = (playerSelection == null) ? "" : playerSelection.toLowerCase();

        // Get the computer selection 
        computerSelection = computerPlay();

        // Print the winner 
        playRound(playerSelection, computerSelection);
    }
}

game();

