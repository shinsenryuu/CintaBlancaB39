// Objetos no tienen orden
// Llave valores

// JSON - javascript object notation
// se usa mucho con manejo de datos


var objeto = {
    // Atributos
    nombre: "La noche estrellada",
    autor: "Vincent Van Gogh",
    tecnica: "Óleo sobre un lienzo",
    colores: ["#FFFFFF", "#000000"],
    year: 1889,
    lugar: "Amsterdam",
    mensaje: "Es una obra muy linda",
    museo: "Museo de Van Gogh",

    // Metodos
    calcularEdad: function () { console.log(2020 - this.year) },
    numeroColores: function () { return "La pintura " + this.colores.length },
    numeroColores: function () {
        if (this.colores.length === 1) {
            return "La pintura " + this.nombre + " tiene " + this.colores.length + " colores."
        } else {
            return "La pintura " + this.nombre + " tiene " + this.colores.length + " colores."
        }
    },
    obtenerInfo: function () {
        return "La obra " + this.nombre + " fue pintada por " + this.autor + " en el año " + this.year
    },
}

console.log(objeto);

// console es objeto tmb
console.log(objeto.nombre);
console.log(objeto.autor);

console.log(objeto.calcularEdad());
console.log(objeto.numeroColores());
console.log(objeto.obtenerInfo());