<?php
    $servidor = "localhost";
    $basedatos = "formulario";
    $usuario = "root";
    $password = "";
    //echo 'select * from datos where ID='."\n";
    $con = mysqli_connect($servidor,$usuario,$password,$basedatos) or die("No se pudo conectar a localhost");
    $consulta = "select * from datos";
    //echo $consulta."\n";
    $registros = mysqli_query($con,$consulta) or die("Problemas con el select");
    
    $result= mysqli_fetch_all($registros,MYSQLI_ASSOC);
    mysqli_close($con);
    echo json_encode($result);

?>