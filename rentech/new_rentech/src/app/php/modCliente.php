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

//comprobamos que el dni del cliente no coincida con un cliente ya creado
$instruccion ="SELECT count(*) AS cuantos FROM cliente WHERE dni = '$jsoncliente->dni'";
$result = mysqli_query($con, $instruccion);

while ($fila = $result->fetch_assoc()) {
    $numero=$fila["cuantos"];
}
if($numero!=0){
  echo('{ "result": "ERROR1" }');
}
else{
//si el dni no esta registrado comprobamos el correo electronico
  $instruccion ="SELECT count(*) AS cuantos FROM cliente WHERE correo = '$jsoncliente->correo'";
$result = mysqli_query($con, $instruccion);

while ($fila = $result->fetch_assoc()) {
    $numero=$fila["cuantos"];
}
if($numero!=0){
  echo('{ "result": "ERROR1" }');
}
else{
  //si no coinciden campos vitales para que se pueda controlar correctamente u cliente haremos el insert a la base de datos
  $pwd1 = $jsoncliente->contrasena;
  $pass=sha1($pwd1);
  $sentencia ="ALTER INTO `cliente`(`nombre`, `apellido`, `correo`, `telefono`, `iban`, `dni`, `cp`, `direccio`, `password`)
  VALUES (                                      '$jsoncliente->nombre',
                                                '$jsoncliente->apellido',
                                                '$jsoncliente->correo',
                                                '$jsoncliente->telefono',
                                                '$jsoncliente->iban',
                                                '$jsoncliente->dni',
                                                '$jsoncliente->cp',
                                                '$jsoncliente->direccio',
                                                '$pass')";
  if ($res = mysqli_query($con,$sentencia)) {

    echo('{ "result": "OK" }');

  } else{
      echo('{ "result": "ERROR", "message": "Algo salio mal"  }');
    }
}
}
?>