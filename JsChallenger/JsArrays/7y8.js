
//7)Escriba una función que tome una matriz (a) como argumento. Devuelve el número de elementos en a.

/*const numbers=(a)=>{
    let result= a.length
    return result
}

console.log(numbers(['ana','jose','juan']))*/

//8) Escribe una función que tome una matriz de números como argumento. Devuelve el número de valores negativos en la matriz.

const negative=(a)=>{
    let result= a.filter((item)=>item<0) .length
    return result
}
 console.log(negative([1,-2,-2,4,-3]))