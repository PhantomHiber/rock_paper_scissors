


function getComputerChoice(){

    let rps = Math.floor( 1 + Math.random() * (3) );

    switch(rps) {
        case 1:
            rps = "Rock";
            break;
        
        case 2:
            rps = "Paper";
            break;
        
        case 3:
            rps = "Scissors";
            break;    
    }

    return rps;

}


function playRound(computerSelection, playerSelection) {

    let winner = "";

    if ( computerSelection.toLowerCase() == playerSelection.toLowerCase()) {
        result.textContent = " Draw.";
    }

    else if ( computerSelection.toLowerCase() == "rock" && playerSelection.toLowerCase() == "scissors" ) {
        result.textContent =  " You lose! Rock beats scissors. "
        winner = "computer";
    }

    else if ( computerSelection.toLowerCase() == "rock" && playerSelection.toLowerCase() == "paper" ) {
        result.textContent = " You win! Paper beats Rock. ";
        winner = "player";
    }

    else if ( computerSelection.toLowerCase() == "paper" && playerSelection.toLowerCase() == "scissors" ) {
        result.textContent = " You win! Scissors cut paper. ";
        winner = "player";
    }

    else if ( computerSelection.toLowerCase() == "paper" && playerSelection.toLowerCase() == "rock" ) {
        result.textContent = " You lose! Paper beats Rock. ";
        winner = "computer";
    }

    else if ( computerSelection.toLowerCase() == "scissors" && playerSelection.toLowerCase() == "paper" ) {
        result.textContent = " You lose! Scissors cut paper. ";
        winner = "computer";
    }

    else if ( computerSelection.toLowerCase() == "scissors" && playerSelection.toLowerCase() == "rock" ) {
        result.textContent = " You win! Rock beats scissors. ";
        winner = "player";
    }

    if (winner == "player") {

        playerWins += 1;

    }

    else if (winner == "computer") {

        computerWins += 1;

    }



    pWins.textContent = `Player wins: ${playerWins}`;
    cWins.textContent = `Computer wins: ${computerWins}`;

    if ( playerWins == 5 ) {
        alert(' You have won this game! ')
        playerWins = 0;
        computerWins = 0;
    }

    else if ( computerWins == 5 ) {
        alert( ' You have lost this game! ')
        playerWins = 0;
        computerWins = 0;
    }

}


playerWins = 0;
computerWins = 0;

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const pWins = document.querySelector('#pWins');
const cWins = document.querySelector('#cWins');
const result = document.querySelector('#result')


rockButton.addEventListener('click', () => playRound( getComputerChoice(), 'rock' ) );
paperButton.addEventListener('click', () => playRound( getComputerChoice(), 'paper' ) );
scissorsButton.addEventListener('click', () => playRound( getComputerChoice(), 'scissors' ) );
