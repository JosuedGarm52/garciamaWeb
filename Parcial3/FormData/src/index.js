

    
    document.getElementById("btnBD").addEventListener('click',async ()=>{
        let name = exampleInputNombre.value;
        if(NoNuloOVacio(name)){
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
            document.getElementById("exampleInputPassword1").value=dato.Contrasena;
            document.getElementById("exampleInputPassword2").value=dato.Contrasena;
            
        }else
        {
            console.log("No has introducido un nombre :(");
            AbrirModal("Error","Aun no introduces un valor en el nombre para el autollenado")
        }
        
    }); 

    function NoNuloOVacio(cadena){
        if(cadena.trim().length === 0 || cadena === null) {
            return false;
        }
        return true;
    }
    function AbrirModal(titulo,mensaje){
        document.getElementById('Titulo').innerHtml = ``+titulo;
        document.getElementById('Cuerpo').innerHtml = ``+mensaje;

        x = new bootstrap.Modal('#myModal',{});
        document.getElementById('Titulo').innerHtml = ``+titulo;
        document.getElementById('Cuerpo').innerHtml = ``+mensaje;
        x.show();
    };
    $("#btnQuery").click( function (){
        $("modal").modal("show");
    })
    
    $("#cerrar, #modalsave").click( function (){
        $("modal").modal("show");
    })

    const exampleModal = document.getElementById('exampleModal')
    exampleModal.addEventListener('show.bs.modal', event => {
        // Button that triggered the modal
        const button = event.relatedTarget
        // Extract info from data-bs-* attributes
        const recipient = button.getAttribute('data-bs-whatever')
        // If necessary, you could initiate an AJAX request here
        // and then do the updating in a callback.
        //
        // Update the modal's content.
        const modalTitle = exampleModal.querySelector('.modal-title')
        const modalBodyInput = exampleModal.querySelector('.modal-body input')

        
    })

    document.getElementById("btnServer").addEventListener('click',async ()=>{
        let name = message_text.value;
        if(NoNuloOVacio(name)){
            //console.log("Hola")
            var datoformula1 = new FormData(document.getElementById('modalid'));
            let respuesta  = await fetch('consultaDB2.php',{
                method: 'POST',
                body: datoformula1
            })
            
            let dato = await respuesta.json();
            
            //console.log(dato);
            document.getElementById("exampleInputNombre").value=dato.Nombre;
            document.getElementById("exampleInputApellido").value=dato.Apellido;
            document.getElementById("InputUser").value=dato.Username;
            document.getElementById("exampleInputEmail1").value=dato.Correo;
            document.getElementById("exampleInputEmail2").value=dato.Correo;
            document.getElementById("exampleInputPassword1").value=dato.Contrasena;
            document.getElementById("exampleInputPassword2").value=dato.Contrasena;
            
        }else
        {
            console.log("No has introducido un ID :(");
            //AbrirModal("Error","Aun no introduces un valor en el nombre para el autollenado")
        }
        
    }); 