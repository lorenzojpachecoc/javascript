//5) Escribe una función que tome un objeto (a) y una cadena (b) como argumento. Devuelve verdadero si el objeto tiene una propiedad con la clave 'b', pero solo si tiene un valor verdadero. En otras palabras, no debe ser nulo, indefinido o falso. Devuelve false en caso contrario.

const obj= (a, b)=> {
        let result= a[b] 
    return Boolean(result)
}

console.log(obj({x:'a',y:null,z:'c'},'y'))