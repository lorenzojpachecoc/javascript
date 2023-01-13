//3) Escriba una función que tome una matriz (a) como argumento. Extraiga los últimos 3 elementos de 'a'. Devolver la matriz resultante


/*const deleteElement=(a)=>{
    let result=a.slice(-3)
    return result
}

console.log(deleteElement([9,8,7,6,5]))*/

//4) Escriba una función que tome una matriz (a) como argumento. Extraiga los primeros 3 elementos de a. Devolver la matriz resultante

const deleteElement=(a)=>{
    let result=a.slice(0,3)
    return result
}

console.log(deleteElement([9,8,7,6,5]))

