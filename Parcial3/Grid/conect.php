<?php
    $servidor = "localhost";
    $basedatos = "ejemplo";
    $usuario = "root";
    $password = "";

    $consulta = "select * from nombre";

    $con = mysqli_connect($servidor,$usuario,$password,$basedatos) or die("No se pudo conectar a localhost");

    $registros = mysqli_query($con,$consulta) or die("Problemas con el select");

   
    $result = mysqli_fetch_all($registros, MYSQLI_ASSOC);

    mysqli_close($con);

    echo json_encode($result); //Se convierte a json
    
?>