

    
    document.getElementById("btnBD").addEventListener('click',async ()=>{
        let name = exampleInputNombre.value;
       
            //console.log("Hola")
            var datoformula = new FormData(document.getElementById('Forma'));
            let respuesta  = await fetch('consultaDB.php',{
                method: 'POST',
                body: datoformula
            })
            
            let dato = await respuesta.json();
            
            //console.log(dato);
            //document.getElementById("exampleInputNombre").value=dato.Nombre;
            document.getElementById("exampleInputApellido").value=dato.Apellido;
            document.getElementById("InputUser").value=dato.Username;
            document.getElementById("exampleInputEmail1").value=dato.Correo;
            document.getElementById("exampleInputEmail2").value=dato.Correo;
            document.getElementById("exampleInputPassword1").value=dato.Contraseña;
            document.getElementById("exampleInputPassword2").value=dato.Contraseña;
        
        
    }); 

    function NoNuloOVacio(cadena){
        if(cadena.trim().length === 0 && cadena === null) {
            return false;
        }
        return true;
    }