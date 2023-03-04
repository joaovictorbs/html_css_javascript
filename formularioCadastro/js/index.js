const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const inputsElements = [firstName, lastName, password];

inputsElements.forEach(function (input){
    validateEmptyFields(input);
});

email.addEventListener('blur', function() {
    isEmailValid(email);
});


