/*
Evento:
Acción que se realiza en la aplicación.
Una accion que se realiza en la aplicación, puede ser provocada por:
- El usuario (click, teclado, etc)
- El API (carga de página, terminar de cargar, etc)
- Una API externa (base de datos, reloj, etc)
Tambien podemos definir eventos que se desencadenen y ejecuten 
internamente en el servidor.

Asincrono:
No se ejecuta en el orden en que se escriben.

Sincrono:
Se ejecuta en el orden en que se escriben.

Emitters(emisores):
Objetos que emiten eventos nombrados y llaman a funciones especificas cuando ocurren.
Los emisores son instacias de la clase EventEmitter.
Tienen un metodo -on() para asociar una funcion al evento.
Esa funcion se ejecuta cuando el evento ocurre.
Esa funcion se denomina "Event Handler"(manejador de eventos).

Modulo Events:
Para poder crear y definir nuestros propios eventos, necesitamos
el modulo "events". Dicho modulo nos permite:
- Definir eventos -Emitir eventos -Escuchar eventos

*/