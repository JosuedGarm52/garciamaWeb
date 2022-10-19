//Ejemplos de clase
var raro = function(){
    return true;
} ;
function saludar(nombre){
    console.log('Hola  ${nombre},');
};
saludar("Gerardo");

(function saludar(nombre){
    console.log("Hola " + nombre)
})("Gerardo");

//const saludar()