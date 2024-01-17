let remainingTime = 30;
let timer;
const timerElement = document.getElementById("gameTimer");
import * as gameLogic from "./gameLogic.js";

export const displayTimer = () => {
  timerElement.style.color = "black"; // reset color
  remainingTime--;
  timerElement.innerHTML = remainingTime;
  if (remainingTime <= 5 && remainingTime > 0) {
    timerElement.style.color = "red";
  }
  if (remainingTime === 0) {
    clearInterval(timer);
    questionAndAnswer.style.display = "none";
    remainingTime = 30;
    gameLogic.currGameData.gameStarted = false;
  }
};

export const startTimer = () => {
  if (gameLogic.currGameData.gameStarted === true) {
    timer = setInterval(displayTimer, 1000);
    gameLogic.currGameData.gameStarted = false;
    timerElement.innerHTML = remainingTime;
  }
};
