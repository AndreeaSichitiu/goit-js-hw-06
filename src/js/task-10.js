// Scrie un script pentru crearea și ștergerea unei colecții de elemente. Utilizatorul introduce numărul de elemente în input și dă click pe butonul Create,
//  după care colecția este afișată în pagină. Când se face click pe butonul Destroy, colecția de elemente va fi ștearsă.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Crează o funcție createBoxes(amount) care ia ca parametru un număr. Funcția va crea atâtea <div>-uri câte sunt specificate în amount și le va adăuga la div#boxes.

//     Dimensiunile primului <div> vor fi 30px pe 30px.
//     Fiecare element, cu excepția primului, ar trebui să fie cu 10px mai lat și mai înalt decât cel anterior.
//     Toate elementele trebuie să aibă o culoare de fundal aleatoare în format HEX. Folosește funcția getRandomHexColor deja existentă pentru a obține o culoare.

// Scrie o funcție destroyBoxes() care va șterge conținutul div#boxes, ștergând astfel toate elementele create.

"use strict";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const inputNumber = document.querySelector("#controls [type = 'number']")
const boxes = document.querySelector("#boxes");

function createBoxes(amount) {
  destroyBoxes();
  const initialSize = 30;
  for (let i = 0; i < amount; i++) {
    const actualSize = initialSize + i * 10;

    const createdBox = document.createElement("div");
    
    createdBox.style.width = actualSize + "px";
    createdBox.style.height = actualSize + "px";
    createdBox.style.backgroundColor = getRandomHexColor();
    
    boxes.appendChild(createdBox);
  }
}

createButton.addEventListener("click", function() {
  createBoxes(inputNumber.value)
} );

function destroyBoxes() {
  boxes.innerHTML = "";
}

destroyButton.addEventListener("click", destroyBoxes);


