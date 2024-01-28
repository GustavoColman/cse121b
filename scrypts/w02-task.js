/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullname=" Gustavo Colman";

let currentYear="2024";

let profilePicture = "images/colmanPicture.jpg";


/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');

let foodelement = document.getElementById('food');

let yearElement = document.querySelector ('#year');

let imageElement = document.querySelector ("img");









/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullname}</strong>`;

yearElement.textContent = `${currentYear}`;

imageElement.setAttribute('src',profilePicture);

foodelement.innerHTML += `<br>${favFood}`;







/* Step 5 - Array */
var favFood = ["pizza","Hamburger","coffee with milk"];


// só preciso fazer a lista de comidas e fazer a imagem aparecer agora




