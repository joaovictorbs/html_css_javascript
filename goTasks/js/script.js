const table = document.getElementById('table-body');
const modal = document.getElementById('modal');
const form = document.getElementById('form');
const inputDescription = document.getElementById('description');
const inputDate = document.getElementById('date');
const loadingMessage = document.getElementById('loading-message');
const countTasks = document.getElementById('count-tasks');
const btnCreateTask = document.getElementById('btn-create-task');

function loadTask() {
    const tasks = JSON.parse(localStorage.getItem('@GoTask')) || []; //recupera informacao do localStorage e formata string para objeto
    return tasks;                                                   //caso nao tenha a informacao, a informacao vem vazia
}                                                                   

function updateCountTasks() {
    const allTasks = loadTask();
    countTasks.innerHTML = allTasks.length;
}

// MODAL========
btnCreateTask.addEventListener('click', createTask);


function createTask(e) {             //recebe evento = estado atual de tudo
    e.preventDefault(e)             //evita que aconteca o funcionamento padrao, tela não recarrega

    if(!inputDescription.value || !inputDate.value) {
        alert('Preencha todos os campos');
        return
    }

    const newTask = {                                           //objeto
        description: inputDescription.value,
        date: new Date(inputDate.value).toLocaleDateString('pt-BR', { timeZone: 'UTC' }),  //formato de data da regiao do navegador e fuso horario
        id: Math.floor(Math.random() * 10000)                   //numero aleatorio entre 0 e 10000, e arredondado   
    }

    const allTasks = loadTask();                                //recupera informacoes do localStorage

    localStorage.setItem('@GoTask', JSON.stringify( [ ...allTasks, newTask ]));     //tudo que tiver no localStorage salva antes da nova tarefa

    toggleModal();
    clearFields()
}

function toggleModal() {                        //abre e fecha para informar nova tarefa
    modal.classList.toggle('modal-visible');   //funcao verifica se elemento possui classe, se nao tem adiciona, se tem remove
}

function clearFields() {                //zera os valores do formulario quando fecha
    inputDescription.value = ''; 
    inputDate.value = ''
}