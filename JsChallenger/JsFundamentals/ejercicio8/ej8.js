//Escribe una función que tome una cadena como argumento. La cadena contiene la subcadena 'es'. Devuelve el índice de 'es'.

const myFuntion = (hola) =>{
    let characters= hola.indexOf('es')
    return characters
}

console.log(myFuntion('Navidades'))