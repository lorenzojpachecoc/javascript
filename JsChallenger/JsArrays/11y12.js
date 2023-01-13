// 11) Escribe una función que tome una matriz de números como argumento. Debería devolver la suma de los números.
/*const suma=(arr)=>{
    let result= arr.reduce((a, b) => a + b)
    return result   
}

console.log(suma([10,100,100,1]))*/

//12) Escribe una función que tome una matriz de números como argumento. Debería devolver el promedio de los números.

const average=(arr)=>{
    let result= arr.reduce((a, b) => a + b)/ arr.length
    return result
}

console.log(average([10,20,30]))