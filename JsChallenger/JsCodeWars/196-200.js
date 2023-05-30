
// 196) Tome una matriz y elimine cada segundo elemento de la matriz. Mantenga siempre el primer elemento y comience a eliminar con el siguiente elemento. Ejemplo:["Keep", "Remove", "Keep", "Remove", "Keep", ...]-->["Keep", "Keep", "Keep", ...] Ninguna de las matrices estará vacía, ¡así que no tienes que preocuparte por eso!

/*const removeEveryOther = (arr) => {
   return arr.filter((elem, index) => index % 2 === 0);
}
  console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))*/

  // 197) Complete la función que toma dos enteros ( a, b, where a < b) y devuelva una matriz de todos los enteros entre los parámetros de entrada, incluidos ellos.

  const between = (a, b)=> {
  let arr = [];
  for (let i = a; i <=b ; i++) {
    arr.push(i);
  }
  return arr;
}
  console.log(between(-2,2))

  // 198) Se da una secuencia ordenada de números del 1 al N. Es posible que se haya eliminado un número, luego se mezclaron los números restantes. Encuentra el número que se eliminó.

  /*const findDeletedNumber=(arr, mixArr)=> {
  let arr1 = arr.reduce((a,b) => a + b, 0)
  let mixArr2 = mixArr.reduce((a,b) => a + b, 0)
  return arr1 - mixArr2
}
  console.log(findDeletedNumber([1,2,3,4,5], [3,4,1,5]))*/

  // 199) Se le da una matriz de valores. Sume cada valor numérico en la matriz y cualquier matriz anidada (a cualquier profundidad). Ignore todos los demás tipos de valores.

  /*const arraySum = (arr) => {
  return `${arr}`.split(',').reduce((prev,cur)=> prev +(+cur||0), 0);
}
  console.log(arraySum([1, 2, [1, 2]]))*/

  // 200) Escriba una función que verifique si una cadena dada (insensible a mayúsculas y minúsculas) es un palíndromo . Un palíndromo es una palabra, número, frase u otra secuencia de símbolos que se lee igual hacia atrás que hacia adelante, como señora o coche de carreras, la fecha y hora 21/12/33 12:21, y la oración: "Un hombre, un plan, un canal – Panamá".

  /*const isPalindrome = (x) => {
  return x.toLowerCase() === x.toLowerCase().split('').reverse().join('')
}
  console.log(isPalindrome('Abba'))*/