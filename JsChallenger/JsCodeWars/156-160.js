
// 156) Se le dará una matriz a y un valor x. Todo lo que necesita hacer es verificar si la matriz proporcionada contiene el valor. Array puede contener números o cadenas. X puede ser cualquiera.Retorna true si la matriz contiene el valor, false si no.

/*const check = (a, x) => {
    return a.includes(x)
  }

  console.log(check([66, 101], 66))*/

// 157) Cree una función que devuelva una matriz de enteros de n a 1 donde n>0. Ejemplo : n=5-->[5,4,3,2,1]

/*const reverseSeq = (n) => {
    let arr = [];
    for (let i=n; i>0; i--) {
      arr.push(i);
      } return arr;
  };

    console.log(reverseSeq(5))*/

// 158) 

/*const spinWords = (str) => {
    return str.split(' ').map((item) => (item.length > 4) ? item.split('').reverse().join('') : item).join(' ');
  }
  console.log(spinWords("Hey fellow warriors"))*/

  // 159) Necesitamos una función que pueda transformar una cadena en un número. ¿Qué formas de lograr esto conoces? Nota: no se preocupe, todas las entradas serán cadenas y cada cadena es una representación perfectamente válida de un número entero.

  const stringToNumber = (str) => {
    return Number(str)
  }

    console.log(stringToNumber('1234'))

  // 160) 