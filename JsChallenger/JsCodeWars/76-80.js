
// 76) const fruits = ['apple', 'banana', 'apple', 'cherry', 'cherry', 'cherry'];           console.log(countFruits); // Output: { apple: 2, banana: 1, cherry: 3 } NOTA: usar reduce

/*const countFruits=(fruits) => {
    return fruits.reduce((prev,currentValue)=>( ( prev[currentValue] = prev[currentValue] +1 || 1 ),prev),{})
}

console.log(countFruits(['apple', 'banana', 'apple', 'cherry', 'cherry', 'cherry'])); // Output: { apple: 2, banana: 1, cherry: 3 }*/

// 77) Cuente el número de ocurrencias de cada carácter y devuélvalo como una (lista de tuplas) en orden de aparición. Para retorno de salida vacío (una lista vacía). Consulte la configuración de la solución para la implementación exacta de la estructura de datos según su idioma.
                                       //revisar
/*const orderedCount=(str)=>{
    return str.split('').reduce((a,d)=>(a[d] ? a[d] +=1 : a[d] =1,a),[])
}
    console.log(orderedCount('abracadabra'))*/

// 78) Escriba una función que resuma una lista, pero ignore cualquier elemento duplicado en la lista. Por ejemplo, para la lista [3, 4, 3, 6], la función debería devolver 10.

const sumNoDuplicates=(numList)=> {
    return numList.filter((num,index)=>numList.indexOf(num)===index && numList.lastIndexOf(num)=== index).reduce((a,b)=>a+b,0);
  }

  console.log(sumNoDuplicates([7, 10, 10, 9, 0, 2, 5, 10, 3, 8, 1, 4, 9, 9, 5, 8, 8, 8, 5, 3]))

  // 79)
