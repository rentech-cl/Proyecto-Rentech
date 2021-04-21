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

$instruccion ="SELECT count(*) AS cuantos FROM cliente WHERE correo = '$jsoncliente->correo'";
$result = mysqli_query($con, $instruccion);

while ($fila = $result->fetch_assoc()) {
    $numero=$fila["cuantos"];
}
  if($numero==0){
    echo('{ "result": "ERROR", "message": "El usuario no existe"  }');
  } else{
    //recogemos los datos si el usuario existe para comparar las contraseñas
      $instruccion2 = "SELECT * FROM cliente WHERE correo = '$jsoncliente->correo'";
      $result2 = mysqli_query($con, $instruccion2);

      while ($fila = $result2->fetch_assoc()) {
        $datos [] =$fila;
        $pwd2=$fila["pwd"];
    }

    $pass=sha1($jsoncliente->password);
  if($pwd2 === $pass){
    header('Content-Type: application/json');
    json_encode($datos);


  } else{
      echo('{ "result": "ERROR", "message": "La contraseña no es correcta"  }');
    }
}
