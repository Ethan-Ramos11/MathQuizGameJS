import * as gameLogic from "./gameLogic.js";
let remainingTime = 10000000000000;
let timer;
export const timerElement = document.getElementById("gameTimer");
timerElement.style.display = "none";
export const displayTimer = () => {
  remainingTime--;
  timerElement.innerHTML = `Timer: ${remainingTime}`;
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
    timerElement.innerHTML = `Timer: ${remainingTime}`;
  }
};
