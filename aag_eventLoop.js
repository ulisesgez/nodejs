/*
Callstack (Pila de Llamadas):
La pila de llamadas, o callstack en inglés, es una estructura de datos que se utiliza
en la programación para realizar un seguimiento de las funciones que están siendo llamadas
en un momento dado. Cuando se llama a una función, su información se agrega en la parte
superior de la pila. A medida que la función se completa y retorna, se elimina de la pila.
Esto permite a los programadores rastrear dónde se encuentran en la ejecución del programa
y gestionar las llamadas a funciones de manera ordenada.

Libuv API:
La API de Libuv es una biblioteca multiplataforma en C que se utiliza para manejar
operaciones asíncronas en aplicaciones. Está diseñada para lidiar con tareas de
entrada/salida (E/S) no bloqueantes, como operaciones de red y sistemas de archivos,
en entornos que admiten concurrencia, como Node.js. La API de Libuv proporciona
abstracciones para manejar sockets, archivos, eventos y otros componentes de E/S
de una manera eficiente y portátil.

Event Loop (Bucle de Eventos):
El bucle de eventos es un concepto fundamental en la programación asíncrona.
Es una estructura que permite que un programa siga funcionando y respondiendo
a eventos mientras espera la finalización de operaciones asíncronas,
como lecturas de archivos o respuestas de red. El bucle de eventos verifica
constantemente si hay eventos pendientes en la cola y, si los encuentra, los procesa.
Luego, el bucle vuelve a verificar si hay más eventos, y así sucesivamente.

Event Queue (Cola de Eventos):
La cola de eventos es una lista de eventos pendientes que esperan a ser procesados por
el bucle de eventos. Los eventos en esta cola pueden ser cosas como solicitudes de red,
clics de mouse, presiones de teclas u otros tipos de interacciones con el sistema.
El bucle de eventos retira eventos de la cola uno por uno y los maneja según corresponda,
permitiendo así una ejecución asíncrona y eficiente de múltiples tareas en un programa.
*/