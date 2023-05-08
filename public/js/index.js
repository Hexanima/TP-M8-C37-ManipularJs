/* 
● Desde el archivo /public/js/index.js, capturar los siguientes elementos: <main>,
<h2>, <a> y <p>, ubicados en el archivo: /views//index.ejs.
● Haciendo uso del prompt, indicar al usuario que: “Ingrese su nombre”.
● En caso de que el usuario no coloque su nombre, a la etiqueta <h2>, se le debe
agregar la palabra “Invitado”. En caso contrario, se le debe agregar el nombre que el
usuario ingresó.
● Agregar a la etiqueta <h2> el estilo uppercase.
● A la etiqueta <a>, colocarle el estilo correspondiente para que asuma el siguiente
color: #E51B3E.
● Mediante el confirm, preguntar al usuario “¿Desea colocar un fondo de
pantalla?”. Si la respuesta es afirmativa por parte del usuario, agregar al <body> la
clase “fondo”.
● A todos los párrafos que fueron capturados, asignar a los pares la clase:
“descatadoPar”. Y a los impares agregar la clase: “destacadoImpar”.
● Finalmente, establecer como visible a la etiqueta <main> en el browser o
navegador, aplicando el estilo: display : block.
 */
const qs = (str) => document.querySelector(str)
const qsa = (str) => document.querySelectorAll(str)

const main = qs("main")
const h2 = qs("h2")
const a = qs("a")
const p = qsa("p")

let userName = prompt("Ingrese su nombre")

if (userName) {
    h2.innerText += userName
} else {
    h2.innerText += "Invitado"
}

h2.style.textTransform = "uppercase"

a.style.color = "#E51B3E"

if (confirm("¿Desea colocar un fondo de pantalla?")) {
    document.body.classList.add("fondo")
}

for (var i = 0; i < p.length; i++) {
    if ((i + 1) % 2 === 0) {
        p[i].classList.add("destacadoPar")
    } else {
        p[i].classList.add("destacadoImpar")
    }
}

main.style.display = "block"