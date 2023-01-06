//arrow function
/*
const sayMyName = () => {
    console.log('Anne')
}

sayMyName()

//call back function
*/
function sayMyName(name) {
    console.log('Antes de executar callback')
    console.log(name)
    console.log('Depois de executar callback')

}

sayMyName('Anne')
sayMyName('Dudu')

sayMyName(()=> {
    console.log('Estou em uma call back')
})