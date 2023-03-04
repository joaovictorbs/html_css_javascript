function validateEmptyFields(input) {
    input.addEventListener('blur', function() {      //quando sai do input acontece o evento de blur

        if(input.type != 'email' && (!input.value || input.value.length < 3)){
            addErrors(input);
        }
        else if (input.type === 'email') {
            isEmailValid(input);
        }
        else {
            removeErrors(input);
        }
        
    });
}

function isEmailValid(input) {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!regex.test(input.value)) {  //valor dentro da input nao passar no teste do regex
        addErrors(input)
    }
    else{
        removeErrors(input);
    }
}