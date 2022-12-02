<?php
            $fechaHoy = date(01 / 12 / 2022);
            $siguientesemana = time() + (7 * 24 * 60 * 60);
            $fechaExpira = time();

            echo '<b>Fecha de creacion de cookie: </b>';           

            setcookie("UltimaVisita",$fechaHoy, time() + (7 * 24 * 60 * 60))

            //borrar setcookie(""UltimaVisita,"",)
?>
       

