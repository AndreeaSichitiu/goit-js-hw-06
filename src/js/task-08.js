//     Gestionarea trimiterii formularului form.login-form trebuie să fie în cadrul evenimentului submit.
//     La trimiterea formularului, pagina nu trebuie să se reîncarce.
//     Dacă formularul are câmpuri goale, afișează un alert care avertizează că toate câmpurile trebuie completate.
//     Dacă utilizatorul a completat toate câmpurile și a trimis formularul, colectează valorile câmpului într-un obiect în care numele câmpului va fi
//  numele proprietății, iar valoarea câmpului va fi valoarea proprietății. Pentru a accesa elementele formularului, folosește proprietatea elements.
//     Afișează obiectul cu datele introduse în consolă și șterge valorile câmpurilor din formular folosind metoda reset.

"use strict";

const form = document.querySelector(".login-form");

function sendSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Toate radurile trebuie completate!");
  }

  console.log(`Email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}

form.addEventListener("submit", sendSubmit);
