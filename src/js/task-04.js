// Counter-ul este format dintr-un tag span și două butoane care, atunci când sunt apăsate, ar trebui să-și mărească sau scadă valoarea cu unu.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

//     Declară o variabilă counterValue ce va stoca valoarea curentă a contorului și asignează-i valoarea 0 pentru început.
//     Adaugă click handler pe butoane, în interiorul cărora vei mări sau micșora valoarea contorului.
//     Actualizează interfața cu noua valoare a variabilei counterValue.

"use strict"

let counterValue = 0;
const button = document.querySelector(".my-button");


const handleClick = () => {
  console.log("Button was clicked");
};

button.addEventListener("click", handleClick);