//7) Escriba una función que tome dos cadenas (a y b) como argumentos. Cree un objeto que tenga una propiedad con la clave 'a' y un valor de 'b'. Devolver el objeto.

/*const inicial = (a,b)=>{
    const object = { [a]: b };
    return object
}

console.log(inicial('z','x'))*/

//8) Escriba una función que tome dos matrices (a y b) como argumentos. Cree un objeto que tenga propiedades con las claves 'a' y los valores correspondientes 'b'. Devolver el objeto.
            //por resolver
const twoArr = (a,b)=>{
    let object = Object.fromEntries(a.map((item,index)=>[item,b[index]]))
    return object
}

console.log(twoArr(['a','b','c'],[1,2,3]))

