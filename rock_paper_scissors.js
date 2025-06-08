function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
};
function getComputerChoice(){
    if (getRandomIntInclusive(0,2) == 0){
        return 'rock';
    }
    else if (getRandomIntInclusive(0,2) == 1){
        return 'paper';
    }
    else{
        return 'scissors';
    }
};

function getHumanChoice(){
    const userChoice = prompt("Enter you choice. Choose between 'rock', 'paper' or 'scissors': ");
    return userChoice;
};
let humanScore = 0;
let computerScore = 0; 

function playRound(humanSelection, computerSelection){
    if (humanSelection.toLowerCase() == 'rock' && computerSelection.toLowerCase()== 'scissors'){
        humanScore++
        return "You win! Rock beats Scissors"
    }
    else if (humanSelection.toLowerCase() == 'paper' && computerSelection.toLowerCase()== 'rock'){
        humanScore++
        return "You win! Paper beats Rock"
    }
      else if (humanSelection.toLowerCase() == 'scissors' && computerSelection.toLowerCase()== 'paper'){
        humanScore++
        return "You win! Scissors beats Paper"
    }
     else if (humanSelection.toLowerCase() == 'scissors' && computerSelection.toLowerCase()== 'rock'){
        computerScore++
        return "You lose! Rock beats Scissors"
    }
    else if (humanSelection.toLowerCase() == 'rock' && computerSelection.toLowerCase()== 'paper'){
        computerScore++
        return "You lose! Paper beats Rock"
    }
      else if (humanSelection.toLowerCase() == 'paper' && computerSelection.toLowerCase()== 'scissors'){
        computerScore++
        return "You lose! Scissors beats Paper"
    }
    else{
        return "Tie"
    }

}
// let humanChoice = getHumanChoice()
// let computerChoice = getComputerChoice()

function playGame(){
    for (let i = 0; i < 6; i ++){
        playRound(getHumanChoice(),getComputerChoice())
    }
    if (humanScore > computerScore){
        return 'Human won the game!'
    }
    else if (humanScore < computerScore){
        return 'Computer won the game!'
    }
    else {
        return 'Game was a tie'
    }

}
console.log(playGame())