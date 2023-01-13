//Escribe una función que tome una cadena (a) como argumento. Elimina los 3 primeros caracteres de a. Devolver el resultado

const myFunction= (a)=> {
    let deleteCharacters= a.slice(3)
    return deleteCharacters
}

console.log(myFuntion('PanDeJamon'))
