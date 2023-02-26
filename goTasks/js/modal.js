const modal = document.getElementById('modal');
const inputDescription = document.getElementById('description');
const inputDate = document.getElementById('date');
const btnCreateTask = document.getElementById('btn-create-task');


// MODAL========
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

    const allTasks = getTasks();                                //recupera informacoes do localStorage

    localStorage.setItem('@GoTasks', JSON.stringify( [ ...allTasks, newTask ]));     //tudo que tiver no localStorage salva antes da nova tarefa

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

btnCreateTask.addEventListener('click', createTask);
