//17) Escribe una función que tome como argumento un objeto que contenga propiedades con información personal. Extraiga el nombre, el apellido, el tamaño y el peso, si están disponibles. Si se proporciona el tamaño o el peso, transforme el valor en una cadena. Adjunte la unidad cm al tamaño. Añada la unidad kg al peso. Devuelve un nuevo objeto con todas las propiedades disponibles que nos interesan

/*
{
    fn: "Lisa",
    ln: "Müller",
    age: 17,
    size: 175,
    weight: 67,
  }
{ fn: 'Lisa', ln: 'Müller', size: '175cm', weight: '67kg' }
*/


//18) Escriba una función que tome una matriz de objetos y una cadena como argumentos. Agregue una propiedad con la clave 'continente' y un valor igual a la cadena para cada uno de los objetos. Devuelve la nueva matriz de objetos. Consejo: trate de no mutar la matriz original

/*[
      { city: "Tokyo", country: "Japan" },
      { city: "Bangkok", country: "Thailand" },
    ],
    "Asia"
[
  { city: 'Tokyo', country: 'Japan', continent: 'Asia' },
  { city: 'Bangkok', country: 'Thailand', continent: 'Asia' }
]*/


//19) Escribe una función que tome una matriz de números como argumento. Convierta la matriz en un objeto. Debe tener una clave para cada valor único de la matriz. El valor del objeto correspondiente debe ser el número de veces que aparece la clave dentro de la matriz.

/*[1, 3, 3, 3, 5, 1, 3,100]
{ '1': 2, '3': 4, '5': 1, '100': 1 }*/