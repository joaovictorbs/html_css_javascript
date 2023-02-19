const main = document.getElementById('container');
const div = document.getElementById('lista-container');
const ul = document.getElementById('lista');

console.log(main.childNodes);   //pega filhos diretos do nó main
console.log(div.childNodes);
console.log(ul.childNodes);
console.log(ul.childNodes[1]);  //pega elemento de indice 1 no elemento ul

ul.childNodes[1].innerHTML = 'Item 0';  //altera elemento de indice 1

console.log(document.documentElement.firstChild); //pega primeiro nó do documento HTML

console.log(ul.parentNode)  // pega elemento pai de um nó
console.log(ul.parentNode.parentNode)  // pega elemento pai de um nó pai