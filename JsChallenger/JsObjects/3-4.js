//3) Escribe una función que tome un objeto con dos propiedades y una cadena como argumentos. Debería devolver el valor de la propiedad con clave igual al valor de la cadena

const myFunction= (obj, key)=> {
        
    return obj[key]
}

console.log(myFunction({  continent: 'Asia',  country: 'Japan'}, 'continent'))

//4) Escribe una función que tome un objeto (a) y una cadena (b) como argumento. Retorna verdadero si el objeto tiene una propiedad con la clave 'b'. Devuelve false en caso contrario. Consejo: el caso de prueba 3 es un poco complicado porque el valor de la propiedad 'z' no está definido. Pero la propiedad en sí existe.

/*const myFunction= (a, b)=> {
        
    return b in a
}

console.log(myFunction({a:1,b:2,c:3},'b'))*/