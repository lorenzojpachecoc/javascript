// una funcion que reciba 2 array de la misma long y que devuelva un objeto donde las keys sean los elementos del primer array y los valores los del segundo array

/*const valObj=(arr,arr2)=>{
	return Object.fromEntries(arr.map((item,index)=>[item,arr2[index]]))
	}
	
	console.log(valObj(['a','b','c'],[1,2,3]))*/

	/*const arr= ['a','b','c']
	console.log(arr[1])*/

// Escribir una funcion que reciba un array de strings como parametro y que devuelva un array de objetos
// con las propiedades: Palabra donde se va a colocar el valor del elemento del array, otra 
// propiedad que se llamara longitud donde se le asignara como valor la longitud del elemento
// del array y una ultima propiedad que se va a llamar mensaje y va a tener como valor es muy largo
// si la longitud de la palabra es mayor a 10, y en caso contrario tamaño estandar.

/*const arrStr=(arr)=>{
	return arr.map((item,index)=>([
		 item,
		 item.length,
		 item.length>10 ? 'es muy largo' : 'tamano estandar'
	]))
}
	console.log(arrStr(['lorenzo','pacheco','programacion']))

	let palabra= 'javas'*/

	// Tienes un array de números entre positivos y negativos, tu reto es retornar un objeto con el número de veces que aparece un número.
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

const counterNumbers=(numbers)=>{
	return numbers.reduce((prev, cur) => ((prev[cur] = prev[cur] + 1 || 1), prev), {})
}

console.log(counterNumbers([1, 2, 2, 3, 3, 3]))