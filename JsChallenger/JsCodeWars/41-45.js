
// 41) Compruebe si una cadena tiene la misma cantidad de 'x' y 'o'. El método debe devolver un valor booleano y no distinguir entre mayúsculas y minúsculas. La cadena puede contener cualquier carácter. Ejemplos de entrada/salida: 
//XO("ooxx") => true
//XO("xooxx") => false
//XO("ooxXm") => true
//XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
//XO("zzoo") => false

/*const XO=(str)=> {
    let x= str.match(/x/gi)
    let o= str.match(/o/gi)
    return (x && x.length) === (o && o.length)
}

console.log(XO("xxOo"))*/

// 42) Complete la función que acepta un parámetro de cadena e invierte cada palabra de la cadena. Deben conservarse todos los espacios en la cadena.

//Ejemplos
//"This is an example!" ==> "sihT si na !elpmaxe"
//"double  spaces"      ==> "elbuod  secaps"

/*const reverseWords=(str)=> {
    return str.split('').reverse().join('').split(' ').reverse().join(' ')
  }

  console.log(reverseWords("This is an example!"))*/

// 43) or lo general, cuando compra algo, se le pregunta si su número de tarjeta de crédito, número de teléfono o la respuesta a su pregunta más secreta sigue siendo correcta. Sin embargo, dado que alguien podría mirar por encima de su hombro, no desea que eso se muestre en su pantalla. En cambio, lo enmascaramos. Su tarea es escribir una función maskifyque cambie todos los caracteres excepto los últimos cuatro a '#'.
//Ejemplos
/*"4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->                 ""
// "What was the name of your first pet?"
"Skippy" --> "##ippy"
"Nananananananananananananananana Batman!"
-->
"####################################man!"*/

/*const maskify=(cc)=> {
    return cc.replace(/.(?=....)/g, '#')
}

console.log(maskify('4556364607935616'))*/

// 44) Implemente una función que sume dos números y devuelva su suma en binario. La conversión se puede hacer antes o después de la adición. El número binario devuelto debe ser una cadena.
//Ejemplos:(Entrada1, Entrada2 --> Salida (explicación)))
//1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
//5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

/*const addBinary=(a,b)=> {
    let sum=a+b
    return sum.toString(2)
}
    console.log(addBinary(1, 1))*/

// 45) Hay un autobús en movimiento en la ciudad que lleva y deja algunas personas en cada parada de autobús. Se le proporciona una lista (o matriz) de pares de enteros. Los elementos de cada par representan el número de personas que se suben al autobús (el primer elemento) y el número de personas que se bajan del autobús (el segundo elemento) en una parada de autobús. Su tarea es devolver la cantidad de personas que todavía están en el autobús después de la última parada de autobús (después de la última matriz). A pesar de que es la última parada de autobús, es posible que el autobús no esté vacío y que algunas personas aún estén dentro del autobús, probablemente estén durmiendo allí: D. Echa un vistazo a los casos de prueba. Tenga en cuenta que los casos de prueba aseguran que la cantidad de personas en el autobús sea siempre >= 0. Por lo tanto, el número entero devuelto no puede ser negativo. El segundo valor en el primer par de la matriz es 0, ya que el autobús está vacío en la primera parada de autobús.

const numbers=(busStops)=>{
    return busStops.reduce((a,b) => a+b[0]-b[1],0)
}
  console.log(numbers([[10,0],[3,5],[5,8]]))