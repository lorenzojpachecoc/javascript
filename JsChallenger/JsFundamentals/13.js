//Escriba una función que tome dos cadenas (a y b) como argumentos. Si a contiene b, agregue b al principio de a. Si no, añádelo al final. Devolver la concatenación

const myFunction = (a, b) => {
    if (a.includes(b)){
        return b+a
    }
    else{
        return a+b
    }
    
}
 console.log(myFunction('Programa', 'z'));