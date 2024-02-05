/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
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
    document.querySelector('product').value = multiply(multiply1, multiply2);
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiply);




/* Open Function Use - Divide Numbers */


/* Decision Structure */


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

/* Output Odds Only Array */

/* Output Evens Only Array */

/* Output Sum of Org. Array */

/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */
