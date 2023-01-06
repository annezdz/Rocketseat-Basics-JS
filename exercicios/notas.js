
/*

function getScore(nota) {
    if(nota >= 90) {
        nota = "A"
    } else if (nota >= 80) {
        nota = "B"
    } else if (nota >= 70) {
        nota = "C"
    } else if(nota >= 60) {
        nota = "D"
    } else {
        nota = "F"
    }
    return nota
}

console.log(getScore(75))
console.log(getScore(10))
console.log(getScore(35))
console.log(getScore(101))
console.log(getScore(71))
*/

/*
let custos = {
     receitas: [
        25.5,
        35.0,
        5],
    despesas: [
        20.5,
        8.8, 
        85]
}

let custos1 = {
    receitas: [
       25,
       35.0,
       5],
   despesas: [
       20.5,
       8.8]
}

function sum(array) {
    let total = 0
    for(let value of array) {
        total += value
    }
    return total
}

function getResult(array) {
    const totalReceitas = sum(array.receitas)
    const totalDespesas = sum(array.despesas)
    const total = totalReceitas - totalDespesas
    return total > 0 ? `Saldo positivo =  ${total}` : `Saldo negativo - ${total}`
}


console.log(getResult(custos1))

*/

/*
function tranformTemperature(temperature) {
    let convert = 0
    let typeTemp
    if(temperature.toUpperCase().includes('F')) {
        convert = (Number(temperature.replace("F","").replace("º","")) - 32) * 5/9
        typeTemp = 'Cº'
    } else if(temperature.toUpperCase().includes('C')) {
        convert = (Number(temperature.replace("C","").replace("º","")) * 9/5) + 32
        typeTemp = 'Fº'
    } else {
        throw new Error('Grau não identificado')
    }
    return `A temperatura ${temperature} em ${typeTemp} é ${convert}`
}

try {
    console.log(tranformTemperature("24Cº"))
    console.log(tranformTemperature("45.5Fº"))
} catch(error) {
    console.log(error.message)
}




function transformDegree(degree) {
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')
    if(!celsiusExists && !fahrenheitExists) {
        throw new Error('Grau não identificado')
    } 
    let updatedDegree = Number(degree.toUpperCase().replace("F",""));
    let formula = fahrenheit => (fahrenheit - 32) * 5/9
    let degreeSign = 'C'
    if(celsiusExists) {
         updatedDegree = Number(degree.toUpperCase().replace("C",""));
         formula = celsius => (celsius * 9/5) + 32
         degreeSign = 'F'
    }
    return formula(updatedDegree) + degreeSign
}

try {
    console.log(transformDegree('50F'))
    console.log(transformDegree('50C'))

} catch(error) {
   console.log(error.message)
}
*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L Letchter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    }
]


const numberCategories = booksByCategory.length
console.log(numberCategories)
for (category of booksByCategory) {
    console.log('Total de livros da categoria:', category.category)
    console.log( totalBooks = category.books.length)
}

let authors = []
let booksCury = []
for (category of booksByCategory) {
    for (book of category.books) {
        if(authors.indexOf(book.author) == -1) {
            authors.push(book.title)
        } //se retornar -1 nao achou o autor
        if(book.author.includes("Augusto Cury")) {
            booksCury.push(book.title)
        }
    }
}
console.log("Total de autores = ", authors.length)
console.log(booksCury)