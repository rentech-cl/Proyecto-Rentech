<?php
  require_once 'database.php';
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

  $datos;
  $texto = file_get_contents("php://input");
  $jsontecnico = json_decode($texto);
  $x=0;


  $instruccion = "SELECT password FROM empleados WHERE correo = '$jsontecnico->correo'";
	$resultado = mysqli_query($con, $instruccion);

	while ($fila = $resultado->fetch_assoc()) {
		$password2=$fila["password"];
  }
  $pass=sha1($jsontecnico->contrasena);


   if ($pass!=$password2){
    header('Content-Type: application/json');
    echo json_encode('contraseña incorrecta');
  }else{
    $resultado = mysqli_query($con, "SELECT * FROM empleados WHERE correo = '$jsontecnico->correo'");
    while ($registros = mysqli_fetch_array($resultado))
    {
      $datos[] = $registros;
    }
    header('Content-Type: application/json');
     echo json_encode($datos);
  }


  // }




    // echo json_encode($response); // MUESTRA EL JSON GENERADO
