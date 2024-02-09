/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
let arrayelement = document.getElementById('array');
/* Function Definition - Add Numbers */

//this function add numbers of the argument ( ) and return the value of the sum
function Add (number1, number2){

    return number1 + number2;
}

function addNumbers (){
    let addnumber1 = Number(document.querySelector('#add1').value);
    let addnumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = Add (addnumber1,addnumber2);
}

document.querySelector('#addNumbers').addEventListener('click',addNumbers);






/* Function Expression - Subtract Numbers */
//subtraction

function subtract (number1, number2){

    return number1 - number2;
}

function  subtractNumbers (){
    let subtract1 = Number(document.querySelector('#subtract1').value);
    let subtract2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value =subtract (subtract1,subtract2);
}
document.querySelector('#subtractNumbers').addEventListener('click',subtractNumbers);




/* Arrow Function - Multiply Numbers */
const multiply = () => {
    //in a arrow function we remove the key word function and add =>
    let multiply1 = Number(document.querySelector('#factor1').value);
    let multiply2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply1 * multiply2;
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiply);




/* Open Function Use - Divide Numbers */
const divide = () => {
    
    let divide1 = Number(document.querySelector('#dividend').value);
    let divide2 = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide1 / divide2;
}

document.querySelector('#divideNumbers').addEventListener('click', divide);


/* Decision Structure */


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
//add array to the html 
arrayelement.innerHTML = `${numbersArray}`;


/* Output Odds Only Array */

/* Output Evens Only Array */

/* Output Sum of Org. Array */
numbersArray.map

/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */
