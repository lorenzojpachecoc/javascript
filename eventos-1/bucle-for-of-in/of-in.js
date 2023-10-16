let names = ['Paco', 'José', 'Paula', 'Maria']

for(let name of names){
    if(name==='Paula'){
        continue
}
console.log(name);
}

for(let index in names){
    if(names[index]==='Paula'){
        continue
}
console.log(index);
}


/* PALABRAS RESERVADAS DE BUCLES

breack: rompe el bucle 
continue: se salta la(s) posición(es) que le indiquemos y despues continua su ejecución */