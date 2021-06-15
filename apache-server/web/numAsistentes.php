<?php
require_once 'database.php';
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

$texto = file_get_contents("php://input");
$json = json_decode($texto);


//Cogemos todos los registros de los clientes para almmacecnarlos una array
$instruccion ="SELECT SUM(acompanantes) FROM asistentes where evento = $json->id and tipo = 'vip'";

$result = mysqli_query($con, $instruccion);



while ($fila = $result->fetch_assoc()) {
  $listaveria [0] =$fila;
}

//Cogemos todos los registros de los clientes para almmacecnarlos una array
$instruccion ="SELECT SUM(acompanantes) FROM asistentes where evento = $json->id and tipo = 'pista'";

$result = mysqli_query($con, $instruccion);



while ($fila = $result->fetch_assoc()) {
  $listaveria [1] =$fila;
}






//Cogemos todos los registros de los clientes para almmacecnarlos una array
$instruccion ="SELECT SUM(acompanantes)/4 FROM asistentes where evento = $json->id  and tipo = 'vip'";

$result = mysqli_query($con, $instruccion);



while ($fila = $result->fetch_assoc()) {
  $listaveria [2] =$fila;
}

//Cogemos todos los registros de los clientes para almmacecnarlos una array
$instruccion ="SELECT SUM(acompanantes)/4 FROM asistentes where evento = $json->id  and tipo = 'pista'";

$result = mysqli_query($con, $instruccion);



while ($fila = $result->fetch_assoc()) {
  $listaveria [3] =$fila;
}



echo(json_encode($listaveria));

?>

