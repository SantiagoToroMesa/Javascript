// 1.1

const mensaje = ["Bonito", "Lindo", "Hermoso", "Maravilloso"];


// const colores = ["rojo", "verde", "azul", "amarillo"];
// const color = colores.map(c => `El color ${c} es muy ` + mensaje[colores.indexOf(c) % mensaje.length]);
// container = document.getElementById("Salida").innerHTML = color.join("<br>");

let colores = ["rojo", "verde", "azul", "amarillo"];
container = document.getElementById("Salida")

container.innerHTML += `<ul>`;
colores.forEach((colores) => {
    const randomIndex = Math.floor(Math.random() * mensaje.length);
    const randomElement = mensaje[randomIndex];
    container.innerHTML += `<li>El color ${colores} es ${randomElement}</li>`;
})
container.innerHTML += `</ul><br>`;

// 1.2

const frasmotiva = ["La vida es bella", "El sol brilla", "La naturaleza es asombrosa", "El amor es eterno"];
document.getElementById("Salida2").innerHTML = frasmotiva.join("<p>");

// 1.3

const numeros = [0 ,1, 2, 3, 4, 5];
document.getElementById("Salida3").innerHTML = numeros.join("<li>");

//2.1

const info = {
    nombre: "Juan",
    edad: 30,
    profesion: "Ingeniero"
}
const infoContainer = document.getElementById("Salida4");
infoContainer.innerHTML = `
  <div style="border:1px solid #ccc; border-radius:8px; padding:16px; max-width:300px; box-shadow:0 2px 8px #eee; margin:16px 0;">
    <h1 style="font-size:1.5em; margin-bottom:8px;">${info.nombre}</h1>
    <p><strong>Edad:</strong> ${info.edad}</p>
    <p><strong>Profesión:</strong> ${info.profesion}</p>
  </div>
`;
// 2.2
const cancion = {
    titulo: "Despacito",
    artista: "Luis Fonsi",
    duracion: "3:47"
}
const cancionContainer = document.getElementById("Salida5");
cancionContainer.innerHTML = `
  <div style="border:1px solid #ccc; border-radius:8px; padding:16px; max-width:300px; box-shadow:0 2px 8px #eee; margin:16px 0;">
    <h1 style="font-size:1.5em; margin-bottom:8px;">${cancion.titulo}</h1>
    <p><strong>Artista:</strong> ${cancion.artista}</p>
    <p><strong>Duración:</strong> ${cancion.duracion}</p>
  </div>
`;

// 2.3

const producto = {
    nombre: "Televisor",
    Precio: 100,
    stock: 50
}
const productoContainer = document.getElementById("Salida6");
let productList = "<ul>";
for (let key in producto) {
  productList += `<li>${key}: ${producto[key]}</li>`;
}
productList += "</ul>";
productoContainer.innerHTML = productList;


// 3.1 - Usuarios en tarjetas de contacto
const usuarios = [
  { nombre: "Ana", correo: "ana@email.com" },
  { nombre: "Luis", correo: "luis@email.com" },
  { nombre: "Marta", correo: "marta@email.com" }
];
const usuariosContainer = document.getElementById("Salida8");
const tarjetas = usuarios.map(usuario =>
  `<div style="border:1px solid #ccc; border-radius:8px; padding:12px; margin:8px 0; max-width:250px; box-shadow:0 2px 8px #eee;">
    <h3 style="margin:0 0 8px 0;">${usuario.nombre}</h3>
    <p style="margin:0; font-size:0.95em; color:#555;">${usuario.correo}</p>
  </div>`
);
usuariosContainer.innerHTML = tarjetas.join("");

// 3.2 - Libros en formato especial para <li>
const libros = [
  { titulo: "Cien años de soledad", autor: "Gabriel García Márquez", año: 1967 },
  { titulo: "Don Quijote", autor: "Miguel de Cervantes", año: 1605 },
  { titulo: "Rayuela", autor: "Julio Cortázar", año: 1963 }
];
const librosContainer = document.getElementById("Salida9");
const librosFormateados = libros.map(libro =>
  `<li>${libro.titulo} (${libro.año}) - ${libro.autor}</li>`
);
librosContainer.innerHTML = `<ul>${librosFormateados.join("")}</ul>`;

// 3.3 - Lista de tareas con icono según estado
const tareas = [
  { descripcion: "Hacer la compra", completada: true },
  { descripcion: "Estudiar JavaScript", completada: false },
  { descripcion: "Llamar a mamá", completada: true }
];
const tareasContainer = document.getElementById("Salida10");
function renderTareas(tareas) {
  return tareas.map(tarea =>
    `<li>${tarea.completada ? "✅" : "❌"} ${tarea.descripcion}</li>`
  ).join("");
}
tareasContainer.innerHTML = `<ul>${renderTareas(tareas)}</ul>`;


