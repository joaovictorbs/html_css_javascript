const inputDescription = document.getElementById('description');
const inputDate = document.getElementById('date');
const btnCreateTask = document.getElementById('btn-create-task');
const modal = document.getElementById('modal');
const alertElement = document.getElementById('alert');


// MODAL========
function createTask(e) {             //recebe evento = estado atual de tudo
    e.preventDefault(e)             //evita que aconteca o funcionamento padrao, tela não recarrega

    if(!inputDescription.value || !inputDate.value) {
        alertElement.style.display = 'block';
        closeAlert();
        return
    }

    const newTask = {                                           //objeto
        description: inputDescription.value,
        date: new Date(inputDate.value).toLocaleDateString('pt-BR', { timeZone: 'UTC' }),  //formato de data da regiao do navegador e fuso horario
        id: Math.floor(Math.random() * 10000)                   //numero aleatorio entre 0 e 10000, e arredondado   
    }

    const allTasks = getTasks();                                //recupera informacoes do localStorage

    setTasks([...allTasks, newTask]);

    reload();
    updateCountTasks();
    toggleModal();
    clearFields();
}

function toggleModal() {                        //abre e fecha para informar nova tarefa
    modal.classList.toggle('modal-visible');   //funcao verifica se elemento possui classe, se nao tem adiciona, se tem remove
}

function clearFields() {                //zera os valores do formulario quando fecha
    inputDescription.value = ''; 
    inputDate.value = ''
}

function closeAlert() {
    setTimeout(() => {  //realiza porcao de codigo depois de certo tempo
        alertElement.style.display = 'none';
    }, 3000)         //o tempo e em milisegundos
}


btnCreateTask.addEventListener('click', createTask);
