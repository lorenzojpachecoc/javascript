// 6) Hay una oferta de "3 por 2" (o "2+1" si lo prefiere) en mangos. Para una cantidad y precio dados (por mango), calcule el costo total de los mangos.

/*const mangos=(a,b)=>{
 return b *(a-Math.floor(a/b))
}

console.log(mangos(5,3))*/

// 7) Dada una matriz no vacía de enteros, devuelva el resultado de multiplicar los valores en orden. 

/*const enteros=(arr)=>{
 return arr.reduce((a,b)=>a*b)
}

console.log(enteros([2,3,4,1,5]))*/

// 8) Dada una matriz de enteros, devuelva una nueva matriz con cada valor duplicado.

/*const integers=(arr)=>{
return arr.map((item)=>item*2)
}

console.log(integers([1, 2, 3]))*/

// 9) ¡Oh, no, Timmy ha creado un bucle infinito! ¡Ayuda a Timmy a encontrar y corregir el error en su ciclo for incompleto!

/*const createArray=(number)=>{
    let newArray = [];
    
    for(let counter =1; counter <= number; counter++){
      newArray.push(counter);
    }
    
    return newArray;
  } 
  console.log(createArray([0,1]))*/

  // 10) Dado un mes como un número entero del 1 al 12, devuelva a qué trimestre del año pertenece como un número entero. Por ejemplo: el mes 2 (febrero), forma parte del primer trimestre; el mes 6 (junio), forma parte del segundo trimestre; y el mes 11 (noviembre), forma parte del cuarto trimestre.

  const trimester=(month)=>{
    return Math.ceil(month/3)

  }

  console.log(trimester(10))