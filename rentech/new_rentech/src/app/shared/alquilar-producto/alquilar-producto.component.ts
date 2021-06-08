import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { alquilarProducto } from 'src/app/models/alquilarProducto';
import { ClienteService } from '../service/cliente.service';
import Swal from 'sweetalert2';
import { consultaEvento } from 'src/app/models/consultaEvento';

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
  evento;
  eventos;
  asistentes;
  selectControl: FormControl = new FormControl();

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ClienteService: ClienteService
  ) { }

  ngOnInit(): void {
    this.ClienteService.listarProductos("").subscribe(
      datos => {
        try {
          console.log(datos)
          this.eventos=datos;
          console.log(this.eventos[1][1])
          //console.log(this.productos)
        }
        catch (error) {
          //console.log("error")
        }
      });
    this.idEmpleado = localStorage.getItem('id');

  }
  mySelectHandler($event) {
    this.evento = new consultaEvento(
      $event
      // ''
    );
    this.ClienteService.listAsistentes(this.evento).subscribe(
      datos => {
        try {
          console.log(datos)
          this.asistentes=datos;
          console.log(this.asistentes)
          //console.log(this.productos)
        }
        catch (error) {
          //console.log("error")
        }
      });}
}
