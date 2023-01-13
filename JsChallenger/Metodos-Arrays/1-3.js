// 1) Programa una función que cuente el número de caracteres de un array, pe. miFuncion("Hola Mundo") devolverá 2

/*const ejercicio1=(arr)=>{
    let result= arr.length;
    return result
}

console.log(ejercicio1(['Hola', 'Mundo']))*/

// 2) Programa una función que reciba un parametro y compruebe cual de los dos es array

/*const ejercicio2= (arr)=>{
    let result= Array.isArray(arr)
    return result

}
console.log(ejercicio2('Hola'))*/

// 3) Programa una funcion que reciba como parametro una array con los nombres  de los tres mejores estudiantes. Extrae de la lista al primero de ellos para que reciba un reconocimiento especial

const ejercicio3= (arr)=>{
    let result= arr.shift()
    return result

}
console.log(ejercicio3(['Juan', 'Maria', 'Lucas']))
