import sumar from "./sumador";
import Tenis from "./tenis";

const scoreform = document.querySelector("#score-form");
const player1 = document.querySelector ("#player1");
const player2 = document.querySelector ("#player2");
const anotar1Button = document.querySelector("#anotar1-button");
const anotar2Button = document.querySelector("#anotar2-button");
const div = document.querySelector("#resultado-div");

scoreform.addEventListener("submit", (event) => {
  event.preventDefault();

  const scorePlayer1 = Tenis.getScorePlayer();
  const scorePlayer2 = Number.parseInt(player2.value);

  div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});
