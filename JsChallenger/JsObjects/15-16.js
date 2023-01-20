//15) Escribe una función que tome un objeto como argumento. De alguna manera, las propiedades y claves del objeto se mezclaron. Intercambie la clave del objeto Javascript con sus valores y devuelva el objeto resultante

const objMixed=(a)=>{
    let result= Object.values(a)
    return result
}

console.log(objMixed({a:2,b:3,c:4,d:5}))

//16) 