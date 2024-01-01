function getRndNumber(min, max) {
    return Math.floor( min + Math.random() * (max-min) );

}



function getComputerChoice(){

    let rps = getRndNumber(1, 4);

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
        console.log(" Draw. ");
    }

    else if ( computerSelection.toLowerCase() == "rock" && playerSelection.toLowerCase() == "scissors" ) {
        console.log(" You lose! Rock beats scissors. ");
        winner = "computer";
    }

    else if ( computerSelection.toLowerCase() == "rock" && playerSelection.toLowerCase() == "paper" ) {
        console.log(" You win! Paper beats Rock. ");
        winner = "player";
    }

    else if ( computerSelection.toLowerCase() == "paper" && playerSelection.toLowerCase() == "scissors" ) {
        console.log(" You win! Scissors cut paper. ");
        winner = "player";
    }

    else if ( computerSelection.toLowerCase() == "paper" && playerSelection.toLowerCase() == "rock" ) {
        console.log(" You lose! Paper beats Rock. ");
        winner = "computer";
    }

    else if ( computerSelection.toLowerCase() == "scissors" && playerSelection.toLowerCase() == "paper" ) {
        console.log(" You lose! Scissors cut paper. ");
        winner = "computer";
    }

    else if ( computerSelection.toLowerCase() == "scissors" && playerSelection.toLowerCase() == "rock" ) {
        console.log(" You win! Rock beats scissors. ");
        winner = "player";
    }

    return winner;

}


function game() {

    let playerWins = 0;
    let computerWins = 0;


    for ( let i = 0; i < 5; i++ ) {

        let computerChoice = getComputerChoice();
        let playerChoice = prompt( "Rock, Paper or Scissors?" );

        roundWinner = playRound(computerChoice, playerChoice);

        if (roundWinner == "player") {

            playerWins += 1;

        }

        else if (roundWinner == "computer") {

            computerWins += 1;

        }           
    
    
    
    }

    if (playerWins > computerWins) {
        alert("Player has won!");
    }
    else if (playerWins < computerWins) {
        alert("Computer has won!");
    }
    else if (playerWins == computerWins) {
        alert("Draw!");
    }


}

game();
