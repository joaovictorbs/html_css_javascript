const texto = document.getElementsByName('text');
const span = document.getElementsByTagName('span');

console.log(texto[0]);  //acessa indice de elementos
console.log(texto[0].tagName);  //descobre nome do elemento

console.log(span);
span[1].innerHTML = 'Olá Mundo!';   //altera elemento