				// 10 ejercicios con reduce
// 101) // Tienes un array de números entre positivos y negativos, tu reto es retornar un objeto con el número de veces que aparece un número.
// Para solucionarlo vas a encontrar una función llamada counterNumbers que tiene un parámetro de entrada:
//     numbers: Un array de números.
// Dentro del cuerpo de la función counterNumbers debes escribir tu solución.
// Ejemplo 1:
// Input:
// [1, 2, 2, 3, 3, 3]
// Output:
// {
//   1: 1,
//   2: 2,
//   3: 3,
// }

/*const counterNumbers=(numbers)=>{
	return numbers.reduce((prev, cur) => ((prev[cur] = prev[cur] + 1 || 1), prev), {})
}

console.log(counterNumbers([1, 2, 2, 3, 3, 3]))*/

// 102) devuelve un objeto con la suma del numero de veces que aparece un numero y el indice que ocupan
/*const counterNumbers=(numbers)=>{
	return numbers.reduce((prev, cur,index) => ((prev[cur] = prev[cur] + index || index), prev), {})
}

console.log(counterNumbers([1, 2, 2, 3, 3, 3]))*/

// 103) sumas todos loa valores de un array de numeros

/*const counterNumbers=(numbers)=>{
	return numbers.reduce((prev, cur) => (prev+cur))
}

console.log(counterNumbers([1, 2, 2, 3, 3, 4]))*/

//104)devuelve un array a partir de un grupo de arrays

/*const counterNumbers=(numbers)=>{
	return numbers.reduce((prev, cur) => (prev.concat(cur)))
}

console.log(counterNumbers([[1, 2], [2, 3], [3, 3]]))*/

// 105) dado un conjunto de nombres de los alumnos de una clase, devuelve un arreglo con la cantidad de nombres repetidos en un aula de clase.

/*const names=(str)=>{
	return str.reduce((prev, cur) => ((prev[cur] = prev[cur] + 1 || 1), prev), [])
}

console.log(names(['jorge','maria','jose','bob','pat','maria','jose','jose']))*/

// 106) Para crear este acumulado, podemos acceder a nuestra clase hipotética footballLeague, que contiene el array ‘teams’. Este array tiene distintos equipos que, a su vez, tienen la propiedad goalsFor. utiliza el método reduce de JavaScript para crear el acumulado de goles a favor

const footballLeague=(teams)=>{
 return teams.reduce((prev,cur)=>(prev+cur.goalsFor),0)
}

console.log(footballLeague( [
	{ name: "madrid",  goalsFor: 21 },
	{ name: "barcelona", goalsFor: 32 },
	{ name: "atletico", goalsFor: 16 }
  ]))

  // 107) Dado un array de objeto, sería más conveniente obtener un objeto y acceder directamente por su id. Utiliza .reduce() para convertir el listado de productos original en una estructura de datos más conveniente donde el valor del id encabeze el objeto

 /* const products=(obj)=>{
	return obj.reduce((prev,cur)=>{
		Object.assign(prev, {[cur.id]:cur})
	})
  }

  console.log(products([
	{
	  id: "apple-watch-s6",
	  nombre: "Apple Watch Series 6",
	  precio: "429,00 €",
	},
	{
	  id: "iphone-se",
	  nombre: "iPhone SE",
	  precio: "489,00 €",
	},
	{
	  id: "macbook-air",
	  nombre: "Macbook Air",
	  precio: "1.199,00 €",
	},
  ]))*/