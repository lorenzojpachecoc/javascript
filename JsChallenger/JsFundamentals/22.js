//Escribe una función que tome dos números, digamos x e y, como argumentos. Comprueba si x es divisible por y. En caso afirmativo, devuelva x. Si no, devuelva el siguiente número natural más alto que sea divisible por y

/*const siEsDivisible= (x,y) => {
    let result= (y/x) ==0 ?  x : x++;
    return result
}

console.log(siEsDivisible(9,2))*/

// CREE UNA FUNCION QUE RECIBA UN ARRAY COMO ARGUMENTO, EL ARRAY CONTENDRÁ NUMEROS ALEATORIOS, DEBERA SACAR EN UN NUEVO ARRAY LOS NUMEROS MAYORES A 20

const nuevoArr= (a) =>{
    let result= a.filter(item=>item>20);
    return result
}

console.log(nuevoArr([10,30,80,70,1250,2023,21,20,19,18,12,1,5,8,9,7]))