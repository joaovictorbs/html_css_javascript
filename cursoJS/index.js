const texto = document.getElementById('text');

texto.classList.add('blue');    // adiciona a classe blue ao elemento
texto.classList.remove('texto'); //remove classe do elemento
texto.classList.remove('blue'); //remove classe do elemento
texto.classList.add('red'); //remove classe do elemento

if (texto.classList.contains('red')) {  //verifica se elemento contém classe
    alert('Elemento contém classe Red');
}