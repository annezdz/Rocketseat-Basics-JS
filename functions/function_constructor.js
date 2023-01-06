/* function Person(name) {
    this.name = name
    this.walk = () => {
        return this.name  + ' está andando'
    } 
}
const mayk = new Person("Mayk")
const joao = new Person("João")
console.log(mayk.walk())
console.log(joao.walk())
*/ 

//Control Flow
let temperature = 36.5
if(temperature >= 37.5) {
    console.log('Febre')
} else if (temperature < 37.5 && temperature >= 37){
    console.log('Febre moderada')
} else {
    console.log('Saudável')
}