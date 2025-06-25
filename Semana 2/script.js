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
