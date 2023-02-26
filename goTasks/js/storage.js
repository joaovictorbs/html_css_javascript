function getTasks() {
    return JSON.parse(localStorage.getItem('@GoTasks'));    //recupera informacao do localStorage e formata string para objeto
}

function setTasks(tasks) {
    localStorage.setItem('@GoTasks', JSON.stringify(tasks));    //adiciona tarefas que receber
}