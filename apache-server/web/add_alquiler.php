<?php
require_once 'database.php';
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

$texto = file_get_contents("php://input");
$jsonalquilarProducto = json_decode($texto);

if(!$jsonalquilarProducto){
  exit("No hay datos");
}

else{

  $instruccion ="select disponible
                from producto2
                where idProducto = $jsonalquilarProducto->idproducto ";
                
  $result = mysqli_query($con, $instruccion);
  
  while ($mostrar = $result->fetch_assoc()) {
   $cantidadDisponible= $mostrar['Nombre'];
  }
  if($cantidadDisponible>=$jsonalquilarProducto->cantidad){

    $sentencia ="INSERT INTO daw2_rentech.salida_alquiler (mensualidad,fecha_inicio,fecha_fin,idProducto,idCliente,cantidad)
    VALUES ($jsonalquilarProducto->precio,'$jsonalquilarProducto->fecha','$jsonalquilarProducto->fecha2',$jsonalquilarProducto->idproducto,'$jsonalquilarProducto->idcliente',$jsonalquilarProducto->cantidad)";
  
  $disponible2=$cantidadDisponible+$jsonalquilarProducto->cantidad;

  $sentencia2 ="UPDATE daw2_rentech.producto2
  SET   disponible='$disponible2'
  WHERE idProducto=' $jsonalquilarProducto->idproducto'";

   
    if ($res = mysqli_query($con,$sentencia) && $res = mysqli_query($con,$sentencia2)) {
  
  
  
      echo('{ "result": "OK" }');
  
    } else{
      echo('{ "result": "ERROR", "message": "Algo salio mal"  }');
      }

  }else{
    echo('{ "result": "ERROR2", "message": "No hay cantidad disponible"  }');
    }


 
  
}
