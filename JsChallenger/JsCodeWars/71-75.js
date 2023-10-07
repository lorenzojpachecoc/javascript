
// 71) Su tarea es escribir una función llamada valid_spacing()o validSpacing() que verifique si una cadena tiene un espacio válido. La función debe devolver trueo false(o el valor correspondiente en cada idioma). Para este kata, la definición de espaciado válido es un espacio entre palabras, sin espacios iniciales ni finales. Las palabras pueden ser cualquier secuencia consecutiva de caracteres sin espacio. A continuación se muestran algunos ejemplos de lo que debe devolver la función:
/** 'Hello world'   => true
* ' Hello world'  => false
* 'Hello world  ' => false
* 'Hello  world'  => false
* 'Hello'         => true

Even though there are no spaces, it is still valid because none are needed:
* 'Helloworld'    => true
* 'Helloworld '   => false
* ' '             => false
* ''              => true
Nota: no habrá puntuación ni dígitos en la cadena de entrada, solo letras.*/

/*const validSpacing=(s)=>{
    return s.replace(/\s+/g,' ').trim()==s;
}
    console.log(validSpacing(' Hello world'))*/

// 72) El Western Suburbs Croquet Club tiene dos categorías de membresía, Senior y Open. Les gustaría su ayuda con un formulario de solicitud que les dirá a los posibles miembros en qué categoría se colocarán. Para ser senior, un socio debe tener al menos 55 años y tener un hándicap superior a 7. En este club de croquet, los hándicap van de -2 a +26; cuanto mejor sea el jugador, menor será el hándicap. Aporte: La entrada consistirá en una lista de pares. Cada par contiene información para un solo miembro potencial. La información consta de un número entero para la edad de la persona y un número entero para la discapacidad de la persona.Producción: La salida consistirá en una lista de valores de cadena (en Haskell y C: Openo Senior) que indiquen si el miembro respectivo se colocará en la categoría senior o abierta.
/*Ejemplo
input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]*/

/*const openOrSenior=(data)=>{
    return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
  }
    console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]))*/

// 73) Haga un programa que tome un valor (x) y devuelva "Bang" si el número es divisible por 3, "Boom" si es divisible por 5, "BangBoom" si es divisible por 3 y 5, y "Miss" si es divisible por 5. no es divisible por ninguno de ellos. Nota: su programa solo debe devolver un valor.   Ejemplo: Entrada: 105 --> Salida: "BangBoom" Ejemplo: Entrada: 9 --> Salida: "Bang" Ejemplo: Entrada: 25 --> Salida: "Boom"

/*const multiple=(x)=>{
    if (x % 15 == 0) { return "BangBoom"}
    if (x % 5 == 0){ return "Boom"}
    if (x % 3 == 0) {return "Bang"}
    return "Miss"
}
    console.log(multiple(23))*/

    // 74) const people = [
  /*{ name: 'John', age: 23 },
  { name: 'Alice', age: 28 },
  { name: 'Bob', age: 32 }
];
console.log(peopleObj); // Output: { John: 23, Alice: 28, Bob: 32 }
NOTA: usar reduce*/

/*onst peopleObj=(arr)=>{
    return arr.reduce((prev,{name,age})=>( {...prev,[name] : age}),{})
 }
console.log(peopleObj([ { name: 'John', age: 23 },
    { name: 'Alice', age: 28 },
    { name: 'Bob', age: 32 }
  ]))*/

  // 75) const students = [
  /*{ name: 'John', grade: 7 },
  { name: 'Alice', grade: 8 },
  { name: 'Bob', grade: 7 },
  { name: 'Charlie', grade: 8 }
];
console.log(studentsByGrade); // Output: { 7: ['John', 'Bob'], 8: ['Alice', 'Charlie'] }
NOTA : Usar reduce*/

/*const studentsByGrade =(students)=>{
    return students.reduce((prev,{name,grade})=>({
        ...prev,[grade]:students.filter((item)=>item.grade === grade).map((ele)=>ele.name)
       }  
    ),{})
  }
  console.log(studentsByGrade([
    { name: 'John', grade: 7 },
    { name: 'Alice', grade: 8 },
    { name: 'Bob', grade: 7 },
    { name: 'Charlie', grade: 8 }
  ]))*/
