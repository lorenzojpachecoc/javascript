//11) Escribe una función que tome un objeto (a) como argumento. Devuelve la suma de todos los valores de los objetos.

/*const myObj=(a)=>{
    let result= Object.values(a)
    return result.reduce((a,b)=> a+b);
}

console.log(myObj({j:9,i:2,x:3,z:4}))*/

//12) Escribe una función que tome un objeto como argumento. Debería devolver un objeto con todas las propiedades del objeto original. excepto la propiedad con clave 'b'

const myObj=(obj)=>{
    delete obj.b;
    let result= obj
    return  result
}

console.log(myObj({ a: 1, b: 7, c: 3 }))