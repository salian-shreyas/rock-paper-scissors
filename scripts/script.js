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
function playRound(playerSelection) {

    const computerSelection = computerPlay();

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

    const yourScore = document.querySelector('#your-score');
    const yourPlay = document.querySelector('#you-played');
    
    yourScore.textContent = `Score: ${playerScore}`;
    yourPlay.textContent = playerSelection;

    const compScore = document.querySelector('#comp-score');
    const compPlay = document.querySelector('#comp-played');

    compScore.textContent = `Score: ${computerScore}`;
    compPlay.textContent = computerSelection;

}

function clickChoice(e) {
    const choice = document.querySelector(`#${e.target['id']}`);
    if (choice === null) return;

    choice.classList.add('button-clicked');

    playRound(choice['id']);
}

function keyChoice(e) {
    const choice = document.querySelector(`button[data-key='${e.keyCode}']`);
    if (choice === null) return;

    choice.classList.add('button-clicked');

    playRound(choice['id']);
}

function removeTransition(e) {
    e.target.classList.remove('button-clicked');
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => button.addEventListener('click', clickChoice));
buttons.forEach((button) => button.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', keyChoice);