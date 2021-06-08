<?php
//$servidor="192.168.3.26";
 $servidor="134.0.9.69";
 $usuario="appmidnight";
 $contrasena="Funciona120%";
 $bd="appmidnight";
 $mysqli = new mysqli('134.0.9.69',  $usuario , $contrasena, $bd);

 $con=mysqli_connect($servidor,$usuario,$contrasena,$bd) or die(mysqli_error(die));
?>
