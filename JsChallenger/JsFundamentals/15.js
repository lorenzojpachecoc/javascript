//Escriba una función que tome dos cadenas (a y b) como argumentos. Devuelve el número de veces que a ocurre en b.

const myFunction = (a,b) =>{
const arr = b.split('')
    
    let elements= arr.filter((item)=> item== a) .length;
    return elements;

}

console.log(myFunction('e', 'esta es la primera vez que todo funciona bien'));

//HACER UNA FUNCIÓN QUE RECIBA UN ARRAY DE NUMERO Y RETORNE CUANTOS NUMEROS MAYORES QUE 3 HAY

/*const numberMayorATres= (arr)=>{
    let result= arr.filter((item)=> item %2 ==0).length ;
    return result

}

console.log(numberMayorATres([1,2,3,9,8,0,6]))*/