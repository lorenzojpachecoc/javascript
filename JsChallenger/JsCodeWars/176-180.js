
// 176) Dada una cadena, debe devolver una cadena en la que cada carácter (sensible a mayúsculas y minúsculas) se repite una vez.
/*Ejemplos (Entrada -> Salida):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
¡Buena suerte!*/

/*const doubleChar = (str) => {
    return str.split('').map((item) => item.repeat(2)).join('')
  }
    console.log(doubleChar('Adidas'))*/

// 177) Estabas acampando con tus amigos lejos de casa, pero cuando llega el momento de volver, te das cuenta de que se te está acabando el combustible y que el surtidor más cercano está a 50kilómetros de distancia. Usted sabe que, en promedio, su auto funciona con unas 25millas por galón. Quedan 2galones. Teniendo en cuenta estos factores, escribe una función que te diga si es posible llegar a la bomba o no. La función debería regresar truesi es posible y falsesi no.

/*const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return (mpg * fuelLeft) >= distanceToPump ? true : false
}
    console.log(zeroFuel(50, 25, 2))*/

// 178) Soy nuevo en la codificación y ahora quiero obtener la suma de dos matrices... En realidad, la suma de todos sus elementos. Agradeceré tu ayuda. PS Cada matriz incluye solo números enteros. La salida también es un número.

/*const arrayPlusArray = (arr1, arr2) => {
    return arr1.concat(arr2).reduce((prev, cur) => prev+cur)
  }
    console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]))*/

// 179) ¡Es tiempo extra en la gran ciudad! Los gatos gordos se frotan las patas con anticipación... pero ¿quién va a ganar más dinero? Cree una función que tome dos argumentos (salario, bonificación). El salario será un número entero y la bonificación un valor booleano. Si el bono es verdadero, el salario debe multiplicarse por 10. Si el bono es falso, el gordo no ganó suficiente dinero y debe recibir solo el salario declarado. Devuelve la cifra total que recibirá la persona como una cadena con el prefijo "£" (= "\u00A3", JS, Go, Java, Scala y Julia)

/*const bonusTime = (salary, bonus) => {
    return bonus === true ? `£${salary*10}` : `£${salary}`
    }
        console.log(bonusTime(10000, true))*/

// 180) Jenny ha escrito una función que devuelve un saludo a un usuario. Sin embargo, está enamorada de Johnny y le gustaría saludarlo un poco diferente. Agregó un caso especial a su función, pero cometió un error. ¿Puedes ayudarla?

const greet = (name) => { 
    if(name === "Johnny")
      return "Hello, my love!";
    return `Hello, ${name}!`
}

    console.log(greet('Johnny'))