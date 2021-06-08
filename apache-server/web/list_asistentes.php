<?php
require_once 'database.php';
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
$texto = file_get_contents("php://input");
$json = json_decode($texto);

//Cogemos todos los registros de los clientes para almmacecnarlos una array
$instruccion ="SELECT id, nombre, acompanantes, tipo, evento, botella, precio FROM asistentes WHERE evento=$json->id;";
$result = mysqli_query($con, $instruccion);



while ($fila = $result->fetch_assoc()) {
  $listproducto [] =$fila;
}

echo(json_encode($listproducto));

?>
