<?php
require_once 'database.php';
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

$texto = file_get_contents("php://input");
$jsonproducto = json_decode($texto);

if(!$jsonproducto){
  exit("No hay datos");
}

//comprobamos que el nombre del producto no se repita para no confundir al cliente
$instruccion ="SELECT count(*) AS cuantos FROM producto WHERE nombre = '$jsonproducto->nombre'";
$result = mysqli_query($con, $instruccion);

while ($fila = $result->fetch_assoc()) {
    $numero=$fila["cuantos"];
}
if($numero!=0){
  echo('{ "result": "ERROR1" }');
}
else{

  //si no coinciden campos vitales para que se pueda controlar correctamente u cliente haremos el insert a la base de datos
  $precio= $jsonproducto->precio/6*0.28;

  $sentencia ="INSERT INTO `producto2`(`nombre`, `descripcion`, `cantidad`, `precio`,`img`,`disponible`)
  VALUES (                                      '$jsonproducto->nombre',
                                                '$jsonproducto->descripcion',
                                                '$jsonproducto->cantidad',
                                                '$precio',
                                                '$jsonproducto->img',
                                                '$jsonproducto->cantidad')";
  if ($res = mysqli_query($con,$sentencia)) {

    echo('{ "result": "OK" }');

  } else{
      echo('{ "result": "ERROR", "message": "Algo salio mal"  }');
    }
}

?>
