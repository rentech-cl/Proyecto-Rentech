import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ClienteService } from '../service/cliente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent implements OnInit {
  listarproducto: ListarProductosComponent;
  producto= new Producto;
  nombre: String;
  idEmpleado: string = null;
  asignarUsuario;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ClienteService: ClienteService
  ) { }

  ngOnInit(): void {
    this.ClienteService.listarProducto("averias").subscribe(
  datos => {
    try {
      this.producto=datos;
      console.log(this.producto)
    }
    catch (error) {
      //console.log("error")
    }
  });


}

seleccionar(idProducto){
  console.log(idProducto)

this.ClienteService.borrarProducto(idProducto).subscribe(
  datos => {
    if (datos['result'] === 'OK') {
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Producto borrado!',
        showConfirmButton: false,
        timer: 1500
      })
      window.location.reload();
     }else{
      Swal.fire({
        position:'top',
        icon: 'error',
        title:'No se puede borar este producto!',
        showConfirmButton: false,
        timer: 1500
      })
    }
    try {
      //console.log(datos)
      //console.log(this.averia)
    }
    catch (error) {
      Swal.fire({
        position:'top',
        icon: 'error',
        title:'No se puede borar este producto!',
        showConfirmButton: false,
        timer: 1500
      })    }
  });
}

// seleccionar(idAveria){
// this.asignarUsuario = new AsignarAveria(this.idEmpleado, idAveria)
// //console.log(this.asignarUsuario)

// this.ClienteService.listarProducto(this.asignarUsuario).subscribe(
//   datos => {

//     if (datos['result'] === 'OK') {
//       Swal.fire({
//         position: 'top',
//         icon: 'success',
//         title: 'Producto borrado!',
//         showConfirmButton: false,
//         timer: 1500
//       })
//       window.location.reload();


//     }else{
//       Swal.fire({
//         position:'top',
//         icon: 'error',
//         title:'No se puede borar este producto!',
//         showConfirmButton: false,
//         timer: 1500
//       })
//     }

//     try {
//       //console.log(datos)
//       //console.log(this.averia)
//     }
//     catch (error) {
//       //console.log("error")
//     }
//   });
// }

}
