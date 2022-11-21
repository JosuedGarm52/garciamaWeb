<?php
    $id = $_POST['exampleInputNombre'];
    /*if(isset($_POST['Nombre']))
    {
        $id = $_POST['Nombre'];
    }*/
    

    $servidor = "localhost";
    $basedatos = "formulario";
    $usuario = "root";
    $password = "";
    //echo 'select * from datos where ID='."\n";
    $con = mysqli_connect($servidor,$usuario,$password,$basedatos) or die("No se pudo conectar a localhost");
    $consulta = "select * from datos where Nombre = '$id'";
    //echo $consulta."\n";
    $registros = mysqli_query($con,$consulta) or die("Problemas con el select");
    
    $result = mysqli_fetch_array($registros, MYSQLI_ASSOC);
    echo json_encode($result);

?>