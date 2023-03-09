
//81) Cree una función que tome un objeto y devuelva las claves y los valores como matrices separadas. Devuelve las claves ordenadas alfabéticamente y sus valores correspondientes en el mismo orden.
/*Ejemplos
keysAndValues({ a: 1, b: 2, c: 3 })
➞ [["a", "b", "c"], [1, 2, 3]]
keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]
keysAndValues({ key1: true, key2: false, key3: undefined })
➞ [["key1", "key2", "key3"], [true, false, undefined]]
notas Recuerda ordenar las claves.*/

/*const keysAndValues=(obj)=> {
	return [Object.keys(obj),Object.values(obj)]
}

    console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }))*/

//82) Cree la función que toma una matriz con objetos y devuelve la suma de los presupuestos de las personas.

/*const getBudgets=(arr)=> {
	return arr.reduce((a,b)=>a+b.budget,0)
}

    console.log(getBudgets([
        { name: "John",  age: 21, budget: 29000 },
        { name: "Steve",  age: 32, budget: 32000 },
        { name: "Martin",  age: 16, budget: 1600 }
      ]))*/

// 83) ¡Acabas de regresar a casa y encontrar que tu mansión ha sido robada! Dado un objeto de los elementos robados, devolver el monto total del robo (número). Si no robaron nada, devuelva la cadena . 

/*const stolenItems = (obj) =>{
    return Object.entries(obj).length===0 ? "Lucky you!" : Object.values(obj).reduce((a,b)=>a+b)
}

console.log(stolenItems({ tv: 30, skate: 20, stereo: 50, }))*/

// 84) La policía le envía una declaración electrónica para que la firme. Cuando comienza a firmar, aparece un error. Aparentemente, te enviaron un documento protegido. Este desafío es un poco diferente ya que la función que se te ha asignado ya contiene un código que no debes cambiar ni eliminar. Además, no haga una declaración de devolución, ya está incluida. Su tarea es, dado un objeto, evitar cambios en ese objeto.

function preventChanges(obj) {
    Object.freeze(obj);
        // DON'T CHANGE OR REMOVE THE LINES BELOW
      obj.noChanges = false;
      obj.signature = "whatever";
      return obj;
    }

    console.log(preventChanges({ noChanges: true }))

// 85) Llamas a tu cónyuge enojado y se produce una "pequeña" discusión. Cuente la cantidad total de insultos utilizados. Dado un objeto de insultos, devuelve la cantidad total de insultos utilizados. notas: La lista nunca estará vacía ( ningún objeto vacío ).

/*const totalAmountAdjectives=(obj)=> {
	return Object.entries(obj).length
}
console.log(totalAmountAdjectives({ a: "idiot", b: "idiot", c: "idiot" }))*/