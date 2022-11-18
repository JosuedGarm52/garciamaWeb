<?php
    $servidor = "localhost";
    $basedatos = "ejemplo";
    $usuario = "root";
    $password = "";

    $consulta = "select * from nombre";

    $con = mysqli_connect($servidor,$usuario,$password,$basedatos) or die("No se pudo conectar a localhost");

    $registros = mysqli_query($con,$consulta) or die("Problemas con el select");

    /*
    //Resultado con array asociativo 
    while($reg = mysqli_fetch_array($registros,MYSQLI_ASSOC))
    {
        print($reg['NOMBRE'].' '. $reg['APELLIDO'].'<br>');
    }
    */
    /*
    //Resultado como array numerico
    while($reg = mysqli_fetch_array($registros,MYSQLI_NUM))
    {
        print($reg[1].' '. $reg[2].'<br>');
    }
    */
    
    //Obtiene todos los registros 
    $result = mysqli_fetch_all($registros);

    mysqli_close($con);

    echo json_encode($result); //Se convierte a json
    
?>