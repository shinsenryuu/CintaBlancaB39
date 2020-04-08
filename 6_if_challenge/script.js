// simulacion de piedra papel o tijera
var j1 = prompt("Introduce opcion J1")
var j2 = prompt("Introduce opcion J2")

if (j1 === "papel") {
    if (j2 === "piedra") {
        alert("GANA J1")
    } else if (j1 === j2) {
        alert("EMPATE")
    } else {
        alert("Gana J2")
    }
} else if (j1 === "piedra") {
    if (j2 === "tijeras") {
        alert("GANA J1")
    } else if (j1 === j2) {
        alert("EMPATE")
    } else {
        alert("Gana J2")
    }
} else if (j1 === "tijeras") {
    if (j2 === "papel") {
        alert("GANA J1")
    } else if (j1 === j2) {
        alert("EMPATE")
    } else {
        alert("Gana J2")
    }
} 