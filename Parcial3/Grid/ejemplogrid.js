$(document).ready (function() {  
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://localhost/garciamaWeb/Parcial3/Grid/consultaDB3.php",
        "method": "GET",
        "headers": {
          "Accept": "*/*"
        }
      };
      
    $.ajax(settings).done(function (response) {
        let tabla = JSON.parse(response);
        $("#jsGrid").jsGrid({
            width: "100%",
            height: "400px",
     
            inserting: true,
            editing: true,
            sorting: true,
            paging: true,
     
            data: tabla,
     
            fields: [
                { name: "ID", type: "number", textField: "ID", width: 50, validate: "required" },
                { name: "Nombre", type: "text", textField: "Nombre", width: 150 },
                { name: "Apellido", type: "text", textField: "Apellido", width: 150 },
                { name: "Username", type: "text", textField: "Usuario", width: 150 },
                { name: "Correo", type: "text", textField: "Correo", width: 150 },
                { name: "Contrasena", type: "text", textField: "Contraseña", width: 150 },
            ]
        });
    });
});
    