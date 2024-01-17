const validOperands = ["+", "-", "*", "/"];
let remainingTime = 30;
let isStopped = true;
const timerElement = document.getElementById("gameTimer");
const startButton = document.getElementById("startGameButton");
const promptElement = document.getElementById("question");
const questionAndAnswer = document.getElementById("questionAndAnswer");
let timer;

const displayTimer = () => {
  timerElement.style.color = "black"; // reset color
  remainingTime--;
  timerElement.innerHTML = remainingTime;
  if (remainingTime <= 5 && remainingTime > 0) {
    timerElement.style.color = "red";
  }
  if (remainingTime === 0) {
    clearInterval(timer);
    questionAndAnswer.style.display = "none";
    isStopped = true;
    remainingTime = 30;
  }
};

const startTimer = () => {
  if (isStopped) {
    timer = setInterval(displayTimer, 1000);
    isStopped = false;
    timerElement.innerHTML = remainingTime;
  }
};

const isDivisible = (numOne, numTwo) => {
  return numTwo !== 0 && numOne % numTwo === 0;
};

const generatePair = (operand) => {
  if (operand === undefined || !validOperands.includes(operand)) {
    throw new Error("Invalid operand");
  }
  let firstNumber = Math.floor(Math.random() * 10) + 1;
  let secondNumber = Math.floor(Math.random() * 10) + 1;
  if (operand === "/") {
    while (!isDivisible(firstNumber, secondNumber)) {
      firstNumber = Math.floor(Math.random() * 144) + 1;
      secondNumber = Math.floor(Math.random() * 12) + 1;
    }
  }
  const pair = [firstNumber, secondNumber];
  return pair;
};

const generatePrompt = () => {
  let prompt = "";
  const operand = validOperands[Math.floor(Math.random() * 4)];
  let pair = generatePair(operand);
  let answer = 0;
  if (operand === "+") {
    answer = pair[0] + pair[1];
    prompt = `What is ${pair[0]} + ${pair[1]}?`;
  } else if (operand === "-") {
    answer = pair[0] - pair[1];
    prompt = `What is ${pair[0]} - ${pair[1]}?`;
  } else if (operand === "*") {
    answer = pair[0] * pair[1];
    prompt = `What is ${pair[0]} * ${pair[1]}?`;
  } else {
    answer = pair[0] / pair[1];
    prompt = `What is ${pair[0]} / ${pair[1]}?`;
  }
  return [prompt, answer];
};
const displayPrompt = () => {
  const [prompt, answer] = generatePrompt();
  promptElement.innerHTML = prompt;
};

startButton.addEventListener("click", () => {
  if (questionAndAnswer.style.display === "none") {
    questionAndAnswer.style.display = "block";
  } else {
    questionAndAnswer.style.display = "none";
  }
  startTimer();
  generatePair("/");
  displayPrompt();
});
