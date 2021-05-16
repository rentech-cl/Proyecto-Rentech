<?php
require_once 'database.php';
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

$texto = file_get_contents("php://input");
$jsonvenderProducto = json_decode($texto);


if(!$jsonvenderProducto){
  exit("No hay datos");
}

else{



$sentencia ="INSERT INTO `salida_compra`(`precio_final`,`fecha_entrada`, `idProducto`,`idCliente`, `cantidad`)
  VALUES (                                      '$jsonvenderProducto->precio',
                                                '$jsonvenderProducto->fecha',
                                                '$jsonvenderProducto->idproducto',
                                                '$jsonvenderProducto->idcliente',
                                                '$jsonvenderProducto->cantidad'
                                                )";
  if ($res = mysqli_query($con,$sentencia)) {



    echo('{ "result": "OK" }');

  } else{
      echo('{ "result": "ERROR", "message": "Algo salio mal"  }');
    }



}

?>
