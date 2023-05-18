"use strict"

//     Va număra și printa în consolă numărul total de categorii din ul#categories, adică elementele li.item.

const categoriesNode = document.querySelector('#categories');
console.log("Number of categories: " + categoriesNode.children.length);

//     Pentru fiecare element li.item din lista ul#categories, va găsi și printa în consolă titlul elementului (tag-ul <h2>) și numărul de elemente din acea categorie (toate elementele <li>).

for (let i = 0; i < categoriesNode.children.length; i++) {
    let category = categoriesNode.children[i];
    let categoryTitleNode = category.querySelector('h2');
    console.log("Category: " + categoryTitleNode.innerHTML);
    let categoryElementsNode = category.querySelector('ul');
    console.log("Elements: " + categoryElementsNode.children.length);
}