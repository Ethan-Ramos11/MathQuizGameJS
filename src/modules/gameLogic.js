import * as timerModules from "./timerModules.js";
const promptElement = document.getElementById("question");
const questionAndAnswer = document.getElementById("questionAndAnswer");
const answerInput = document.getElementById("userAnswer");
const validOperands = ["+", "-", "*", "/"];
questionAndAnswer.style.display = "none";
document.getElementById("score").style.display = "none";
export const currGameData = {
  gameStarted: false,
  currentPromptAndAnswer: [],
  score: 0,
};

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
    while (isDivisible(firstNumber, secondNumber) === false) {
      firstNumber = Math.floor(Math.random() * 144) + 1;
      secondNumber = Math.floor(Math.random() * 12) + 1;
    }
  }
  let pair = [firstNumber, secondNumber];
  return pair;
};

export const generatePrompt = () => {
  let question = "";
  const operand = validOperands[Math.floor(Math.random() * 4)];
  let pair = generatePair(operand);
  let answer = 0;
  switch (operand) {
    case "+":
      answer = pair[0] + pair[1];
      question = `What is ${pair[0]} + ${pair[1]}?`;
      break;
    case "-":
      answer = pair[0] - pair[1];
      question = `What is ${pair[0]} - ${pair[1]}?`;
      break;
    case "*":
      answer = pair[0] * pair[1];
      question = `What is ${pair[0]} * ${pair[1]}?`;
      break;
    case "/":
      answer = pair[0] / pair[1];
      question = `What is ${pair[0]} / ${pair[1]}?`;
      break;
  }
  console.log(answer);
  return [question, answer];
};

export const displayPrompt = () => {
  currGameData.currentPromptAndAnswer = generatePrompt();
  promptElement.innerHTML = currGameData.currentPromptAndAnswer[0];
};

export const checkAnswer = (userInput) => {
  if (userInput === currGameData.currentPromptAndAnswer[1]) {
    currGameData.score++;
    displayScore();
  }
};

export const displayScore = () => {
  document.getElementById("score").innerHTML = `Score: ${currGameData.score}`;
};

export const startGame = () => {
  if (currGameData.gameStarted === false) {
    document.getElementById("score").style.display = "block";
    currGameData.gameStarted = true;
    questionAndAnswer.style.display = "block";
    timerModules.startTimer();
    displayPrompt();
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
