//Escribe una función que tome una cadena (a) como argumento. Obtenga los primeros 3 caracteres de a. Devolver el resultado

const myFunction= (a)=> {
    let deleteCharacters= a.substring(0,3)
    return deleteCharacters
}

console.log(myFunction('Navidad'))