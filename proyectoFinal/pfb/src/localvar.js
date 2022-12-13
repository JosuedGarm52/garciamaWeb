// // subtract.js
// function subtract(a, b) {
//     return a - b;
//   }
  
//   // default export
//   module.exports = subtract;

var blnCookie = false;

var contentcookie = "ID= ;Nombre= ;Apellido= ; Username= ; FechaNacimiento= ;Correo= ;Contrasena= ;Genero= ;";

function rellenarContentCookie(id,nombre,apellido,user,nacimiento,correo,contra,bit){
    contentcookie = "ID= "+id+"$Nombre= "+nombre+"$Apellido= "+apellido+"$ Username= "+user+"$"+
    "FechaNacimiento= "+nacimiento+"$Correo= "+correo+"$Contrasena= "+contra+"$Genero= "+bit+"$"
}

module.exports = blnCookie,rellenarContentCookie,contentcookie;
