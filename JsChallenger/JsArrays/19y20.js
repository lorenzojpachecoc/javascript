//19) Escribe una función que tome dos números (mínimo y máximo) como argumentos. Devuelve una matriz de números en el rango mínimo a máximo

const rango= (num1, num2)=>{
    let arr=[]
    for(let i=num1;i<=num2;i++){
        arr.push(i)
    }
return arr
}

console.log(rango(40,50))

//20) Escriba una función que tome una matriz de cadenas como argumento. Agrupe esas cadenas por su primera letra. Devuelve un objeto que contiene propiedades con claves que representan las primeras letras. Los valores deben ser matrices de cadenas que contengan solo las cadenas correspondientes. Por ejemplo, la matriz ['Alf', 'Alice', 'Ben'] debe transformarse. { a: ['Alfo', 'Alicia'], b: ['Ben']}