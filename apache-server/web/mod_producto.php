

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

 
 
 $sentencia = "UPDATE daw2_rentech.producto2
 SET descripcion='$jsoncliente->descripcion', nombre='$jsoncliente->nombre', cantidad='$jsoncliente->cantidad',  precio='$jsoncliente->precio'
 WHERE idProducto='$jsoncliente->idproducto'";

  if ($res = mysqli_query($con,$sentencia)) {

    echo('{ "result": "OK" }');

  } else{
      echo('{ "result": "ERROR", "message": "Algo salio mal"  }');
    }


?>




