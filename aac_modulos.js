/*
Aqui importamos el modulo que creamos en el archivo aab_moduloUno.js:
Nota: Hay diferencia entre importar (import) un modulo y
requerirlo / incluirlo (require).
*/
const saludo = require("./aaa_modulos");
const saludos = require("./aab_modulos");

// const buenosDias = require("./aab_modulos");
// const buenasTardes = require("./aab_modulos");
// const buenasNoches = require("./aab_modulos");

/*
Creerias que podriamos hacer uso de la funcion de la siguiente forma:
console.log(saludar("Ulises"));
veamos que contiene el objeto saludo:
console.log(saludo);// { saludar: [Function: saludar] }
*/
console.log(saludo.saludar("Ulises"));

console.log(saludos.buenosDias("Anna"));
console.log(saludos.buenasTardes("Otto"));
console.log(saludos.buenasNoches("Hannah"));