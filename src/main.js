const validOperands = ["+", "-", "*", "/"];
let remainingTime = 30;
let isStopped = true;
const timerElement = document.getElementById("gameTimer");
const startButton = document.getElementById("startGameButton");
let timer;

const displayTimer = () => {
  timerElement.style.color = "black"; // reset color
  remainingTime--;
  timerElement.innerHTML = remainingTime;
  if (remainingTime <= 5 && remainingTime > 0) {
    timerElement.style.color = "red";
  }
};

const startTimer = () => {
  if (isStopped) {
    timer = setInterval(displayTimer, 1000);
    isStopped = false;
    timerElement.innerHTML = remainingTime;
    console.log(remainingTime);
  }
  if (remainingTime === 0) {
    clearInterval(timer);
    isStopped = true;
    remainingTime = 30;
  }
};

const isDivisible = (numOne, numTwo) => {
  return numTwo !== 0 && numOne % numTwo === 0;
};

const generatePair = (operand) => {
  if (operand === undefined || !validOperands.includes(operand)) {
    throw new Error("Invalid operand");
  }
  let firstNumber = Math.floor(Math.random() * 100) + 1;
  let secondNumber = Math.floor(Math.random() * 100) + 1;
  if (operand === "/") {
    while (!isDivisible(firstNumber, secondNumber)) {
      firstNumber = Math.floor(Math.random() * 100) + 1;
      secondNumber = Math.floor(Math.random() * 100) + 1;
    }
  }
  const pair = [firstNumber, secondNumber];
  return pair;
};

startButton.addEventListener("click", () => {
  startTimer();
  generatePair("/");
});
console.log(generatePair("/"));
