import * as timerModules from "./modules/timerModules.js";
import * as gameLogic from "./modules/gameLogic.js";
const startButton = document.getElementById("startGameButton");

startButton.addEventListener("click", () => {
  gameLogic.startGame();
});
