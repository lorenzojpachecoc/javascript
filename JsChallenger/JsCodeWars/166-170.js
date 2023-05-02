
// 166) Un pangrama es una oración que contiene todas las letras del alfabeto al menos una vez. Por ejemplo, la oración "El rápido zorro marrón salta sobre el perro perezoso" es un pangrama, porque usa las letras AZ al menos una vez (las mayúsculas y minúsculas son irrelevantes). Dada una cadena, detectar si es o no un pangrama. Devuelve True si lo es, False si no. Ignora los números y la puntuación.

/*const isPangram = (str) => {
    let alpha= 'abcdefghijklmnopqrstuvwxyz'
    return alpha.split('').every((item) => str.toLowerCase().includes(item));
  }

console.log(isPangram('The quick brown fox jumps over the lazy dog'))*/

// 167) Bienvenido. En este kata, se requiere que, dada una cadena, reemplace cada letra con su posición en el alfabeto.Si algo en el texto no es una carta, ignóralo y no lo devuelvas.

/*const alphabetPosition = (text) => {

  let alpha= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  let result= text.toLowerCase().replace(/[\W\d\(_)]/gi, '').split('')
  return result.map((item,index) => alpha.length[0] == result.length[0] ? alpha.indexOf(result[index].toLowerCase()) +1 : item).join(' ')
} 

  console.log (alphabetPosition("7$i&_(:5"))*/

  // 168) Escriba una función para dividir una cadena y convertirla en una matriz de palabras.

/*const stringToArra = (str) => {
 return str.split(' ')
}
  console.log(stringToArra('I love arrays they are my favorite'))*/

// 169) Suma todos los números de una matriz dada (cq. list), excepto el elemento más alto y el más bajo (¡por valor, no por índice!). El elemento más alto o más bajo, respectivamente, es un solo elemento en cada borde, incluso si hay más de uno con el mismo valor. Cuidado con la validación de entrada.

const sumArr = (arr) => {
  return arr ? arr.sort((a,b)=> a-b).slice(1,-1).reduce((prev,cur)=> prev+cur) : 0
}
console.log(sumArr([6, 2, 1, 8, 10]))

//170) Crea una función que dé un saludo personalizado. Esta función toma dos parámetros: namey owner. Use condicionales para devolver el mensaje adecuado:

/*const greet = (name, owner) => {
  return name === owner ? 'Hello boss' : 'Hello guest'
}
  console.log(greet('Greg', 'Daniel'))*/