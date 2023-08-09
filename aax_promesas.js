/*
Promesa:
Es un objeto que representa el eventual resultado (o error) de una operación asíncrona.

Promesa --> Pending (pendiente) --> Resolved/Fullfilled (resuelta/cumplida) o Rejected (rechazada)

Una promesa es un objeto de javascript.
Ese objeto se asocia a una callback function.
Las promesas tienen un metodo .then (), con el cual podemos decidir que ocurre  cuando de completa la promes (exito o error).

Callback function:
Fucion que se pasa como argumento a otra funcion y luego se ejecuta dentro de la fucion externa.

Catch:
Metodo de promesa que solo se ejecuta si la promesa es rechazada.
*/
const promesaCumplida = true;

const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (promesaCumplida) {
            resolve('La promesa se cumplio');
        } else {
            reject('La promesa no se cumplio');
        }
    }, 3000)
});
/*
//mensaje o valor:
promesa.then((mensaje) => {
    console.log(mensaje);//La promesa se cumplio 
});
*/

const manejarPromesaCumplida = (valor) => {
    console.log(valor);
};

const manejarPromesaRechazada = (razonRechazo) => {
    console.log(razonRechazo);
};

promesa.then(manejarPromesaCumplida, manejarPromesaRechazada);//La promesa se cumplio