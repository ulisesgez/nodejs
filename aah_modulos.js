/*
Modulos:
- Son archivos que contienen codigo de JS.
- Pueden ser requeridos desde otros archivos.
- Pueden ser exportados desde un archivo.

CommonJS:
- Es una especificacion que define como deben ser los modulos de JS.
- Es la especificacion que NodeJS implementa para manejar modulos.
- Cada archivo es un modulo.
- Cada modulo tiene su propio scope.
- Para exportar un elemento se debe agregar al objeto module.exports.
- Para importar un modulo se debe usar la funcion require.
- Esta es la vieja forma de manejar modulos en JS.

ESModules:
- Es una especificacion que define como deben ser los modulos de JS.
- Es la especificacion que los navegadores implementan para manejar modulos.
- Cada archivo es un modulo.
- Cada modulo tiene su propio scope.
- Para exportar un elemento se debe agregar al objeto export.
- Para importar un modulo se debe usar la funcion import.
- Esta es la nueva forma de manejar modulos en JS.

Exportar elemento:
*/
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