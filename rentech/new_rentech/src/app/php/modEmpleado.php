<?php
require_once 'database.php';
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

$texto = file_get_contents("php://input");
$jsontecnico = json_decode($texto);



if(!$jsontecnico){
  exit("No hay datos");
}

 
 
 $sentencia = " UPDATE daw2_rentech.empleados
  SET dni='$jsontecnico->dni' ,nombre='$jsontecnico->nombre',iban='$jsontecnico->iban',salario= '$jsontecnico->salario',direccion='$jsontecnico->direccio',telefono='$jsontecnico->telefono',apellido='$jsontecnico->apellido',correo='$jsontecnico->correo'
  WHERE dni = '$jsontecnico->dni'";

  if ($res = mysqli_query($con,$sentencia)) {

    echo('{ "result": "OK" }');

  } else{
      echo('{ "result": "ERROR", "message": "Algo salio mal"  }');
    }


?>