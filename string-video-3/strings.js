/*let pass = "";

while (pass != "hola") {
    pas = prompt ("INTRODUZCA SU CONTRENA")
}   
console.log();("fin del bucle");*/
/*let pass = "HOLA"

do{
    pas = prompt ("INTRODUZCA SU CONTRENA")
}while (pass != "HOLA")*/
 
/*let names = ['Paco', 'Jose', 'Paula', 'Maria']

for(let name of names) {
    console.log(name);
}

for(let index in names) {
    console.log(index);
}*/

const person = {
    name: 'Juan',
    age: 26,
    sons: ['Laura', 'Diego', 'Pepe', 'Rosa', 'Tomas']
}

/* console.log (person.name);
console.log (person['name']); */

/*for (const key in person) {
    console.log(key);
}

for (const key in person) {
    console.log(person[key]);
}*/

/*for(const son of person.sons){
    console.log(son);
}*/

/*console.log( `Hola ${person.name}. Tienes ${person.age} años y tus hijos se llaman ${person.sons.join(', ')}`);*/

/*const saludar = () => console.log("hola2");
const saludarUsuario = (user) => console.log( `Hola ${user}`);

saludarUsuario('pepe')
saludarUsuario('marta')*/

const suma = (num1, num2) => {
   return num1+num2
}

console.log(suma(2,3));