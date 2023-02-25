const table = document.getElementById('table-body');
const modal = document.getElementById('modal');
const form = document.getElementById('form');
const inputDescription = document.getElementById('description');
const inputDate = document.getElementById('date');
const loadingMessage = document.getElementById('loading-message');
const countTasks = document.getElementById('count-tasks');
const btnCreateTask = document.getElementById('btn-create-task');

// FUNCOES MODAL========
function openModal(){       //abre tela para informar nova tarefa
    modal.style.display = 'flex';   
}

function closeModal(){       //fecha tela para informar nova tarefa
    modal.style.display = 'none';   
    clearFields();
}

function clearFields() {    //zera os valores do formulario quando fecha
    inputDescription.value = ''; 
    inputDate.value = ''
}