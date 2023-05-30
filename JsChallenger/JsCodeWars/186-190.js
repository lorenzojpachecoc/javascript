
// 186) // Su trabajo aquí es escribir una función que tome una matriz ordenada aryy un valor val, y devuelve el índice más bajo donde podría insertar valpara mantener la ordenación de la matriz La matriz de entrada siempre se ordenará en orden ascendente. Puede contener duplicados.
// No modifique la entrada.
// keepOrder([1, 2, 3, 4, 7], 5) //=> 4
//                       ^(index 4)
// keepOrder([1, 2, 3, 4, 7], 0) //=> 0
//           ^(index 0)
// keepOrder([1, 1, 2, 2, 2], 2) //=> 2
//                 ^(index 2)

const keepOrder = (arr, val) => {
  let num= [val]
  let add= arr.concat(num).sort((a,b)=>a-b)
    return add.indexOf(val)
}
 console.log(keepOrder([1, 2, 3, 4, 7], 5))


 // 187) Complete la solución para que divida la cadena en pares de dos caracteres. Si la cadena contiene un número impar de caracteres, debe reemplazar el segundo carácter faltante del par final con un guión bajo ('_'). Ejemplos: * 'abc' =>  ['ab', 'c_'] * 'abcdef' => ['ab', 'cd', 'ef']

 /*const solution = (str) => {
    return `${str}_` .match(/.{2}/g) || []
}

    console.log(solution('abcdefg'))*/

// 188) Los factoriales se usan a menudo en probabilidad y se usan como un problema introductorio para construir bucles. En este kata, sumarás múltiples factoriales.

/*const sumFactorial= (arr) => { 
    let fact= arr.map((item)=> {
        let result = item;
        if (item === 0 || item === 1) 
          return 1; 
        while (item > 1) { 
          item--;
          result *= item;
        }
        return result;
    })
   return fact.reduce((prev,cur)=> prev+cur)
  }   
console.log(sumFactorial([4,6]))*/

// 189) Dada una matriz de enteros, elimine el valor más pequeño. No cambie la matriz/lista original. Si hay varios elementos con el mismo valor, elimine el que tenga un índice más bajo. Si obtiene una matriz/lista vacía, devuelva una matriz/lista vacía. No cambies el orden de los elementos que quedan.

/*const removeSmallest = (numbers) => {
    let min= Math.min(...numbers);
    return numbers.filter((item, index, arr) => index !== arr.indexOf(min))
}
    console.log(removeSmallest([2, 2, 1, 2, 1]))*/

    // 190) Cada número debe formatearse de forma que se redondee a dos decimales. No necesita verificar si la entrada es un número válido porque solo se usan números válidos en las pruebas.

    /*const twoDecimalPlaces = (n) => {
        return Number(n.toFixed(2))
      }
        console.log(twoDecimalPlaces(4.659725356))*/