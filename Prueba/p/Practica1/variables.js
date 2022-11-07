if (true) {
    var saludo = "Hola"; // saludo es visible fuera del bloque if
}
console.log(saludo) // Imprime Hola

if (true) {
    let saludo = "Hola"; // saludo sólo es visible dentro del bloque if
}
alert(saludo); // Error: la variable saludo no está definida

function saludar() {
    alert(frase); // Imprime Undefined
    var frase = "Hola"; // Declaración y asigación de valor a la variable
}
saludar();

function saludar() {
    var saludo; // La declaración es "elevada"
    alert(saludo); // Imprime Undefined
    saludo = "Hola"; // La asignación "se queda en su lugar"
}
saludar();

//global scope
var nombre = "Juan";
    function imprime() {
    console.log ('Tú nombre es ${nombre}');
}

//function scope
function imprime() {
    var nombre = "Juan";
    function imprimeNombre() {
        console.log ('Tú nombre es ${nombre}');
    }
}
console.log(nombre); //Error

//block scope
function imprime() {
    let nombre = "Juan";
    function imprimeNombre() {
        console.log ('Tú nombre es ${nombre}');
    }
}
console.log(nombre); //Error