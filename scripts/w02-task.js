/* W02-Task - Profile Home Page */

/* Step 2 - Variables */
let fullname = "Gustavo Colman";
let currentYear = "2024";
let profilePicture = "images/colmanPicture.png";
let altelement = "gustavo colman";
//declaring array
var favFood = ["pizza", "Hamburger", "coffee with milk"];

// Add iten to array
favFood.push("cookies");

// Remove iten form array
favFood.splice(0, 1); // Removing the first item (pizza)

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
let foodelement = document.getElementById('food');
let yearElement = document.querySelector('#year');
let imageElement = document.querySelector("img");
let source = document.querySelector("img");

/* Step 4 - Adding Content */
document.addEventListener('DOMContentLoaded', function () {
  // a friend said me to load the dom with this function, i don't know
  //if i skipp this part on the class but looks like it worked
  nameElement.innerHTML = `<strong>${fullname}</strong>`;
  yearElement.textContent = `${currentYear}`;
  imageElement.setAttribute('src', profilePicture);
  source.setAttribute ('alt',altelement);

  // food list
  favFood.forEach(food => {
    foodelement.innerHTML += `<br>${food}`;
  });
});
