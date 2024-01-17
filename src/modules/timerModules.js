import * as gameLogic from "./gameLogic.js";
import * as main from "../main.js";
let remainingTime = 30;
let timer;
const timerElement = document.getElementById("gameTimer");

export const displayTimer = () => {
  timerElement.style.color = "black"; // reset color
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
