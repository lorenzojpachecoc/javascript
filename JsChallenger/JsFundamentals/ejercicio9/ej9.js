//escribe una función que tome una cadena (a) como argumento. Extraiga la primera mitad a. Devolver el resultado

const myFunction = (a) => {
    let firstHalf= a.substring(0,4)
    return firstHalf
}

console.log(myFunction('Programa'))