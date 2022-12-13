<?php
    $cadena = $_POST['lgUser'];
    $entero = $_POST['lgContra'];
    // $entero = 1234;
    // $cadena = "JohnDoe";

    $servidor = "localhost";
    $basedatos = "music";
    $usuario = "root";
    $password = "";
    $con = mysqli_connect($servidor,$usuario,$password,$basedatos) or die("No se pudo conectar a localhost");
    $consulta = "SELECT * FROM `cuenta` WHERE ( (Username = '$cadena' OR Correo = '$cadena') AND Contrasena = '$entero');";
    //echo $consulta;
    $registros = mysqli_query($con,$consulta) or die("Problemas con el select");
    $result = mysqli_fetch_array($registros, MYSQLI_ASSOC);
    echo json_encode($result);

?>