//9) Escribe una función que tome un objeto (a) como argumento. Devuelve una matriz con todas las claves de objeto.

const obj = (a)=>{
    let result = Object.keys(a);
    return result
}

console.log(obj({j:9,i:2,x:3,z:4}))

//10) Escribe una función que tome un objeto como argumento. En algunos casos, el objeto contiene otros objetos con algunas propiedades profundamente anidadas. Devuelve la propiedad 'b' del objeto 'a' dentro del objeto original si existe. Si no, devuelve indefinido

/*const obj = (obj)=>{
    let result = obj?.a?.b;
    return result
}

console.log(obj({a:{b:{c:3}}}))*/