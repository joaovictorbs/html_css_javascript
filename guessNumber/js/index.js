const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

const statusTitle = document.getElementById('status');
const attempt = document.getElementById('attempt');
const inputValue = document.getElementById('kick');
const result = document.getElementById('result');
const btnRestart = document.getElementById('btn-restart');

const numberDraw = Math.round(Math.random() * 10);     //biblioteca de funcoes matematicas
                                                    //numero aleatorio de 0 a 1, portanto multiplicamos por 10


function handleSubmit(e) {   //recebe evento
    e.preventDefault(); //evita que js recarrega a pagina
    
    const kick = inputValue.value;  //valor que o usuario digitou

    if (!kick) {
        alert('Informe algum valor!');
        return;
    }

    console.log(numberDraw);
    if(numberDraw == kick) {        //se acertar
        alert('ACERTOU!');
    }
    else if (numberDraw < kick) {
        alert('Hunm.. talvez um pouco mais baixo');
    }
    else {
        alert('Hunm.. talvez um pouco mais alto');
    }
}        