import * as timerModules from "./timerModules.js";
const promptElement = document.getElementById("question");
const questionAndAnswer = document.getElementById("questionAndAnswer");
const answerInput = document.getElementById("userAnswer");
const validOperands = ["+", "-", "*", "/"];
questionAndAnswer.style.display = "none";
let prompt = [];
let score = 0;

export const isDivisible = (numOne, numTwo) => {
  return numTwo !== 0 && numOne % numTwo === 0;
};

export const generatePair = (operand) => {
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

export const generatePrompt = () => {
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

export const displayPrompt = () => {
  prompt = generatePrompt();
  promptElement.innerHTML = prompt[0];
};

export const startGame = () => {
  questionAndAnswer.style.display = "block";
  timerModules.startTimer();
  displayPrompt();
};

export const checkAnswer = (userInput) => {
  if (userInput === prompt[1]) {
    score++;
    document.getElementById("score").innerHTML = score;
  }
};
answerInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    if (answerInput.value !== "") {
      let userInput = parseInt(answerInput.value);
      checkAnswer(userInput);
      answerInput.value = "";
    }
    displayPrompt();
  }
});