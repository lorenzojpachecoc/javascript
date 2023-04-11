
// 141) Hubo un examen en tu clase y lo pasaste. ¡Felicidades! Pero eres una persona ambiciosa. Quiere saber si es mejor que el estudiante promedio de su clase. Recibe una matriz con los puntajes de las pruebas de sus compañeros. ¡Ahora calcule el promedio y compare su puntuación! ¡Regresa Truesi estás mejor, de lo contrario False! Nota: Sus puntos no están incluidos en la matriz de puntos de su clase. ¡Para calcular el punto promedio, puede agregar su punto a la matriz dada!

/*const betterThanAverage = (classPoints, yourPoints) => {
    return classPoints.reduce((prev,cur)=>prev+cur)/classPoints.length < yourPoints ? true : false
  }
    console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75))*/

// 142) Escriba un método que tome una matriz de letras consecutivas (crecientes) como entrada y que devuelva la letra que falta en la matriz. Siempre obtendrá una matriz válida. Y siempre faltará exactamente una letra. La longitud de la matriz siempre será de al menos 2. La matriz siempre contendrá letras en un solo caso.

const findMissingLetter = (arr) => {
    let alpha= "abcdefghijklmnopqrstuvwxyz"
    const arrValidation= arr[0]===arr[0].toLowerCase() ? alpha.toLowerCase().split('') :  alpha.toUpperCase().split('')
    let inic= arr[0]
    let fin= arr[arr.length-1]
    let indInic= arrValidation.indexOf(inic)
    let indFin= arrValidation.indexOf(fin)
    let result1= arrValidation.slice(indInic,indFin+1)
    return result1.map((elem)=> (arr.includes(elem) ? elem='x' : elem)).filter((item)=>item!='x').join('')
  }
   
console.log(findMissingLetter(['O','Q','R','S']))

// 143) Escriba una función que pueda devolver el valor más pequeño de una matriz o el índice de ese valor. El segundo parámetro de la función dirá si debe devolver el valor o el índice. Suponga que el primer parámetro siempre será una matriz con al menos 1 número y sin duplicados. Suponga que el segundo parámetro será una cadena que contenga uno de dos valores: 'valor' e 'índice'.

/*function min(arr, toReturn) {
   return toReturn === 'value' ? Math.min(...arr) : arr.indexOf(Math.min(...arr))
}
  console.log(min([1,2,3,4,5], 'index'))*/

//144) Defina una función que tome un argumento entero y devuelva un valor lógico trueo falsedependiendo de si el entero es primo. Según Wikipedia, un número primo (o primo) es un número natural mayor 1que no tiene divisores positivos aparte de 1y él mismo. Requisitos: Puede suponer que se le dará una entrada de número entero. No puede suponer que el número entero será solo positivo. También se le pueden dar números negativos ( o 0). NOTA sobre el rendimiento : no se requieren optimizaciones sofisticadas, pero las soluciones más triviales pueden agotarse. Los números van hasta 2^31 (o similar, dependiendo del idioma). Recorrer todo el camino hasta n, o n/2, será demasiado lento.

/*const isPrime = (num) => {
 return num%2===0 || num<0 ? `${num} is not prime` : `${num} is prime`
}
  console.log(isPrime(-41))*/

// 145) Complete la solución para que la función rompa la tripa de camello, usando un espacio entre palabras.

/*const solution = (str) => {
    return str.replace(/([A-Z])/g, ' $1')
}
  console.log(solution('camelCasing'))*/