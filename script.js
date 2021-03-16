// VARIABLES

let playerScore = 0;
let computerScore = 0;

const buttonContainer = document.getElementById('buttonContainer');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const results = document.getElementById('results');
const winner = document.getElementById('winner');
const message = document.getElementById('message');
const restartButton = document.getElementById('reset');


// FUNCTIONS

function computerPlay() {
    let randomNumber = Math.floor(Math.random() *3) +1;
    let choice = "";
    switch (randomNumber) {
        case 1:
            choice = "rock";
            break;
        case 2:
            choice = "paper";
            break;
        case 3:
            choice = "scissors";
    }
    return choice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "paper") {
        message.innerText = "You lose! Paper beats Rock";
        computerScore += 1;
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        message.innerText = "You win!! Rock beats Scissors";
        playerScore += 1;
    } else if (playerSelection == "rock" && computerSelection == "rock") {
        message.innerText = "Tie! No points";
    } else {
        if (playerSelection == "paper" && computerSelection == "scissors") {
            message.innerText = "You lose! Scissor beats Paper";
            computerScore += 1;
        } else if (playerSelection == "paper" && computerSelection == "rock") {
            message.innerText = "You win!! Paper beats Rock";
            playerScore += 1;
        } else if (playerSelection == "paper" && computerSelection == "paper") {
            message.innerText = "Tie! No points";
        } else {
            if (playerSelection == "scissors" && computerSelection == "rock") {
                message.innerText = "You lose! Rock beats Scissors";
                computerScore += 1;
            } else if (playerSelection == "scissors" && computerSelection == "paper") {
                message.innerText = "You win!! Scissors beats Paper";
                playerScore += 1;
            } else if (playerSelection == "scissors" && computerSelection == "scissors") {
                message.innerText = "Tie! No points";
            } else {
                message.innerText = "Please enter Rock, Paper or Scissors!";
            }
        }
    }
    return message;
}

function gameRestart() {
    playerScore = 0;
    computerScore = 0;
    winner.innerText = '';
    results.innerText = `Your Score: ${playerScore}, Computer Score: ${computerScore}`;
    message.innerText = "Game Started Again!";
}


// EVENTS

buttonContainer.addEventListener('click', function(e){
    let playerSelection = '';
    switch (e.target) {
        case rock:
            playerSelection = 'rock';
            break;
        case paper:
            playerSelection = 'paper';
            break;
        case scissors:
            playerSelection = 'scissors';
            break;
        default:
            console.log('not working');
            break;
    }
    // console.log(playRound(playerSelection, computerPlay())); Keep this for testing purpose.
    playRound(playerSelection, computerPlay());
    results.innerText = `Your Score: ${playerScore}, Computer Score: ${computerScore}`;
    if (playerScore >= 5){
        winner.innerText = "Congratulations, you WIN!";
        setTimeout(gameRestart, 2000);
    } else if (computerScore >= 5) {
        winner.innerText = "You LOSE!!";
        setTimeout(gameRestart, 2000);
    }
    // console.log(results); Again, for testing.
})

restartButton.addEventListener('click', gameRestart);
