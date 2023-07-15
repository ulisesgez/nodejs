/*
Aqui importamos el modulo que creamos en el archivo aab_moduloUno.js:
Nota: Hay diferencia entre importar (import) un modulo y
requerirlo / incluirlo (require).
*/
const saludo = require("./aaa_moduloUno.js");

/*
Creerias que podriamos hacer uso de la funcion de la siguiente forma:
console.log(saludar("Ulises"));
veamos que contiene el objeto saludo:
console.log(saludo);// { saludar: [Function: saludar] }
*/
console.log(saludo.saludar("Ulises"));
