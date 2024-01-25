import * as timerModules from "./modules/timerModules.js";
import * as gameLogic from "./modules/gameLogic.js";
const startButton = document.getElementById("startGameButton");
startButton.style.display = "block";

export const displayStartButton = () => {
  startButton.style.display = "block";
};
startButton.addEventListener("click", () => {
  startButton.style.display = "none";
  timerModules.timerElement.style.display = "block";
  gameLogic.startGame();
});
