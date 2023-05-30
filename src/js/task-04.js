//     Declară o variabilă counterValue ce va stoca valoarea curentă a contorului și asignează-i valoarea 0 pentru început.
//     Adaugă click handler pe butoane, în interiorul cărora vei mări sau micșora valoarea contorului.
//     Actualizează interfața cu noua valoare a variabilei counterValue.

"use strict";

const buttonDecrement = document.querySelector('[data-action="decrement"]');
const buttonIncrement = document.querySelector('[data-action="increment"]');
const counter = document.querySelector("#value");
let counterValue = 0;

const clickDecrement = () => {
  counterValue--;
  counter.innerHTML = counterValue;
};

const clickIncrement = () => {
  counterValue++;
  counter.innerHTML = counterValue;
};

buttonDecrement.addEventListener("click", clickDecrement);
buttonIncrement.addEventListener("click", clickIncrement);
