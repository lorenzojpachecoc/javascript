// CREE UNA FUNCION QUE RECIBA UN ARRAY COMO ARGUMENTO, EL ARRAY CONTENDRÁ NUMEROS ALEATORIOS, DEBERA SACAR EN UN NUEVO ARRAY LOS NUMEROS MAYORES A 20

/*const nuevoArr= (a) =>{
    let result= a.filter(item=>item>20);
    return result
}

console.log(nuevoArr([10,30,80,70,1250,2023,21,20,19,18,12,1,5,8,9,7]))*/

// cree una funcion que reciba como parametro un string aleatorio, deberá reemplazar todas las vocales por la letra j

/*const vocales= (mensaje) =>{
    let result= mensaje.replace(/[aeiou]/g, 'j');
    return result

}

console.log(vocales('Hola amigos como estais aeiou, esto es JS'))*/

//cree una funcion que reciba como argumentos un array de objeto y un id. debera devolver el objeto que contenga el id del argumento

const ejercicio= (arr, id) => {
    let result= arr.find(item=>item.id===id)
    return result
}

console.log(ejercicio([
    {
      id:5,
      characters: ['a','b','c'],
      status: true
    },
    {
      id:6,
      characters: ['d','e','f'],
      status: false
    },
    {
      id:7,
      characters: ['g','h','i'],
      status: true
    },
    {
      id:8,
      characters: ['j','k','m'],
      status: false
    },
    {
      id:9,
      characters: ['n','l','ll'],
      status: true
    },
    {
      id:10,
      characters: ['o','p','q'],
      status: false
    },], 5))

    //Escriba una función que tome dos cadenas (a y b) como argumentos. Comenzando al final de 'a', inserte 'b' después de cada tercer carácter de 'a'. Devuelve la cadena resultante.

