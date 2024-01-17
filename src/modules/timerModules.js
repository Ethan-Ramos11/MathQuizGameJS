let remainingTime = 30;
export let gameStarted = true;
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
    questionAndAnswer.style.display = "none";
    gameStarted = true;
    remainingTime = 30;
  }
};

export const startTimer = () => {
  if (gameStarted) {
    timer = setInterval(displayTimer, 1000);
    gameStarted = false;
    timerElement.innerHTML = remainingTime;
  }
};
