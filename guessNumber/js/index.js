const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

const statusTitle = document.getElementById('status');
const attempt = document.getElementById('attempt');
const inputValue = document.getElementById('kick');
const result = document.getElementById('result');
const btnRestart = document.getElementById('btn-restart');

const GuessNumber = {   //objeto
    max: 10,
    attemptsNumber: 0,      //propriedade
    numberDraw: function() {
        return Math.round(Math.random() * this.max);
    },
    showButtonRestart: function() {     //metodo
        btnRestart.style.display = 'flex';
    },
    clearInput: function() {
        inputValue.value = '';
    },
    updateAttempt: function(attempt, value){
        attempt.innerHTML = 'Tentativa: ' + value;
    },
    correctAnswear: function() {
        this.showButtonRestart();  //metodo dentro da funcao usa this.
        statusTitle.innerHTML = 'Parabéns, você acertou!! 😁';
        statusTitle.classList.remove('incorrect-answear'); //caso acerte tira a classe incorreta
        statusTitle.classList.add('status-correct');

        result.classList.remove('result-box-default');
        result.classList.add('result-correct-answear');

        this.clearInput();
    },
    incorrectAnswear: function(message) {
       statusTitle.innerHTML = message;
       statusTitle.classList.add('incorrect-answear');

       this.clearInput();
    },
};

const numberDraw = GuessNumber.numberDraw();     //biblioteca de funcoes matematicas
                                                    //numero aleatorio de 0 a 1, portanto multiplicamos por 10

function handleSubmit(e) {   //recebe evento
    e.preventDefault(); //evita que js recarrega a pagina
    
    const kick = inputValue.value;  //valor que o usuario digitou

    if (!kick) {
        alert('Informe algum valor!');
        return;
    }

    GuessNumber.updateAttempt(attempt, ++GuessNumber.attemptsNumber)

    if(numberDraw == kick) {   
        GuessNumber.correctAnswear();
    }
    else if (numberDraw < kick) {
        GuessNumber.incorrectAnswear('Hunm.. talvez um pouco mais baixo');
    }
    else {
        GuessNumber.incorrectAnswear('Hunm.. talvez um pouco mais alto');
    }
}        

function restartGame() { //recarrega pagina
    document.location.reload(true);        
}