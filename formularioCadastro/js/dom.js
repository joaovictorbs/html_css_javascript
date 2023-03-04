function addErrors(input, elements) {         //adiciona estilizacao de erro
    input.classList.add('error-active');
    elements.containerErrors.style.display = 'flex';
    elements.containerErrors.children[1].innerHTML = elements.message || '';  //acessa span dentro da classe msg-error
}

function removeErrors(input, elements) {      //remove estilizacao de erro
    input.classList.remove('error-active');
    elements.containerErrors.style.display = 'none';    //volta padrao do display none para nao aparecer na tela
}