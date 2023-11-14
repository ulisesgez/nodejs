/*
Single thread (synchronous):
Un solo hilo de ejecucion, solo puede ejecutar una cosa a la vez.
Ejemplo:
*/

console.log('Inicio');
console.log('Paso 1');
console.log('Paso 2');
console.log('Fin');

/*
Multi thread:
Permite ejecutar varias cosas a la vez, en paralelo.

Workerthreads: 
Nos permite crear hilos en javascript, para ejecutar codigo en paralelo.
Pretende simular el multi thread de otros lenguajes.
Ejemplo:
*/
console.log('Inicio');
setTimeout(() => {
    console.log('Paso 1');
}, 2000);
console.log('Paso 2');
console.log('Fin');