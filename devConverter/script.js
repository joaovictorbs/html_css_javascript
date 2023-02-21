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

    converter();
}

function converter() {
    if(selectedCurrency.value === 'eur'){
        valueConverted = inputValue.value / 5.52;
        result.innerHTML = valueFormatter('pt-br', 'EUR');  //funcao de formatar
    }
    else {
        valueConverted = inputValue.value / 5.17;
        result.innerHTML = valueFormatter('en-US', 'USD');
    }

    inputValue.value = '';          //zera as informacoes para mais testes
    selectedCurrency.value = '';
}

//formata os valores
function valueFormatter(locale, currency) {    //locale e o tipo de moeda do pais
                                               // currency a moeda que iremos fazer uso
    const value = valueConverted.toLocaleString(`${locale}`, { style: 'currency', currency: `${currency}` }); //locale e opcoes, como o estilo moeda e tipo de formatacao
    return `<span>🤑</span> ${value} <span>🤑</span>`;           //template string ``
}