
// 46) Tome 2 cadenas s1e s2incluya solo letras de aa z. Devuelve una nueva cadena ordenada , la más larga posible, que contiene letras distintas, cada una tomada solo una vez, provenientes de s1 o s2.
/*Ejemplos:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"
a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"*/

/*const longest=(s1, s2)=> {
    return (s1+s2).split('').sort().join('').replace()
  }

  console.log(longest("aretheyhere", "yestheyarehere"))*/

// 47) Convierte un hash en una matriz. Nada más y nada menos. {name: 'Jeremy', age: 24, role: 'Software Engineer'} debe ser convertido en [["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]. Nota : la matriz de salida debe ordenarse alfabéticamente por nombre de clave.

/*const convertHashToArray=(hash)=>{
   return Object.entries(hash).sort()
  }

  console.log(convertHashToArray({product: "CodeWars", powerLevelOver: 9000}))*/

// 48) Implemente la función que debe regresar truesi el objeto dado es una vocal (es decir a, e, i, o, u, mayúscula o minúscula), y de falselo contrario.

  const vowel=(str)=>{
    return str.split('').every((item)=>item===/[aeiou]/gi)
  }

  console.log(vowel('a'))