document.addEventListener("DOMContentLoaded", (event) => {
  let remainingTime = 30;
  let isStopped = true;
  const timerElement = document.getElementById("gameTimer");
  const startButton = document.getElementById("startGameButton");
  let timer;

  const displayTimer = () => {
    remainingTime--;
    timerElement.innerHTML = remainingTime;
    if (remainingTime === 0) {
      clearInterval(timer);
      isStopped = true;
      remainingTime = 30;
    }
  };

  const startTimer = () => {
    console.log("startTimer");
    if (isStopped) {
      timer = setInterval(displayTimer, 1000);
      isStopped = false;
      timerElement.innerHTML = remainingTime;
      console.log(remainingTime);
    }
  };
  startButton.onclick = startTimer;
});
