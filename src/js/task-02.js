//     Va crea un element <li> separat. Asigură-te că folosești metoda document.createElement().
//     Adaugă numele ingredientului ca conținut text.
//     Adaugă clasa item la element.
//     Apoi va insera toate elementele <li> dintr-o singură operație în lista ul#ingredients.
"use strict"

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsNode = document.querySelector('#ingredients');

for(let i = 0; i < ingredients.length; i++)
{
    const li = document.createElement('li');
    li.innerHTML = ingredients[i];
    ingredientsNode.appendChild(li);
}

console.log(ingredients);
