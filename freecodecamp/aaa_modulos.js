function saludar(nombre = "Usuario") {
    return `Hola, ${nombre}!`;
}

/*
Objeto que contendra todos los elementos:
console.log(module.exports);
module.exports

Agregar la definicion de la funcion saludar al objeto
module.exports (module.exports.propiedad = funcion):

console.log(module.exports);// {}
*/
module.exports.saludar = saludar;

/*
console.log(module.exports);// { saludar: [Function: saludar] }
*/