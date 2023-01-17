//5) Escribe una función que tome un objeto (a) y una cadena (b) como argumento. Devuelve verdadero si el objeto tiene una propiedad con la clave 'b', pero solo si tiene un valor verdadero. En otras palabras, no debe ser nulo, indefinido o falso. Devuelve false en caso contrario.

/*const obj= (a, b)=> {
        let result= a[b] 
    return Boolean(result)
}

console.log(obj({x:'a',y:null,z:'c'},'y'))*/

//6) Escribe una función que tome una cadena como argumento. Cree un objeto que tenga una propiedad con la clave 'clave' y un valor igual a la cadena. Devolver el objeto.

const obj= (str)=> {
    let result= { key: str }
return result
}

console.log(obj('a'))