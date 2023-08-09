/*
Async Await:

Usando Promesas:
*/

function comprarProducto(producto) {
    return new Promise((resolve, reject) => {
        let numeroOrden = Math.floor(Math.random() * 1000000) + 1;
        console.log('Iniciando compra');
        console.log(`Odenando ${producto}...`);
        setTimeout(() => {
            if (producto === 'Jugo') {
                console.log(`El ${producto} ha sido ordenado`);
                resolve(`Numero de orden: ${numeroOrden}`);
            } else {
                reject(`Lo sentimos, por el momento se encuentra agotado el producto solicitado (${producto})`);
            }
        }, 3000);
    });
}

function pagarProducto(respuesta) {
    return new Promise((resolve, reject) => {
        respuesta = respuesta.toLowerCase();
        console.log(`Pagando Producto...`);
        setTimeout(() => {
            resolve(`El producto con ${respuesta} ha sido pagado exitosamente`);
        }, 4000);
    });
}

/*
Chainig Promises:
comprarProducto('Huevo')
    .then(res => {
        console.log(res);//Numero de orden: 123456
        return pagarProducto(res);//Pagando Producto...
    })
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    });
*/

/*
Usando Async Await:
Todas las fuciones con async retornan una promesa.
*/
async function procesoAdquirirProducto(producto) {
    try {
        const respuestaCompra = await comprarProducto(producto);
        console.log(respuestaCompra);
        const respuestaPago = await pagarProducto(respuesta);
        console.log(respuestaPago);
    } catch (error) {
        console.log(error);
    }
}

procesoAdquirirProducto('Jugo');