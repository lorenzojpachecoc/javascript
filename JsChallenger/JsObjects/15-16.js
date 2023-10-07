//15) Escribe una función que tome un objeto como argumento. De alguna manera, las propiedades y claves del objeto se mezclaron. Intercambie la clave del objeto Javascript con sus valores y devuelva el objeto resultante

/*const objMixed=(a)=>{
        return Object.fromEntries(Object.entries(a).map(([key,value]) =>[value,key] ))
}

console.log(objMixed({a:2,b:3,c:4,d:5}))*/

//16) Escribe una función que tome un objeto como argumento. Algunos de los valores de propiedad contienen cadenas vacías. Reemplace cadenas vacías y cadenas que contienen solo espacios en blanco con valores nulos. Devolver el objeto resultante
    //por resolver
const obj=(a)=>{
    return Object.entries(a)
}

console.log(obj({a:'',b:3,c:'',d:5}))