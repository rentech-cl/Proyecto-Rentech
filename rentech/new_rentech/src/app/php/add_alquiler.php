<?php
require_once 'database.php';
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

$texto = file_get_contents("php://input");
$jsonalquilarProducto = json_decode($texto);
$hoy ;
$hoy2;
$fechaFin;

if(!$jsonalquilarProducto){
  exit("No hay datos");
}

else{

  //si no coinciden campos vitales para que se pueda controlar correctamente u cliente haremos el insert a la base de datos

  $hoy = strtotime(date("d-m-Y H:i:00", time()));
  $hoy2 = strtotime($hoy."+ 2 week");

  //Añadimos los meses seleccionados en el contrato a la fecha de hoy para saber cuando volveremos a tener disponibles los ordenadores
  $fechaFin = strtotime($hoy."+ 6 month");




  // INSERT INTO daw2_rentech.salida_alquiler
  // (idAlquiler, mensualidad, fecha_inicio, fecha_fin, idProducto, idCliente, cantidad)
  // VALUES(NULL, NULL, NULL, NULL, NULL, '', 0);


  $sentencia ="INSERT INTO `salida_alquiler`(`mensualidad`,`fecha_inicio`, `fecha_fin`,`idProducto`,`idCliente`, `cantidad`)
  VALUES (                                      '$jsonalquilarProducto->precio',
                                                '$hoy2',
                                                '$fechaFin',
                                                '$jsonalquilarProducto->idproducto',
                                                '$jsonalquilarProducto->idcliente',
                                                '$jsonalquilarProducto->cantidad'
                                                )";
  if ($res = mysqli_query($con,$sentencia)) {

// "SyntaxError: Unexpected token < in JSON at position 0\n    at JSON.parse (<anonymous>)\n
//  at XMLHttpRequest.onLoad (http://localhost:4200/vendor.js:8901:51)\n    at ZoneDelegate.invokeTask
//  (http://localhost:4200/polyfills.js:621:35)\n    at Object.onInvokeTask (http://localhost:4200/vendor.js:46492:33)\n
//  at ZoneDelegate.invokeTask (http://localhost:4200/polyfills.js:620:40)\n    at Zone.runTask (http://localhost:4200/polyfills.js:389:51)\n    at ZoneTask.invokeTask [as invoke] (http://localhost:4200/polyfills.js:702:38)\n    at invokeTask (http://localhost:4200/polyfills.js:1843:18)\n    at XMLHttpRequest.globalZoneAwareCallback (http://localhost:4200/polyfills.js:1880:25)"
// // __proto__: Error
// // text: "<br />\n<b>Notice</b>:  Array to string conversion in
// <b>C:\\Users\\J.Infantes\\Documents\\GitHub\\Proyecto-Rentech\\rentech\\new_rentech\\src\\app\\php\\add_alquiler.php</b>
//  on line <b>21</b><br />\n<br />\n<b>Notice</b>:  Array to string conversion in
//  <b>C:\\Users\\J.Infantes\\Documents\\GitHub\\Proyecto-Rentech\\rentech\\new_rentech\\src\\app\\php\\add_alquiler.php</b>
//   on line <b>24</b><br />\n{ \"result\": \"ERROR\", \"message\": \"Algo salio mal\"  }"


    echo('{ "result": "OK" }');

  } else{
      echo('{ "result": "ERROR", "message": "Algo salio mal"  }');
    }
}

?>
