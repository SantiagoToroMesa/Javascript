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

