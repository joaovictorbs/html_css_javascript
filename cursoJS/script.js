// var, let e const
//escopo global, escopo global

let animal = 'cachorro';
const animalconst = 'teste1'

if(true){
    let animal = 'gato'
    const animalconst = 'teste2'
    console.log(animal)
    console.log(animalconst)

}
animalconst = 'teste3'

console.log(animal)
console.log(animalconst)
