const logo = document.getElementById('logo');
const attribute = logo.getAttribute('alt') //captura o atributo alt

console.log(attribute)  //mostra o texto dentro do atributo alt

logo.setAttribute('width', '200');  //cria atributo com valor
logo.removeAttribute('width');  //remove atributo