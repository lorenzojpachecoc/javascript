
// 171) Ácido desoxirribonucleico, el ADN es la principal molécula de almacenamiento de información en los sistemas biológicos. Se compone de cuatro bases de ácido nucleico Guanina ('G'), Citosina ('C'), Adenina ('A') y Timina ('T').El ácido ribonucleico, ARN, es la principal molécula mensajera en las células. El ARN difiere ligeramente del ADN en su estructura química y no contiene timina. En el ARN, la timina se reemplaza por otro ácido nucleico, el uracilo ('U'). Cree una función que traduzca una cadena de ADN dada en ARN.

/*const DNAtoRNA = (dna) => {
  return dna.replace(/T/g, 'U')
  }
    console.log(DNAtoRNA("TTTT"))*/

// 172)   
/*1
3     5
7     9    11
13    15    17    19
21    23    25    27    29
...
Calcule la suma de los números en la n- ésima fila de este triángulo (comenzando en el índice 1), por ejemplo: ( Entrada --> Salida )*/

/*const rowSumOddNumbers = (n) => {
	return Math.pow(n, 3)
}
    console.log(rowSumOddNumbers(42))*/

// 173) Completa la función de suma de cuadrados para que eleve al cuadrado cada número que se le pasa y luego suma los resultados. 

/*const squareSum = (numbers) => {
  return numbers .map((item) => Math.pow(item,2)).reduce((prev, cur) => prev+cur, 0)
}
  console.log(squareSum([0, 3, 4, 5]))*/

  // 174) Completa el método que toma un valor booleano y devuelve una "Yes"cadena para trueo una "No"cadena para false.

  /*const boolToWord = (bool) => {
    return bool === true ? 'Yes' : 'No'
  }
    console.log(boolToWord(true))*/

  // 175) Se le proporciona una matriz (que tendrá una longitud de al menos 3, pero podría ser muy grande) que contiene números enteros. La matriz está completamente compuesta por enteros impares o completamente compuesta por enteros pares excepto por un solo entero N. Escriba un método que tome la matriz como argumento y devuelva este "valor atípico" N.

  const findOutlier = (integers) => {
    return 
  }
    console.log(findOutlier([2,6,8,10,3]))