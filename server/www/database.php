<?php
              
                  /////////////////////////////////////////////////////////////////////////////////////////
                //creamos la conexion con la base de datos para nonmbrar este archivo desde cualquier otro y ahorramos muchas lineas de codigo

                  $servidor="192.168.3.26";
                  $usuario="DAW2_RENTECH";
                  $contraseña="sector1g";
                  $bd="DAW2_RENTECH";
                  //con esto podemos printar los dias trabajados exrtraidos de una funcion.
                  
                  
                  
                  //realizamos la conexión
                  $con=mysqli_connect($servidor,$usuario,$contraseña,$bd);
                  if($con){
                      echo 'bien';
                  }else{
                      echo 'error';
                  }

                  /////////////////////////////////////////////////////////////////////////////////////////

                ?>