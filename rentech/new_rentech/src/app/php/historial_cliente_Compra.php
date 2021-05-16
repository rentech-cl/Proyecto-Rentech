<?php
require_once 'database.php';
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

$texto = file_get_contents("php://input");
$jsonhistorialCompra = json_decode($texto);


//Cogemos todos los registros de los clientes para almmacecnarlos una array
$instruccion ="SELECT producto2.nombre , s.*  FROM salida_compra s, producto2
inner join producto2 on s.idProducto = producto2.idProducto
WHERE idCliente='$jsonhistorialAlquiler->idcliente'";
$result = mysqli_query($con, $instruccion);


while ($fila = $result->fetch_assoc()) {
  $listcompra [] =$fila;
}

echo(json_encode($listcompra));

?>

