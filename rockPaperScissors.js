
let compChoice;
let playerChoice;
let totalWins = 0;
let totalLoss = 0;
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const playerChoicePara = document.getElementById("playerChoicePara");
const computerChoicePara = document.getElementById("computerChoicePara");
const winDialog = document.getElementById("winDialog");
const winCounter = document.getElementById("winCounter");
const lossCounter = document.getElementById("lossCounter");
const finalScore = document.getElementById("finalScore");

function playerProcessed(playerChoice){
    switch (playerChoice){
        case "Rock":
            return playerChoice = 1;
            break;
        case "Paper":
            return playerChoice = 2;
            break;
        case "Scissors":
            return playerChoice = 3;
            break;
        }
    };
    
function computerPlay(){
    compChoice = Math.floor((Math.random() * 3) + 1);
    return compChoice;
}

function gameTime(person){
    computerPlay();
    if(compChoice == 1){
        computerChoicePara.textContent = "The computer chose: Rock";
    } else if (compChoice == 2){
        computerChoicePara.textContent = "The computer chose: Paper";
    } else {
        computerChoicePara.textContent = "The computer chose: Scissors";
    }

    if (compChoice == person){
        winDialog.textContent = "Looks like it's a tie.";
    } else if ((compChoice == 1 && person == 2) || (compChoice == 3 && person == 1) || (compChoice == 2 && person == 3)){
        winDialog.textContent = "You win!";
        totalWins += 1;
        winCounter.textContent = "You've won " + totalWins + " times.";
    } else {
        winDialog.textContent = "Sorry, you lose!";
        totalLoss += 1;
        lossCounter.textContent = "You've lost " + totalLoss + " times.";
    }

    if (totalWins == 5 && totalLoss < 5){
        finalScore.textContent = "You've bested the computer out of 5!";
        totalWins = 0;
        totalLoss = 0;
    } else if (totalLoss == 5 && totalWins < 5){
        finalScore.textContent = "You lost to the computer overall... bummer. try again?";
        totalWins = 0;
        totalLoss = 0;
    } else {
        return
    }};



rock.addEventListener('click', e => {
    playerChoice = "Rock";
    playerChoicePara.textContent = "You chose: Rock";
    gameTime(playerProcessed(playerChoice));
    return;
    });
paper.addEventListener('click', e => {
    playerChoice = "Paper";
    playerChoicePara.textContent = "You chose: Paper";
    gameTime(playerProcessed(playerChoice));
    return;
    });
scissors.addEventListener('click', e => {
    playerChoice = "Scissors";
    playerChoicePara.textContent = "You chose: Scissors";
    gameTime(playerProcessed(playerChoice));
    return;
    });

winCounter.textContent = "You've won " + totalWins + " times.";
lossCounter.textContent = "You've lost " + totalLoss + " times.";



