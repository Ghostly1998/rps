
let computerScore = 0;
let playerScore = 0;


const paper = document.getElementById('Paper');
const rock = document.getElementById('Rock');
const scissor = document.getElementById('Scissor');

const result = document.getElementById('result')
result.textContent = ' '

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
    
    if (playerSelection == computerSelection){
        result.textContent = "It's a Tie!"
    }
    else if(playerSelection == 'Rock' && computerSelection== 'Paper'){
        result.textContent = 'You Lose! Paper beats Rock.'
        computerScore++;
    }
    else if(playerSelection == 'Rock' && computerSelection== 'Scissor'){
        result.textContent = 'You Win! Rock beats Paper.'
        playerScore++;
    }
    else if(playerSelection == 'Paper' && computerSelection== 'Scissor'){
        result.textContent = 'You Lose! Scissor beats Paper.'
        computerScore++;
    }
    else if(playerSelection == 'Paper' && computerSelection== 'Rock'){
        result.textContent = 'You Win! Rock beats Scissor.'
        playerScore++;+
    }
    else if(playerSelection == 'Scissor' && computerSelection== 'Paper'){
        result.textContent = 'You Win! Scissor beats Paper.'
        playerScore++;
    }
    else if(playerSelection == 'Scissor' && computerSelection== 'Rock'){
        result.textContent = 'You Lose! Rock beats Scissor.'
        computerScore++;
    }

}

function playGame(){
    playRound(playerSelection, computerSelection);

    if(computerScore == playerScore){
        document.textContent = `It's a tie!`
    }
    else if(computerScore > playerScore){
        document.textContent = `Computer Wins!`
    }
    else{
        document.textContent = 'Player Wins!'
    }
}


const computerSelection = computerPlay();
const playerSelection = fucntion(){
    rock.addEventListener('click') = () =>{
    return 'Rock';
    }
    paper.addEventListener('click') = () =>{
    return 'Paper';
    }
    scissor.addEventListener('click') = () =>{
    return 'Scissor';
    }
};


function play(){
    const beginGame = document.getElementById('play');
    document.addEventListener('onclick', beginGame){
        playGame();
    }
}