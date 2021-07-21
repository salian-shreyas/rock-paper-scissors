// Store player score 
let playerScore = 0;
let computerScore = 0;

let resetButton;
let winnerDiv;
let scores;
let scoresDiv = [];

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    
    scores.removeChild(resetButton);
    scores.removeChild(winnerDiv);
    scores.appendChild(scoresDiv[0]);
    scores.appendChild(scoresDiv[1]);
    showScore('Your Choice', 'Computer Choice');
    scores.style.flexDirection = 'row';
    scores.style.justifyContent = 'space-evenly';
}

function computerPlay() {

    // Get one random number between 0 and 2 (inclusive)
    const choice = Math.floor(Math.random() * 10) % 3;

    if (choice === 0) {
        return 'rock';
    } else if (choice === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

// Print score 
function showScore(playerSelection, computerSelection) {

    const yourScore = document.querySelector('#your-score');
    const yourPlay = document.querySelector('#you-played');
    const compScore = document.querySelector('#comp-score');
    const compPlay = document.querySelector('#comp-played');

    // Show player current choice and score
    yourScore.textContent = `Score: ${playerScore}`;
    yourPlay.textContent = playerSelection;

    // Show computer current choice and score
    compScore.textContent = `Score: ${computerScore}`;
    compPlay.textContent = computerSelection;
}

function removeScoresChildren() {
    scores = document.querySelector('#scores');
    const scoresChildren = document.querySelectorAll('#scores>div')
     
    scoresChildren.forEach((child, i) => scoresDiv[i] = scores.removeChild(child));
}

function addResetButton() {
    resetButton = document.createElement('button');
    resetButton.textContent = "RESET";
    resetButton.classList.add('reset-button');

    scores.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function playerWon() {
    
    removeScoresChildren();

    scores.style.flexDirection = 'column';
    scores.style.justifyContent = 'center';
    
    winnerDiv = document.createElement('div')
    winnerDiv.textContent = "Hurray! You Won The Game."
    winnerDiv.classList.add('winner-div');

    scores.appendChild(winnerDiv);
    
    addResetButton();
}

function playerLost() {
    removeScoresChildren();

    scores.style.flexDirection = 'column';
    scores.style.justifyContent = 'center';
    
    winnerDiv = document.createElement('div')
    winnerDiv.textContent = "Game Over!"
    winnerDiv.classList.add('winner-div');

    scores.appendChild(winnerDiv);
    
    addResetButton();
}

function detectWinner() {
    if (playerScore >= 5) {
        if (playerScore == computerScore) {
           gameTied();
        } else {
           playerWon();    
        }
    } else if (computerScore >= 5) {
        playerLost();
    }
}

function playRound(playerChoice) {

    const computerChoice = computerPlay();

    if (playerChoice == 'rock' && computerChoice == 'scissors' ||
        playerChoice == 'scissors' && computerChoice == 'paper'  ||
        playerChoice == 'paper' && computerChoice == 'rock') {
        ++playerScore;

    } else if (computerChoice == 'rock' && playerChoice == 'scissors' ||
        computerChoice == 'scissors' && playerChoice == 'paper'  ||
        computerChoice == 'paper' && playerChoice == 'rock') {
        ++computerScore;
    }

    showScore(playerChoice, computerChoice);
    detectWinner();
}


function clickedChoice(e) {
    
    const choice = document.querySelector(`#${e.target['id']}`);
    if (choice === null) return;

    choice.classList.add('button-clicked');
    playRound(choice['id']);
}

function pressedKey(e) {

    const choice = document.querySelector(`button[data-key='${e.keyCode}']`);
    if (choice === null) return;

    choice.classList.add('button-clicked');
    playRound(choice['id']);
}

function removeTransition(e) {
    e.target.classList.remove('button-clicked');
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => button.addEventListener('click', clickedChoice));
window.addEventListener('keydown', pressedKey);

buttons.forEach((button) => button.addEventListener('transitionend', removeTransition));