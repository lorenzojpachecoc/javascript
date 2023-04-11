
// 151) Complete la función/método para que devuelva la url con algo después de  quitar el ancla (#).

/*const removeUrlAnchor = (url) => {
    return url.split('#')[0]
  }
    console.log(removeUrlAnchor('www.codewars.com#about'))*/

    // 152) Escriba un método simple .camelCase ( camel_casefunción en PHP, CamelCaseen C# o camelCaseen Java) para cadenas. Todas las palabras deben tener su primera letra en mayúscula sin espacios.

    /*const camelCase = (str) => {
      return str.split(' ').map((item)=>item.slice(0,1).toUpperCase() + item.slice(1)).join('')
    }
      console.log(camelCase('camel case word'))*/

    // 153) Dada una cadena de longitud arbitraria con cualquier carácter ascii. Escriba una función para determinar si la cadena contiene la palabra completa "inglés". El orden de los caracteres es importante: una cadena "abcEnglishdef" es correcta pero "abcnEglishsef" no lo es. No importa la letra mayúscula o minúscula; "eNglisH" también es correcto. Devuelve el valor como valores booleanos, verdadero para que la cadena contenga "inglés", falso para que no lo contenga.

    /*const spEng = (sentence) =>{
     let result= sentence.toLowerCase();
  return result.includes('english');
}

    console.log(spEng("egnlish"))*/

    // 154) Su tarea es hacer dos funciones ( maxand min, or maximumand minimum, etc., dependiendo del idioma ) que reciban una lista de enteros como entrada y devuelvan el número más grande y más bajo en esa lista, respectivamente.

   /*const min = (list1) => {
    
      return Math.min(...list1);
  }
  
  const max = (list2) => {
      
      return Math.max(...list2);
  }
    console.log(max([-52, 56, 30, 29, -54, 0, -110]))*/

    // 155) Se le dará una serie de números. Tienes que ordenar los números impares en orden ascendente y dejar los números pares en sus posiciones originales.

    const sortArray = (arr) => {
      let result= arr.filter((item)=> item % 2).sort((a,b)=> a - b)
        return arr.map((elem) => elem % 2 ? result.shift() : elem)
    }

      console.log(sortArray([5, 3, 2, 8, 1, 4]))