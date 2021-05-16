import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { venderProducto } from 'src/app/models/venderProducto';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-vender-producto',
  templateUrl: './vender-producto.component.html',
  styleUrls: ['./vender-producto.component.css']
})
export class VenderProductoComponent implements OnInit {
  nombre: String;
  idEmpleado: string = null;
  productos;
  venderProducto;
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ClienteService: ClienteService
  ) { }

  ngOnInit(): void {
    this.ClienteService.listarProductos("productos").subscribe(
      datos => {
        try {
          console.log(datos)
          this.productos=datos;
          console.log(this.productos)
        }
        catch (error) {
          console.log("error")
        }
      });
      this.idEmpleado = localStorage.getItem('id');
  }


  venta_producto(idProducto, cantidad, precio){

    // Creas la fecha
    var fecha = new Date();
    var n = fecha.toString();

    // Añades los meses
    fecha.setDate(fecha.getDate() + 14);



    console.log('ID PRODUCTO: ' + idProducto, '. CANTIDAD: ' + cantidad.value);
    this.venderProducto = new venderProducto(this.idEmpleado, idProducto, cantidad.value, precio, n)

    console.log(this.venderProducto);




    this.ClienteService.venderProducto(this.venderProducto).subscribe(
      datos => {
        try {
          console.log(datos)
          this.venderProducto = datos;
          console.log(this.venderProducto)
        }
        catch (error) {
          console.log("error")
        }
      });
  }
}
