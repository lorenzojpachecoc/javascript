//Escribe una función que tome un número (a) como argumento. Redondea a al segundo dígito después de la coma. Devolver el número redondeado

const myFunction= (a) => {
    let redondeo= a.toFixed(2);
    return redondeo;
}

console.log(myFunction(3.136))