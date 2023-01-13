//5) Escribe una función que tome una matriz (a) y un número (n) como argumentos. Debería devolver los últimos n elementos de a.

/*const lastElements=(a,n)=>{
    let result= a.splice(n)
    return result
}

console.log(lastElements([1,2,3,4,5,6],3))*/

//6) Escriba una función que tome una matriz (a) y un valor (b) como argumento. La función debe eliminar todos los elementos iguales a 'b' de la matriz. Devuelve la matriz filtrada.

const deleteElements=(a,b)=>{
    let result= a.filter((item)=>item!=b)
    return result
}

console.log(deleteElements([10,15,12,15,14,15], 15))