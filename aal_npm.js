/*
Npm:
Es el archivo de software mas grande del mundo que contiene paquetes que
puedes instalar y usar con node.js.
Tambien es una herramienta para la linea de comandos.

Paquete:
Archivo o directorio descrito por un archivo package.json.

Modulo:
Cualquier archivo o directorio en el directorio node_modules que puede ser importado con require().
Para poder icluir un modulo con require() debe ser un archivo javascript (.js) o una carpeta con un archivo package.json que contiene una propiedad "main".
Solo los modulos que tienen un archivo package.json son paquetes.

Dependencia:
Paquete requerido por otro paquete.
Paquete que otro paquete necesita para funcionar correctamente.

npm init// Crea un archivo package.json
npm init -y// Crea un archivo package.json con valores por defecto
o
npm init --yes// Crea un archivo package.json con valores por defecto
*/