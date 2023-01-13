

/* amigo o enemigo Cree un programa que filtre una lista de cadenas y devuelva una lista
con solo el nombre de sus amigos.Si un nombre tiene exactamente 4 letras,
 ¡puede estar seguro de que tiene que ser un amigo suyo! De lo contrario, 
 puede estar seguro de que no es...
Ej: Entrada = ["Ryan", "Kieran", "Jason", "luis"], Salida = ["Ryan", "luis"]
es decir.
amigo ["Ryan", "Kieran", "Mark"] `debería ser` ["Ryan", "Mark"]
Nota: mantenga el orden original de los nombres en la salida. */

const friendsOrEnemys= (lista) =>{
    let result= lista.filter(item=>item.length==4)
    return result

}

console.log(friendsOrEnemys(["Ryan", "Kieran", "Jason", "luis"]))