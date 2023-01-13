//Escribe una función que tome una cadena (a) como argumento. Elimina los últimos 3 caracteres de a. Devolver el resultado

const myFunction = (a) => {
    let deleteA = a.slice(0,-3)
    return deleteA
}
 console.log(myFunction('Programa'));