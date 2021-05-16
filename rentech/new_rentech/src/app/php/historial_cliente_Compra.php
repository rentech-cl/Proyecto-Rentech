<?php
require_once 'database.php';
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

$texto = file_get_contents("php://input");
$jsonhistorialAlquiler = json_decode($texto);


//Cogemos todos los registros de los clientes para almmacecnarlos una array
$instruccion ="select p2.nombre , sa.*
from salida_compra sa
inner join producto2 p2 on p2.idProducto = sa.idProducto
where sa.idCliente =$jsonhistorialAlquiler ";

$result = mysqli_query($con, $instruccion);



while ($fila = $result->fetch_assoc()) {
  $listaveria [] =$fila;
}

echo(json_encode($listaveria));

?>

