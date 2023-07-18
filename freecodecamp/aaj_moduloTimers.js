/*
Modulo Built In:
Modulos que puedes usar directamente al trabajar con node.js (no necesitas instalarlos)

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
function usingSettimeout(topic) {
    console.log(`I'm learning ${topic}`);
}

//setTimeout(usingSettimeout, 1000, "Node.js");//Ejecuta la función usingSettimeout luego de 1 segundo.
setTimeout(usingSettimeout, 5000, "Node.js");//Ejecuta la función usingSettimeout luego de 5 segundos.

function addNumber(a, b) {
    console.log(a + b);
}

setTimeout(addNumber, 15000, 5, 10);//Ejecuta la función addNumber luego de 15 segundos.

/*
setImmediate(): Para ejecutar codigo asincrono en la proxima iteración del ciclo de eventos(lo mas pronto posible).
Se ejecuta despues del codigo sincrono.
Se ejecuta lo mas rapido posible de forma asincrona.

Estructura:
setImmediate(fuction, [arg], [...]))
o
setImmediate(callback, [arg], [...])
*/

function usingsetimmediate(topic) {
    console.log(`I'm learning ${topic}`);
}

console.log("Before setImmediate");
setImmediate(usingsetimmediate, "Node.js");//Ejecuta la función usingsetimmediate en la proxima iteración del ciclo de eventos.
console.log("After setImmediate");//Se ejecuta antes que la función usingsetimmediate.

/*
setInterval(): Para ejecutar codigo un numero infinito de veces con un retraso especifico de milisegundos

Estructura:
setInterval(fuction, delay, [arg], [...]))
o
setInterval(callback, delay, [arg], [...])
*/

function usingsetinterval(topic) {
    console.log(`I'm learning ${topic}`);
}

setInterval(usingsetinterval, 1000, "Node.js");//Ejecuta la función usingsetinterval cada 1 segundo.