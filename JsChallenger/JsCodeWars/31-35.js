
// 31) A Nathan le encanta andar en bicicleta. Como Nathan sabe que es importante mantenerse hidratado, bebe 0,5 litros de agua por hora de ciclismo. Te dan el tiempo en horas y necesitas devolver el número de litros que beberá Nathan, redondeado al valor más pequeño. Por ejemplo: time = 3 ----> litres = 1 time = 6.7---> litres = 3 time = 11.8--> litres = 5

/*const litres=(time)=>{
    return Math.floor(time*0.5)
  }

  console.log(litres(12.3))*/

// 32) Bienvenidos. En este kata, se le pide que eleve al cuadrado cada dígito de un número y los concatene. Por ejemplo, si ejecutamos 9119 a través de la función, saldrá 811181, porque 9 2 es 81 y 1 2 es 1. (81-1-1-81) Ejemplo #2: Una entrada de 765 devolverá/debería devolver 493625 porque 7 2 es 49, 6 2 es 36 y 5 2 es 25. (49-36-35). Nota: La función acepta un número entero y devuelve un número entero.

/*const squareDigits=(num)=>{
    return Number(num.toString().split('').map((item)=>item**2).join(''))
  }

    console.log(squareDigits(3212))*/

// 33) Escriba un programa que encuentre la suma de todos los números del 1 al num. El número siempre será un entero positivo mayor que 0. Por ejemplo (Entrada -> Salida) : 2 -> 3 (1 + 2).   8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

/*const summation=(num)=> {
    let result = 0;
    for (let i = 1; i <= num; i++) {
      result += i;
    }
    return result;
  }

  console.log(summation(8))*/

  // 34) Dada una matriz de unos y ceros, convierta el valor binario equivalente en un número entero. Por ejemplo: [0, 0, 0, 1]se trata como 0001cuál es la representación binaria de 1.

  /*const binaryArrayToNumber=(arr)=> {
    return parseInt(arr.join(''), 2)
  }

    console.log(binaryArrayToNumber([1,1,1,1]))*/

// 35) Escriba un programa que genere los n elementos principales de una lista. Ejemplo: largest(2, [7,6,5,4,3,2,1]) => [6,7]

const largest=(n, array)=> {
  return n === 0 ? [] : array.sort((a, b)=> a - b).slice(-n)
}

console.log(largest(2, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]))