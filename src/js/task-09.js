// Scrie un script care schimbă culorile de fundal al elementului <body> prin stiluri inline atunci când se face click pe button.change-color și
// afișează valoarea culorii în span.color.
// Pentru a genera o culoare aleatorie, folosește getRandomHexColor.
"use strict";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const currentColor = document.querySelector(".color");
const changeColor = document.querySelector(".change-color");

function selectColor() {
  document.body.style.backgroundColor = getRandomHexColor();
  currentColor.innerHTML = getRandomHexColor();
}

changeColor.addEventListener("click", selectColor);
