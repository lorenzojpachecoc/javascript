
// 76) const fruits = ['apple', 'banana', 'apple', 'cherry', 'cherry', 'cherry'];           console.log(countFruits); // Output: { apple: 2, banana: 1, cherry: 3 } NOTA: usar reduce

/*const countFruits=(fruits) => {
    return fruits.reduce((prev,currentValue)=>( ( prev[currentValue] = prev[currentValue] +1 || 1 ),prev),{})
}

console.log(countFruits(['apple', 'banana', 'apple', 'cherry', 'cherry', 'cherry'])); // Output: { apple: 2, banana: 1, cherry: 3 }*/

// 77) Cuente el número de ocurrencias de cada carácter y devuélvalo como una (lista de tuplas) en orden de aparición. Para retorno de salida vacío (una lista vacía). Consulte la configuración de la solución para la implementación exacta de la estructura de datos según su idioma.
                                       //revisar
/*const orderedCount=(str)=>{
    return str.split('').reduce((a,b)=>(a[b] ? a[b] +=1 : a[b] =1,a),[])
}
    console.log(orderedCount('abracadabra'))*/

// 78) Escriba una función que resuma una lista, pero ignore cualquier elemento duplicado en la lista. Por ejemplo, para la lista [3, 4, 3, 6], la función debería devolver 10.

/*const sumNoDuplicates=(numList)=> {
    return numList.filter((num,index)=>numList.indexOf(num)===index && numList.lastIndexOf(num)=== index).reduce((a,b)=>a+b,0);
  }

  console.log(sumNoDuplicates([7, 10, 10, 9, 0, 2, 5, 10, 3, 8, 1, 4, 9, 9, 5, 8, 8, 8, 5, 3]))*/

  // 79) Dados tres argumentos ⁠, un objeto objde los artículos robados, la mascota namey un value⁠, devuelve un objeto con ese nombre y valor (como pares clave-valor).
/*Ejemplos
addName({}, "Brutus", 300) ➞ { Brutus: 300 }

addName({ piano: 500 }, "Brutus", 400) ➞ { piano: 500, Brutus: 400 }

addName({ piano: 500, stereo: 300 }, "Caligula", 440) ➞ { piano: 500, stereo: 300, Caligula: 440 }*/

/*const addName=(obj, name, value)=> {
	return {...obj, [name]:value}
}

    console.log(addName({ piano: 500 }, "Brutus", 400))*/

    // 80) Escriba una función que convierta un objeto en una matriz, donde cada elemento representa un par clave-valor en forma de matriz. Ejemplos
/*toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]
toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]
toArray({}) ➞ []  notas: Devuelve una matriz vacía si el objeto está vacío.*/

const toArray=(obj)=> {
	return Object.entries(obj)
}
    console.log(toArray({ a: 1, b: 2 }))