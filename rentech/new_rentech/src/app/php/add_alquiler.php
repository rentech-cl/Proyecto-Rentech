<?php
require_once 'database.php';
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

$texto = file_get_contents("php://input");
$jsonalquilarProducto = json_decode($texto);

if(!$jsonalquilarProducto){
  exit("No hay datos");
}

else{
  //si no coinciden campos vitales para que se pueda controlar correctamente u cliente haremos el insert a la base de datos
  //Añadimos los meses seleccionados en el contrato a la fecha de hoy para saber cuando volveremos a tener disponibles los ordenadores


  //cogemos el precio total de el producto y lo dividimos por la cantidad de meses que haya seleccionado el cliente.




  $sentencia ="INSERT INTO salida_alquiler (mensualidad, fecha_inicio, fecha_fin, idProducto, idCliente, cantidad) VALUES(
                                              $jsonalquilarProducto->precio,
                                              $jsonalquilarProducto->fecha,
                                              $jsonalquilarProducto->fecha2,
                                              $jsonalquilarProducto->idproducto,
                                              $jsonalquilarProducto->idcliente,
                                              $jsonalquilarProducto->cantidad
                                            )";
  if ($res = mysqli_query($con,$sentencia)) {

    echo('{ "result": "OK" }');

  } else{
    echo('{ "result": "ERROR", "message": "Algo salio mal"  }');
    }
}
