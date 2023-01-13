//21) Escribe una función que tome una matriz con elementos arbitrarios y un número como argumentos. Devuelve una nueva matriz, el primer elemento debe ser el mismo número dado. o cero si el número es menor que 6. Los otros elementos deben ser los elementos de la matriz original. Trate de no mutar la matriz original

//22) Escribe una función que tome una matriz (a) y un valor (n) como argumentos. Guarde cada n-ésimo elemento en una nueva matriz. Devolver la nueva matriz

const newElement=(a,n)=>{
    let result= a.push(n)
    return result
}

console.log(newElement([2,4,6,8],10))