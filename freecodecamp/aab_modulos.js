/*
Exportar varios elementos:
*/
function buenosDias(nombre = "Usuario") {
    return `Hola, buenos dias ${nombre}!`;
}

module.exports.buenosDias = buenosDias;

function buenasTardes(nombre = "Usuario") {
    return `Hola, buenas tardes ${nombre}!`;
}

module.exports.buenasTardes = buenasTardes;

function buenasNoches(nombre = "Usuario") {
    return `Hola, buenas noches ${nombre}!`;
}

module.exports.buenasNoches = buenasNoches;