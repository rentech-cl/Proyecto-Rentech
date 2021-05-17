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

  $instruccion ="select disponible
  from producto2
  where idProducto = $jsonvenderProducto->idproducto ";
  
$result = mysqli_query($con, $instruccion);

while ($mostrar = mysqli_fetch_array($result)) {
$cantidadDisponible= $mostrar['disponible'];

}
if($cantidadDisponible>=$jsonvenderProducto->cantidad){

$sentencia ="INSERT INTO `salida_compra`(`precio_final`,`fecha_entrada`, `idProducto`,`idCliente`, `cantidad`)
  VALUES (                                      '$jsonvenderProducto->precio',
                                                '$jsonvenderProducto->fecha',
                                                '$jsonvenderProducto->idproducto',
                                                '$jsonvenderProducto->idcliente',
                                                '$jsonvenderProducto->cantidad'
                                                )";

$disponible2=$cantidadDisponible+$jsonvenderProducto->cantidad;

  $sentencia2 ="UPDATE daw2_rentech.producto2
  SET   disponible='$disponible2'
  WHERE idProducto=' $jsonvenderProducto->idproducto'";

  if ($res = mysqli_query($con,$sentencia) && $res = mysqli_query($con,$sentencia2)) {

    echo('{ "result": "OK" }');

  } else{
      echo('{ "result": "ERROR", "message": "Algo salio mal"  }');
    }

}else{
  echo('{ "result": "ERROR2", "message": "Producto Sin stock"  }');
}





}

?>
