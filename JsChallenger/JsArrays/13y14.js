//13) Escriba una función que tome una matriz de cadenas como argumento. Devuelve la cadena más larga

const longChain=(arr)=>{
    let result= arr.map((item)=>item.length) 
    let maximo= result.sort((a,b)=>b-a)[0]
    return arr.find((item)=>item.length==maximo)
}

console.log(longChain(['I', 'need', 'candy']))

//14)Escribe una función que tome una matriz como argumento. Debería devolver verdadero si todos los elementos de la matriz son iguales. De lo contrario, debería devolver falso.
      
const equal=(arr)=>{
    let element= arr[0]
    let result= arr.every((item)=>item===element)
    return result
}

console.log(equal(['10',10,10,10]))