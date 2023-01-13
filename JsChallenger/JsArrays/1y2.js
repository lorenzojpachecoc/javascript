//1) 1Escribe una función que tome una matriz (a) y un valor (n) como argumento. Devuelve el elemento n de 'a'

/*const arr= (a, n) =>{
    let result= a[n-1]
    return result
}

console.log(arr([10,9,8,7,6,3], 6 ))*/


//2) Escriba una función que tome una matriz (a) como argumento. Elimina los 3 primeros elementos de 'a'. Devolver el resultado

const deleteElement=(a)=>{
    let result= a.splice(3)
    return result
}

console.log(deleteElement([1,2,3,4,5]))




