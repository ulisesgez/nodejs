//No incluir todos los elementos exprtados de un modulo:

function saludoAmigo(nombre = "Usuario") {
    return `Hola, ${nombre}!`;
}

function saludoFamiliar(nombre = "Usuario") {
    return `Que tal, ${nombre}!`;
}

function saludoFormal(nombre = "Usuario") {
    return `Buenos dias, ${nombre}!`;
}

module.exports = {
    saludoAmigo,
    saludoFamiliar,
    saludoFormal
}