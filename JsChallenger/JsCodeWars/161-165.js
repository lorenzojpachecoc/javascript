
// 161) En esta sencilla tarea se te da un número y tienes que hacerlo negativo. ¿Pero tal vez el número ya es negativo?

/*const makeNegative = (num) => {
    return num > 0 ? num * -1 : num
  }
        console.log(makeNegative(42))*/

// 162) Dada una cadena de palabras, debe encontrar la palabra con la puntuación más alta. Cada letra de una palabra puntúa según su posición en el alfabeto: a = 1, b = 2, c = 3etc. Por ejemplo, la puntuación de abades 8(1 + 2 + 1 + 4). Debe devolver la palabra con la puntuación más alta como una cadena. Si dos palabras tienen la misma puntuación, devuelve la palabra que aparece primero en la cadena original. Todas las letras serán minúsculas y todas las entradas serán válidas.

/*const high = (x) => {
    let result= x.split(' ').map((item) => [...item].reduce((a,b)=>a+b.charCodeAt(0)-96,0))
    return x.split(' ')[result.indexOf(Math.max(...result))]
}
    console.log(high('man i need a taxi up to ubud'))*/

// 163) Dada una matriz de enteros. Devuelve una matriz, donde el primer elemento es el recuento de números positivos y el segundo elemento es la suma de números negativos. 0 no es ni positivo ni negativo. Si la entrada es una matriz vacía o es nula, devuelve una matriz vacía

/*const countPositivesSumNegatives = (input) => {
    return (input && input.length) ? [
          input.filter(x => x > 0).length,
          input.reduce((t, c) => c < 0 ? t + c : t, 0)
        ] : []
    }
        console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))*/

// 164) Dada una matriz de enteros como cadenas y números, devuelva la suma de los valores de la matriz como si todos fueran números. Devuelve tu respuesta como un número. 

const sumMix = (x) => {
 return x.map((item) => +item).reduce((prev,cur)=> prev+cur)
}
    console.log(sumMix([9, 3, '7', '3']))

// 165) ¡Todos los animales están teniendo un festín! Cada animal trae un plato. Solo hay una regla: el plato debe comenzar y terminar con las mismas letras que el nombre del animal. Por ejemplo, la gran garza azul trae pan de ajo y el carbonero trae pastel de chocolate.Escribe una función feastque tome el nombre del animal y el plato como argumentos y devuelva verdadero o falso para indicar si la bestia puede llevar el plato al banquete.Suponga que beasty dishsiempre son cadenas en minúsculas y que cada una tiene al menos dos letras. beasty dishpuede contener guiones y espacios, pero estos no aparecerán al principio o al final de la cadena. No contendrán numerales.

/*const feast = (beast, dish) => {
	return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
}
    console.log(feast('great blue heron', 'garlic naan'))*/