                            // METODO MAP
// 111) dado un arreglo de objetos que almacena las propiedades firstName y lastName, tu objetivo es devolver un array uniendo los valores de las propiedades

  /*const userFullnames = (users) => {
    return users.map((element)=> `${element.firstName} ${element.lastName}`)
}

  console.log(userFullnames([
    {firstName : "Susan", lastName: "Steward"},
    {firstName : "Daniel", lastName: "Longbottom"},
    {firstName : "Jacob", lastName: "Black"}
  ]))*/

  //112) consideremos una lista de nombres de algunos de nuestros Vengadores favoritos. El problema es que los nombres de esta lista no están completos: les falta un sufijo importante. Con map(), toma todos los nombres de la matriz y añade el sufijo "man" a todos y cada uno de ellos. comprueba el índice de nuestro héroes y asegurate de que utilizes el sufijo "woman" para el primer elemento de nuestra matriz

/*const Aveng= (pref,str,str2) =>{
 return pref.map((pref,index) => index==0 ? pref+str2 : pref+str)
}
    console.log(Aveng(["wonder", "super", "spider", "ant", "iron"],"man","woman"))*/

// 113) Tenemos cinco vengadores en el arreglo y cada uno tiene tanto un nombre real como un nombre de héroe. Sin embargo, solo queremos recuperar sus nombres reales en el nuevo arreglo


/*const namesReals = (aveng) => {
  return aveng.map(elem => elem.name);
}

console.log(namesReals([
  {name: "steve rogers", nameHero: "captain america"},
  {name: "tony stark", nameHero: "iron man"},
  {name: "bruce banner", nameHero: "the hulk"},
  {name: "peter parker", nameHero: "spiderman"},
  {name: "tchalla", nameHero: "black panther"}
]));*/

// 114) queremos un array de regreso con el cuadrado de aquellos elementos que son pares

/*const numbers = (arr) => {
 return arr.map((item)=> item % 2 == 0 ? item*item : item)
}

console.log(numbers([2, 17, 4, 8, 10, 3, 5, 6, 7]))*/

// 115)  logra calcular el promedio de calificaciones de los alumnos de una salon de clases. La calificaciones se encontraran en un array multidimensional. El objetivo es retornar un array con el promedio de cada alumno

const alum = (prom) => {
  let result= prom.map((item)=>item.reduce((prev,cur)=>prev+cur))
    return result.map((item)=> item/prom.length)
}

console.log(alum([[5,8,4], [2,5,2], [8,8,9]]))

// 116) invierte el valorel contenido de un areglo utilizando el metodo map

/*const exam = (numbers) => {
  return numbers.map((item,index,arr)=>arr[(arr.length -1) - index])
}

console.log(exam([1,2,3]))*/

// 117) segun el array de objetos dado, agrega una nueva propiedad llamada taxes donde su valor sea el 10% del precio a cada producto

/*let catalog= [
  {
    id: 23,
    name: 'Red notebook',
    price: 2.25
  }, {
    id: 24,
    name: 'Black pens',
    price: 1.00
  }, {
    id: 25,
    name: 'Blue pens',
    price: 1.50
  }, {
    id: 26,
    name: 'Calculator',
    price: 12.5
  }
]

const catalogWithTax = catalog.map ((item)=>{
  return {
    id: item.id,
    name: item.name,
    price: item.price,
    tax: item.price * .10
  }
})

console.log(catalogWithTax)*/

// 118) Cree una función que tome una matriz de objetos (comestibles) que calcule el precio total y lo devuelva como un número. utiliza el metodo map y todos aquellos adicionales que puedas necesitar. Un objeto de supermercado tiene un producto, una cantidad y un precio

/*const getTotalPrice= (arr) => {
 return arr.map((item) => item.quantity * item.price).reduce((prev,cur)=> prev+cur)
}
console.log(getTotalPrice([
  { product: "Milk", quantity: 1, price: 1.50 },
  { product: "Eggs", quantity: 12, price: 0.10 },
  { product: "Bread", quantity: 2, price: 1.60 },
  { product: "Cheese", quantity: 1, price: 4.50 }
]))*/

// 119) Dado un conjunto de números, devuelve el inverso aditivo de cada uno. Cada positivo se vuelve negativo, y los negativos se vuelven positivos.

/*const invert=(arr)=>{
    return arr.map((item)=>-item)

  }

  console.log(invert([1,-2,6,-4,5]))*/

  // 120)

/*const usersByLikes = (myUsers)=>{
   return myUsers.map((item) => {
    const container = {};

    container[item.name] = item.likes;
    container.age = item.name.length * 10;

})}
  console.log(usersByLikes([{ name: 'shark', likes: 'ocean' },
                            { name: 'turtle', likes: 'pond' },
                            { name: 'otter', likes: 'fish biscuits' } ]))*/