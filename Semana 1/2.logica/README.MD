## Condicional
##  Ejercicio: Clasificador de Triángulos

Escribe un programa que reciba tres números positivos que representan las longitudes de los lados de un triángulo. El programa debe determinar si los lados forman un triángulo válido y, si es válido, clasificarlo como:

- **Equilátero:** todos los lados son iguales.
- **Isósceles:** dos lados son iguales.
- **Escaleno:** todos los lados son diferentes.

Si los lados **no forman un triángulo válido**, muestra un mensaje de error.

###  Regla para validar un triángulo:

La **suma de las longitudes de dos lados** siempre debe ser **mayor que el tercer lado**.


## Metodos de las listas

## 🧪 Ejercicios: Métodos de arrays en JavaScript

### 🔹 Ejercicio 1
Quita el primer elemento de un array de frutas.
```js
const frutas= ["manzana","banano","mango","pera"]
const first = frutas.shift();
console.log(frutas)
console.log(first)
```
### 🔹 Ejercicio 2
Agrega un número al final de un array de números.
```js
const numeros = [2,4,7,8]
const nuevo_number = 9
numeros.push(nuevo_number)
console.log(numeros)

```
### 🔹 Ejercicio 3
Agrega un elemento al principio de un array de palabras.
```js
const words = ["dialogo","consola","programacion"]
words.unshift("sintaxis")
console.log(words)
```
### 🔹 Ejercicio 4
Elimina el último elemento de un array de colores.
```js
const colors = ["azul","rojo","verde"]
let last = colors.pop()
console.log(colors)
console.log(last)
```
### 🔹 Ejercicio 5
Extrae una porción de un array sin modificar el original.
```js
const original = [10,9,8,7,6,5,4]
const subarray = original.slice(0,4)
console.log(subarray)
```
### 🔹 Ejercicio 6
Reemplaza un elemento en una posición específica del array.
```js
let array = [1,2,3,4,5,6,7,8,9]
let posicion = 4
array.splice(posicion, 1, 90)
console.log(array)
```
### 🔹 Ejercicio 7
Une los elementos de un array de palabras en un solo string separado por espacios.
```js
let palabras = ["Hola","Mundo","Desde","Medellin"]
frase = palabras.join(" ")
console.log(frase)
```
### 🔹 Ejercicio 8
Ordena alfabéticamente un array de nombres.
```js
let nombres = ["ana","juan","andres","brayan","carlos"]
nombres.sort();
console.log(nombres)
```
### 🔹 Ejercicio 9
Invierte el orden de los elementos de un array.
```js
let Aray = [1,2,3,4,5,6,7,8,9]
console.log(Aray)
let ArrayReverse = Aray.reverse();
console.log(ArrayReverse)
```
### 🔹 Ejercicio 10
Verifica si un valor específico existe dentro del array.
```js
const numlist = [1, 2, 3, 4, 5];
const valorBuscado = 3;

if (numlist.includes(valorBuscado)) {
    console.log(`El valor ${valorBuscado} existe en el array.`);
} else {
    console.log(`El valor ${valorBuscado} no existe en el array.`);
}
```

## Ejercicios con `for`, `for...in` y `for...of`

### 🔹 Sin listas (solo números o strings)

1. **Imprimir los caracteres de una palabra**  
   Usa `for...of` para recorrer una palabra letra por letra e imprimir cada letra.
```js
let sentence = "mensaje prueba"
for(let word of sentence){console.log(word)}
```
2. **Contar del 1 al 5 usando `for` clásico**  
   Usa un bucle `for` para imprimir los números del 1 al 5.
```js
for (let i = 1; i <= 5; i++){
    console.log(i);
}
```
3. **Mostrar la posición de cada letra en una palabra usando `for...in`**  
   Usa `for...in` para recorrer una palabra e imprimir el índice y el carácter en esa posición.
```js
function mostrarPosiciones(palabra) {
    for (let indice in palabra) {
        console.log(`Posición: ${indice}, Carácter: ${palabra[indice]}`);
    }
}
mostrarPosiciones("ejemplo");
```
---

### Con listas (arrays)

4. **Recorrer una lista de nombres usando `for...of`**  
   Dado un array de nombres, imprime "Hola, [nombre]" usando `for...of`.
```js
for (let nombre of nombres) {
    console.log(`Hola ${nombre} como estas?`);
}
```
5. **Imprimir índices de una lista usando `for...in`**  
   Usa `for...in` para imprimir los índices de un array de colores.
```js
for (let color in colors) {
    console.log(colors[color]);
}
```
6. **Imprimir índice y valor de cada número en un array**  
   Usa `for...in` para obtener el índice y luego acceder al valor en la misma línea.
```js
for (let fruta in frutas) {
    console.log(`La fruta es: ${frutas[fruta]} el indice es: ${fruta}`);
}
```

## Ejercicios de Objetos

1. Crea un objeto `persona` con las propiedades: nombre, edad y ciudad.
2. Muestra el valor de una propiedad específica del objeto `persona`.
3. Modifica el valor de una propiedad existente en un objeto `libro`.
4. Agrega una nueva propiedad a un objeto `auto`.
5. Recorre un objeto `estudiante` con un bucle y muestra todas sus claves y valores.

##  Ejercicios para practicar funciones

1. **Saludo personalizado**  
   Crea una función llamada `saludar` que reciba un nombre como parámetro y devuelva un saludo del tipo: `"Hola, [nombre]!"`.
2. **Suma de dos números**  
   Escribe una función `sumar` que reciba dos números como parámetros y retorne su suma.
3. **Número par o impar**  
   Crea una función llamada `esPar` que reciba un número y devuelva `true` si es par, o `false` si es impar.
4. **Calcular el área de un rectángulo**  
   Define una función `areaRectangulo` que reciba `base` y `altura` como argumentos y devuelva el área.
5. **Convertir grados Celsius a Fahrenheit**  
   Escribe una función `celsiusAFahrenheit` que reciba una temperatura en grados Celsius y devuelva el valor en Fahrenheit usando la fórmula:  
   `F = C * 1.8 + 32`