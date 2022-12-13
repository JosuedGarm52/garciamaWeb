<?php
    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $fecha = $_POST['fecha'];
    $username = $_POST['usuario'];
    $correo = $_POST['correo'];
    $contra =  $_POST['contra'];
    $genero = $_POST['genero'];

    $servidor = "localhost";
    $basedatos = "music";
    $usuario = "root";
    $password = "";
    $con = mysqli_connect($servidor,$usuario,$password,$basedatos) or die("No se pudo conectar a localhost");
    $consulta = "INSERT INTO `cuenta`(`Nombre`, `Apellido`, `Username`, `Fecha_Nacimiento`, `Correo`, `Contrasena`, `Genero`) 
                VALUES ('{$nombre}','{$apellido}','{$username}','{$fecha}','{$correo}','{$contra}',{$genero})";
    $registros = mysqli_query($con,$consulta) or die("Problemas con el select");
    $consulta = "SELECT * FROM `cuenta` WHERE Username = '$username';";
    $registros = mysqli_query($con,$consulta) or die("Problemas con el select");
    $result = mysqli_fetch_array($registros, MYSQLI_ASSOC);
    echo json_encode($result);
    
?>