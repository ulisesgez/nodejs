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

Package.json:
Archivo que contiene informacion sobre un paquete.
Contiene informacion como el nombre, la version, la descripcion, los scripts, las dependencias, etc.

Package-lock.json:
Se genera automaticamente cuando npm modifica el arbol de node_modules o package.json.
Describe el arbol generado para que futuras instalaciones puedan generar exactamente el mismo arbol.
Otros desarrolladores pueden instalar las exactamente las mismas dependencias.
Propiedades:
name: Nombre del paquete.
version: Version del paquete.
lockfileVersion: Version del formato del archivo.
packages: Objeto que asocia la ubicacion de cada paquete con un objeto que continene informacion sobre ese paquete.

Inicializar un proyecto:

npm init// Crea un archivo package.json
npm init -y// Crea un archivo package.json con valores por defecto
o
npm init --yes// Crea un archivo package.json con valores por defecto

Instalar un paquete:
npm install <package>

Desinstalar un paquete:
npm uninstall <package>

Instalar una dependencia de desarrollo:
npm install <package> --save-dev
*/