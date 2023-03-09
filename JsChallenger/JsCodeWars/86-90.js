
// 86) Su cónyuge quiere una copia de los artículos robados. Dado un objeto que contiene los artículos robados, devuelva una copia de esa lista.notas: Tengo problemas para encontrar ejemplos claros para este desafío. Si tiene sugerencias por favor deje un comentario. ¡Muchas gracias!

/*const makeCopy=(obj)=> {
	return Object.assign({},obj) 
}

console.log(makeCopy({ piano: 100, tv: 50 }))*/

//87) El chico del seguro vuelve a llamar. Aparentemente, su cónyuge les informó que algunos artículos no fueron robados en absoluto y usted no les mencionó este detalle. ¡Esto es un intento de fraude! Te congelas y murmuras algo ininteligible. Descubre lo que dijiste. Dado un objeto, devuelve una cadena que concatena todos los valores y agrega la segunda clave al final. Asegúrese de dejar un espacio vacío entre ellos, pero no al principio o al final de la cadena. Mire los ejemplos para una imagen más clara.

/*const sayWhat=(obj)=> {
	return Object.values(obj).join(' ').concat(` ${obj[2]}`)
}
	console.log(sayWhat({ 1: "Mommy", 2: "please", 3: "help" }))*/

// 88) La policía te envía de nuevo la declaración electrónica para que la firmes. Esta vez puede firmarlo y, para acelerar la burocracia, intenta firmar también por su cónyuge. Desafortunadamente, el documento todavía está protegido contra nuevas entradas... Este desafío es un poco diferente ya que la función que se te ha asignado ya contiene un código que no debes cambiar ni eliminar. Además, no use una declaración de devolución, ya está incluida. Su tarea es, dado un objeto, evitar que se agreguen nuevas propiedades a ese objeto, pero aún debería poder cambiar el valor de las propiedades existentes.

/*const obj = { yourSignature: "" };

const signYourName=( obj )=> {
  Object.seal(obj)
obj.yourSignature = "Whatever";
  obj.spouseSignature = "Nice Try";
  return obj;
}
	console.log(signYourName({ yourSignature: "" }))*/

	// 89) El chico del seguro vuelve a llamar y se disculpa. Encontraron otra póliza hecha por su cónyuge, pero esta está limitada a cubrir un máximo determinado en pérdidas (por ejemplo, 50.000 €). Le envías una factura a tu cónyuge por la diferencia que perdiste. Dado un objeto de los objetos sustraídos y un límite, devolver la diferencia entre el valor total de esos objetos y el límite de la póliza.
	
	const calculateDifference=(obj, limit)=> {
		let result= Object.values(obj).reduce((a,b)=>a+b)
	 return result-limit
	}
	console.log(calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400))

	// 90) Su cónyuge no está preocupado por la pérdida de bienes materiales sino por su mascota favorita. ¡¿Se ha ido?! Dado un objeto de los artículos robados y una cadena en minúsculas que representa el nombre de la mascota (por ejemplo, "rambo"), devuelva: "Rambo is gone..."si el nombre está en la lista. "Rambo is here!"si el nombre no está en la lista. Tenga en cuenta que la primera letra del nombre en la declaración de devolución está en mayúscula.

	/*const findIt=(obj, name)=> {
		return Object.keys(obj).includes(name) ? `${name[0].toUpperCase() + name.slice(1)} is gone...` : `${name[0].toUpperCase() + name.slice(1)} is here!`
	}
		console.log(findIt({ tv: 30, timmy: 20, stereo: 50 }, 'timmy'))*/