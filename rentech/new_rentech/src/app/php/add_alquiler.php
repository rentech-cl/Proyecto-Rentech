<?php
require_once 'database.php';
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

$texto = file_get_contents("php://input");
$jsonalquilarProducto = json_decode($texto);
$hoy;
$hoy2;
$fechaFin;

if(!$jsonalquilarProducto){
  exit("No hay datos");
}

else{
  //si no coinciden campos vitales para que se pueda controlar correctamente u cliente haremos el insert a la base de datos
  $hoy = getdate();
  $hoy2 = strtotime($hoy."+ 2 week");

  //Añadimos los meses seleccionados en el contrato a la fecha de hoy para saber cuando volveremos a tener disponibles los ordenadores
  $fechaFin = strtotime($hoy."+ 6 month");


  //cogemos el precio total de el producto y lo dividimos por la cantidad de meses que haya seleccionado el cliente.




  $sentencia ="INSERT INTO `salida_alquiler`(`mensualidad`,`fecha_inicio`, `fecha_fin`,`idProducto`,`idCliente`, `cantidad`)
  VALUES (                                      '$jsonalquilarProducto->precio',
                                                '$hoy2',
                                                '$fechaFin',
                                                '$jsonalquilarProducto->idproducto',
                                                '$jsonalquilarProducto->idcliente',
                                                '$jsonalquilarProducto->cantidad'
                                                ')";
  if ($res = mysqli_query($con,$sentencia)) {

    echo('{ "result": "OK" }');
    text: "<br />\n<b>Notice</b>:  Array to string conversion in
     <b>C:\\Users\\J.Infantes\\Documents\\GitHub\\Proyecto-Rentech\\rentech\\new_rentech\\src\\app\\php\\add_alquiler.php</b> 
     on line <b>21</b><br />\n<br />\n<b>Notice</b>:  Array to string conversion in
      <b>C:\\Users\\J.Infantes\\Documents\\GitHub\\Proyecto-Rentech\\rentech\\new_rentech\\src\\app\\php\\add_alquiler.php</b>
       on line <b>24</b><br />\n{ \"result\": \"ERROR\", \"message\": \"Algo salio mal\"  }"

  } else{
      echo('{ "result": "ERROR", "message": "Algo salio mal"  }');
    }
}

?>
