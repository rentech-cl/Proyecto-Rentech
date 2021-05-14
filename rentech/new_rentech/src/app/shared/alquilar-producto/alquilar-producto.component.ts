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
          this.productos=datos;
          console.log(this.productos)
        }
        catch (error) {
          console.log("error")
        }
      });
      this.idEmpleado= localStorage.getItem('id');
  }
  alquiler_producto(idProducto){

    console.log('id producto venta '+idProducto, 'cantidad: '+ this.cantidad);
    this.asignarAlquiler = new alquilarProducto(this.idEmpleado, idProducto)
 console.log(this.asignarAlquiler);

  }
}
