                            // METODO FILTER

// 121) elabora una funcion que devuelva los estudiantes que han aprobado la materia en curso

/*let students = [
    {
      name: 'Alvaro',
      score: 10,
    },
    {
      name: 'Daniel',
      score: 16,
    },
    {
      name: 'Alexys',
      score: 12,
    },
    {
      name: 'Rafa',
      score: 17,
    },
    {
      name: 'Alejandro',
      score: 8,
    },
    {
      name: 'Sofia',
      score: 9,
    }
  ]
  
 const approved = students.filter((item) => item.score >= 10);

 console.log(approved)*/

 // 122) Cómo filtrar elementos en función de una propiedad concreta. En este ejercicio, solo devuelve los miembros del equipo que sean desarrolladores.

 /*let equipo = [
	{
  		name: "aaron",
    	position: "developer"
 	 },
  	{
  		name: "beth",
    	position: "ui designer"
  	},
  	{
  		name: "cara",
    	position: "developer"
  	},
 	{
  		name: "daniel",
    	position: "content manager"
 	 },
  	{
  		name: "ella",
    	position: "cto"
  	},
  	{
  		name: "fin",
    	position: "backend engineer"
  	},
  	{
  		name: "george",
    	position: "developer"
  },

]

let devs = equipo.filter(item => item.position == "developer")
console.log(devs)*/

// 123) Se trata de un concurso. En esta competición, hay tres ganadores. El primero obtendrá la medalla de oro, el segundo la de plata y el tercero, la de bronce. Utilizando el filter y accediendo a la propiedad del indice de cada elemento en cada iteración, podemos filtrar cada uno de los tres ganadores en diferentes variables.

/*let winners = ["Anna", "Beth", "Cara"];

let oro = winners.filter((_, index) => index == 0);
let plata = winners.filter((_, index) => index == 1);
let bronce = winners.filter((_, index) => index == 2);

console.log(`Oro: ${oro}, plata: ${plata}, bronce: ${bronce}`)*/

// 124) necesitas encontrar en un arreglo muy grande solo las palabras que terminen en una letra específica, utiliza para ello el metodo filter

/*const lastLetter= (arr,letter) => {
  return arr.filter((item)=> item[item.length-1]===letter)

}
  console.log(lastLetter([
  "hola",
  "estamos",
  "filtrando",
  "valores",
  "en",
  "js",
  "para",
  "mejorar",
  "nuestra",
  "habilidad",
], "a"))*/

// 125) Considera una lista/array de ovejas. Cada oveja tiene un nombre y un color. Haz una función que devuelva una lista con todas las ovejas que sean de color rojo y que además su nombre contenga tanto las letras n Y a, sin importar el orden, las mayúsculas o espacios.

/*const counterOv=(ovejas)=>{
let counter= ovejas.filter((item)=> item.color==="rojo")
let withNandA= counter.filter((item)=> item.name.toLocaleLowerCase().includes("n") &&
item.name.toLocaleLowerCase().includes("a"))
return withNandA
}
console.log(counterOv([
  { name: "Noa", color: "azul" },
  { name: "Ovejita", color: "azul" },
  { name: "Eugenia", color: "rojo" },
  { name: "Navidad", color: "rojo" },
  { name: "Ki Na Ma", color: "rojo" },
  { name: "Ki N M", color: "rojo" },
]))
*/
// 126) Considera una lista/array de ovejas. Cada oveja tiene un nombre y un color. Haz una función que devuelva una lista con todas las ovejas menos la tercera

/*const counterOv=(ovejas)=>{
  return ovejas.filter((item, index)=> index !==2)
  }
  console.log(counterOv([
    { name: "Noa", color: "azul" },
    { name: "Ovejita", color: "azul" },
    { name: "Eugenia", color: "rojo" },
    { name: "Navidad", color: "rojo" },
    { name: "Ki Na Ma", color: "rojo" },
    { name: "Ki N M", color: "rojo" },
  ]))*/

   //  127) dado un array de objeto crea una funcion que devuelva los usuarios mayores de edad y que su estado sea true

   /*let users = [
    {
      nombre: "Carlos",
      edad: 19,
      estado: false
    },
    {
      nombre: "Ana",
      edad: 15,
      estado: true
    },
    {
      nombre: "Andres",
      edad: 26,
      estado: true
    }
  ];

  const newUsers= users.filter((item)=> item.edad>=18 && item.estado===true)

  console.log(newUsers)*/

  // 128) dado un array de objetos crea una funcion que devuelva los individuos de raza humana y sexo femenino

  /*const human=(arr)=>{
    return arr.filter((item)=>item.race=="Human" && item.sex=="Woman")
  }

  console.log(human([
    { age: 30, sex: "Man", class: "Spartan", weapon: "Spear", race: "Orc" },
    { age: 40, sex: "Man", class: "Priest", weapon: "Staff", race: "Faun" },
    { age: 25, sex: "Woman", class: "Ninja", weapon: "Kusarigama", race: "Human" },
    { age: 45, sex: "Man", class: "Samurai", weapon: "Katana", race: "Human" },
    { age: 34, sex: "Woman", class: "Paladin", weapon: "Claymore", race: "Elf" },
    { age: 19, sex: "Woman", class: "Rogue", weapon: "Daggers", race: "Elf" }
]))*/

// 129) dado un array de objetos crea una funcion que devuelva las personas que tienen mas de 30 años y menos de 40 siempre que sean hombres

/*const human=(arr)=>{
  return arr.filter((item)=>item.age>30 && item.age<40 && item.sex==="Man")
}

console.log(human([
  { age: 30, sex: "Man", class: "Spartan", weapon: "Spear", race: "Orc" },
  { age: 40, sex: "Man", class: "Priest", weapon: "Staff", race: "Faun" },
  { age: 25, sex: "Woman", class: "Ninja", weapon: "Kusarigama", race: "Human" },
  { age: 35, sex: "Man", class: "Samurai", weapon: "Katana", race: "Human" },
  { age: 34, sex: "Man", class: "Paladin", weapon: "Claymore", race: "Elf" },
  { age: 19, sex: "Woman", class: "Rogue", weapon: "Daggers", race: "Elf" }
]))*/

// 130) Tengo un array de objetos llamado articulosCarrito, y quiero retirar de el el objeto que coincida con las siguientes condiciones al mismo tiempo. que el atributo talla del objeto sea 43 y que su id sea 2 

let articulosCarrito = [
  {id:1, talla: 42},
  {id:2, talla: 43},
  {id:3, talla: 43},
  {id:4, talla: 45},
  {id:5, talla: 45},
  
  ]
  
  const filtrado = articulosCarrito.filter( producto => (producto.talla !== 43 || producto.id !== 2) )

  console.log(filtrado)
