// function expression 
// function anonymous
//parametros
let total = 0
const sum = function(number1, number2) {
    let total = number1 + number2
    return total
}

sum(2,3)
sum(4, 5)

let number1 = 34
let number2 = 25
sum(number1, number2)

console.log(`o numero 1 é ${number1}`)
console.log(`o numero 1 é ${number2}`)
console.log(`a soma é ${sum(number1, number2)}`)
console.log(total) // 0

//Função é um liquidificador

function fazerSuco(fruta1, fruta2) {
    return fruta1 + fruta2
}

const copo = fazerSuco('banana','maçã')
console.log(copo)

//function scope


let subject


function createThink() {
    subject = 'study'
    return subject
}

console.log(subject)
console.log(createThink())
console.log(subject)