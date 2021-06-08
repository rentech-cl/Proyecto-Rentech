<?php
require_once 'database.php';
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

$texto = file_get_contents("php://input");
$jsonaveria = json_decode($texto);

if(!$jsonaveria){
  exit("No hay datos");
}



else{
  //si no coinciden campos vitales para que se pueda controlar correctamente u cliente haremos el insert a la base de datos

  $sentencia ="INSERT INTO appmidnight.asistentes (nombre,acompanantes,tipo,evento,botella,precio) VALUES ('$jsonaveria->nombre','$jsonaveria->acompanantes','$jsonaveria->tipo','$jsonaveria->idEvento','$jsonaveria->botella','$jsonaveria->precio')";  

  if ($res = mysqli_query($con,$sentencia)) {

    echo('{ "result": "OK" }');

  } else{
      echo json_encode($jsonaveria);
    }
}



?>
