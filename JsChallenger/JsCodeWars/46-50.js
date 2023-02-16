
// 46) Tome 2 cadenas s1e s2incluya solo letras de a a z. Devuelve una nueva cadena ordenada , la más larga posible, que contiene letras distintas, cada una tomada solo una vez, provenientes de s1 o s2.
/*Ejemplos:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"
a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"*/

/*const longest=(s1, s2)=> {
  let arr= (s1+s2).split('').sort()
    return [...new Set(arr)].join('')
  }

  console.log(longest("aretheyhere", "yestheyarehere"))*/

// 47) Convierte un hash en una matriz. Nada más y nada menos. {name: 'Jeremy', age: 24, role: 'Software Engineer'} debe ser convertido en [["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]. Nota : la matriz de salida debe ordenarse alfabéticamente por nombre de clave.

/*const convertHashToArray=(hash)=>{
   return Object.entries(hash).sort()
  }

  console.log(convertHashToArray({product: "CodeWars", powerLevelOver: 9000}))*/

// 48) Implemente la función que debe regresar true si el objeto dado es una vocal (es decir a, e, i, o, u, mayúscula o minúscula), y de false lo contrario.

  /*const vowel=(str)=>{
    return str.match(/[aeiou]/gi) && str.length <= 1 ? true : false
  }

  console.log(vowel('i'))*/

  // 49) Esta vez sin historia, sin teoría. Los siguientes ejemplos le muestran cómo escribir la función accum:
/*Ejemplos:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
El parámetro de accum es una cadena que incluye solo letras de a..zy A..Z.*/

/*const accum=(s)=> {
	return s.split('').map((a,index)=>(a.toUpperCase()+a.toLowerCase().repeat(index))).join('-')
}
  console.log(accum("ZpglnRxqenU"))*/

  // 50) Simple, dada una cadena de palabras, devuelve la longitud de la(s) palabra(s) más corta(s). La cadena nunca estará vacía y no es necesario tener en cuenta los diferentes tipos de datos.

  const findShort=(s)=>{
      return Math.min(...s.split(" ").map ((s) => s.length))
  }

  console.log(findShort("bitcoin take over the world maybe who knows perhaps"))