/*
Modulo Built In:
Modulos que puedes usar directamente al trabajar con node.js (no necesitas instalarlos)

Modulo console:
Modulo built-in que implementa funcionalidad similar a la de la consola de un navegador web.
*/

console.log("Hola mundo");
console.warn("Advertencia");
console.info("Información");
console.error("Error");
console.error(new Error("Mensaje de error"));

/*
Modulo process:
Modulo built-in que provee información y control sobre el proceso de node.js que se está ejecutando.
*/

console.log(process);
console.log(process.env);
console.log(process.argv);//Argumentos de la linea de comandos
console.log(process.memoryUsage());//Memoria que está usando el proceso de node.js

/*
Modulo OS:
Contiene funcionalidad para obtener información del sistema operativo en el cual se ejecuta la aplicación.
*/
const os = require("os");
console.log(os.type());//Tipo de sistema operativo
console.log(os.homedir());//Directorio home del usuario
console.log(os.uptime());//Tiempo que ha estado encendido el sistema
console.log(os.userInfo());//Información del usuario (uid, gid, username, etc
console.log(os.arch());//Arquitectura del sistema operativo
console.log(os.platform());//Plataforma del sistema operativo
console.log(os.cpus());//Información de los cpus del sistema
console.log(os.constants);//Constantes del sistema
console.log(os.freemem());//Memoria libre del sistema
console.log(os.totalmem());//Memoria total del sistema
console.log(os.tmpdir());//Directorio temporal
console.log(os.hostname());//Nombre del host
console.log(os.networkInterfaces());//Interfaces de red

/*
Modulo timers:
Contiene fuciones que ejecutan código luego de un cierto periodo de tiempo.

Higher-order programming:
Es una técnica de programación que consiste en pasar una función como argumento a otra función.

setTimeout(): Para ejecutar codigo luego de un numero especifico de milisegundos.
Estructura:
setTimeout(fuction, delay, [arg], [...]))
o
setTimeout(callback, delay, [arg], [...])
*/
function timeDelay(topic) {
    console.log(`I'm learning ${topic}`);
}

//setTimeout(timeDelay, 1000, "Node.js");//Ejecuta la función timeDelay luego de 1 segundo.
setTimeout(timeDelay, 5000, "Node.js");//Ejecuta la función timeDelay luego de 5 segundos.

function addNumber(a, b) {
    console.log(a + b);
}

setTimeout(addNumber, 15000, 5, 10);//Ejecuta la función addNumber luego de 15 segundos.