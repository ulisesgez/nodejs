const saludar = (nombre) => {
    return `Saludos ${nombre}`;
}

console.log(saludar('ulises'));

console.log('inicio');//1

//En teoria este es el ultimo en ejecutarse, pero no XD:
setTimeout(() => {
    console.log('primer timeout');//5
}, 3000);

setTimeout(() => {
    console.log('segundo timeout');//3
}, 0);

setTimeout(() => {
    console.log('tercer timeout');//4
}, 0);

console.log('fin');//2