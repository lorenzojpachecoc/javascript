// 1. Cree una función que tome un número entero como argumento y devuelva números "Even"pares o "Odd"impares.

// const evenOrOdd = (number) => {
//   return number%2 == 0 ? 'Even' : 'Odd'
// }

// console.log(evenOrOdd(4))

    // 2. Complete el método que toma un valor booleano y devuelve una "Yes"cadena para true, o una "No"cadena para false.

// const boolToWord = ( bool ) => {
//     return bool == true ? 'Yes' : 'No'
//   }

//   console.log(boolToWord(false))

        // 3. Dado un número aleatorio no negativo, debes devolver los dígitos de este número dentro de una matriz en orden inverso.

        // const digitize = (n) => {
        //     return String(n).split('').map(Number).reverse()
        //   }

        //   console.log(digitize(35231))

            // 4. Escribe un programa que encuentre la suma de cada número del 1 al num. El número siempre será un entero positivo mayor que 0.

//  const summation = (num) => {
//     return num * (num + 1) / 2
//  }

//     console.log(summation(8))

                // 5. Función de los goles de Messi. Messi es un futbolista con goles en tres ligas: La Liga, Copa del Rey, Campeones. 
                //Completa la función para devolver su número total de goles en las tres ligas. Nota: la entrada siempre será válida.

                // const goals = (laLigaGoals, copaDelReyGoals, championsLeagueGoals) => {
                //     return laLigaGoals+copaDelReyGoals+championsLeagueGoals
                //   }

                //   console.log(goals(43,10,5))

                        // 6. En esta sencilla tarea te dan un número y tienes que hacerlo negativo. ¿Pero tal vez el número ya sea negativo?
                        // El número ya puede ser negativo, en cuyo caso no se requiere ningún cambio. El cero (0) no se verifica para ningún signo específico. Los ceros negativos no tienen sentido matemático.

                        const makeNegative = (num) => {
                            return num < 0 ? num : -num
                          }

                          console.log(makeNegative(-40))