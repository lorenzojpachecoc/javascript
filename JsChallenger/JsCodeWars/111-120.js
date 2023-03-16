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

const numbers = (arr) => {
 return arr.map((item)=> item % 2 == 0 ? item*item : item)
}

console.log(numbers([2, 17, 4, 8, 10, 3, 5, 6, 7]))

// 115) 