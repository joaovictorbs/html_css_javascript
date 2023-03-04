function validateEmptyFields(input, elements) {
    input.addEventListener('blur', function() {      //quando sai do input acontece o evento de blur

        if(input.type != 'email' && (!input.value || input.value.length < 3)){
            addErrors(input, elements);
        }
        else if (input.type === 'email') {
            isEmailValid(input, elements);
        }
        else {
            removeErrors(input, elements);
        }
        
    });
}

function isEmailValid(input, elements) {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!regex.test(input.value)) {  //valor dentro da input nao passar no teste do regex
        addErrors(input, elements);
    }
    else{
        removeErrors(input, elements);
    }
}