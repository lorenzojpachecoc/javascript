
// 131) Dada una matriz mixta de números y cadenas de representaciones de enteros, sume los enteros que no son cadenas y reste el total de los enteros de cadena. Devuelve como un número.

/*const divCon=(x)=>{
 return x.reduce((prev,cur) => typeof cur === 'number' ? prev+cur : prev - Number(cur), 0)
}

console.log(divCon([9, 3, '7', '3']))*/

// 132) Dada una matriz bidimensional de enteros, devuelva la versión aplanada de la matriz con todos los enteros en orden ordenado (ascendente)

/*const flattenAndSort=(arr)=>{
  return arr.flat().sort((a,b)=> a-b)
}
    console.log(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]))*/

// 133) Un isograma es una palabra que no tiene letras repetidas, consecutivas o no consecutivas. Implemente una función que determine si una cadena que contiene solo letras es un isograma. Suponga que la cadena vacía es un isograma. Ignorar mayúsculas y minúsculas. Ejemplo: (Entrada --> Salida) "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignorar mayúsculas y minúsculas)

/*const isIsogram=(str)=>{
    return !/(\w).*\1/i.test(str)
  }

  console.log(isIsogram("Dermatoglyphics"))*/

// 134) Estás escribiendo una función que toma dos conjuntos de argumentos de longitud arbitraria. El valor devuelto será la suma de los valores de todos los argumentos. La función debe contener al menos 1 argumento por conjunto.
                    //POR RESOLVER
const calculate =(...num1)=> {
    return (...num2) => [...num1,...num2].reduce((prev,cur)=> prev+cur)
    //
 //
}
    console.log(calculate(1,1)(1))
    //console.log(calculate((1,1)(1)))

    /*const calculate = (...a) =>{
        return (...b) => [...a, ...b].reduce((pre,cur)=> pre + cur);
      }
    
      console.log(calculate(1,1)(1))*/

// 135) En este kata, creará una función que toma una lista de enteros y cadenas no negativos y devuelve una nueva lista con las cadenas filtradas.

/*const filter_list=(l)=> {
    return l.filter((item)=> typeof item==='number')
  }

  console.log(filter_list([1,2,'a','b']))*/