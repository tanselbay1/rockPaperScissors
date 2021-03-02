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

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    let message = "";
    if (playerSelection == "rock" && computerSelection == "paper") {
        message = "You lose! Paper beats Rock";
        computerScore += 1;
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        message = "You win!! Rock beats Scissors";
        playerScore += 1;
    } else if (playerSelection == "rock" && computerSelection == "rock") {
        message = "Tie! No points";
    } else {
        if (playerSelection == "paper" && computerSelection == "scissors") {
            message = "You lose! Scissor beats Paper";
            computerScore += 1;
        } else if (playerSelection == "paper" && computerSelection == "rock") {
            message = "You win!! Paper beats Rock";
            playerScore += 1;
        } else if (playerSelection == "paper" && computerSelection == "paper") {
            message = "Tie! No points";
        } else {
            if (playerSelection == "scissors" && computerSelection == "rock") {
                message = "You lose! Rock beats Scissors";
                computerScore += 1;
            } else if (playerSelection == "scissors" && computerSelection == "paper") {
                message = "You win!! Scissors beats Paper";
                playerScore += 1;
            } else if (playerSelection == "scissors" && computerSelection == "scissors") {
                message = "Tie! No points";
            } else {
                message = "Please enter Rock, Paper or Scissors!";
            }
        }
    }
    return message;
}

function game() {
    
    for(let i = 0; i<5; i++) {           
        const playerSelection = prompt("Rock, Paper, Scissors?").toLowerCase();
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        
    }

    if (playerScore > computerScore) {
        return `You win! Your Score: ${playerScore} and Computer Score: ${computerScore}`;
    } else if (playerScore < computerScore) {
        return `You lose! Your Score: ${playerScore} and Computer Score: ${computerScore}`;
    } else {
        return `Tie! Your Score: ${playerScore} and Computer Score: ${computerScore}`;
    }
}


console.log(game());