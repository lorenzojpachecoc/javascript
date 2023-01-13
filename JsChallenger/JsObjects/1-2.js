// 1) Escribe una función que tome un objeto con dos propiedades como argumento. Se debe devolver el valor del inmueble con clave país.

/*const pais=(obj)=>{
    return obj.country
}

console.log(pais(
    {
            continent: 'Asia', 
        country: 'Japan'
    }))*/

    //2) Escribe una función que tome un objeto con dos propiedades como argumento. Debería devolver el valor de la propiedad con la clave 'prop-2'. Sugerencia: es posible que desee utilizar el acceso de propiedad de corchetes

    const myFunction= (obj)=> {
        
    return obj['prop-2']
}

console.log(myFunction({  one: 1,  'prop-2': 2}))


    //Casos de prueba:

//myFunction({  one: 1,  'prop-2': 2}) Esperado 2
//myFunction({  'prop-2': 'two',  prop: 'test'}) Esperado 'two'