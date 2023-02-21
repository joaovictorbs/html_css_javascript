const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

const inputValue = document.getElementById('value-real');
const selectedCurrency = document.getElementById('currency');
const result = document.getElementById('result');
let valueConverted = 0;

function handleSubmit(e) {          //funcao recebe um evento (e)
    e.preventDefault();    //nao recarrega a pagina quando clica no botao

    if(!inputValue.value || inputValue.value < 0){  //campo vazio ou menor que zero
        alert('Informe um valor correto!');
        return;
    }
    else if(!selectedCurrency.value) { //nao selecionar moeda   
        alert('Escolha uma moeda!');
        return;
    }   
}