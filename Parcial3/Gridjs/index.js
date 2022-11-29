
//async function TraerDatos(){
//    let headersList = {
//                "Accept": "*/*"
//            } 
//    
//    let response = await fetch("http://localhost/garciamaWeb/Parcial3/Gridjs/consultaDB3.php", { 
//            method: "GET",
//            headers: headersList
//    });
//    
//    let datos = await response.json();
//    console.log(datos);
//    
//    new gridjs.Grid({
//        columns: ["Nombre", "Apellido", "Username","Correo","Contrasena"],
//        data: datos
//    }).render(document.getElementById("wrapper"));
//}
//TraerDatos();

(async () =>{
    let headersList = {
        "Accept": "*/*"
    } 
    
    let response = await fetch("http://localhost/garciamaWeb/Parcial3/Gridjs/consultaDB3.php", { 
            method: "GET",
            headers: headersList
    });
    
    let datos = await response.json();
    console.log(datos);
    
    new gridjs.Grid({
        columns: ["id","Nombre", "Apellido", "Username","Correo","Contrasena"],
        data: datos
    }).render(document.getElementById("wrapper"));
})();