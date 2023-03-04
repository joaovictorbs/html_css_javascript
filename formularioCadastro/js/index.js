const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const password = document.getElementById('password');
const email = document.getElementById('email');

const inputsElements = [firstName, lastName, password, email];  

function initApp(){    
    inputsElements.forEach(function (input, msgError){
        msgError = 'Enter a valid value for';
        
        createObject(input);
        validateEmptyFields(input, createObject(input, `${msgError} ${input.placeholder}`));
    });
}

function createObject(input, message) {
    console.log(input.placeholder);  
    return {
        containerErrors: input.parentNode.children[1],  //pega a div pai inteira e um array de divs filhos | pegamos somente o segundo indice do array, o infos-error
        message: message
    }
}


initApp();   