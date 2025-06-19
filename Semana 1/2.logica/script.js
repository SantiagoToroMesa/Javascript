lado1 = prompt("Ingrese el valor del lado 1 del triángulo:");
lado2 = prompt("Ingrese el valor del lado 2 del triángulo:");
lado3 = prompt("Ingrese el valor del lado 3 del triángulo:");

while (lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
    console.warn("Por favo vpr ingrese valores mayores a cero");
    lado1 = prompt("Ingrese el valor del lado 1 del triángulo:");
    lado2 = prompt("Ingrese el valor del lado 2 del triángulo:");
    lado3 = prompt("Ingrese el valor del lado 3 del triángulo:");
}

lado1 = parseFloat(lado1) ;
lado2 = parseFloat(lado2) ;
lado3 = parseFloat(lado3) ;

if (lado1 + lado2 <= lado3 || lado1 + lado3 <= lado2 || lado2 + lado3 <= lado1) {
    alert("No se forma un triángulo con estos lados");
} else if (lado1 == lado2 && lado2 == lado3) {
    alert("Equilatero");
} else if (lado1 != lado2 && lado1 != lado3 && lado2 != lado3) {
    alert("Escaleno");
} else {
    alert("Isoceles");
}

// Ejercicio 1

const frutas= ["manzana","banano","mango","pera"]
const first = frutas.shift();
console.log(frutas)
console.log(first)

// Ejercicio 2

const numeros = [2,4,7,8]
const nuevo_number = 9
numeros.push(nuevo_number)
console.log(numeros)

// Ejercicio 3

const words = ["dialogo","consola","programacion"]
words.unshift("sintaxis")
console.log(words)

// Ejercicio 4

const colors = ["azul","rojo","verde","amarillo","naranja","morado" ]
let last = colors.pop()
console.log(colors)
console.log(last)

// Ejercicio 5

const original = [10,9,8,7,6,5,4]
const subarray = original.slice(0,4)
console.log(subarray)

// Ejercicio 6

let array = [1,2,3,4,5,6,7,8,9]
let posicion = 4
array.splice(posicion, 1, 90)
console.log(array)

// Ejercicio 7

let palabras = ["Hola","Mundo","Desde","Medellin"]
frase = palabras.join(" ")
console.log(frase)

// Ejercicio 8

let nombres = ["ana","juan","andres","brayan","carlos"]
nombres.sort();
console.log(nombres)

// Ejercicio 9

let Aray = [1,2,3,4,5,6,7,8,9]
console.log(Aray)
let ArrayReverse = Aray.reverse();
console.log(ArrayReverse)

// Ejercicio 10

const numlist = [1, 2, 3, 4, 5];
const valorBuscado = 3;

if (numlist.includes(valorBuscado)) {
    console.log(`El valor ${valorBuscado} existe en el array.`);
} else {
    console.log(`El valor ${valorBuscado} no existe en el array.`);
}

// LOOPS

// Ejercicio 1

let sentence = "mensaje prueba"
for(let word of sentence){console.log(word)}

// Ejercicio 2

for (let i = 1; i <= 5; i++){
    console.log(i);
}

// Ejercicio 3

function mostrarPosiciones(palabra) {
    for (let indice in palabra) {
        console.log(`Posición: ${indice}, Carácter: ${palabra[indice]}`);
    }
}
mostrarPosiciones("ejemplo");

// Arrays y loops

for (let nombre of nombres) {
    console.log(`Hola ${nombre} como estas?`);
}

for (let color in colors) {
    console.log(colors[color]);
}

for (let fruta in frutas) {
    console.log(`La fruta es: ${frutas[fruta]} el indice es: ${fruta}`);
}

let persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Medellín"
}
console.log(persona.ciudad)

let libro = {
    titulo: "El Principito",
    autor: "Antoine de Saint-Exupéry",
    año: 1943
}

libro.año = 1945;
console.log(libro.año)

let auto = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2020
};

auto.color = "Rojo";
console.log(auto);

let estudiante = {
    nombre: "Laura",
    edad: 22,
    carrera: "Ingeniería",
    ciudad: "Bogotá"
};

for (let clave in estudiante) {
    console.log(`Clave: ${clave}, Valor: ${estudiante[clave]}`);
}

function saludar(nombreF){
    console.log(`Hola ${nombreF} como estas?`);
}
saludar("Juan");

function sumar(a, b) {
    return a + b;
}
console.log(sumar(5, 10));

function esPar(numero) {
    return numero % 2 === 0;
}
console.log(esPar(4)); // true
console.log(esPar(7)); // false

function arearectangulo(base, altura) {
    return base * altura;
}
console.log(arearectangulo(5, 10));

function celsiusaFahrenheit(celsius) {
    return (celsius * 1.8) + 32;
}
console.log(celsiusaFahrenheit(25));