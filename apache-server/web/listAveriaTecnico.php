<?php
require_once 'database.php';
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

$texto = file_get_contents("php://input");
$jsonaveriatecnico = json_decode($texto);


//Cogemos todos los registros de los clientes para almmacecnarlos una array
$instruccion ="SELECT * FROM averias WHERE idEmpleado ='$jsonaveriatecnico' AND resuelta is NULL ";
$result = mysqli_query($con, $instruccion);



while ($fila = $result->fetch_assoc()) {
  $listaveria [] =$fila;
}

echo(json_encode($listaveria));

?>

