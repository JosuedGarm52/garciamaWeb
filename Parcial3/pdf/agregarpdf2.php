<?php
    $body = $_POST['nombre'];
    require('FPDF/fpdf.php');

    $pdf = new FPDF();
    $pdf->AddPage();
    $pdf->SetFont('Arial','B',16);
    $pdf->Cell(40,10,'Hola Mundo '.$body);
    $pdf->Output();
?>