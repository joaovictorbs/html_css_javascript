function getTasks() {
    return JSON.parse(localStorage.getItem('@GoTasks')) || [];    //recupera informacao do localStorage e formata string para objeto
}                                                                //caso nao tenha a informacao, a informacao vem vazio

function setTasks(tasks) {
    localStorage.setItem('@GoTasks', JSON.stringify(tasks));    //adiciona tarefas que receber
}