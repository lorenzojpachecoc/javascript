
// 66) Cree un programa que filtre una lista de cadenas y devuelva una lista con solo el nombre de sus amigos. Si un nombre tiene exactamente 4 letras, ¡puede estar seguro de que tiene que ser un amigo suyo! De lo contrario, puede estar seguro de que no es... Ej: Entrada = ["Ryan", "Kieran", "Jason", "Tú"], Salida = ["Ryan", "Tú"] es decir friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"] Nota: mantenga el orden original de los nombres en la salida.

/*const friend=(friends)=>{
    return friends.filter((item)=>item.length==4)
  }

    console.log(friend(["Ryan", "Kieran", "Mark"]))*/

// 67) Implemente una función que acepte 3 valores enteros a, b, c. La función debería devolver verdadero si se puede construir un triángulo con los lados de la longitud dada y falso en cualquier otro caso. (En este caso, todos los triángulos deben tener una superficie mayor que 0 para ser aceptados).   

/*const isTriangle=(a,b,c)=> {
   return Math.max(a,b,c)<(a+b+c)/2
}
    console.log(isTriangle(7,2,2))*/

// 68) Su tarea es crear una función que pueda tomar cualquier número entero no negativo como argumento y devolverlo con sus dígitos en orden descendente. Esencialmente, reorganiza los dígitos para crear el número más alto posible. Ejemplos:
/*Entrada: 42145 Salida:54421
Entrada: 145263 Salida:654321
Entrada: 123456789 Salida:987654321*/

/*const descendingOrder=(n)=>{
  return parseInt(String(n).split('').sort((a,b)=>b-a).join(''))
}

  console.log(descendingOrder(123456789))*/

// 69) Devuelve el número (recuento) de vocales en la cadena dada. Consideraremos a, e, i, o, ucomo vocales para este Kata (pero no y). La cadena de entrada solo constará de letras minúsculas y/o espacios.

/*const getCount=(str)=> {
  return str.replace(/[^aeiou]/g,'').length
}

console.log(getCount("abracadabra"))*/

// 70) ¡Oh, no! El número se ha confundido con el texto. Su objetivo es recuperar el número del texto, ¿puede devolver el número a su estado original? Tarea Su tarea es devolver un número de una cadena. Detalles: Se le dará una cadena de números y letras mezclados, debe devolver todos los números en esa cadena en el orden en que aparecen.

const filterString = (value)=>{
  return Number(value.replace(/[^0-9]/g,''))
}

  console.log(filterString("aa1bb2cc3dd"))