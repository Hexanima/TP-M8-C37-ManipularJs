/* 
● Desde el archivo /public/js/moviesList.js, capturar los siguientes elementos: <body>
y <h1>, ubicados en el archivo /views//moviesList.ejs.
● Haciendo uso del prompt, preguntar al usuario: “¿Desea modo oscuro?”. Si la
respuesta es afirmativa, agregar a la etiqueta <body> un color de fondo: #7f7f7f​, y
la clase: fondoMoviesList.
● Agregar a la etiqueta <h1> el mensaje: “LISTADO DE PELÍCULAS”.
● Agregar a la etiqueta <h1> los siguientes estilos:
    ○ Color de la fuente: white.
    ○ Color de fondo: teal.
    ○ Relleno: 20px. 
 */
const qs = (str) => document.querySelector(str)
const body = qs("body")
const h1 = qs("h1")

if(confirm("¿Desea modo oscuro?")) {
    body.style.backgroundColor = "#7f7f7f"
    body.classList.add("fondoMoviesList")
}

h1.innerText = "LISTADO DE PELÍCULAS"
h1.style.color = "white"
h1.style.backgroundColor = "teal"
h1.style.padding = "20px"