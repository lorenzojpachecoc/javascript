
// 181) Es el final del año académico, momento fatídico de tu informe escolar. Los promedios deben ser calculados. Todos los estudiantes vienen a ti y te suplican que les calcules el promedio. Fácil ! Solo necesitas escribir un guión. Devuelve el promedio de la matriz dada redondeado hacia abajo a su entero más cercano. La matriz nunca estará vacía.

/*const getAverage = (marks) => {
     let result= marks.reduce((prev, cur) => prev+cur)/marks.length
     return Math.floor(result)
  }
    console.log(getAverage([1,1,1,1,1,1,1,2]))*/

// 182) Escriba una función llamada setAlarm que reciba dos parámetros. El primer parámetro, empleado , es verdadero siempre que esté empleado y el segundo parámetro, vacaciones , es verdadero siempre que esté de vacaciones. La función debería devolver verdadero si está empleado y no está de vacaciones (porque estas son las circunstancias en las que necesita configurar una alarma). De lo contrario, debería devolver falso.

/*const setAlarm = (employed, vacation) => {
return employed === true && vacation === false ? true : false
}
    console.log(setAlarm(true, true))*/

// 183) Implemente una función que convierta el valor booleano dado en su representación de cadena. Nota: Solo se darán entradas válidas.

/*const booleanToString = (b) => {
    return b.toString()
  }
    console.log(booleanToString(true))*/

// 184) Dada una lista y un número, cree una nueva lista que contenga cada número listcomo máximo N, sin reordenar.Por ejemplo, si el número de entrada es 2, y la lista de entrada es [1,2,3,1,2,1,2,3], toma [1,2,3,1,2], suelta el siguiente [1,2]ya que esto conduciría a 1y 2estar en los 3tiempos de resultado, y luego toma 3, lo que lleva a [1,2,3,1,2,3]. Con list [20,37,20,21]y number 1, el resultado sería [20,37,21].

/*const deleteNth = (arr,n) => {
  let result= []
  return arr.filter((item) => (result[item] = result[item] + 1 || 1) <= n )
}
        console.log(deleteNth([1,1,3,3,7,2,2,2,2], 3))*/

// 185)) Dados dos números y un operador aritmético (el nombre del mismo, como una cadena), devuelve el resultado de los dos números que tienen ese operador usado en ellos.Hay bambos serán enteros positivos, y asiempre será el primer número de la operación, y bsiempre el segundo. Los cuatro operadores son "sumar", "restar", "dividir", "multiplicar".

/*const arithmetic = (a, b, operator) => {
  switch (operator) {
    case 'subtract' :
    return a - b ;
    case 'add' :
    return a + b ;
    case 'multiply' :
      return a * b ;
    case 'divide' :
      return a / b;
  }
}
  console.log(arithmetic(8, 2, 'subtract'))*/