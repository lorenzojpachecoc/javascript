//Escribe una función que tome un número como argumento. Si el número es par, devuelve verdadero. De lo contrario, devuelve falso

const myFunction = (a) => {
    if ((a % 2) == 0 ){
        return true
    }
    else{
        return false
    }
    
}
 console.log(myFunction(2));