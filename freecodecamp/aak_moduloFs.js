/*
Modulo Built In:
Modulos que puedes usar directamente al trabajar con node.js (no necesitas instalarlos)

Modulo fs:
Modulo que contiene funcionalidad muy util para trabajar con el sistema de archivos del sistema operativo.
Todos los metodos de este modulo son asincronos por defecto.
Pero puedes escoger versiones sincronas de estos metodos agregandko Sync a sus nombres.
*/

const fs = require("fs");
fs.readFile("./aaf_moduloBuiltIn.html", "utf-8", (error, data) => {
    if (error) {
        console.log(error);
    } else {
        console.log(data);
    } 
});