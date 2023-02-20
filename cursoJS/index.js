const form = document.getElementById('form');   

form.addEventListener('submit', enviar);    //adiciona evente ao elemento

function enviar(e){         //passa parametro evento
    e.preventDefault();         //evita formulario de recarregar após envio
    const idade = document.getElementById('age')    //captura elemento input

    if (idade.value < 18) {         //pega somente o valor do input
        alert('Menor de idade!');
    }
    else {
        alert('Maior de idade!')
    }
}


const btn = document.getElementById('btn');
btn.addEventListener('click', function() {  //funcao anonima
    alert('Olá!');
});