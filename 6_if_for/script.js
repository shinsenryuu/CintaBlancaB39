// alert("Bienvenido");

var edad = 5;

console.log(3 < 5);

// Condicion simple
if (edad >= 18) {
    console.log("Eres mayor de edad");
    console.log("Puedes votar");
}
else {
    console.log("Eres menor de edad");
    console.log("No puedes votar");
}

var dia = 'soleado'
var hora = '5:00'

if (dia === 'nublado') {
    console.log('No salgas');
} else {
    if (hora === '5:00') {
        console.log("Estás a tiempo para la función 🎥");
    } else {
        console.log("¡Corre! Vas tarde 🏃‍♀️");
    }
}

// Operacion modulo %
// imprimir Fizz si un numero el multiplo de 3
// imprimir Buzz si un numero el multiplo de 5
// imprimir FizzBuzz si un numero es multiplo de 3 y 5
// imprimir numero

var numero = 15;

// if (numero % 3 === 0) {
//     if (numero % 5 === 0) {
//         console.log("FizzBuzz");
//     } else {
//         console.log("Fizz");
//     }
// }
// else if (numero % 5 === 0) {
//     console.log("Buzz");
// } else {
//     console.log(numero);
// }

if(numero % 3 === 0 && numero % 5 === 0) {
    console.log("FizzBuzz");
} else if(numero % 3 === 0) {
    console.log("Fizz");
}
else if(numero % 5 === 0) {
    console.log("Buzz");
}
else {
    console.log(numero);
}

// Indice
// for (inicio; final; secuencia) {
//     bloque de código que se ejecutara
// i + 1 = i++
// i - 1 = i--
// pero estos dos se hacen al infinito, tener cuidado al usar

for(var i = 0; i <= 10; i = i + 1) {
    console.log("Vuelta " + i);
}

// for 5 al 20
for(var i = 5; i <= 20; i++) {
    console.log(i);
}

// for 10 al 3
for(var i = 10; i >= 3; i--) {
    console.log(i);
}

// for 1 al 100
// for(var i = 1; i <= 100; i = i + 1) {
//     console.log(i);
// }
// for(var i = 1; i <= 100; i = i + 1) {
//     if(i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     } else if(i % 3 === 0) {
//         console.log("Fizz");
//     }
//     else if(i % 5 === 0) {
//         console.log("Buzz");
//     }
//     else {
//         console.log(i);
//     }
// }

// Bucles o ciclos
// while
console.log("while")
var i = 20;
while(i <= 10) {
    console.log(i);
    i++;
}

// do while
console.log("do while")
var e = 20;
do {
    console.log(e);
    e++;
} while(e <= 10)

// for vs while - en while la variable va afuera de la funcion y en for va adentro
// while vs do while - while no se ejecuta si no se cumple con la condicion
// do while se ejecuta por lo menos una vez aun si no cumple la condicion
// la prueba logica va al final en do while y la de while al principio