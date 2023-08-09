/*
No incluir todos los elementos exprtados de un modulo:
Queremos importar solo la funcion saludoAmigo del modulo aad_desestructuracionRequire.js
*/
const {saludoAmigo} = require('./aad_desestructuracionRequire.js');
console.log(saludoAmigo("Juan"));
//console.log(saludoFamiliar("Ulises"));//saludoFamiliar is not defined