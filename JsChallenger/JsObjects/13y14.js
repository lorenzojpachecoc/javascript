//13) Escribe una función que tome dos objetos como argumentos. Desafortunadamente, la propiedad 'b' en el segundo objeto tiene la clave incorrecta. Debería llamarse 'd' en su lugar. Combine ambos objetos y corrija el nombre de propiedad incorrecto. Devuelve el objeto resultante. Debe tener las propiedades 'a', 'b', 'c', 'd' y 'e'
         //por resolver
/*/const combine=(x, y)=>{
    y.d=y.b
    delete y.b
    let modifica= {...x,...y}
    return modifica
}

    console.log(combine({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 }))*/

    //14) Escribe una función que tome un objeto (a) y un número (b) como argumentos. Multiplica todos los valores de 'a' por 'b'. Devuelve el objeto resultante.

const obj=(a,b)=>{
    let result= Object.values(a).map((item)=>item*b)
    return result
}
 console.log(obj({a:1,b:2,c:3},3))