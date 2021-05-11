<?php
require_once 'database.php';
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");


//Cogemos todos los registros de los clientes para almmacecnarlos una array
$instruccion ="SELECT * FROM producto ";
$result = mysqli_query($con, $instruccion);



while ($fila = $result->fetch_assoc()) {
  $listproducto [] =$fila;
}

echo(json_encode($listproducto));

?>
