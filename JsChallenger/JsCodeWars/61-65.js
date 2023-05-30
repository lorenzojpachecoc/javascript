
//61) crear una funcion que reciba una contrasena y un numero y retornar un string con la contrasena + la string de simbolos con la misma longitud del numero generados al azar: contrasena,5 ----> contrasena&+$#&

/*const keyString=(passw,num)=>{
    let characters=[...'*|@#$%&?/!'].sort(()=> Math.random()>0.5 ? 1 : -1).slice(0,num).join('')
    return passw+characters
}   
    console.log(keyString('constrasena', 5))*/


    // 62) Bienvenidos. En este kata, se le pide que eleve al cuadrado cada dígito de un número y los concatene. Por ejemplo, si ejecutamos 9119 a través de la función, saldrá 811181, porque 9 2 es 81 y 1 2 es 1. Nota: La función acepta un número entero y devuelve un número entero

    /*const exp=(num)=>{
        return parseInt(String(num).split('').map((item)=>Math.pow(item,2)).join(''))
    }

    console.log(exp(9119))*/

    // 63) escriba una funcion que recibA un string como parametro, si el string que recibe la funcion es si debera retornar 'culpable' en caso contrario inocente

    /*const loop=(str)=>{
        return str==='si' ? 'culpable' : 'inocente'
    }

    console.log(loop('no'))*/

// 64) Escriba una función que devuelva el número de ocurrencias de un elemento en una matriz.Esta función se definirá como una propiedad de Array con la ayuda del método Object.defineProperty, que permite definir un nuevo método directamente en el objeto (puede encontrar más información al respecto en MDN ). Ejemplos
/*var arr = [0, 1, 2, 2, 3];
arr.numberOfOccurrences(0) === 1;
arr.numberOfOccurrences(4) === 0;
arr.numberOfOccurrences(2) === 2;
arr.numberOfOccurrences(3) === 1;*/

const numberOccu=(arr,num)=> {
    return arr.reduce((prev,cur) => (cur === num ? prev+1 : prev) , 0)
  }

  console.log(numberOccu([0, 1, 2, 2, 3],3))

// 65) Su objetivo en este kata es implementar una función de diferencia, que resta una lista de otra y devuelve el resultado. Debe eliminar todos los valores de la lista a, que están presentes en la lista bmanteniendo su orden. arrayDiff([1,2],[1]) == [2]. Si un valor está presente en b, todas sus ocurrencias deben eliminarse del otro: arrayDiff([1,2,2,2,3],[2]) == [1,3]

/*const arrayDiff=(a, b)=> {
  return a.filter((item) => !b.includes(item))
}

console.log(arrayDiff([], [1,2]))*/