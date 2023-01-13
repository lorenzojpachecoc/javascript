//Este desafío es un poco más complejo. Escribe una función que tome un número (a) como argumento. Si a es primo, devuelve a. Si no, devuelve el siguiente número primo más alto.

/*const myFunction= (a) =>{
    if (a / (a+1)){
        return a
    }
        
    }
    
 console.log(myFunction(1))*/

 /*const myFunction= (a) => {
    let palabra= Array.from(a) .reverse() .join('')
    return palabra == a;

 }
 console.log(myFunction('radar'))*/

 const ejercicio=(str)=>{
    let result= str.split('') .every((/a-z/gi), )
    return result
 }

 console.log (ejercicio('El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña tocaba el saxofón detrás del palenque de paja.'))