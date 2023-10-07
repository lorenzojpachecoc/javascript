// 26) Dado un número aleatorio no negativo, debe devolver los dígitos de este número dentro de una matriz en orden inverso. Ejemplo (Entrada => Salida): 35231 => [1,3,2,5,3] 0 => [0]

/*const digitize=(n)=> {
    return n.toString().split('').map(Number).reverse()
  }

  console.log(digitize(35231))*/

// 27) Tus compañeros de clase te pidieron que copiaras algunos papeles para ellos. Sabes que hay 'n' compañeros de clase y el papeleo tiene 'm' páginas. Tu tarea es calcular cuántas páginas en blanco necesitas. Si n < 0 o m < 0 regreso 0. Ejemplo: n= 5, m=5: 25 n=-5, m=5:  0

/*const paperWork=(n,m)=>{
    return n > 0 && m > 0 ? n * m : 0
}
 console.log(paperWork(5,5))*/

// 28) En esta pequeña tarea, se le da una cadena de números separados por espacios y tiene que devolver el número más alto y el más bajo.Ejemplos highAndLow("1 2 3 4 5");  // return "5 1", highAndLow("1 2 -3 4 5"); // return "5 -3", highAndLow("1 9 3 4 -5"); // return "9 -5". notas:Todos los números son válidos Int32, no es necesario validarlos. Siempre habrá al menos un número en la cadena de entrada. La cadena de salida debe ser dos números separados por un solo espacio, y el número más alto es el primero.

/*const highAndLow=(numbers)=>{
  numbers= numbers.split(' ')
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`
}
  console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))*/

  // 29) Tu tarea es crear una función que realice cuatro operaciones matemáticas básicas. La función debe tomar tres argumentos: operación (cadena/caracter), valor1 (número), valor2 (número). La función debe devolver el resultado de los números después de aplicar la operación elegida. Ejemplos (Operador, valor1, valor2) --> salida ('+', 4, 7) --> 11 ('-', 15, 18) --> -3 ('*', 5, 5) --> 25 ('/', 49, 7) --> 7

/*const basicOp=(operation, value1, value2)=>{
 return eval(value1+operation+value2)
}
  console.log(basicOp('/', 49, 7))*/

  // 30) Escribe una función para convertir un nombre en iniciales. Este kata toma estrictamente dos palabras con un espacio entre ellas. La salida debe ser dos letras mayúsculas con un punto separándolas. Debe tener un aspecto como este: Sam Harris=>S.H patrick feeney=>P.F

 /*const abbrevName=(name)=>{
  return name.split(' ').map(item => item[0].toUpperCase()).join('.')
}
  console.log(abbrevName('sam farris'))*/