// Objetos no tienen orden
// Llave valores

// JSON - javascript object notation - objeto
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
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/757px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",

    // Metodos
    calcularEdad: function () {
        return 2020 - this.year
    },
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

var obra = {
    // Atributos
    nombre: "One Hundred Horses (百骏图)",
    autor: "Lang Shining",
    year: "Qing Dynasty (1644-1911)",
    lugar: "China",
    mensaje: "Lang was skilled at painting horses, and this is one of his representative works.",
    museo: "National Palace Museum in Taipei",
    url: "http://images.china.cn/attachement/jpg/site1007/20111108/001372acd5e91022ddfa0b.jpg",

    obtenerInfo: function () {
        return "The painting " + this.nombre + " was painted by " + this.autor + " during the " + this.year
    },
}

var maximo = {
    // Atributos
    nombre: "Riverside Scene at Qingming Festival",
    autor: "Zhang Zeduan",
    year: "Northern Song Dynasty (960-1127)",
    lugar: "China",
    mensaje: "It is often considered to be the most renowned work among all the Chinese paintings, and it has been called China's Mona Lisa.",
    museo: "Palace Museum in Beijing",
    url: "http://images.china.cn/attachement/jpg/site1007/20111108/001372acd5e91022e20c16.jpg",

    obtenerInfo: function () {
        return "The painting " + this.nombre + " was made by " + this.autor + " during the " + this.year + ". " + this.mensaje
    },
}

// Objeto
// DOM - Document Object Model - como un motor - lo usan los navegadores
// Asignacion
var objetoNombre = document.getElementById("objeto-nombre");
var objetoMensaje = document.getElementById("objeto-mensaje");
var objetoUrl = document.getElementById("objeto-url");

var obraNombre = document.getElementById("obra-nombre");
var obraMensaje = document.getElementById("obra-mensaje");
var obraUrl = document.getElementById("obra-url");

var maximoNombre = document.getElementById("maximo-nombre");
var maximoMensaje = document.getElementById("maximo-mensaje");
var maximoUrl = document.getElementById("maximo-url");

// console.log(objetoNombre);
// console.log(objetoMensaje);

objetoNombre.innerHTML = objeto.nombre;
objetoMensaje.innerHTML = objeto.obtenerInfo();
objetoUrl.src = objeto.url;
objetoUrl.alt = objeto.nombre;

obraNombre.innerHTML = obra.nombre;
obraMensaje.innerHTML = obra.obtenerInfo();
obraUrl.src = obra.url;
obraUrl.alt = obra.nombre;

maximoNombre.innerHTML = maximo.nombre;
maximoMensaje.innerHTML = maximo.obtenerInfo();
maximoUrl.src = maximo.url;
maximoUrl.alt = maximo.nombre;


// console.log(objetoNombre.innerHTML);

// console.log(objeto);

// console es objeto tmb
// console.log(objeto.nombre);

// console.log(objeto.calcularEdad());
// console.log(objeto.numeroColores());
// console.log(objeto.obtenerInfo());

// error - marca errores - rojo
// console.error("Esto es un error");

// warning - marca advertencias - amarillo
// console.warn("Posiblemente esto es un error");

// log - imprimir lo solicitado
// console.log("Un log normal");

function dimeMiNombre() {
    var nombre = document.getElementById("nombre");
    var miNombre = document.getElementById("mi-nombre");
    
    miNombre.innerHTML = nombre.value;
}

// Formulario
// Hamburguesa -> vegetariana, tradicional
// REfresco o cerveza
// con o sin papas

// onclick ()

// sin refrescar navegador
// imagen => con las opciones elegidas