
const nome = prompt('Digite o seu nome: ');
alert('Olá ' + nome);

const status = confirm('Deseja deletar sua conta?');

console.log(status);
if (!status) {
    alert('Obrigado por continuar conosco ' + nome);
}
else {
    alert('Adeus ' + nome);
}