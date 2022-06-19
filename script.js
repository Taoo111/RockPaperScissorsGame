const buttonChoices = document.querySelectorAll(".buttonsDiv button");
const computerChoiceDisplay = document.querySelector(".computerChoiceDisplay");
const playerChoiceDisplay = document.querySelector(".playerChoiceDisplay");
const pointsCounterComputer = document.querySelector(".pointsCounterComputer");
const pointsCounterPlayer = document.querySelector(".pointsCounterPlayer");
const resultInfo = document.querySelector(".result-info");
const wrapper = document.querySelector(".wrapper");

//Images containers
const playerImg = document.querySelector(".playerImg");
const computerImg = document.querySelector(".computerImg");
//

//End game popup elements
const playAgain = document.getElementById("playAgain");
const popUpContainer = document.querySelector(".endGame-info");
//spans with the points on popup
const playerResult = document.querySelector(".playerSumOfPoints");
const computerResult = document.querySelector(".computerSumOfPoints");
//span with information about winner of the game
const winner = document.querySelector(".winnerSpan");

let playerChoice;
let computerChoice;

let playersPoints = 0;
let computersPoints = 0;

//Random choice of computer
const randomChoiceOfComputer = () => {
  computerChoice = Math.floor(Math.random() * 3);
  output = buttonChoices[computerChoice];
  setImgOfComputer();
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
  //Rock case

  setImgOfPlayer();

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
  endOfTheGame();
};

//End the game on points equal to 5
const endOfTheGame = () => {
  //end of a game conditions
  if (playersPoints === 6 || computersPoints === 6) {
    if (playersPoints === 5) {
      resultInfo.textContent = "Player Won the game";
    } else if (computersPoints === 5) {
      resultInfo.textContent = "Computer Won the game";
    }
    showPopUp();
    //reset the game
    resetGame();
  }
};

//reset the game function
const resetGame = () => {
  resultInfo.textContent = "";
  playerChoiceDisplay.textContent = "";
  computerChoiceDisplay.textContent = "";
  pointsCounterComputer.textContent = "";
  pointsCounterPlayer.textContent = "";
  playersPoints = 0;
  computersPoints = 0;
};

//players img setter
const setImgOfPlayer = () => {
  if (playerChoice === "rock") {
    playerImg.style.backgroundImage = "url(img/rock.png)";
  } else if (playerChoice === "paper") {
    playerImg.style.backgroundImage = "url(img/paper.png)";
  } else if (playerChoice === "scissors") {
    playerImg.style.backgroundImage = "url(img/scissors.png)";
  }
};

//computers img setter
const setImgOfComputer = () => {
  if (output.id === "rock") {
    computerImg.style.backgroundImage = "url(img/rock.png)";
  } else if (output.id === "paper") {
    computerImg.style.backgroundImage = "url(img/paper.png)";
  } else if (output.id === "scissors") {
    computerImg.style.backgroundImage = "url(img/scissors.png)";
  }
};

//Popup functions

//Show popup when the game is over , add blur effect to the background

const informationsOnPopup = () => {
  playerResult.textContent = playersPoints;
  computerResult.textContent = computersPoints;
  if (playersPoints > computersPoints) {
    winner.textContent = "Player";
  } else {
    winner.textContent = "Computer";
  }
};``

const showPopUp = () => {
  wrapper.classList.add("popup--active");
  informationsOnPopup();
  popUpContainer.style.display = "flex";
};

const closePopUp = () => {
  wrapper.classList.remove("popup--active");
  popUpContainer.style.display = "none";
};

buttonChoices.forEach((button) =>
  button.addEventListener("click", choiceOfPlayer)
);

playAgain.addEventListener("click", closePopUp);
