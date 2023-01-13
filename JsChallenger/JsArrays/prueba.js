
const estoyEsAprobado= (str)=>{
    let lasCe= str.split('').filter((item)=>item=='c')
    return lasCe

}

console.log(estoyEsAprobado('cocosito'))