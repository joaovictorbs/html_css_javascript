const table = document.getElementById('table-body');
const loadingMessage = document.getElementById('loading-message');
const countTasks = document.getElementById('count-tasks');

function loadTask() {
    const tasks = getTasks() || []; //recupera tarefas
    return tasks;                  //caso nao tenha a informacao, a informacao vem vazia
}                                                                   

function updateCountTasks() {
    const allTasks = loadTask();
    countTasks.innerHTML = allTasks.length;
}

