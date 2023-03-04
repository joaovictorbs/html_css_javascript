const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const inputsElements = [firstName, lastName, password];

inputsElements.forEach((element) => addEventInElements(element));

function addEventInElements(element){
    element.addEventListener('blur', function() {      //quando sai do input acontece o evento de blur
        if(!element.value || element.value.length < 3){
            alert('AOBAAAA');
        }
    });
}