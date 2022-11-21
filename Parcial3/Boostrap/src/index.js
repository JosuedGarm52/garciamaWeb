  
    document.getElementById("btnGet").addEventListener('click',()=>{
        //console.log("click");

        
    fetch('getRegistro.php')
        .then(respuesta => respuesta.json())
            //.then(dato => console.log(dato));
            .then(dato => refrescar(dato));

    function refrescar(reg){
            document.getElementById("exampleInputNombre").value=reg.Nombre;
            document.getElementById("exampleInputApellido").value=reg.Apellido;
            document.getElementById("InputUser").value=reg.Username;
            document.getElementById("exampleInputEmail1").value=reg.Correo;
            document.getElementById("exampleInputEmail2").value=reg.Correo;
            document.getElementById("exampleInputPassword1").value=reg.Contraseña;
            document.getElementById("exampleInputPassword2").value=reg.Contraseña;
        }
        
    });
    
/*
    document.getElementById("btnGet").addEventListener('click',async ()=>{
        let respuesta = await fetch('getRegistro.php')
        let dato = await respuesta.json()

        document.getElementById("exampleInputNombre").value=dato.Nombre;
        document.getElementById("exampleInputApellido").value=dato.Apellido;
        document.getElementById("InputUser").value=dato.Username;
        document.getElementById("exampleInputEmail1").value=dato.Correo;
        document.getElementById("exampleInputEmail2").value=dato.Correo;
        document.getElementById("exampleInputPassword1").value=dato.Contraseña;
        document.getElementById("exampleInputPassword2").value=dato.Contraseña;
    });
    */
    