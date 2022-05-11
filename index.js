let playerTotal = 0
let computerTotal = 0

function computerplay() {
    let choices = ["Rock","Paper","Scissors"]
    let randomNum = Math.floor(Math.random()*3);
    let computerChoice = choices[randomNum];
    return computerChoice;
}
function playerPick() {
    let playerInput = prompt("Rock,Paper,Scissors?");
    let playerChoice =  playerInput.slice(0,1).toUpperCase()+ playerInput.slice(1,playerInput.length).toLowerCase();
    return playerChoice;
}
function playRound(playerChoice,computerChoice) {

    if (computerChoice === playerChoice) {
        console.log("You Tied!");
    } else if (computerChoice === "Rock" && playerChoice === "Scissors"){
        ++computerTotal;
        console.log( "You Lose!")
    
    } else if (computerChoice === "Scissors" && playerChoice === "Paper") {
        ++computerTotal;
        console.log("You Lose!")
    } else if (computerChoice === "Paper" && playerChoice === "Rock") {
        ++computerTotal;
        console.log("You Lose!")
    } else {
        ++playerTotal;
        console.log("You win!")
    }
}

function game() {
    for (let i=0;i<5;i++) {
const playerSelection = playerPick();
const computerSelection = computerplay();
console.log(playRound(playerSelection, computerSelection));
}
if (playerTotal < computerTotal) {
    console.log( "you lost to the robot")
} else if (playerTotal === computerTotal) {
    return "You tied the robot"
} else {
    return "You beat the robot"
}
}

console.log(game());
