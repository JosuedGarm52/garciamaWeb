<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    if(isset($_COOKIE["ticket"])){
        printf ( "ticket existe y  valor: " . $_COOKIE["ticket"]);
        echo '<h2>Ticket existe </h2>';
    }else{
        print "ticket no existe";
        echo '<h2>Ticket no existe </h2>';  
        $fecha = date(01 / 12 / 2022);
        setcookie("ticket",$fecha, time() + (7 * 24 * 60 * 60)); 
    }
    ?>
    
</body>

</html>