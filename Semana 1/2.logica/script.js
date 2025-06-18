/*
let lado1 = prompt("Ingrese el valor del lado 1 del triángulo:");
let lado2 = prompt("Ingrese el valor del lado 2 del triángulo:");
let lado3 = prompt("Ingrese el valor del lado 3 del triángulo:");

if (lado1 == lado2 && lado2 == lado3){
    alert("Equilatero")
}
if (lado1 != lado2 && lado1 != lado3){
    alert("Escaleno")
}
if (lado1 != lado2 && lado1 == lado3 || lado1 == lado2 && lado1 != lado3) {
    alert("Isoceles")
}
*/
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

const colors = ["azul","rojo","verde"]
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