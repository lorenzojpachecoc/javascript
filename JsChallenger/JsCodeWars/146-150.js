
// 146) Implemente la función unique_in_order que toma como argumento una secuencia y devuelve una lista de elementos sin ningún elemento con el mismo valor uno al lado del otro y conservando el orden original de los elementos.

/*const uniqueInOrder= (iterable) => {
   return iterable.split('').filter((item, index, arr) => item != arr[index + 1])
  }

  console.log(uniqueInOrder('AAAABBBCCDAABBB'))*/

  // 147) Escriba una función que devuelva una secuencia (el índice comienza con 1) de todos los caracteres pares de una cadena. Si la cadena tiene menos de dos caracteres o más de 100 caracteres, la función debe devolver "cadena no válida".

  /*const evenChars = (str) => {
    return (str.length < 2 || str.length > 100) ? "invalid string" : str.split('').filter((item,index)=> index%2)
   }
         console.log(evenChars('abcdefghijklm'))*/

   //148) Escriba una función que elimine los espacios de la cadena y luego devuelva la cadena resultante.

   /*const noSpace = (x) => {
  return x.split(' ').join('')
}

      console.log(noSpace('8aaaaa dddd r     '))*/

// 149) Dada una matriz de números, devuelve la diferencia entre los valores mayor y menor. Por ejemplo: [23, 3, 19, 21, 16]debe volver 20(es decir, 23 - 3). [1, 434, 555, 34, 112]debe volver 554(es decir, 555 - 1). La matriz contendrá un mínimo de dos elementos. El rango de datos de entrada garantiza que max-minno se producirá un desbordamiento de enteros.

/*const betweenExtremes = (numbers) => {
      return Math.max(...numbers) - Math.min(...numbers)
  }
            console.log(betweenExtremes([21, 34, 54, 43, 26, 12]))*/

// 150) En este kata, haremos una función para probar si un período está retrasado. Nuestra función tomará tres parámetros: último: el objeto Fecha con la fecha del último período, today - El objeto Date con la fecha del cheque, CycleLength: número entero que representa la duración del ciclo en días. Devuelve verdadero si el número de días transcurridos desde el último hasta el día de hoy es mayor que la duración del ciclo. De lo contrario, devuelve falso.

const periodIsLate = (last, today, cycleLength) => {
      return (today-last)/86400000 > cycleLength
    }
      console.log(periodIsLate((2016, 6, 13)))