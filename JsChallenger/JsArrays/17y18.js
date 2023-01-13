//17) Escribe una función que tome dos matrices como argumentos. Combine ambas matrices y elimine los valores duplicados. Ordene el resultado de la fusión en orden ascendente. Devolver la matriz resultante

/*const combine=(a,b)=>{
    let result= a.concat(b) 
    let result2= result.filter((item, index) => (result.indexOf(item) === index))
    return result2 
    }

console.log(combine([1, 2, 3], [3, 4, 5]))*/




//18) Escribe una función que tome una matriz (a) y un número (b) como argumentos. Suma todos los elementos de la matriz con un valor mayor que b. devolver la suma
       
const ejercicioDiesiocho=(a,b)=>{
    let result= a.filter((item)=>item>b).reduce((prev,act)=>prev+act,0) 
return result

}

console.log(ejercicioDiesiocho([1,5,6,4], 4))

//