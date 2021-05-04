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

//comprobamos que el dni del cliente no coincida con un cliente ya creado
$instruccion ="SELECT count(*) AS cuantos FROM empleados WHERE dni = '$jsontecnico->dni'";
$result = mysqli_query($con, $instruccion);

while ($fila = $result->fetch_assoc()) {
    $numero=$fila["cuantos"];
}
if($numero!=0){
  echo('{ "result": "ERROR1" }');
}
else{
//si el dni no esta registrado comprobamos el correo electronico
  $instruccion ="SELECT count(*) AS cuantos FROM empleados WHERE correo = '$jsontecnico->correo'";
$result = mysqli_query($con, $instruccion);

while ($fila = $result->fetch_assoc()) {
    $numero=$fila["cuantos"];
}
if($numero!=0){
  echo('{ "result": "ERROR1" }');
}
else{
  //si no coinciden campos vitales para que se pueda controlar correctamente u cliente haremos el insert a la base de datos
  $pwd1 = $jsontecnico->contrasena;
  $pass=sha1($pwd1);
  $sentencia ="INSERT INTO `empleados`(`nombre`, `apellido`, `correo`, `telefono`, `Iban`, `dni`,  `direccio`, `password` , `contrato`, `salario`)
  VALUES (                                      '$jsontecnico->nombre',
                                                '$jsontecnico->apellido',
                                                '$jsontecnico->correo',
                                                '$jsontecnico->telefono',
                                                '$jsontecnico->iban',
                                                '$jsontecnico->dni',
                                                '$jsontecnico->direccio',
                                                '$jsontecnico->contrato',
                                                '$jsontecnico->salario',
                                                '$pass')";
  if ($res = mysqli_query($con,$sentencia)) {

    echo('{ "result": "OK" }');

  } else{
      echo('{ "result": "ERROR", "message": "Algo salio mal"  }');
    }
}
}
?>
