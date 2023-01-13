//Escribe una función que tome una cadena como argumento. Extraiga los últimos 3 caracteres de la cadena. Devolver el resultado

const myFunction= (a)=> {
    let deleteCharacters= a.slice(0,-5)
    return deleteCharacters
}

console.log(myFunction('PanDeJamon'))