/*
Exportando con ESModules:
*/

const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;
const modulo = (a, b) => a % b;

export const calculadora = {
    sumar,
    restar,
    multiplicar,
    dividir,
    modulo
};