// 11) El reloj muestra hhoras, mminutos y ssegundos después de la medianoche. Su tarea es escribir una función que devuelva el tiempo desde la medianoche en milisegundos.

/*const reloj=(h,m,s)=>{
    return ((3600*h)+(60*m)+s)*1000

  }

  console.log(reloj(0,1,1))*/

// 12) Escriba la función bmi que calcula el índice de masa corporal (bmi = peso / altura 2 ). si bmi <= 18.5 devuelve "Bajo peso". si bmi <= 25.0 devuelve "Normal". si bmi <= 30.0 devuelve "Sobrepeso". si bmi > 30 devolver "Obeso"

/*const bmi=(weight, height)=>{
    if(weight/Math.pow(height,2)<=18.5){
        return 'BAJO PESO'
    }
    if(weight/Math.pow(height,2)<=25){
        return 'NORMAL'
    }
    if(weight/Math.pow(height,2)<=30){
        return 'SOBREPESO'
    }
    if(weight/Math.pow(height,2)>30){
        return 'OBESO'
    }
}

console.log(bmi(70,1.5))*/

// 13) Dado un conjunto de números, devuelve el inverso aditivo de cada uno. Cada positivo se vuelve negativo, y los negativos se vuelven positivos.

/*const invert=(arr)=>{
    return arr.map((item)=>-item)

  }

  console.log(invert([1,-2,3,-4,5]))*/

  // 14) Si no puedes dormir, solo cuenta ovejas!! Tarea: Dado un entero no negativo, 3por ejemplo, devolver una cadena con un murmullo: "1 sheep...2 sheep...3 sheep...". La entrada siempre será válida, es decir, no habrá números enteros negativos.

  /*const strSheep=(num)=>{
    let result= ''
    for(let i=1;i<=num;i++){
        result += `${i} sheep...`
    }
    return result

  }
  console.log(strSheep(5))*/
  
  // 15) Cree una función llamada _if que tome 3 argumentos: un valor booly 2 funciones (que no toman ningún parámetro): func1yfunc2. Cuando bool es veraz, func1debe llamarse, de lo contrario llamar al func2.

/*const _if=(bool,func1,func2)=>{
    return bool ? func1 : func2

  }
  console.log(_if(true,'TRUE','FALSE'))*/