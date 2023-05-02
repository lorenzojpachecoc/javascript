
// 191) Eliminar un signo de exclamación del final de una cadena. Para un kata para principiantes, puede suponer que los datos de entrada son siempre una cadena, no es necesario verificarlos.

/*const remove = (str) => {
return str.endsWith('!') ? str.slice(0, -1) : str;
  }
  console.log(remove('Hi! Hi!'))*/

// 192) Encuentra el número con más dígitos. Si dos números en la matriz de argumentos tienen el mismo número de dígitos, devuelve el primero de la matriz.

/*const findLongest = (arr) => {
    return arr.reduce((prev, cur) => (`${cur}`.length > `${prev}`.length) ? cur : prev)
}
        console.log(findLongest([1, 10, 100]))*/

// 193) Implemente todas las funciones requeridas para crear las siguientes oraciones llamando a esas funciones: Adam(has(a(dog()))); // must return "Adam has a dog." The(name(of(the(dog(is(also(Adam()))))))); // must return "The name of the dog is also Adam."

/*function Adam() {}
function has() {}
function a() {}
function dog() {}
function The() {}
function name() {}
function of() {}
function the() {}
function is() {}
function also() {}*/

// 194) Se le dará un número y deberá devolverlo como una cadena en formato expandido . Por ejemplo: expandedForm(12); // Should return '10 + 2'. expandedForm(42); // Should return '40 + 2'. expandedForm(70304); // Should return '70000 + 300 + 4'. NOTA: Todos los números serán números enteros mayores que 0.

/*const expandedForm = (num) => {
  return String(num).split('').map((item,index,arr)=> item+'0'.repeat(arr.length-index-1)).filter((elem)=> Number(elem)!=0).join(' + ')
}

  console.log(expandedForm(70304))*/

  // 195) Alex acaba de comprar un nuevo hula hoop, le encanta pero se siente desanimado porque su hermanito es mejor que él. Escriba un programa en el que Alex pueda ingresar (n) cuántas veces gira el aro y le devolverá un mensaje de aliento :) Si Alex obtiene 10 o más aros, devuelve la cadena "Genial, ahora pasa a los trucos". Si no obtiene 10 aros, devuelve la cadena "Sigue así hasta que lo consigas".

  const hoopCount = (n) => {
  return n >= 10 ? 'Genial, ahora pasa a los trucos' : 'Sigue así hasta que lo consigas'
 }
    console.log(hoopCount(3))
