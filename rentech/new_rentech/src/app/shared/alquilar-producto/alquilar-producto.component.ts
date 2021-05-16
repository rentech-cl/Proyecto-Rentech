import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { alquilarProducto } from 'src/app/models/alquilarProducto';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-alquilar-producto',
  templateUrl: './alquilar-producto.component.html',
  styleUrls: ['./alquilar-producto.component.css']
})
export class AlquilarProductoComponent implements OnInit {
  nombre: String;
  idEmpleado: string = null;
  asignarAlquiler;
  cantidad;
  productos;

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
          this.productos = datos;
          console.log(this.productos)
        }
        catch (error) {
          console.log("error")
        }
      });
    this.idEmpleado = localStorage.getItem('id');

  }
  alquiler_producto(idProducto, cantidad, precio) {

    // Creas la fecha
    var fecha = new Date();
    var fecha2 = new Date();
    var n = fecha.toString();
    var n2 = fecha2.toString();

    // Añades los meses
    fecha.setDate(fecha.getDate() + 14);

    // Añades los meses
    fecha2.setMonth(fecha2.getMonth() + 6);

    console.log('ID PRODUCTO: ' + idProducto, '. CANTIDAD: ' + cantidad.value);
    this.asignarAlquiler = new alquilarProducto(this.idEmpleado, idProducto, cantidad.value, precio, n, n2)

    console.log(this.asignarAlquiler);




    this.ClienteService.alquilerProducto(this.asignarAlquiler).subscribe(
      datos => {
        try {
          console.log(datos)
          this.asignarAlquiler = datos;
          console.log(this.asignarAlquiler)
        }
        catch (error) {
          console.log("error")
        }
      });
  }
}
