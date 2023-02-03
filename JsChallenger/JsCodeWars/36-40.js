
// 36) Función de depuracióngetSumOfDigits que toma enteros positivos para calcular la suma de sus dígitos. Suponga que el argumento es un número entero. Ejemplo 123  => 6 223  => 7 1337 => 14

/*const getSumOfDigits=(integer)=> {
    let result= String(integer).split('')
    return result.map((a,b)=>a*1).reduce((a,b)=>a+b)
  }

  console.log(getSumOfDigits(123))*/
//37) Cree una función que devuelva la suma de los dos números positivos más bajos dada una matriz de mínimo 4 enteros positivos. No se pasarán números flotantes ni enteros no positivos.Por ejemplo, cuando se pasa una matriz como [19, 5, 42, 2, 77], la salida debería ser 7.      [10, 343445353, 3453445, 3453545353453]3453455debería volver

/*const sumTwoSmallestNumbers=(numbers)=> {  
    return numbers.sort((a,b)=>b-a).slice(-2).reduce((a,b)=>a+b)
  }

  console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]))*/

  // 38) Te van a dar una palabra. Su trabajo es devolver el carácter medio de la palabra. Si la longitud de la palabra es impar, devuelve el carácter del medio. Si la longitud de la palabra es par, devuelve los 2 caracteres del medio. #Ejemplos: Kata.getMiddle("test") should return "es", Kata.getMiddle("testing") should return "t", Kata.getMiddle("middle") should return "dd", Kata.getMiddle("A") should return "A" #Aporte: Una palabra (cadena) de longitud 0 < str < 1000(en javascript puede obtener un poco más de 1000 en algunos casos de prueba debido a un error en los casos de prueba). No necesita probar para esto. Esto solo está aquí para decirle que no necesita preocuparse por el tiempo de espera de su solución. Producción: Los caracteres del medio de la palabra representada como una cadena.

  /*const getMiddle=(s)=>{
    let result= s.length / 2
    let result2= Math.floor(result)
  return s.length  % 2 == 0 ? s.slice(result-1,result+1) : s.slice(result2,result2+1)
}
    console.log(getMiddle("middle"))*/

    // 39) Se le da una cadena. Debe reemplazar cualquier ocurrencia de la secuencia coveragepor covfefe, sin embargo, si no encuentra la palabra coverageen la cadena, debe agregar covfefeal final de la cadena un espacio inicial. Para los idiomas en los que la cadena no es inmutable (como ruby), no modifique la cadena dada, de lo contrario, esto romperá los casos de prueba.
    
    const covfefe=(str)=>{
    let arr= str.split(' ')
    let result= arr.includes('coverage') ? arr.map((item)=>item=='coverage' ? item= 'covfefe' : item).join(' '): arr.join('') + 'covfefe'
   return result
}
    console.log(covfefe('coverage'))