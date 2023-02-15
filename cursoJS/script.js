var num = 18;
var idade = '18';

console.log(num == idade);
console.log(num === idade);

if(idade === num) {
    console.log('É estritamente igual!');
}
else if(idade == num) {
    console.log('É igual!');
}
else {
    console.log('Não é igual!');
}
