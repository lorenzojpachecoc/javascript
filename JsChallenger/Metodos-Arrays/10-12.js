//10) animales domesticos o salvajes. Cree un programa que filtre una lista de cadenas y devuelva una lista con solo el nombre de los animales domésticos.Si un nombre tiene exactamente 5 letras, ¡puede estar seguro de que ese animal lo puedes tener en casa! De lo contrario,  puede estar seguro de que no es seguro ni legal... 
//Ej: Entrada = ["Perro", "Leon", "Araña", "Tiburon"]

const animalesEnCasa= (domesticos) =>{
   let result= domesticos.filter(item=>item.length==5)
   return result

}

console.log(animalesEnCasa(["Perro", "Leon", "Araña", "Tiburon"]))

//11) Escribe una funcion que reciba un array de las edades de 10 compañeros de clases, necesitamos comprobar si alguno de ellos es mayor de edad (18años)

const estudiantes=(ages)=>{
    let result= ages.some((item)=>item>=18)
    return result

}

console.log(estudiantes([15,16,17,14,13,18]))

//12) Existen, en un arreglo, 5 notas de los estudiantes de 9no grado tuvieron un error, por ello que es necesario sumarles a cada una 2 puntos adicionales. crea una funcion que devuelva un arreglo con la correcion de todas esas notas

const error=(notas)=>{
    let result= notas.map((item)=>item+2)
    return result
}

console.log(error([10,14,16,18,12]))