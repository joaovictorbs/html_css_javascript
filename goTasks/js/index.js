const table = document.getElementById('table-body');
const loadingMessage = document.getElementById('loading-message');
const countTasks = document.getElementById('count-tasks');

function fillTable() {      //preenche tabela
    const allTasks = getTasks();
    allTasks.forEach(addTask);      //para cada tarefa

    if(allTasks.length === 0) {
        loadingMessage.innerHTML = "Você não tem nenhuma tarefa!"; 
    }
    else {
        loadingMessage.innerHTML = "";
    }

    updateCountTasks(); //atualiza contador
}

function addTask(task) {    //cria tarefa no HTML
    const tr = document.createElement('tr');
    tr.innerHTML = innerHTMLTasks(task); //recebe os <td>

    table.appendChild(tr);   //adiciona elemento filho no table-body
}

function innerHTMLTasks(task) {   //recebe uma tarefa e constroi estrutura de registro
    const html = `
        <td>${task.description}</td>
        <td>${task.date}</td>
        <td>
            <a href="#" onclick="">
                <i class="fa-regular fa-trash-can"></i>
            </a>
        </td>
    `;

    return html;
}
