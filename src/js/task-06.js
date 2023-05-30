// Scrie un script care, atunci când focalizarea este pierdută de pe un input (evenimentul blur), verifică dacă numărul de caractere introduse este corect.
//     Numărul de caractere admis trebuie specificat în atributul data-length.
//     Dacă este introdus numărul corect de caractere, atunci border-ul devine verde, în caz contrar - roșu.

"use strict"

const validationTextInput = document.querySelector("#validation-input");
 
const validationCallback = () => { 
    if (validationTextInput.value.length === parseInt(validationTextInput.getAttribute("data-length"))) {
        validationTextInput.setAttribute("class", "valid");
    } else {
        validationTextInput.setAttribute("class", "invalid");
    }
}

validationTextInput.addEventListener("blur", validationCallback);

