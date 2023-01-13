//Escribe una función que tome dos números (a y b) como argumentos. Si a es más pequeño que b, divide a entre b. De lo contrario, multiplica ambos números. Devolver el valor resultante

const myFunction = (a,b) => {
    if (a<b){
        return a/b
    }
    else{
        return a*b
    }
}

console.log(myFunction(20,22))