playerTotal = 0
computerTotal = 0
tieTotal = 0

function computerPlay() {
    let choices = ["Rock","Paper","Scissors"]
    let randomNum = Math.floor(Math.random()*3);
     computerChoice = choices[randomNum];
    return computerChoice;
}

// function playerPick() {
//     let playerInput = prompt("Rock,Paper,Scissors?");
//     let playerChoice =  playerInput.slice(0,1).toUpperCase()+ playerInput.slice(1,playerInput.length).toLowerCase();
//     return playerChoice;
// }


function displayResult(result) {
    const container = document.querySelector('#container');
        const content = document.createElement('div');
        content.classList.add('content');
        content.textContent = result;
        container.appendChild(content);
}

function displayScore(score) {
    const container = document.querySelector('#container');
        const gameScore = document.createElement('div');
        gameScore.classList.add('gameScore');
        gameScore.textContent = `Player Score: ${playerTotal} Computer Score: ${computerTotal} Tie Total: ${tieTotal}`;
        container.appendChild(gameScore);
}

function displayVictor() {
    determineWinner();
    const container = document.querySelector('#container');
        const victor = document.createElement('div');
        victor.classList.add('victor');
        victor.textContent = winnerStatement;
        container.appendChild(victor);
}

function playRound(playerChoice,computerChoice) {
    
    if (computerChoice === playerChoice) {
        ++tieTotal;
        let result = 'You Tied!';
        displayResult(result);

    } else if (computerChoice === "Rock" && playerChoice === "Scissors"){
        ++computerTotal;
        let result = 'You Lose!';
        displayResult(result);
    
    } else if (computerChoice === "Scissors" && playerChoice === "Paper") {
        ++computerTotal;
        let result = 'You Lose!';
        displayResult(result);

    } else if (computerChoice === "Paper" && playerChoice === "Rock") {
        ++computerTotal;
        const div = document.createElement('div');
        let result = 'You Lose!';
        displayResult(result);
    } else {
        ++playerTotal;
        let result = 'You Win!';
        displayResult(result);
    }
    displayScore(playerTotal,computerTotal);
}

let gamesPlayed = 0;
     buttons = document.querySelectorAll('button');
    buttons.forEach((button)=> {
    button.addEventListener('click', () => {
         playerChoice = button.id;
         computerPlay();
         playRound(playerChoice,computerChoice);
         gamesPlayed+=1;
         if (gamesPlayed >= 5) {
            buttons.forEach(button => {
                 button.setAttribute("disabled",true);
                 
             });
            displayVictor();
         }
    
    });
   
});

function determineWinner (){
    if (playerTotal === computerTotal) {
         winnerStatement = "You tied the computer!";
        return winnerStatement;
    } else if (playerTotal > computerTotal) {
         winnerStatement = "You beat the computer!"
        return winnerStatement;
    }else {
         winnerStatement = "The computer Wins!"
        return winnerStatement;
    }

}
