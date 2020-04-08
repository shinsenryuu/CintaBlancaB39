// alert("Funciona");

// Variables - Espacio dedicado para almacenar un dato


// DEFINICION DE VARIABLES
// nombre = valor;
// var - palabra reservada - decirle a computadora que estamos reservando este valor
var numero = 5
// numero

var checkbox = true; false;
// Booleana

var nombre = "Iliana";
// string

// Mostrar variables dentro de la consola
console.log(numero);
console.log(checkbox);
console.log(nombre);

var x = 9;
var y = 4;
var z = 3;

var suma = x + z;
console.log("La suma es");

// Suma
console.log(suma);

// Concatenar - suma de dos variables para que se muestren en una linea
console.log("La suma es " + suma);
console.log("La suma de " + x + " + " + z + " es " + suma);

//Resta
var resta = x - y
console.log("La resta es " + resta)

//Multiplicacion
var multiplicar = y * z
console.log("La multipliacion es " + multiplicar)

//Division
var dividir = z / x
console.log("La division es " + dividir)

// Operadores relacionales - para booleans tmb
console.log(9 > 3); // mayor que
console.log(9 < 3); // menor que
console.log(5 == 5); // igual
console.log(3 != 3); // diferente
console.log(5 >= 5); // mayor o igual
console.log(3 <= -5); // menor o igual

console.log("Gerardo" == "Sensei");

// Comparacion sencilla
console.log("5" == 5);

// Comparacion estricta
console.log("5" === 5);
console.log("5" !== 5);

// Funciones
function sum(a, b) {
    var resultado = a + b;
    return resultado;
}
console.log(sum(5, 6));

// Modulo
var modulo = 3 % 2; // % da como resultado el residuo de la division
console.log(modulo);

// console.log(hola); - si hay un error, todo el codigo despues no se activara hasta que se resuelva el error

var edad = prompt("Ingresa tu edad.");
edad = parseInt(edad);
console.log(edad);
