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
    console.log("Este mensaje se muestra despues de leer el archivo.");
});

fs.readFile("./moduloBuiltIn.html", "utf-8", (error, data) => {
    if (error) {
        throw error;//throw es una palabra reservada de js que permite lanzar un error. Interrumpe la ejecucion del programa si hay un error.
    } else {
        console.log(data);
    }
    console.log("Este mensaje se muestra despues de leer el archivo.");//Este mensaje no se muestra porque se lanzo un error.
});

fs.rename('./main.html', './index.html', (error) => {
    if (error) {
        throw error;//Interrumpe la ejecucion del programa si hay un error.
    } else {
        console.log("El archivo fue renombrado exitosamente.");
    }
});

fs.appendFile('./index.html', '<p>Este texto fue agregado al archivo.</p>', (error) => {
    if (error) {
        throw error;//Interrumpe la ejecucion del programa si hay un error.
    } else {
        console.log("El texto fue agregado al archivo exitosamente.");
    }
});

fs.writeFile('./index.html', '<h1>Este texto reemplazo al archivo.</h1>', (error) => {
    if (error) {
        throw error;//Interrumpe la ejecucion del programa si hay un error.
    } else {
        console.log("El texto reemplazo al archivo exitosamente.");
    }
});

fs.unlink('./index.html', (error) => {
    if (error) {
        throw error;//Interrumpe la ejecucion del programa si hay un error.
    } else {
        console.log("El archivo fue eliminado exitosamente.");
    }
});

/*
Al ejecutar todo parecira que no hay un orden debido al asincronismo.
Este ultimo lo haremod sincrono añadiendo Sync a los metodos.

fs.unlinkSync('./index.html', (error) => {
    if (error) {
        throw error;//Interrumpe la ejecucion del programa si hay un error.
    } else {
        console.log("El archivo fue eliminado exitosamente.");
    }
});
*/