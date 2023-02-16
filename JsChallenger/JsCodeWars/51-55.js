
// 51) Dada una lista de enteros, determina si la suma de sus elementos es par o impar. Da tu respuesta como una coincidencia de cadenas "odd"o "even". Si la matriz de entrada está vacía, considérela como: [0](matriz con cero).

/*const oddOrEven=(array)=> {
    return array.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
 }
 console.log(oddOrEven([0, 1, 5]))*/

 // 52) Complete la solución para que devuelva verdadero si el primer argumento (cadena) pasado termina con el segundo argumento (también una cadena).
/* Examples:
solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false*/

/*const solution=(str, ending)=>{
     return str.endsWith(ending)
  }
  console.log(solution('abcde', 'abc'))*/

// 53) La función debe devolver la versión truncada de la cadena dada hasta el límite dado seguido de "..."si el resultado es más corto que el original. Devuelve la misma cadena si no se truncó nada.
/*Ejemplo:
solution('Testing String', 3) --> 'Tes...'
solution('Testing String', 8) --> 'Testing ...'
solution('Test', 8)           --> 'Test'*/

/*const solutio=(string,limit)=>{
   return string.length > limit ? string.slice(0, limit) + '...' : string
}
    console.log(solutio('Testing String', 8))*/

// 54) Dado un array de correos electrónicos. Retornar un obj por cada usuario con las propiedades nombre ,correo y clave. Nota el nombre debe ser  extraido de cada correo y la clave  es la longitud de el nombre multiplicada por el numero en el correo. si el correo no tiene numro solo coloca la longitud ["Kenier22@gmail.com", "Josué32@gmail.com","oliver47@gmail.com","Francisco@gmail.com"]

/*const user=(arr)=>{
    let arr1= arr.map((item)=>item.replace('@gmail.com','').replace(/[0-9]/gi,''))
 return arr1
}
    console.log(user(["Kenier22@gmail.com", "Josue32@gmail.com","oliver47@gmail.com","Francisco@gmail.com"]))*/


// 55) DESCRIPCIÓN: Un palíndromo es una palabra, frase, número u otra secuencia de símbolos o elementos, cuyo significado puede interpretarse de la misma manera hacia adelante o hacia atrás. Ejemplos famosos incluyen "Amore, Roma", "Un hombre, un plan, un canal: Panamá" y "No 'x' en 'Nixon'". - wikipedia. Nuestro objetivo es determinar si una cadena determinada es un palíndromo válido o no. Al igual que los ejemplos anteriores, aquí hay algunos casos de prueba que también se completan:
/*"Amore, Roma" => valid
"A man, a plan, a canal: Panama" => valid
"No 'x' in 'Nixon'" => valid
"Abba Zabba, you're my only friend" => invalid
Puede ver que no distinguen entre mayúsculas y minúsculas y no tienen en cuenta los caracteres no alfanuméricos. Además de algunas pruebas predefinidas, su función también se probará contra un generador de cadenas aleatorias 50 veces, lo que garantiza que producirá palíndromos válidos.
Notas : La cadena vacía ""se puede leer hacia adelante o hacia atrás de la misma manera, es un palíndromo en nuestro caso.*/

const palindrome=(string)=> {
    let str2= string.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')
    let str3=str2.split('').reverse().join('')
    return str3 === str2
  }

  console.log(palindrome("Madam? I'm Adam!"))


  // 

