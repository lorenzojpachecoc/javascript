// 21) Obtiene una matriz de números, devuelve la suma de todos los positivos. Nota: si no hay nada que sumar, la suma es por defecto 0.


/*const positiveSum=(arr)=> {
  return arr.filter((item)=>item>=0).reduce((a,b)=>a+b,0)
}

console.log(positiveSum([-1,-2,1,5]))*/

// 22) Para completar este Kata, debe crear una función multiplyAll/ multiply_allque tome una matriz de números enteros como argumento. Esta función debe devolver otra función, que toma un único entero como argumento y devuelve una nueva matriz. La matriz devuelta debe consistir en cada uno de los elementos de la primera matriz multiplicados por el número entero.

//Ejemplo: multiplyAll([1, 2, 3])(2) = [2, 4, 6]; No debe mutar la matriz original.

/*const multiplyAll=(numbers)=>{
    return x => numbers.map((item) => item * x)
} 

console.log(multiplyAll([1,2,3]) (3))*/

//23) Tu tarea en este kata es implementar una función que calcule la suma de los números enteros dentro de una cadena. Por ejemplo, en la cadena "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", la suma de los enteros es 3635.

/*const sumOfIntegersInString=(s)=>{
    return (s.match(/\d+/g) || []).reduce((a,b)=>a+ +b,0)
}

console.log(sumOfIntegersInString("The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog"))*/

//24) ¡Los trolls están atacando tu sección de comentarios! Una forma común de lidiar con esta situación es eliminar todas las vocales de los comentarios de los trolls, neutralizando la amenaza. Su tarea es escribir una función que tome una cadena y devuelva una nueva cadena con todas las vocales eliminadas. Por ejemplo, la cadena "¡Este sitio web es para perdedores LOL!" se convertiría en "Ths wbst s fr lsrs LL!". Nota: para este kata yno se considera una vocal.

/*const disemvowel=(str)=>{
    return str.replace(/[aeiou]/gi, '')
}
console.log(disemvowel("This website is for losers LOL!"))*/

//25) El ácido desoxirribonucleico (ADN) es una sustancia química que se encuentra en el núcleo de las células y lleva las "instrucciones" para el desarrollo y funcionamiento de los organismos vivos. En las cadenas de ADN, los símbolos "A" y "T" son complementarios entre sí, como "C" y "G". Su función recibe un lado del ADN (cadena, excepto Haskell); necesitas devolver el otro lado complementario. La hebra de ADN nunca está vacía o no hay ADN en absoluto (de nuevo, a excepción de Haskell). Ejemplo: ( entrada --> salida ) "ATTGC" --> "TAACG" "GTAT" --> "CATA"

const DNAStrand=(dna)=>{
let pairs = {A:'T',T:'A',C:'G',G:'C'};
return dna.replace(/./g, item => pairs[item]);
}

console.log(DNAStrand("ATTGC"))
