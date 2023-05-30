// 16) Te dan dos ángulos interiores (en grados) de un triángulo. Escriba una función para devolver el 3er. Nota: solo se probarán los números enteros positivos.

/*const triangle=(ang1,ang2,angt)=>{
 return angt- (ang1+ang2)
}

console.log(triangle(60,60,180))*/

// 17) Timmy y Sarah creen que están enamorados, pero en el lugar donde viven, solo lo sabrán una vez que recojan una flor cada uno. Si una de las flores tiene un número par de pétalos y la otra tiene un número impar de pétalos, significa que están enamorados. Escribe una función que tome el número de pétalos de cada flor y devuelva verdadero si están enamorados y falso si no lo están.

/*const love=(flowersT,flowersS)=>{
    return flowersT%2!== flowersS%2

}
    console.log(love(3,4))*/

// 18) El caracol se arrastra por la columna. Durante el día se arrastra hasta cierta distancia. Durante la noche duerme, por lo que se desliza hacia abajo una cierta distancia (menos de lo que se arrastra durante el día). Su función toma tres argumentos:  La altura de la columna (metros. La distancia que el caracol se arrastra durante el día (metros). La distancia que resbala el caracol durante la noche (metros). Calcula el número de días en que el caracol llegará a la parte superior de la columna.

/*function snail(column, day, night) {
   let days = 1  
  for (let i = day; i < column; i = i + day){
    i = i - night
    days++
  }
  return days;
}  
console.log(snail(10, 3, 2))*/

// OTRO CAMINO
/*const snail = (col, day, night) => Math.ceil((col - day) / (day - night) + 1);*/
//col - day = distancia a recorrer pues el ultimo dia no hay descenso
//day - night = ascenso total en un dia
//col - day / day - night  +1 = se divide la cantidad de dias a recorrer entre el ascenso diario + 1 que es el dia que ascendemos y no bajamos

// 19) El primer siglo abarca desde el año 1 hasta el año 100 inclusive , el segundo siglo - desde el año 101 hasta el año 200 inclusive , etc. Dado un año, devuelve el siglo en el que se encuentra. Ejemplos 1705 --> 18, 1900 --> 19, 1601 --> 17, 2000 --> 20

/*const century=(year)=>{
    return Math.ceil(year/100)
}
    console.log(century(1601))*/

// 20) El famoso Capitán Schneider te ha dado una misión muy sencilla. Cualquier dato que llegue a través del sistema se asegura de que solo los caracteres no especiales vean la luz del día.Cree una función que, dada una cadena, retenga solo las letras AZ (mayúsculas y minúsculas), 0-9 dígitos y espacios en blanco. Además, devuelve "¡No es una cadena!" si el tipo de entrada no es una cadena.

const nothingSpecial= (str) => {
   return typeof str === 'string' ? str.replace(/[^a-z\d\s]/gi, '') : 'Not a string!'
  }

console.log(nothingSpecial('%^Take le$ft ##quad%r&a&nt'))