// 1) Cree una función que tome un número entero como argumento y regrese "Even"para números pares o "Odd"para números impares.

/*const wholeNumber=(num)=>{
    if ((num%2)==0){
        return 'Even'
    }
    else{
        return 'Odd'
    }

}

console.log(wholeNumber(8))*/

// 2) Es bastante sencillo. Su objetivo es crear una función que elimine el primer y el último carácter de una cadena. Se le da un parámetro, la cadena original. No tiene que preocuparse por cadenas con menos de dos caracteres.

/*const deletStr =(a)=>{
    let result= a.slice(1,-1)
    return result
    
}

console.log(deletStr('Camarones'))*/

// 3) ¿Puedes encontrar la aguja en el pajar?

/*Escriba una función findNeedle()que tome un arraymontón de basura pero que contenga uno"needle"

Después de que su función encuentre la aguja, debería devolver un mensaje (como una cadena) que dice:

"found the needle at position "además indexencontró la aguja, así que:

Ejemplo (Entrada --> Salida)

["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
Nota: En COBOL, debería devolver "found the needle at position 6"*/

/*const findNeedle=(arr)=>{
    let needle= arr.indexOf('needle')
    return (`found the needle at position ${needle}`)
}

console.log(findNeedle(['needle','hay', "jun", "hay", "hay", "moreJunk", "nee", "randomJunk"]))*/

// 4) Escriba una función que acepte un número entero n y una cadena s como parámetros, y devuelva una cadena de s veces repetidas exactamente n.

/*const toRepeat=(n, s)=>{
    return s.repeat(n)
}

console.log(toRepeat(2,'Bye'))*/

// 5) Complete la solución para que invierta la cadena que se le pasó.

/*const invertedWord=(str)=>{
    return (str.split('')).reverse().join('')
}
    console.log(invertedWord('world'))*/

// crear una funcion que resiva un array de string como parametro y debe devolver un array de objeto con las propiedades keys: palabra, longitud y mensaje. En la palabra contendrá el string del array, en la longitud la longitud del elemento y el mensaje deberá decir si la longitud es >10 'es muy largo' y no lo es: 'estandar'

/*const arrObj=()=>{

}

console.log(arrObj(['Oliver', 'estructuras', 'algoritmos', 'estamostrabajando']))*/

const myArr=(arr)=>{
 return arr[Math.floor(Math.random() * (Math.floor(array.length) - Math.ceil(0) ) + Math.ceil(0))];
}

console.log(myArr('ANA',{name:jose}))