// Variables primitivas
var nombre = "Gerardo"; // String
var edad = 24; // Number
var mayordeEdad = true; // Booleano

// Variables compuestas
// Arreglo - Array --> serie de datos ordenados

var paises = ["Colombia", "Mexico", "Costa Rica", "El Salvador"]; // [arrays] {arreglos de codigo} (if else/for)

console.log(paises);

console.log(paises[2]);
console.log(paises[3]);
console.log(paises[4]);

paises[4] = "España"
paises[5] = "Italia"

console.log(paises);

for (var i = 0; i <= 5; i++) {
    console.log(paises[i]);
}

// var numeros = [];

// for (var i = 0; i <= 100; i++) {
//     if (i % 2 === 0) {
//         numeros[i] = i;
//     }
// }
// console.log(numeros);

// [xoo, oox, ooo, xxx]
// 
// xoo
// oox
// ooo
// xxx
// 
// [1.4, 1.3, 1.1, 1.2, 1.3]

var pares = [];
for(var i=0; i<=50; i++) {
    pares[i]=i+i;
}
console.log(pares);

var arreglo2 = [[1,2], "Gerardo", 19, true, "Hola", false]

console.log(arreglo2);