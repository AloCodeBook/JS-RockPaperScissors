function computerplay() {
    let choices = ["Rock","Papper","Scissors"]
    let randomNum = Math.floor(Math.random()*3);
    let computerChoice = choices[randomNum];
    alert(computerChoice);
}
