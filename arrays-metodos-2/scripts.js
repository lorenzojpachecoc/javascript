/* 
Arrays - Métodos II
.from(iterable) - Convierte en array el elemento iterable
.sort([callback]) - Ordena los elementos de un array alfabéticamente(valor Unicode), si le pasamos un callback los ordena en función del algoritmo que le pasemos.
.forEach(callback(currentValue, [index])) - ejecuta la función indicada una vez por cada elemento del array.
.some(callback) - Comprueba si al menos un elemento del array cumple la condición
.every(callback) - Comprueba si todos los elementos del array cumplen la condición
.map(callback) - Transforma todos los elementos del array y devuelve un nuevo array
.filter(callback) - Filtra todos los elementos del array que cumplan la condición y devuelve un nuevo array
.reduce(callback) - Reduce todos los elementos del array a un único valor
*/

// 1) .from(iterable) - Convierte en array el elemento iterable//

    //let word= 'Hola mundo'

    //console.log(Array.from(word));

// 2) .sort([callback]) - Ordena los elementos de un array alfabéticamente(valor Unicode), si le pasamos un callback los ordena en función del algoritmo que le pasemos.

    /*const letters=['b', 'c', 'z','a']
    //const numbers=[1,8,100,300,3]


    console.log(letters.sort());
    console.log(numbers.sort());

    console.log(numbers.sort((a,b)=>a-b));

    console.log(numbers.sort((a,b)=>b-a));*/

// 3) .forEach(callback(currentValue, [index])) - ejecuta la función indicada una vez por cada elemento del array.

    /*const numbers= [12,25,47,84,98]

    numbers.forEach((number)=>console.log(number))
    numbers.forEach((number,index)=>
        console.log(`${number} está en la posición ${index}` ))*/

//4) .some(callback) - Comprueba si al menos un elemento del array cumple la condición

    //const words= ['HTML', 'CSS', 'JAVASCRIPT', 'PHP' ]

    //console.log(words.some(word => word.length>9));

//5) .every(callback) - Comprueba si todos los elementos del array cumplen la condición

   // console.log(words.every(word => word.length>3));

//6) .map(callback) - Transforma todos los elementos del array y devuelve un nuevo array

    //const numbers= [12,25,47,84,98]

    //numbers.map((number)=>console.log(number * 2))

    //const numbers2= numbers.map((number)=>(number * 2))

    //console.log(numbers2);

//7) .filter(callback) - Filtra todos los elementos del array que cumplan la condición y devuelve un nuevo array//
    
    const numbers= [1,2,3,4,5]

    const numbers2= numbers.filter((number)=>number>80 )
    console.log(numbers2)

//8) .reduce(callback) - Reduce todos los elementos del array a un único valor//

    console.log(numbers.reduce((a,b)=>a*b));

    const users=[
        {
            name: 'user1',
            online:true
        },
        {
            name: 'user2',
            online:true
        },
        {
            name: 'user3',
            online:false
        },
        {
            name: 'user4',
            online:false
        },
        {
            name: 'user5',
            online:false
        },
        {
            name: 'user6',
            online:true
        }

    ]
    
    const usersOnline= users.reduce((cont, user)=> {
        if (user.online) cont++
        return cont
    },0)

    console.log(`Hay ${usersOnline} usuarios conectados`);