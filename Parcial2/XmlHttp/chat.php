<?php
$bg_array = array("#CEEED9D","#ECED9D","#ECED9D","#ECED9D","#ECED9D","#ECED9D");
$bg = array_rand($bg_array,1);
?>
<div class="banner" style="background-color:<?php echo $bg_array[$bg];?>; ">
    <div class="txt-title">JQUERY DIV</div>
    <DIV class="txt-subtitle">This banner</DIV>
</div>