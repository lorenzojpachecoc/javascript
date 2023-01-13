//15) Escribe una función que tome argumentos en un número arbitrario de arreglos. Debería devolver una matriz que contenga los valores de todas las matrices.

const todosLosValores=(arr,arr2)=>{
    let result= arr.concat(arr2)
    return result
}
    console.log(todosLosValores([1, 2, 3], [4, 5, 6]))


    //16) Escribe una función que tome una matriz de objetos como argumento. Ordene la matriz por la propiedad b en orden ascendente. Devuelve la matriz ordenada
            //POR REALIZAR
    /*const obj=(arr)=>{
        let result= arr.sort(((a,b)=>a-b))
        return result
    }

        console.log(obj([{a:2,b:10},{a:5,b:4}]))*/