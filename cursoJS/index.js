function enviar(){
    const idade = document.getElementById('age')    //captura elemento input

    if (idade.value < 18) {         //pega somente o valor do input
        alert('Menor de idade!');
    }
    else {
        alert('Maior de idade!')
    }
}