function validateEmptyFields(input) {   //pensar jeito de aplicar email aqui
    input.addEventListener('blur', function() {      //quando sai do input acontece o evento de blur
        console.log(input);
        console.log(input.keys());

        if(!input.value || input.value.length < 3){
            // alert('teste')
        }
    });
}

function isEmailValid(input) {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!regex.test(input.value)) {  //valor dentro da input nao passar no teste do regex
        alert('Email Invalido');
    }
}