//7) Soy nuevo en la codificación y ahora quiero obtener la suma de dos matrices... En realidad, 
//la suma de todos sus elementos. Agradeceré tu ayuda.

//PS Cada matriz incluye solo números enteros. La salida también es un número.

const sumaDeMatrices= (arr,arr2)=>{
    let result= arr.concat(arr2).reduce((a,b)=>a+b)
    return result
}

console.log(sumaDeMatrices([10,20,30],[5,10,15]))

//8)Escribe una función que tome dos números (mínimo y máximo) como argumentos. Devuelve una matriz de números en el rango mínimo a máximo

const rango= (num1, num2)=>{
    let arr=[]
    for(let i=num1;i<=num2;i++){
        arr.push(i)
    }
return arr
}

console.log(rango(50,60))

//9) Escribe una función que tome un número (a) como argumento. Divide a en sus dígitos individuales y devuélvelos en una matriz. Consejo: es posible que desee cambiar el tipo de número para la división

const myFunction = (nuevo) =>{
    let numbers= Array.from (nuevo);
    return numbers;
}

console.log(myFunction('2023'))
