<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

require_once 'database.php';





$x = 0;

$array[]=null;




$query = $mysqli->query("select  * from producto2");



while ($valores = mysqli_fetch_array($query)) {
  $array[$x] = $valores;
  $x++;
}


header('Content-Type: application/json');
echo json_encode($array);
