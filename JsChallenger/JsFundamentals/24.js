//Escribe una función que tome dos números (a y b) como argumento. Suma a y b. Devolver el resultado

/*const num=(a,b)=>{
    let result= a+b
    return result
}
 console.log(num(5,2))*/

 let ejercicioDeJosue= (min,max)=>{
    let arr=[]
    for (let i=min;i<=max;i++){
        arr.push(i)
    }
    return arr
 }

 console.log(ejercicioDeJosue(1,10))
