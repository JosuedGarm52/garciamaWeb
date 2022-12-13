//import {blnCookie} from '/localvar';
//const galleta = require("./localvar");
//import modulo from "./modulo";

$(document).ready(function () {
    //window.open("./localvar.js", "Diseño Web", "width=300, height=200")
    myModalError1 = new bootstrap.Modal(document.getElementById('myModalError1'), {
        keyboard: false
    })
    myModalInt = new bootstrap.Modal(document.getElementById('myModalInt'), {
        keyboard: false
    })
});
var myModalError1;
var myModalInt;
//const { blnCookie, contentcookie, rellenarContentCookie } = require("./localvar.js");
miStorage = window.localStorage;
//localStorage.setItem('blnCookie', 'false');

document.getElementById("Ingresar").addEventListener('click',async ()=>{
    let name = lgUser.value;
    let contra = lgContra.value;
    if(NoNuloOVacio(name) && NoNuloOVacio(contra)){
        //console.log("Hola")
        var datoformula1 = new FormData(document.getElementById('formINI'));
        let respuesta  = await fetch('conLogin.php',{
            method: 'POST',
            body: datoformula1
        })
        
        try 
        {
            let dato = await respuesta.json();
            if(dato != null)
            {
                console.log(dato);
            
                //document.getElementById("exampleInputNombre").value=dato.Nombre;
                var info = rellenarContentCookie(dato.IDUsuario, dato.Nombre, dato.Apellido, dato.Username, dato.Fecha_Nacimiento, dato.Correo, dato.Contrasena,dato.Genero)
                if(localStorage.aceptaCookies === 'true'){
                    crearCookie("Usuario",info,2)
                    localStorage.setItem('info', dato);
                }
                //Consola((localStorage.aceptaCookies === 'true'),"Correcto","Error");
                window.onload = init();
                document.getElementById("axx").click();
            }else
            {
                AbrirVentanaInfo("Error","Ocurrio un error: Comprueba tu Usuario o contraseña","OK")
            }
        }catch{
            AbrirVentanaInfo("Error","Error inesperado: " + respuesta,"OK");
        }
        
        
    }else
    {
        console.log("No has introducido un ID :(");
        //AbrirModal("Error","Aun no introduces un valor en el nombre para el autollenado")
        myModalError1.show();
        
    }
    
}); 

function NoNuloOVacio(cadena){
    if(cadena.trim().length === 0 || cadena === null) {
        return false;
    }
    return true;
};


function crearCookie(clave, valor, diasexpiracion) { var d = new Date(); d.setTime(d.getTime() + (diasexpiracion*24*60*60*1000)); var expires = "expires="+d.toUTCString(); document.cookie = clave + "=" + valor + "; " + expires; }

function Consola(condic,si,sino){
    if(condic){
        console.log(si);
    }else
    {
        console.log(sino);
    }
}


function rellenarContentCookie(id,nombre,apellido,user,nacimiento,correo,contra,bit){
    return "ID= "+id+"$Nombre= "+nombre+"$Apellido= "+apellido+"$ Username= "+user+"$"+
    "FechaNacimiento= "+nacimiento+"$Correo= "+correo+"$Contrasena= "+contra+"$Genero= "+bit+"$"
}
function init() {
 
    let ax = document.createElement("ax");
    ax.setAttribute("href", "./index.html");
    let aTexto = document.createTextNode("Google");
    ax.appendChild(aTexto);
    document.body.appendChild(ax);
    
}

document.getElementById("Error1btn").addEventListener('click',()=>{
    myModalError1.hide();
});
document.getElementById("btnInt").addEventListener('click',()=>{
    myModalError1.hide();
});

function AbrirVentanaInfo(titulo, mensaje, boton){
    document.getElementById("inttitulo").innerHTML = ""+titulo;
    document.getElementById("intcampo").innerHTML = ""+mensaje;
    document.getElementById("btnInt").innerHTML = ""+boton;
    myModalInt.show();
}
document.getElementById("Registrar").addEventListener('click',async ()=>{
    let nombre = document.getElementById("exampleInputNombre").value;
    let apellido = document.getElementById("exampleInputApellido").value;
    let fecha = document.getElementById("party").value;
    let myarray = fecha.split("T");
    let fecha1 = myarray[0];
    let usuario =  document.getElementById("InputUser").value;
    let correo1 = document.getElementById("exampleInputEmail1").value;
    let correo2 = document.getElementById("exampleInputEmail2").value;
    let contra1 =document.getElementById("exampleInputPassword1").value;
    let contra2 =document.getElementById("exampleInputPassword2").value;
    var genero;
    if(actH){
        genero = 1;
    }else
    {
        genero = 0;
    }
    if(nombre==""  || apellido=="" 
            || fecha1 ==""  || usuario=="" 
            || correo1==""  || correo2==""
            || contra1=="" || contra2==""){
        AbrirVentanaInfo("Error","Debes llenar todos los campos", "OK");
    }else{
        if(correo1 === correo2)
        {
            if(contra1 === contra2){
                let bodyContent = new FormData();
                   bodyContent.append("nombre", nombre);
                   bodyContent.append("apellido", apellido);
                   bodyContent.append("fecha", fecha1);
                   bodyContent.append("usuario", usuario);
                   bodyContent.append("correo", correo1);
                   bodyContent.append("contra", contra1);
                   bodyContent.append("genero", genero);
                   
                   let response = await fetch("http://localhost/repos/ProyectoBeta/pfb/src/insertarUser.php", { 
                    method: "POST",
                    body: bodyContent
                   });
                   
                    
                    try 
                    {
                        let dato = await response.json();
                        if (dato.error == true) {
                            /* Si hemos enviado por JSON un error, lo notificamos */
                            console.log('ERROR detectado:', info);
                            
                        }
                        if(dato != null)
                        {
                        console.log(dato);
                        var info = rellenarContentCookie(dato.IDUsuario, dato.Nombre, dato.Apellido, dato.Username, dato.Fecha_Nacimiento, dato.Correo, dato.Contrasena,dato.Genero)
                        if(localStorage.aceptaCookies === 'true'){
                            crearCookie("Usuario",info,2)
                            localStorage.setItem('info', dato);
                        }
                        window.onload = init();
                        document.getElementById("axx").click();
                        }else
                        {
                            AbrirVentanaInfo("Error","Ocurrio un error: Comprueba tu Usuario o contraseña","OK")
                        }
                    }catch(e){
                        AbrirVentanaInfo("Error","Error inesperado: " + response,"OK");
                    }
                    
            }else
            {
                AbrirVentanaInfo("Error","Los campos contraseña no son iguales", "OK");
            }
        }else
        {
            AbrirVentanaInfo("Error","Los campos correo no son iguales","Ok");
        }
    }
});

document.getElementById("btnRelleno").addEventListener('click',()=>{
    document.getElementById("exampleInputNombre").value = "David";
    document.getElementById("exampleInputApellido").value = "Martinez";
    document.getElementById("InputUser").value= "DDMartinez";
    document.getElementById("exampleInputEmail1").value = "DDMartinez@gmail.com";
    document.getElementById("exampleInputEmail2").value = "DDMartinez@gmail.com";
    document.getElementById("exampleInputPassword1").value = "lucy";
    document.getElementById("exampleInputPassword2").value = "lucy";
});