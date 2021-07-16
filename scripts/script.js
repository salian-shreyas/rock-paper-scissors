// Store player score 
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

    if (playerSelection === computerSelection) {
        playTied();
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'rock')) {
        playerWon();
    }else {
        computerWon();
    }
    printScore(playerSelection, computerSelection);
}

// PLayer won 
function playerWon() {
    console.log("You won!");
    ++playerScore;
}

// Computer won 
function computerWon() {
    console.log("You lost!");
    ++computerScore;
}

// Play tied
function playTied() {
    console.log("Play tied!");
}

// Print score 
function printScore(playerSelection, computerSelection) {
    console.log(`You Selected: '${playerSelection}' Computer Selected: '${computerSelection}'`);
    console.log(`Your Score  : '${playerScore}'     Computer Score   : '${computerScore}'`); 
}


// Start game
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

    // Print final winner 
    if (playerScore > computerScore) {
        console.log("----You won the game!!----");
    } else if (playerScore == computerScore) {
        console.log("----Game Tied!----");
    } else {
        console.log("----Game Over!----");
    }
}

game();

