
//96) Para aumentar aún más el conocimiento estadístico de su pelea, cuente el número de veces que se usó un determinado adjetivo. Dado un objeto que contiene varios adjetivos como valores, devuelve un nuevo objeto donde se cuentan las ocurrencias de cada adjetivo.

/*const countNumberOfOccurrences = (obj) => {
    return Object.values(obj).reduce((a, b) => (a[b] = 1 + (a[b] || 0), a), {});
}

    console.log(countNumberOfOccurrences({
        a: "moron",
        b: "scumbag",
        c: "moron",
        d: "idiot",
        e: "idiot"
      }))*/

//97) Finalmente recibes todo el documento de la lista robada de la policía. Debe firmar al final del documento, pero también cada sublista correspondiente a cada habitación de su casa donde se robaron los artículos. Se le dan dos argumentos, un objeto con objetos anidados y una cadena que corresponde a su nombre. El objeto ya contiene varias propiedades, una en la raíz, las otras en cada objeto anidado. Devolver un objeto con todos los valores que contienen establecidos en su nombre.signaturesignature

/*const signAll=(obj, name)=> {
     Object.keys(obj).map(key=>(obj[key])? obj[key].signature='name' : obj[key]='name');
return obj;
  }

  console.log(signAll({
    kitchen: {
      painting: 100,
      piano: 1000,
      signature: '',
    },
    bathroom: {
      stereo: 220,
      signature: '',
    },
    signature: '', 
  }))*/

  // 98) Dado un objeto de los objetos robados, devolver el 3er artículo más caro de la lista. Si eso no es posible, porque no hay suficientes artículos, devuélvalo.false

  /*const thirdMostExpensive=(obj)=> {
    return Object.keys(obj).sort((a,b) => obj[b] - obj[a])[2] || false
}
  console.log(thirdMostExpensive({ piano: 1000, tv: 500, ball: 10 , mirror: 200, }))*/

  // 99) una funcion que reciba 2 array de la misma long y que devuelva un objeto donde las keys sean los elementos del primer array y los valores los del segundo array

/*const valObj=(arr,arr2)=>{
	return Object.fromEntries(arr.map((item,index)=>[item,arr2[index]]))
	}
	
	console.log(valObj(['a','b','c'],[1,2,3]))*/

	/*const arr= ['a','b','c']
	console.log(arr[1])*/

  // 100) // Escribir una funcion que reciba un array de strings como parametro y que devuelva un array de objetos
// con las propiedades: Palabra donde se va a colocar el valor del elemento del array, otra 
// propiedad que se llamara longitud donde se le asignara como valor la longitud del elemento
// del array y una ultima propiedad que se va a llamar mensaje y va a tener como valor es muy largo
// si la longitud de la palabra es mayor a 10, y en caso contrario tamaño estandar.

const arrStr=(arr)=>{
	return arr.map((item)=>({
		 palabra: item,
		 longitud:item.length,
		 mensaje:item.length>10 ? 'es muy largo' : 'tamano estandar'
	}))
}
	console.log(arrStr(['lorenzo','pacheco','programacion']))