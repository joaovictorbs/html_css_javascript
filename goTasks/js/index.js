const table = document.getElementById('table-body');
const loadingMessage = document.getElementById('loading-message');
const countTasks = document.getElementById('count-tasks');

function fillTable() {      //preenche tabela
    const allTasks = getTasks();
    allTasks.forEach(addTask);      //para cada tarefa execute a funcao addTask

    if(allTasks.length === 0) {
        loadingMessage.innerHTML = "Você não tem nenhuma tarefa!"; 
    }
    else {
        loadingMessage.innerHTML = "";
    }

    updateCountTasks();
}

function addTask(task) {    //cria tarefa no HTML
    const tr = document.createElement('tr');
    tr.innerHTML = innerHTMLTasks(task); //recebe os <td>

    table.appendChild(tr);   //adiciona elemento filho no table-body
}

function updateCountTasks() {
    const allTasks = getTasks();
    countTasks.innerHTML = allTasks.length;
}

function innerHTMLTasks(task) {   //recebe uma tarefa e constroi estrutura de registro
    const html = `
        <td>${task.description}</td>
        <td>${task.date}</td>
        <td>
            <a href="#" onclick="removeTask(${task.id})">
                <i class="fa-regular fa-trash-can"></i>
            </a>
        </td>
    `;

    return html;
}

function removeTask(id) {
    const allTasks = getTasks();
    const tasksFiltered = allTasks.filter(task => task.id !== id); //percorre item por item do array
                                                                   //filter retorna um novo array atualizado
    setTasks(tasksFiltered);    //manda novo array com as informacoes que desejo
    reload();
}

function reload() {
    table.innerHTML = '';
    fillTable();
}
