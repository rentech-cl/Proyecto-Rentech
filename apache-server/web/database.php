<?php
//$servidor="192.168.3.26";
 $servidor="oracle.ilerna.com";
 $usuario="DAW2_RENTECH";
 $contrasena="sector1g";
 $bd="DAW2_RENTECH";
 $mysqli = new mysqli('oracle.ilerna.com',  $usuario , $contrasena, $bd);

 $con=mysqli_connect($servidor,$usuario,$contrasena,$bd) or die(mysqli_error(die));
?>
