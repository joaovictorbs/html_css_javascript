const container = document.getElementById('container'); //captura elemento
const logoJS = document.createElement('img');   //cria elemento imagem
const title = document.createElement('h1');  

logoJS.src = './js.png';    //associa imagem ao elemento criado
logoJS.width = '200';

title.innerHTML = 'Logo do JavaScript'; //Adiciona titulo ao elemento h1

container.appendChild(title);
container.appendChild(logoJS);  //adiciona o elemento logoJS dentro da div
                                //container no HTML.

//container.removeChild(title);   //remove elemento h1
