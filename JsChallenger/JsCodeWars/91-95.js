
// 91) Su cónyuge le dice que uno de los artículos de la lista no fue robado, está en su castillo en Transilvania. Dado un objeto de los artículos robados y un nombre de artículo, devuelva una copia sin ese artículo en la lista. notas. El objeto contendrá al menos dos elementos. Preferiblemente, mute la copia, no el original.
					//FALTA EN EL JIRA
/*const removeEntry=(obj, itemName)=> {
	delete obj[itemName]
	return obj
}
console.log(removeEntry({ piano: 300, tv: 100, skate: 50 }, "piano"))*/

// 92) ¡Llamas a tu cónyuge para informarle que su artículo más preciado se ha ido! Dado un objeto de artículos robados, devolver el artículo más caro de la lista. notas: Solo habrá un artículo de mayor valor ( sin ataduras ). El objeto siempre contendrá al menos un elemento ( sin objetos vacíos ).

/*const mostExpensiveItem=(obj)=> {
	return Object.keys(obj).reduce((a, b) => obj[a] > obj[b] ? a : b);
}

console.log(mostExpensiveItem({ tv: 30, skate: 20,}))*/

// 93) Usted prepara una lista para enviar a la compañía de seguros. Cuando terminas, te das cuenta de que lo formateaste mal. Dado un objeto con al menos un par clave/valor, convierta todos los valores en números.

/*const convertToNumber=(obj)=> {
	return Object.fromEntries(Object.entries(obj).map(([a,b])=>[a,parseInt(b)]))
}

console.log(convertToNumber({ piano: "200", tv: "300", stereo: "400" }))*/

// 94) El tipo de seguros llama, la póliza que elegiste no cubre valores por debajo de 5000€, no dignificaría tu estatus que dijiste en ese momento. Dado un objeto con una lista de los elementos robados, devolver una copia de esa lista sin los valores por debajo de 5000.

/*const filterValues=(obj)=> {
	return Object.fromEntries(Object.entries(obj).filter(([,item])=>item>=5000))
}

console.log(filterValues({ tv: 4999, guitar:5000, fork: 5001 }))*/

// 95) El chico del seguro se ríe, solo está bromeando. Solo necesita una lista actualizada. Solo necesitas una de esas botellas de Rammstein Vodka. Dado un objeto con bebidas alcohólicas y un número, devuelve una cadena con el nombre de la botella de Rammstein que coincide con el número dado.

/*const getVodkaBottle = (obj, num) =>{
  return Object.keys(obj).find(key => key.includes('Rammstein') && obj[key] === num);
}

console.log(getVodkaBottle({ whiskey: 100, "Rammstein A": 100, "Rammstein B": 50 }, 100))*/



// una funcion que reciba 2 array de la misma long y que devuelva un objeto donde las keys sean los elementos del primer array y los valores los del segundo array

const valObj=(arr,arr2)=>{
	return arr//arr.map((item,index)=>[item,index])
	}
	
	console.log(valObj([a,b,c],[1,2,3]))