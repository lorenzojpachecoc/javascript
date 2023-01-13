//Escribe una función que tome un número (a) como argumento. Si a es un número entero (no tiene lugar decimal), devuelve verdadero. De lo contrario, devuelve falso.

const myFunction = (a) => {
let entero= a % 1 == 0 ;
return entero;
}

console.log (myFunction(2))