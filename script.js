let playerChoice;
let npcChoice;
let playerScore = 0;
let npcScore = 0;
const scoreboard = document.getElementById("scoreboard");
const resetBtn = document.getElementById("resetBtn");
const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorBtn = document.getElementById("scissorBtn");
gameOptions = ["Rock", "Paper", "Scissors"];
playerText = document.getElementById("playerText");
npcText = document.getElementById("npcText");
resultText = document.getElementById("resultText");

function disableButtons() {
  rockBtn.disabled = true;
  paperBtn.disabled = true;
  scissorBtn.disabled = true;
}

function enableButtons() {
  rockBtn.disabled = false;
  paperBtn.disabled = false;
  scissorBtn.disabled = false;
}

rockBtn.onclick = function() {
    playerChoice = "Rock";
    playerText.innerHTML = "Player: Rock";
    disableButtons();
    npcTurn();
}

paperBtn.onclick = function() {
  playerChoice = "Paper";
  playerText.innerHTML = "Player: Paper";
  disableButtons();
  npcTurn();
}

scissorBtn.onclick = function() {
  playerChoice = "Scissors";
  playerText.innerHTML = "Player: Scissors";
  disableButtons();
  npcTurn();
}

function npcTurn(){
  npcNumber = Math.floor(Math.random() * 3);
  npcChoice = gameOptions[npcNumber];
  npcText.innerHTML = "NPC: " + npcChoice;

  if (npcChoice == playerChoice) {
    resultText.innerHTML = "Result: Tie";
  } else if (playerChoice == "Rock") {
    if (npcChoice == "Scissors") {
      resultText.innerHTML = "Result: Win";
      playerScore++;
    } else {
      resultText.innerHTML = "Result: Lose";
      npcScore++;
    }
  } else if (playerChoice == "Paper") {
    if (npcChoice == "Rock") {
      resultText.innerHTML = "Result: Win";
      playerScore++;
    } else {
      resultText.innerHTML = "Result: Lose";
      npcScore++;
    }
  } else if (playerChoice == "Scissors") {
    if (npcChoice == "Paper") {
      resultText.innerHTML = "Result: Win";
      playerScore++;
    } else {
      resultText.innerHTML = "Result: Lose";
      npcScore++;
    }
  }
  scoreboard.innerHTML = "Score: " + playerScore + " - " + npcScore;
  enableButtons();
}

resetBtn.onclick = function() {
  resultText.innerHTML = "Result:";
  playerText.innerHTML = "Player:"
  npcText.innerHTML = "NPC:";
  playerScore = 0;
  npcScore = 0;
  scoreboard.innerHTML = "Score: " + playerScore + " - " + npcScore;
};