import sumar from "./sumador";
import Tennis from "./tennis";

const scoreform = document.querySelector("#score-form");
let pointsPlayer1 = 0;
let pointsPlayer2 = 0;
const anotar1Button = document.querySelector("#anotar1-button");
const anotar2Button = document.querySelector("#anotar2-button");
const div = document.querySelector("#resultado-div");
const tennis = new Tennis();

div.innerHTML = "<p>" + tennis.getScore(pointsPlayer1, pointsPlayer2) + "</p>";

scoreform.addEventListener("submit", (event) => {
  event.preventDefault();

  if(event.submitter === anotar1Button){
    pointsPlayer1++;
  }
  if(event.submitter === anotar2Button){
    pointsPlayer2++;
  }

  div.innerHTML = "<p>" + tennis.getScore(pointsPlayer1, pointsPlayer2) + "</p>";
});
