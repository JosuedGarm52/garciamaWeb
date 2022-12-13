//import {blnCookie, contentcookie, rellenarContentCookie} from "./localvar";

const toggleswitch = document.querySelector('.theme-switch input[type="checkbox"');
const currentTheme = localStorage.getItem('theme');

if(currentTheme){
    document.documentElement.setAttribute('data-theme', currentTheme);

    if(currentTheme === 'dark'){
        toggleswitch.checked = true;
    }


}

function switchTheme(e){
    if(e.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else{
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

toggleswitch.addEventListener('change', switchTheme, false);

document.getElementById("mas").addEventListener('click',()=>{
    console.log("x:")
});

/* ésto comprueba la localStorage si ya tiene la variable guardada */
function compruebaAceptaCookies() {
    if(localStorage.aceptaCookies != 'true'){
      cajacookies.style.display = 'block';
    }
}
  
  /* aquí guardamos la variable de que se ha
  aceptado el uso de cookies así no mostraremos
  el mensaje de nuevo */
function aceptarCookies() {
    if(localStorage.aceptaCookies === 'false'){
        localStorage.aceptaCookies = 'true';
        cajacookies.style.display = 'none';
    }else
    {
        localStorage.aceptaCookies = 'false';
        cajacookies.style.display = 'block';
    }
  }
  
  /* ésto se ejecuta cuando la web está cargada */
  $(document).ready(function () {
      compruebaAceptaCookies();
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
    function dividirCookie(objeto)
    {
        var myarray = objeto.split("$");
        //console.log(myarray);
        var miniArray = myarray[1].split(" "); var name = miniArray[1];
        var miniArray = myarray[0].split(" "); var id = miniArray[1];
        var miniArray = myarray[2].split(" "); var apellido = miniArray[1];
        var miniArray = myarray[3].split(" "); var user = miniArray[2];
        var miniArray = myarray[4].split(" "); var fecha = miniArray[1];
        var miniArray = myarray[5].split(" "); var correo = miniArray[1];
        var miniArray = myarray[6].split(" "); var contrasena = miniArray[1];
        var miniArray = myarray[7].split(" "); var genero = miniArray[1];
        return user;
        //console.log(id+","+name+","+apellido+","+user+","+fecha+","+correo+","+contrasena+","+genero);
    }

    document.getElementById("delcookie").addEventListener("click", ()=>{
        localStorage.aceptaCookies = 'false';
        document.cookie = "Usuario=; max-age=0";
    });

    document.getElementById("btncerrar").addEventListener("click",()=>{
        document.cookie = "Usuario=; max-age=0";
        ExisteCookie();
    });