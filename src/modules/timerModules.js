import * as gameLogic from "./gameLogic.js";
import * as main from "../main.js";
let remainingTime = 30;
let timer;
export const timerElement = document.getElementById("gameTimer");
timerElement.style.display = "none";
export const displayTimer = () => {
  remainingTime--;
  timerElement.innerHTML = remainingTime;
  if (remainingTime <= 5 && remainingTime > 0) {
    timerElement.style.color = "red";
  }
  if (remainingTime === 0) {
    clearInterval(timer);
    remainingTime = 30;
    gameLogic.currGameData.gameStarted = false;
    window.location.href = "results.html";
  }
};

export const startTimer = () => {
  if (gameLogic.currGameData.gameStarted === true) {
    timer = setInterval(displayTimer, 1000);
    gameLogic.currGameData.gameStarted = false;
    timerElement.innerHTML = remainingTime;
  }
};
