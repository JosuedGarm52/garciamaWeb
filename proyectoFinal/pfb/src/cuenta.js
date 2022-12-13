$(document).ready(function () {
    myModalError = new bootstrap.Modal(document.getElementById('borrarmodal'), {
        keyboard: false
    })
    myModalInt = new bootstrap.Modal(document.getElementById('myModalInt'), {
        keyboard: false
    })
    let galleta = obtenerCookie('Usuario');
    llenardividirCookie(galleta);
    Llenarcampos();
    document.getElementById("forNombre").disabled = true;
    document.getElementById("forApellido").disabled = true;
    document.getElementById("forUsuario").disabled = true;
    document.getElementById("forCorreo").disabled = true;
    forContra.disabled = true;
});
(function() {
    document.getElementById('forUsuario').cheked = true;
})();
var myModalInt
var myModalError;
function Llenarcampos(){
    document.getElementById("forNombre").value = ""+name1;
    document.getElementById("forApellido").value = apellido;
    document.getElementById("forUsuario").value = user;
    document.getElementById("forCorreo").value = correo;
    forContra.value = contrasena;
}
document.getElementById("btnBorrar").addEventListener('click',()=>{
    myModalError.show();
})
document.getElementById("btncerrar2").addEventListener('click',()=>{
    myModalError.hide();
})
document.getElementById("adios").addEventListener('click',()=>{
    myModaladios = new bootstrap.Modal(document.getElementById('modaladios'), {
        keyboard: false
    })
    myModaladios.show();
})
document.getElementById("btnx").addEventListener('click',async ()=>{
    
    var galleta = obtenerCookie('Usuario');
    var cuenta = dividirCookie(galleta);
       let bodyContent = new FormData();
       bodyContent.append("usuario", cuenta);
       
        await fetch("http://localhost//Repos//ProyectoBeta//pfb//src//borrar.php", { 
            method: "POST",
            body: bodyContent
       });
    document.cookie = "Usuario=; max-age=0";
    document.getElementById("casa").click();
})
function dividirCookie(objeto)
{
    var myarray = objeto.split("$");
    console.log(myarray);
    var miniArray = myarray[3].split(" "); var user = miniArray[2];
    console.log(miniArray)
    return user;
}
var name1;var id;var apellido;var user;var fecha;var correo;var contrasena;var genero;
var compnamev= false, compapellido=false, compuser=false, compcorreo=false, compcontra=false;
function llenardividirCookie(objeto)
    {
        var myarray = objeto.split("$");
        //console.log(myarray);
        var miniArray = myarray[1].split(" "); name1 = miniArray[1];
        var miniArray = myarray[0].split(" "); id = miniArray[1];
        var miniArray = myarray[2].split(" "); apellido = miniArray[1];
        var miniArray = myarray[3].split(" "); user = miniArray[2];
        var miniArray = myarray[4].split(" "); fecha = miniArray[1];
        var miniArray = myarray[5].split(" "); correo = miniArray[1];
        var miniArray = myarray[6].split(" "); contrasena = miniArray[1];
        var miniArray = myarray[7].split(" "); genero = miniArray[1];
        
}
function obtenerCookie(clave) { var name = clave + "="; var ca = document.cookie.split(';'); for(var i=0; i<ca.length; i++) { var c = ca[i]; while (c.charAt(0)==' ') c = c.substring(1); if (c.indexOf(name) == 0) return c.substring(name.length,c.length); } return ""; }

document.getElementById("checkAvanzado1").addEventListener('click',()=>{
    if( compnamev )
    {
        compnamev = false;
        
    }else
    {
        compnamev = true;
    }
    let idy = document.getElementById("forNombre");
    idy.disabled = !compnamev;
})

document.getElementById("checkAvanzado2").addEventListener('click',()=>{
    if( compapellido )
    {
        compapellido = false;
        
    }else
    {
        compapellido = true;
    }
    let idy = document.getElementById("forApellido");
    idy.disabled = !compapellido;
})

document.getElementById("checkAvanzado3").addEventListener('click',()=>{
    if( compuser)
    {
        compuser = false;
        
    }else
    {
        compuser = true;
    }
    let idy = document.getElementById("forUsuario");
    idy.disabled = !compuser;
})

document.getElementById("checkAvanzado4").addEventListener('click',()=>{
    if( compcorreo )
    {
        compcorreo = false;
        
    }else
    {
        compcorreo = true;
    }
    let idy = document.getElementById("forCorreo");
    idy.disabled = !compcorreo;
})

document.getElementById("checkAvanzado5").addEventListener('click',()=>{
    if( compcontra )
    {
        compcontra = false;
        
    }else
    {
        compcontra = true;
    }
    document.getElementById("forContra").disabled = !compcontra;
    
})
function AbrirVentanaInfo(titulo, mensaje, boton){
    document.getElementById("inttitulo").innerHTML = ""+titulo;
    document.getElementById("intcampo").innerHTML = ""+mensaje;
    document.getElementById("btnInt").innerHTML = ""+boton;
    myModalInt.show();
}
function notNulo(ret){
    if(ret === null || ret === "" || ret===" ")
    {
        return false;
    }else
    {
        return true;
    }
}
document.getElementById("update").addEventListener('click',async ()=>{
    if(notNulo(forApellido) || notNulo(forContra) || notNulo(forCorreo) || notNulo(forNombre) || notNulo(forUsuario)){
        if((compapellido || compcontra || compcorreo || compnamev || compuser) )
        {
            let cadena = "";
            primero = false;
            if(compnamev)
            {
                if(primero)
                {
                    cadena += " , "
                }
                cadena += "`Nombre`='"+forNombre.value+"'";
                name1 = forNombre.value;
                primero = true;
            }
            if(compapellido)
            {
                if(primero)
                {
                    cadena += " , "
                }
                cadena += "`Apellido`='"+forApellido.value+"'";
                apellido = forApellido.value;
                primero = true;
            }
            if(compuser)
            {
                if(primero)
                {
                    cadena += " , "
                }
                cadena += "`Username`='"+forUsuario.value+"'";
                user = forUsuario.value;
                primero = true;
            }
            if(compcorreo)
            {
                if(primero)
                {
                    cadena += " , "
                }
                cadena += "`Correo`='"+forCorreo.value+"'";
                correo = forCorreo.value;
                primero = true;
            }
            if(compcontra)
            {
                if(primero)
                {
                    cadena += " , "
                }
                cadena += "`Contrasena`='"+forContra.value+"'";
                contrasena = forContra.value;
                primero = true;
            }
            consulta = "UPDATE `cuenta` SET " + cadena;
            consulte = consulta + " WHERE IDUsuario = " + id + ";";
            console.log(consulte);  
            let bodyContent = new FormData();
            bodyContent.append("cadena", consulte);
            
            let response = await fetch("http://localhost/repos/ProyectoBeta/pfb/src/actualizar.php", { 
                method: "POST",
                body: bodyContent
            });
            
            var datoformula1 = new FormData();
                datoformula1.append("lgUser",user);
                datoformula1.append("lgContra",contrasena);
                let respuesta  = await fetch("http://localhost/repos/ProyectoBeta/pfb/src/conLogin.php",{
                    method: 'POST',
                    body: datoformula1
                })
            try{
                console.log("1")
                let dato = await respuesta.json();
                if(dato != null)
                {
                    console.log("")
                    var info = rellenarContentCookie(dato.IDUsuario, dato.Nombre, dato.Apellido, dato.Username, dato.Fecha_Nacimiento, dato.Correo, dato.Contrasena,dato.Genero)
                    if(localStorage.aceptaCookies === 'true'){
                        crearCookie("Usuario",info,2)
                        localStorage.setItem('info', dato);
                    }
                    console.log(info)
                }else
                {
                    AbrirVentanaInfo("Error","Ocurrio un error: Comprueba tu Usuario o contraseña","OK")
                }
                
            }catch{
                AbrirVentanaInfo("Error","Error inesperado: " + respuesta,"OK");
            }
               
                
            let vass = new bootstrap.Modal(document.getElementById('modalregresar'), {
                keyboard: false
            }) 
             vass.show();
        }else
        {
            AbrirVentanaInfo("Error","Debes actualizar al menos un campo","OK");
        }
    }else
    {
        AbrirVentanaInfo("Error","Ningun campo debe estar en blanco","OK")
    }
    
})

function rellenarContentCookie(id,nombre,apellido,user,nacimiento,correo,contra,bit){
    return "ID= "+id+"$Nombre= "+nombre+"$Apellido= "+apellido+"$ Username= "+user+"$"+
    "FechaNacimiento= "+nacimiento+"$Correo= "+correo+"$Contrasena= "+contra+"$Genero= "+bit+"$"
}

document.getElementById("btny").addEventListener('click',async ()=>{
    
    document.getElementById("casa").click();
})
function crearCookie(clave, valor, diasexpiracion) { var d = new Date(); d.setTime(d.getTime() + (diasexpiracion*24*60*60*1000)); var expires = "expires="+d.toUTCString(); document.cookie = clave + "=" + valor + "; " + expires; }


document.getElementById("btnAbout").addEventListener('click',()=>{
    console.log("lol")
    var texto = "Derechos reservados: Creador Josue Garcia Copyright (c)@ 2022 All Rights Reserved.......................Clase PROGRAMACION WEB";
    AbrirVentanaInfo("Derechos",""+texto,"OK...");
})

document.getElementById("btncerrar").addEventListener("click",()=>{
    document.cookie = "Usuario=; max-age=0";
    ExisteCookie();
});

function ExisteCookie()
  {
    if(comprobarCookie('Usuario'))
      {
        var galleta = obtenerCookie('Usuario');
        
        var cuenta = dividirCookie(galleta);
        //Si tiene la cookie login
        $(".nextBoton").css("display", "none");
        $(".virtual").css("display", "block");
        acuenta.innerHTML = cuenta;
        
      }else
      {
        //No la tiene 
        $(".virtual").css("display", "none");
        $(".nextBoton").css("display", "block");
      }
  }

  function obtenerCookie(clave) { var name = clave + "="; var ca = document.cookie.split(';'); for(var i=0; i<ca.length; i++) { var c = ca[i]; while (c.charAt(0)==' ') c = c.substring(1); if (c.indexOf(name) == 0) return c.substring(name.length,c.length); } return ""; }

  function comprobarCookie(clave) { 
        var clave = obtenerCookie(clave); 
        if (clave!="") 
        { // La cookie existe. 
            return true;
        }
        else{ 
            // La cookie no existe. 
            return false;
        } 
    }