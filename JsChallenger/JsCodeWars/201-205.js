
// dado una determinada cadena, que retorne true o false en funsion si es un palindromo

/*const palidromeValidator= (str) =>{
 return str.toLowerCase() === str.toLowerCase().split('').reverse().join('')
}

console.log(palidromeValidator('oso'))*/

// dado un array , devolver todos los que son palindromos

const palidromeValidator= (arr) =>{
    return arr.filter((item)=>
    item.split('').reverse().join('') === item
    )
   }
   
   console.log(palidromeValidator(['oso', 'casa', 'arepera', 'ana', 'javascript']))

/*const binary =(str)=>{
    return str.split('').map((n)=>n<5?0:1).join('')

}
    console.log(binary('444455558811'))*/