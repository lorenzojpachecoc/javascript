//9) Escriba una función que tome una matriz de cadenas como argumento. Ordene los elementos de la matriz alfabéticamente. Devuelve el resultado.

/*const alphabetical=(arr)=>{
    let result= arr.sort()
    return result
}

console.log(alphabetical(['z', 'c', 'd', 'a', 'y', 'a', 'w']))*/

//10) Escribe una función que tome una matriz de números como argumento. Debería devolver una matriz con los números ordenados en orden descendente.

const order=(arr)=>{
    let result= arr.sort((a,b)=>b-a)
    return result
}

console.log(order([1,2,3,4]))
