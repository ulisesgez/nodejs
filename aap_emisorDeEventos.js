const EventEmitter = require('events');
//console.log('EventEmitter: ', EventEmitter);// EventEmitter:  [Function: EventEmitter]
//Modulo events y princio basico de los emisores de eventos:
const EmisorDeEventos = new EventEmitter();

EmisorDeEventos.on('compra', () => {
    console.log('Se realizo una compra', );//Funcion que maneja el evento o event handler
});

EmisorDeEventos.emit('compra');// Se realizo una compra
//EmisorDeEventos.emit('compra'); // Como esta comentado no se ejecuta
EmisorDeEventos.emit('compra');// Se realizo una compra