//DOM - Crear e insertar elementos

/* 
Crear un elemento: document.createElement(element)
Escribir texto en un elemento: element.textContent = texto
Escribir HTML en un elemento: element.innerHTML = código HTML
Añadir un elemento al DOM: parent.appendChild(element)
Fragmentos de código: document.createDocumentFragment()
*/

const days = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo']

const title = document.getElementById('title')
const daysList = document.getElementById('daysList')
const selectDays = document.getElementById('daysSelect')

const itemList = document.createElement('LI')
itemList.textContent = 'Lunes'

daysList.appendChild(itemList)

title.textContent = 'Dom - <span> Crear e insertar elementos I </span> '

console.log(itemList);

title.textContent = ''