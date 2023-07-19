/*
JSON (Javascript Object Notation):
Formato de texto usado para almacenar y transportar información.
Json esta badado en la notacion de objetos de Javascript, pero como formato de texto.
Nos permite almacenar objetos de javascript como texto.
Es independiente del lenguaje de programacion con el cual estas trabajando, es decir, puede ser usado por la mayoria de los lenguajes de programación.

Ver el archivo json en javascript:
*/
const course = require('./aam_json.json');

console.log(course);
console.log(typeof course);//object
console.log(course.title);

/*
Pasar de un objeto de javascript a una cadena de caracteres
(cadena de caracteres en formato json):
*/

let javascriptCourse = {
    "title": "javascript",
    "views": 1500,
    "likes": 35,
    "dislikes": 5,
    "comments": [
        {
            "user": "user8",
            "message": "message8"
        },
        {
            "user": "user9",
            "message": "message9"
        }
    ],
    "public": true
};
console.log(javascriptCourse);
console.log(typeof javascriptCourse);//object
let javascriptCourseJson = JSON.stringify(javascriptCourse);
console.log(javascriptCourseJson);
console.log(typeof javascriptCourseJson);//string
console.log(javascriptCourseJson.title);//undefined

/*
Cadena de caracteres en formato json a un objeto de javascript:
*/
let javascriptCourseObject = JSON.parse(javascriptCourseJson);
console.log(javascriptCourseObject);
console.log(typeof javascriptCourseObject);//object
console.log(javascriptCourseObject.title);//javascript