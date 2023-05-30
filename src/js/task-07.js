// Scrie un script care răspunde la modificarea valorii din input#font-size-control (evenimentul input) și modifică stilurile inline al span#text prin
// actualizarea proprietății font-size. Ca rezultat, atunci când glisați scrollbar-ul, dimensiunea textului se va schimba.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

"use strict";

const fontSizeControlInput = document.querySelector("#font-size-control");
const textOutput = document.querySelector("#text");

fontSizeControlInput.addEventListener("input", function () {
  const rangeValue = fontSizeControlInput.value;
  textOutput.style.fontSize = rangeValue + "px";
});
