// Scrie un script care, atunci când se introduce un text în input#name-input (evenimentul input), înlocuiește valoarea lui span#name-output cu valoarea
//  curentă din input#name-input. Dacă input-ul este gol, în acel span se va afișa "Anonymous".

"use strict";

const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

const changeName = (event) => {
  if (event.currentTarget.value !== "") {
    nameOutput.textContent = event.currentTarget.value;
    return nameOutput;
  }
  return (nameOutput.textContent = "Anonymous");
};

nameInput.addEventListener("input", changeName);
