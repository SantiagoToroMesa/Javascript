// Parte 2
let nombre = "Santiago"
console.log("Hola", nombre)

let numENT = 5
let NumFLOT = 6.8
let text= "TEXTo"
console.log(numENT, NumFLOT, text)

let pi = 3.1416
pi = 34
console.log(pi)

let valornull
console.log(valornull)

let valornull = null
let valor2 = true
console.log(valornull)
console.log(valor2)

// Parte 3

let edad = window.prompt("Ingrese su edad");
alert("Tienes " + edad + " Años");

alert("Bienvenido ami pagina conectada con javascript");

let confirmar = confirm("Desea continuar ?")
console.log(confirmar)

// Parte 4

let num1 = 7
let num2 = 8
let suma = num1 + num2
let resta = num1 - num2
let multi = num1 * num2
let div = num1 / num2
let modulo = num1 % num2
console.log("resultado suma: " + suma,
    "resultado resta: " + resta,
    "resultado multiplicacion: " + multi,
    "resultado division: " + div,
    "resultado modulo: " + modulo)

let caden1 = "HeLLO"
let caden2 = "World"
HElowor = caden1 + caden2
console.log(HElowor)

console.log(5 == "5");
console.log(5 === "5");
console.log(true && false);
console.log(false || true);
console.log(!true);

// Parte 5

let numcomp = prompt("Ingrese un numero")
if (numcomp > 10){
    alert(`Su numero es mayor a 10`)
}
if (numcomp < 10){
    alert(`Su numero es menor a 10`)
}
if (numcomp == 10){
    alert(`Su numero es igual a 10`)
}

let usuarion = prompt("Ingrese su usuario")
if (usuarion == "Admin"){
    alert("BIENVENIDO ADMIN B)")
}
else{
    alert("bienvenido user")
}

let numero = prompt("Ingrese un numero")
const resultado = numero % 2 === 0 ? "par" : "impar";
if (resultado == "par"){
    alert("Su numero es par")
}
if (resultado == "impar"){
    alert("Su numero es impar")
}

// Parte 6

console.info("Esto es un mensaje tipo info");
console.warn("Esto es un mensaje tipo warn");
console.error("Esto es un mensaje tipo error");
console.group("Esto es un mensaje tipo group");
console.groupEnd("Esco es un mensaje tipo groupEnd");