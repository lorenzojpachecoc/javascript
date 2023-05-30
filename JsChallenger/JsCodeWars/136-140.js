
// 136) Complete la solución para que devuelva la cantidad de veces que se encuentra el texto_buscado dentro del texto_completo.

/*const solution = (fullText, searchText) => {
  return fullText.split(searchText).length-1
}
    console.log(solution('abcdebabdrb','b'))*/

// 137) Crea una función que responda a la pregunta "¿Estás tocando el banjo?". Si tu nombre comienza con la letra "R" o "r" minúscula, ¡estás tocando el banjo! La función toma un nombre como único argumento y devuelve una de las siguientes cadenas: name + " plays banjo", name + " does not play banjo". Los nombres dados son siempre cadenas válidas.

/*const areYouPlayingBanjo = (name) => {
    return name[0].toLowerCase().includes('r') ? `${name} plays banjo`: `${name} does not play banjo`
  }
    console.log(areYouPlayingBanjo('bravo'))*/

 // 138) Complete la solución para que invierta todas las palabras dentro de la cadena pasada. Las palabras están separadas por exactamente un espacio y no hay espacios iniciales ni finales.

 /*const reverseWords = (str) => {
    return str.split(' ').reverse().join(' ')
  }
    console.log(reverseWords('hello world!'))*/

// 139) Probablemente conozcas el sistema de "me gusta" de Facebook y otras páginas. Las personas pueden "gustar" publicaciones de blog, imágenes u otros elementos. Queremos crear el texto que debe mostrarse junto a dicho elemento. Implemente la función que toma una matriz que contiene los nombres de las personas a las que les gusta un artículo. Debe devolver el texto de la pantalla como se muestra en los ejemplos:

const likes = (names) => {
    names = names || [];
    switch(names.length){
      case 0: return 'no one likes this'; break;
      case 1: return `${names[0]} likes this`; break;
      case 2: return `${names[0]} and ${names[1]} like this`; break;
      case 3: return `${names[0]} , ${names[1]} and ${names[2]} like this`; break;
      default: return 
    }
  }

    console.log(likes(['Max']))

// 140) La raíz digital es la suma recursiva de todos los dígitos de un número. Dado n, tome la suma de los dígitos de n. Si ese valor tiene más de un dígito, continúe reduciendo de esta manera hasta que se produzca un número de un solo dígito. La entrada será un número entero no negativo.

/*const digitalRoot = (n) => {
  let result= String(n).split('').map((item)=>Number(item)).reduce((prev,cur)=> prev+cur)
  return String(result).split('').map((item)=>Number(item)).reduce((prev,cur)=> prev+cur)
}
        console.log(digitalRoot(57988))*/

        // while: result.length!=2