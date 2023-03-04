const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const password = document.getElementById('password');
const email = document.getElementById('email');

const inputsElements = [firstName, lastName, password, email];

function initApp(){    
    inputsElements.forEach(function (input){
        validateEmptyFields(input);
    });
}


initApp();   