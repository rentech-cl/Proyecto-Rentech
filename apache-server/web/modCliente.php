<?php
require_once 'database.php';
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

$texto = file_get_contents("php://input");
$jsoncliente = json_decode($texto);



if(!$jsoncliente){
  exit("No hay datos");
}

 
 
 $sentencia = " UPDATE daw2_rentech.cliente
  SET dni='$jsoncliente->dni' ,nombre='$jsoncliente->nombre',iban='$jsoncliente->iban',cp= '$jsoncliente->cp',direccio='$jsoncliente->direccio',telefono='$jsoncliente->telefono',apellido='$jsoncliente->apellido',correo='$jsoncliente->correo'
  WHERE dni = '$jsoncliente->dni'";

  if ($res = mysqli_query($con,$sentencia)) {

    echo('{ "result": "OK" }');

  } else{
      echo('{ "result": "ERROR", "message": "Algo salio mal"  }');
    }


?>