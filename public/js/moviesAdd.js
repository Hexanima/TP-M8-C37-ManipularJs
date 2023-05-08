/* 
● Crear un archivo JavaScript: /public/js//moviesAdd.js, y vincularlo con el archivo;
/views//moviesAdd.ejs.
● Desde el archivo /public/js/moviesAdd.js, capturar los siguientes elementos: <h1>,
<section> y <article>, ubicados en el archivo: /views//moviesAdd.ejs.
● Agregar a la etiqueta <h1> el mensaje: “AGREGAR PELÍCULAS”.
● Agregar a la etiqueta <h1> la clase: “titulo”.
● Agregar al artículo la clase: “fondoTransparente”.
● Agregar a la sección la clase: “fondoCRUD”.
 */

const qs = (str) => document.querySelector(str)
const qsa = (str) => document.querySelectorAll(str)

const h1 = qs("h1")
const section = qs("section")
const article = qs("article")

h1.innerText = "AGREGAR PELÍCULAS"
h1.classList.add("titulo")

article.classList.add("fondoTransparente")
section.classList.add("fondoCRUD")