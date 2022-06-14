const buttonChoices = document.querySelectorAll("div button");
const computerChoiceDisplay = document.querySelector(".computerChoiceDisplay");
const playerChoiceDisplay = document.querySelector(".playerChoiceDisplay");
const pointsCounterComputer = document.querySelector(".pointsCounterComputer");
const pointsCounterPlayer = document.querySelector(".pointsCounterPlayer");
const resultInfo = document.querySelector(".result-info");

let playerChoice;
let computerChoice;

let playersPoints="";
let computersPoints ="";

//Random choice of computer
const randomChoiceOfComputer = () => {
  computerChoice = Math.floor(Math.random() * 3);
  output = buttonChoices[computerChoice];
};

//Points Counter
const pointsCounter = () => {
  if (resultInfo.textContent === "Player Won") {
    playersPoints++;
    pointsCounterPlayer.textContent = playersPoints;
  } else if (resultInfo.textContent === "Computer Won") {
    computersPoints++;
    pointsCounterComputer.textContent = computersPoints;
  }
};

const choiceOfPlayer = (e) => {
  //Choice of a player
  playerChoice = e.target.id;
  playerChoiceDisplay.textContent = playerChoice;

  //choice of a computer
  randomChoiceOfComputer();

  computerChoiceDisplay.textContent = output.textContent;
  //compare the choices
  if ((playersPoints || computersPoints) !== 5) {
    //Rock case
    if (playerChoice === "rock") {
      if (output.id === "scissors") {
        resultInfo.textContent = "Player Won";
      } else if (output.id === "paper") {
        resultInfo.textContent = "Computer Won";
      } else {
        resultInfo.textContent = "Draw";
      }
      pointsCounter();
    }
    //Paper case
    else if (playerChoice === "paper") {
      if (output.id === "scissors") {
        resultInfo.textContent = "Computer Won";
      } else if (output.id === "rock") {
        resultInfo.textContent = "Player Won";
      } else {
        resultInfo.textContent = "Draw";
      }
      pointsCounter();
    }
    //scissors case
    else if (playerChoice === "scissors") {
      if (output.id === "paper") {
        resultInfo.textContent = "Player Won";
      } else if (output.id === "rock") {
        resultInfo.textContent = "Computer Won";
      } else {
        resultInfo.textContent = "Draw";
      }
      pointsCounter();
    }
  } else if ((playersPoints || computersPoints) === 5) {
    if (playersPoints === 5) {
      resultInfo.textContent = "Player Won the game";
    } else if (computersPoints === 5) {
      resultInfo.textContent = "Computer Won the game";
    }
  }
};


buttonChoices.forEach((button) =>
  button.addEventListener("click", choiceOfPlayer)
);
