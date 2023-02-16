
// 56) En este Kata, se le dará una cadena y su tarea será devolver una lista de enteros que detalla el recuento de letras mayúsculas, minúsculas, números y caracteres especiales, de la siguiente manera. Solve("*'&ABCDabcde12345") = [4,5,5,3]. --the order is: uppercase letters, lowercase, numbers and special characters.

/*const solve = (s) => {
    let may = s.match(/[A-Z]/g)
    let min = s.match(/[a-z]/g)
    let num = s.match(/[0-9]/g)
    let sym = s.match(/[^A-Z0-9]/gi)
    return [may.length, min.length, num.length, sym.length]
  }

  console.log(solve('Codewars@codewars123.com'))*/

  // 57) aden Smith, el hijo de Will Smith, es la estrella de películas como The Karate Kid (2010) y After Earth (2013). Jaden también es conocido por parte de su filosofía que transmite a través de Twitter . Cuando escribe en Twitter, es conocido por escribir casi siempre con mayúscula cada palabra. Para simplificar, tendrá que poner cada palabra en mayúsculas, verifique cómo se espera que sean las contracciones en el ejemplo a continuación. Su tarea es convertir las cadenas a cómo las escribiría Jaden Smith. Las cadenas son citas reales de Jaden Smith, pero no están en mayúsculas de la misma forma en que las escribió originalmente. Ejemplo: Not Jaden-Cased: "How can mirrors be real if our eyes aren't real" Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
  
  /*const jadenCase =  (str)=> {
    return str.split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ')
  };

    console.log(jadenCase('How can mirrors be real if our eyes arent real'))*/

    // 58) Si　a = 1, b = 2, c = 3 ... z = 26 Entoncesl + o + v + e = 54 yf + r + i + e + n + d + s + h + i + p = 108 Entonces friendshipes el doble de fuerte que love:-) Tu tarea es escribir una función que calcule el valor de una palabra basándose en la suma de las posiciones alfabéticas de sus caracteres. La entrada siempre se hará solo con letras minúsculas y nunca estará vacía.
// por resolver
    
    /*const wordsToMarks=(string)=>{
  return string
}

  console.log(wordsToMarks('attitude'))*/

  // 59) Los cajeros automáticos permiten códigos PIN de 4 o 6 dígitos y los códigos PIN no pueden contener nada más que exactamente 4 dígitos o exactamente 6 dígitos.Si a la función se le pasa una cadena de PIN válida, devuelva true, de lo contrario, devuelva false.
/*Ejemplos ( Entrada --> Salida)
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false*/

/*const validatePIN= (pin) =>{
  return /^(\d{4}|\d{6})$/.test(pin)
}

  console.log(validatePIN('1234'))*/

//60) Dada una lista 2D (anidada) (matriz, vector, ..) de tamaño m * n, su tarea es encontrar la suma de los valores mínimos en cada fila. Por ejemplo: [ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1, [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5 , [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20] Entonces la función debería regresar 26porque la suma de los mínimos es 1 + 5 + 20 = 26. Nota: Siempre se le dará una lista no vacía que contiene valores positivos.

const sumOfMinimums=(arr)=> {
  return arr.reduce((a, b) => a + Math.min(...b), 0);
}

console.log(sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]))

