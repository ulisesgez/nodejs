/*
Modulo Built In:
Modulos que puedes usar directamente al trabajar con node.js (no necesitas instalarlos)

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