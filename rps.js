function computerPlay(){
    let computerChoice =  Math.floor(Math.random() * 3);
    if(computerChoice == 0){
        return 'Rock';
    }
    else if(computerChoice == 1){
        return 'Paper';
    }
    else {
        return 'Scissor';
    }
}

function playRound(playerSelection, computerSelection){
    let temp = playerSelection[0].toUpperCase();
    let temp1 = playerSelection.slice(1).toLowerCase();
    playerSelection = temp + temp1;
    
    if (playerSelection == computerSelection){
        return "It's a Tie!"
    }
    else if(playerSelection == 'Rock' && computerSelection== 'Paper'){
        return 'You Lose! Paper beats Rock.'
    }
    else if(playerSelection == 'Rock' && computerSelection== 'Scissor'){
        return 'You Win! Rock beats Paper.'
    }
    else if(playerSelection == 'Paper' && computerSelection== 'Scissor'){
        return 'You Lose! Scissor beats Paper.'
    }
    else if(playerSelection == 'Paper' && computerSelection== 'Rock'){
        return 'You Win! Rock beats Scissor.'
    }
    else if(playerSelection == 'Scissor' && computerSelection== 'Paper'){
        return 'You Win! Scissor beats Paper.'
    }
    else if(playerSelection == 'Scissor' && computerSelection== 'Rock'){
        return 'You Win! Rock beats Scissor.'
    }

}


// console.log(playRound(playerSelection, computerSelection));


function playGame(){
    let playerWin = 0, computerWin = 0;
    for(i = 0; i < 5; i++){
        
        const playerSelection = prompt('Choose: Rock, Paper, Scissor');
        const computerSelection = computerPlay();
       
        let result = playRound(playerSelection, computerSelection)
        if(result == 'You Win!'){
           return playerWin += 1;
        }
        else if(result == 'You Lose!'){
            return computerWin += 1;
        }

    }
    
    if(playerWin > computerWin){
        return 'Player Wins!'
    }
    else if(computerWin > playerWin){
        return 'Computer Wins!'
    }
    else{
        return 'Its a Tie!'
    }
    
}


console.log(playGame());
